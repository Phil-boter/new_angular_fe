import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

// Services
import { LanguageService } from './commonUtils/services/languageService/language.service';
import { ResizeService } from './commonUtils/services/resizeService/resize.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
    private resizeService: ResizeService
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
