import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// models
import { Contact } from '../contactModel/contact.model';

// rxjs
import { map, catchError, shareReplay } from 'rxjs';

// services
import { ErrorService } from '../../commonUtils/services/errorService/error.service';
import { LanguageService } from '../../commonUtils/services/languageService/language.service';
import { RestService } from '../../commonUtils/services/restService/rest.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public contact: Contact | undefined;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private restService: RestService,
    private languageService: LanguageService
  ){}

  public about$ = this.http.get<{ rows: Contact}>(`${this.restService.restConnection}/v1/contact/getContactInfo`)
  .pipe(
      map((data:any) => (
        data.rows.map((item: Contact) => (
          Contact.createAboutInformation(item))
    ))
    ),
      catchError(err => {
          return this.errorService.errorHandler(err, this.languageService.languageInBrowser() ? 'Informationen konnten nicht geladen werden' : 'Unable to load data');
       }),
      shareReplay(1),
  ); 
}
