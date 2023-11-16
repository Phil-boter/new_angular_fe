import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from './commonUtils/services/languageService/language.service';
import { ResizeService } from './commonUtils/services/resizeService/resize.service';
import { ProjectService } from './projectSection/projectService/project.service';
import { Project } from './projectSection/projectModel/project.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
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
  public projects!: Project[];

  private subscriptions: Subscription[] = [];
  public resizeSubscription: Subscription = new Subscription();
  private projectSubscription: Subscription = new Subscription();

  constructor(
    private projectService: ProjectService,
    private languageService: LanguageService,
    private resizeService: ResizeService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.resizeSubscription.add;
    this.projectSubscription = this.projectService.projects$.subscribe((data:Project[]) => {
        this.projects = data;
        if(this.projects) {
          this.isLoading = false;
        }
    });
    this.subscriptions.push(this.resizeSubscription);
    this.subscriptions.push(this.projectSubscription);
    console.log("sub init", this.subscriptions, this.projectSubscription)
}

  ngDoCheck() {
    this.isMobile = this.resizeService.isMobile();
    console.log("mobile", this.isMobile)
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    console.log("sub destroy", this.subscriptions)
  }
}
