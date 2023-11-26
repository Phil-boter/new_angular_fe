import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// rxjs
import { Subscription } from 'rxjs';

// services 
import { LanguageService } from '../../../../commonUtils/services/languageService/language.service';
import { ResizeService } from '../../../../commonUtils/services/resizeService/resize.service';
import { ContactService } from '../../../contactService/contact.service';

// models
import { Contact } from '../../../contactModel/contact.model';


@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

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
    private contactService: ContactService) {}


    ngOnInit() {
      this.isLoading = true;
      this.contactSubscription = this.contactService.about$.subscribe((data: Contact[]) => {
        this.contactInformation = data;
        console.log(this.contactInformation)
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
  
    ngOnDestroy() {
      this.isLoading = false;
      this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}