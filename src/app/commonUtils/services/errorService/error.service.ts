import { Injectable } from '@angular/core';
import { LanguageService } from '../languageService/language.service';
import { ToastService } from '../toastService/toast.service';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private toastService: ToastService,
    private languageService: LanguageService
) {}

  public errorHandler(error: any, errorMessage: string): Promise<any> {
      let errorLog = '';
      if (error.error instanceof ErrorEvent) {
          errorLog = error.error.message;
      } else {
          errorLog = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      this.toastService.showError(`${errorMessage}`, this.languageService.languageInBrowser() ? 'Fehler' : 'Error' );
      throw new Error(errorLog);
  }
}
