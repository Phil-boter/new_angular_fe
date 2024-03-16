import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';

// rxjs
import { Subscription } from 'rxjs';

// services 
import { LanguageService } from '../../../../commonUtils/services/languageService/language.service';
import { ResizeService } from '../../../../commonUtils/services/resizeService/resize.service';
import { ContactService } from '../../../contactService/contact.service';
import { ModalService } from '../../../../commonUtils/services/modalService/modal.service';

// models
import { Contact } from '../../../contactModel/contact.model';
import { EmailComponent } from '../../../../emailSection/components/emailComponent/email/email.component';


@Component({
    selector: 'app-contact-page',
    standalone: true,
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.scss',
    imports: [CommonModule],
})
export class ContactPageComponent {
  //[x: string]: any;

  public isLoading: boolean = false;
  public isMobile: boolean = false;
  public isGerman: boolean = this.languageService.languageInBrowser();
  public innerHTML: Contact | undefined;

  public contactInformation!: Contact[];

  private subscriptions: Subscription[] = [];
  private resizeSubscription: Subscription = new Subscription();
  private contactSubscription: Subscription = new Subscription();
 


  constructor(
    private languageService: LanguageService,
    private resizeService: ResizeService,
    private contactService: ContactService,
    private modalService: ModalService) {}


    ngOnInit() {
      this.isLoading = true;
      this.contactSubscription = this.contactService.about$.subscribe((data: Contact[]) => {
        this.contactInformation = data;
        if(this.contactInformation) {
          this.innerHTML = this.contactInformation[0]
          this.isLoading = false;
        }
    });
  
      this.subscriptions.push(this.resizeSubscription);
      this.subscriptions.push(this.contactSubscription);
    }

    ngDoCheck() {
      this.isMobile = this.resizeService.isMobile();
    }

    public openEmailModal() {
      console.log("click")
      this.modalService.openEmailModal();
  }
  
    ngOnDestroy() {
      this.isLoading = false;
      this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}