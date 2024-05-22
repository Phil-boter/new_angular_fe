import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../commonUtils/services/languageService/language.service';
import { ResizeService } from '../../../commonUtils/services/resizeService/resize.service';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, IonContent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public isLoading: boolean = false;
  public isGerman: boolean = this.languageService.languageInBrowser();
  public isMobile: boolean = false;

  private subscriptions: Subscription[] = [];
  public resizeSubscription: Subscription = new Subscription();

  constructor(
    private languageService: LanguageService,
    private resizeService: ResizeService,
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
