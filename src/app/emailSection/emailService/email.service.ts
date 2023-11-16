import { Injectable } from '@angular/core';
import { EmailInterface } from '../emailModel/email';
import { ErrorService } from '../../commonUtils/services/errorService/error.service';
import { RestService } from '../../commonUtils/services/restService/rest.service';
import { ToastService } from '../../commonUtils/services/toastService/toast.service';
import { Observable, map } from 'rxjs';
import { Email } from '../emailModel/email.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private restService: RestService,
    private toastService: ToastService,
    private errorService: ErrorService,
    private http: HttpClient
) {}

  public async submitEmail(data: EmailInterface): Promise<void> {
      try {
          this.sendEmailToBackend(data).subscribe((res) => {
              if (res.success) {
                  this.toastService.showInfo(`${res.msg}`, 'Info');
              }
          });
      } catch (error) {
          return this.errorService.errorHandler(error, 'unable to send message');
      }
  }

  private sendEmailToBackend(data: EmailInterface): Observable<any> {
    return this.http
        .post<{ data: Email }>(`${this.restService.restConnection}/v1/email/sendEmail`, {
            data,
        })
        .pipe(map((data) => data));
  }
}
