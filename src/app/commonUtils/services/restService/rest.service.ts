import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from '../errorService/error.service';
import { LanguageService } from '../languageService/language.service';


@Injectable({
  providedIn: 'root'
})
export class RestService {
    private readonly baseURL: string = 'http://localhost:3500';
    //private readonly baseURL: string = environment.API_URL;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private languageService: LanguageService
  ) {}


  public get restConnection():string {
    return this.baseURL;
  }
}
