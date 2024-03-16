import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// rxjs
import { Subscription } from 'rxjs';

// serices
import { LanguageService } from '../../../../commonUtils/services/languageService/language.service';
import { AboutService } from '../../../aboutService/about.service';
import { ResizeService } from '../../../../commonUtils/services/resizeService/resize.service';

// components

// models
import { About } from '../../../aboutModel/about.model';

import { IonBadge, IonIcon, IonButton, IonLabel, IonItem, IonList} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoAngular, logoCss3, logoHtml5, logoReact, logoJavascript, logoNodejs, logoFirebase, logoGithub } from 'ionicons/icons';
import { SafeHtmlPipe } from "../../../../pipes/safe-html.pipe";

@Component({
    selector: 'app-about-page',
    standalone: true,
    templateUrl: './about-page.component.html',
    styleUrl: './about-page.component.scss',
    imports: [CommonModule, IonIcon, IonBadge, IonLabel, IonItem,SafeHtmlPipe, IonList]
})
export class AboutPageComponent {

  public isLoading: boolean = false;
  public isMobile: boolean = false;
  public isGerman: boolean = this.languageService.languageInBrowser();
  public innerHTML: About | undefined;
  public badges: any = [];

  public aboutInformation!: About[];

  private subscriptions: Subscription[] = [];
  private resizeSubscription: Subscription = new Subscription();
  private aboutSubscription: Subscription = new Subscription();
 


  constructor(
    private languageService: LanguageService,
    private resizeService: ResizeService,
    private aboutService: AboutService,
    private elRef:ElementRef) {
      addIcons({ logoAngular, logoCss3, logoHtml5, logoReact, logoJavascript, logoNodejs, logoFirebase, logoGithub })
    }


    ngOnInit() {
      this.isLoading = true;
      this.aboutSubscription = this.aboutService.about$.subscribe((data: About[]) => {
        this.aboutInformation = data;
        if(this.aboutInformation) {
          this.innerHTML = this.aboutInformation[0]
          this.badges = this.aboutInformation[0].badges;
          this.isLoading = false;
        }
    });
  
      this.subscriptions.push(this.resizeSubscription);
      this.subscriptions.push(this.aboutSubscription);
    }

    ngDoCheck() {
      this.isMobile = this.resizeService.isMobile();
    }

    ngAfterViewChecked() {
      // renders button inside innerHTML and makes it clickable
      if(this.elRef.nativeElement.querySelector("button")){
        this.elRef.nativeElement.querySelector("button").addEventListener("click", () => {
          this.goToGithub();
        });
      }
    }

    public getBadgeLogo(badge:any) {
      return badge.logo;
  }

    public getBadgeColor(badge:any) {
        return badge.color;
    }

    public goToGithub() {
        window.open("https://github.com/Phil-boter");
    }
  
    ngOnDestroy() {
      this.isLoading = false;
      this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
