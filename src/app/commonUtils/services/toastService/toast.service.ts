import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    constructor(private toastr: ToastrService) {}

    showInfo(message: string, title: string) {
        console.log('success');
        return this.toastr.success(message, title, {
            timeOut: 5000,
            tapToDismiss: true,
            positionClass: 'toast-top-center',
            easeTime: 300,
        });
    }
    showError(message: string, title: string) {
        return this.toastr.error(message, title, {
            timeOut: 5000,
            tapToDismiss: true,
            positionClass: 'toast-top-center',
            easeTime: 300,
        });
    }
}
