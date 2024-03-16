import { Component, DoCheck, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormControl, Validators, NgForm, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ToastService } from '../../../../commonUtils/services/toastService/toast.service';
import { EmailService } from '../../../emailService/email.service';
import { ModalService } from '../../../../commonUtils/services/modalService/modal.service';
import { Email } from '../../../emailModel/email.model';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule , IonicModule,  ReactiveFormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent implements OnInit, DoCheck {
  public emailForm:FormGroup =  new FormGroup({
    from: new FormControl('', {nonNullable: true}),
    subject: new FormControl('', {nonNullable: true}),
    text: new FormControl('', {nonNullable: true})
  });
  public isLoading: boolean = false;
  public isValid: boolean = false;

  
  constructor(
      private builder: UntypedFormBuilder,
      private emailService: EmailService,
      private modalCtrl: ModalController,
      private toastService: ToastService,
      private modalService: ModalService
  ) {}
  

  ngOnInit(): void {
    this.createFormData();
  }

  ngDoCheck() {
    this.checkFormData();
  }

  ngOnChanges(changes: SimpleChanges) {
  }
 
  private createFormData() {
        this.emailForm = new FormGroup({
            from: new FormControl('', {nonNullable: true}),
            subject: new FormControl('', {nonNullable: true}),
            text: new FormControl('', {nonNullable: true})
        });
  } 

  public async onSubmit() {
        this.isLoading = true;
        const from: string = this.emailForm.value.from;
        const subject: string = this.emailForm.value.subject;
        const text: string = this.emailForm.value.text;
        if(this.emailForm.valid) {
            const newEmail: Email = await Email.createEmail( from, subject, text);
            this.modalCtrl.dismiss({ newEmail}, 'submit', 'emailModalComponent');
        }
      
        this.isLoading = false;
    
  }

  public dismiss() {
      this.modalService.dismissModal()
  }

  public checkFormData() {
    return this.isFormDataValid()  ? this.isValid = true : this.isValid = false;
  }

  private isFormDataValid() {
    return (this.isFromValueValid && this.isSubjectValueValid && this.isTextValueVaild) ? true : false;
  }
  
  private get isFromValueValid() {
    return this.emailForm.value.from.length > 0 ? true : false;
  }

  private get isSubjectValueValid() {
    return this.emailForm.value.subject.length > 0 ? true : false;
  }

  private get isTextValueVaild() {
    return this.emailForm.value.text.length > 0 ? true : false;
  }
}
