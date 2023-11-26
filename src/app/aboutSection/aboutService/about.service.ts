import { Injectable } from '@angular/core';
import { About } from '../aboutModel/about.model';
import { HttpClient } from '@angular/common/http';
import { map, catchError, shareReplay } from 'rxjs';
import { ErrorService } from '../../commonUtils/services/errorService/error.service';
import { LanguageService } from '../../commonUtils/services/languageService/language.service';
import { RestService } from '../../commonUtils/services/restService/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  public about: About | undefined;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private restService: RestService,
    private languageService: LanguageService
  ){}

  public about$ = this.http.get<{ rows: About}>(`${this.restService.restConnection}/v1/about/getAboutInfo`)
  .pipe(
      map((data:any) => (
        data.rows.map((item: About) => (
          About.createAboutInformation(item))
    ))
    ),
      catchError(err => {
          return this.errorService.errorHandler(err, this.languageService.languageInBrowser() ? 'Projekte konnten nicht geladen werden' : 'Unable to load projects');
       }),
      shareReplay(1),
  ); 
}
