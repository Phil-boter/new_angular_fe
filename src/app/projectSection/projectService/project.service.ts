import { Injectable } from '@angular/core';
import { Project } from '../projectModel/project.model';
import { RestService } from '../../commonUtils/services/restService/rest.service';
import { map } from 'rxjs/internal/operators/map';
import { catchError, shareReplay } from 'rxjs';
import { ErrorService } from '../../commonUtils/services/errorService/error.service';
import { LanguageService } from '../../commonUtils/services/languageService/language.service';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public projects: Project[] = [];
  public project!: Project;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private restService: RestService,
    private languageService: LanguageService
  ){}

  public projects$ = this.http.get<Project[]>(`${this.restService.restConnection}/v1/projects/allProjects`)
  .pipe(
      map((data:any) => (
          data.map((item: Project) => (
              Project.createProject(item))
      ))
      ),
      catchError(err => {
          return this.errorService.errorHandler(err, this.languageService.languageInBrowser() ? `Projecte konnten nicht geladen werden` : `Was not able to load projects`);
       }),
      shareReplay(1),
  ); 
}



