import { Component } from '@angular/core';
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


@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

  public isLoading: boolean = false;
  public isMobile: boolean = false;
  public isGerman: boolean = this.languageService.languageInBrowser();
  public innerHTML: About | undefined;
  public badges= [];

  public aboutInformation!: About[];

  private subscriptions: Subscription[] = [];
  private resizeSubscription: Subscription = new Subscription();
  private aboutSubscription: Subscription = new Subscription();
 


  constructor(
    private languageService: LanguageService,
    private resizeService: ResizeService,
    private aboutService: AboutService) {}


    ngOnInit() {
      this.isLoading = true;
      this.aboutSubscription = this.aboutService.about$.subscribe((data: About[]) => {
        this.aboutInformation = data;
        console.log(this.aboutInformation)
        if(this.aboutInformation) {
          this.innerHTML = this.aboutInformation[0]
          this.badges = this.aboutInformation[0].knowledgeBadges;
          this.isLoading = false;
        }
    });
  
      this.subscriptions.push(this.resizeSubscription);
      this.subscriptions.push(this.aboutSubscription);
    }

    ngDoCheck() {
      this.isMobile = this.resizeService.isMobile();
    }

    getBadgeColor(badge: Object) {
      return About.badgeColor(badge);
    }

    getBadgeLogo(badge: Object) {
      return About.badgeLogo(badge);
    }
  
  
    ngOnDestroy() {
      this.isLoading = false;
      this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
