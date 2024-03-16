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
      console.log(errorMessage)
      if (error.error instanceof ErrorEvent) {
          errorLog = error.error.message;
      } else {
          errorLog = `Error Code: ${error.status}\nMessage: ` + this.handleStatus(error.status, this.writeErrorMEssage(error.statusText, errorMessage));
      }
      this.toastService.showError(this.handleStatus(error.status, this.writeErrorMEssage(error.statusText, errorMessage)), this.languageService.languageInBrowser() ? 'Fehler': 'Error' );
      throw new Error(errorLog);
  }

  private handleStatus(status: number, message: string) {
     console.log(typeof(status), status, message)
     if(message){
      if(status === 400) {
        return ` Status: ${status}. ${message}`
      } else {
        return "Wir suchen noch...";
      }
     }
      else {
        return "Wir suchen noch...";
      }
  }

  private writeErrorMEssage(statusText: string, message: string) {
     return statusText.concat("  ").concat(message);
  }
}
