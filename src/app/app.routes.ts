import { Routes } from '@angular/router';

// Pages 
import { ProjectPageComponent } from './projectSection/pages/project-page/project-page.component';
import { AboutPageComponent } from './aboutSection/components/about-page/about-page/about-page.component';
import { ContactPageComponent } from './contactSection/components/contact-page/contact-page/contact-page.component';

export const routes: Routes = [
    { path: 'projects', component: ProjectPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'contact', component: ContactPageComponent}
];
