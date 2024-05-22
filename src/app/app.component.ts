import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenOutletContexts, RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

// Services
import { LanguageService } from './commonUtils/services/languageService/language.service';
import { ResizeService } from './commonUtils/services/resizeService/resize.service';
import { slideInAnimation } from './commonUtils/animations/animations';
import { ContactPageComponent } from './contactSection/components/contact-page/contact-page/contact-page.component';
import { ProjectPageComponent } from './projectSection/pages/project-page/project-page.component';
import { HomePageComponent } from './homeSection/components/home-page/home-page.component';
import { AboutPageComponent } from './aboutSection/components/about-page/about-page/about-page.component';
import { IonApp, IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MenueComponent } from './menueSection/menueComponent/menue/menue.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ContactPageComponent, ProjectPageComponent, HomePageComponent, AboutPageComponent, MenueComponent,IonApp, IonContent, IonMenu, IonMenuToggle, IonTitle, IonButton, IonToolbar, IonHeader, IonButtons, IonMenuButton], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})


export class AppComponent implements OnInit {
  title = 'new_angular_fe';
  public isLoading: boolean = false;
  public isGerman: boolean = this.languageService.languageInBrowser();
  public showProjects = true
  public toggleFlag = false;
  public isMobile: boolean = false;

  private subscriptions: Subscription[] = [];
  public resizeSubscription: Subscription = new Subscription();

  constructor(
    private languageService: LanguageService,
    private resizeService: ResizeService,
    private contexts: ChildrenOutletContexts
  ) {}

  ngOnInit(): void {
    this.resizeSubscription.add;
    this.subscriptions.push(this.resizeSubscription);
}

  ngDoCheck() {
    this.isMobile = this.resizeService.isMobile();

  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    setTimeout(()=> {
      console.log("interval")
    }, 2000)
  }
}
