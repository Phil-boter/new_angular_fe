import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// rxjs
import { Subscription } from 'rxjs';

// Services
import { LanguageService } from '../../../commonUtils/services/languageService/language.service';
import { ResizeService } from '../../../commonUtils/services/resizeService/resize.service';
import { ProjectService } from '../../projectService/project.service';

// Models
import { Project } from '../../projectModel/project.model';

// Components

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent {

  public isLoading: boolean = false;
  public isGerman: boolean = this.languageService.languageInBrowser();
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
}

  ngDoCheck() {
    this.isMobile = this.resizeService.isMobile();
  }

  ngOnDestroy() {
    this.isLoading = false;
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
