import { Injectable } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { EmailService } from '../../../emailSection/emailService/email.service';
import { EmailComponent } from '../../../emailSection/components/emailComponent/email/email.component';
import { OverlayRef } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    public FormData!: UntypedFormGroup;
    constructor(
        private builder: UntypedFormBuilder,
        private emailService: EmailService,
        private modalCtrl: ModalController
    ) {}

      public async openEmailModal() {
        const modal = await this.modalCtrl.create({
            id: 'emailModalComponent',
            component: EmailComponent,
            componentProps: {},
            cssClass: 'email-modal',
            backdropDismiss: true,
            showBackdrop: false,
        });

    modal.present();

    const data: any = await modal.onWillDismiss();

        console.log(data)
 
        if (data.data && data.data != undefined) {
            this.emailService.submitEmail(data.data.newEmail);
        } 
        data.preventDfault();
    }  

    public async dismissModal() {
        this.modalCtrl.dismiss(null, 'cancel', 'emailModalComponent');
    }
}