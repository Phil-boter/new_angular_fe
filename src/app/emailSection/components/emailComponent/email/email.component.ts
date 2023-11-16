import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormControl, Validators, NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ToastService } from '../../../../commonUtils/services/toastService/toast.service';
import { EmailService } from '../../../emailService/email.service';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent implements OnInit {
  public FormData!: UntypedFormGroup;
  public isLoading: boolean = false;
  constructor(
      private builder: UntypedFormBuilder,
      private emailService: EmailService,
      private modalCtrl: ModalController,
      private toastService: ToastService
  ) {}

  ngOnInit(): void {
      this.createFormData();
  }

  private createFormData() {
      this.FormData = this.builder.group({
          from: new UntypedFormControl('', [Validators.required]),
          subject: new UntypedFormControl('', [Validators.required]),
          text: new UntypedFormControl('', [Validators.required]),
          created_at: Date.now(),
      });
      console.log('form', this.FormData.valid);
  }

  public onSubmit(data: NgForm) {
      this.isLoading = true;
      this.FormData.disabled;
      this.modalCtrl.dismiss({ data }, 'submit', 'emailModalComponent');
      this.isLoading = false;
  }

  public dismiss() {
      this.modalCtrl.dismiss(null, 'cancel', 'emailModalComponent');
  }

}
