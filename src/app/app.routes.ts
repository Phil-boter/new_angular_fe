import { Routes } from '@angular/router';

// Pages 
import { ProjectPageComponent } from './projectSection/pages/project-page/project-page.component';
import { AboutPageComponent } from './aboutSection/components/about-page/about-page/about-page.component';
import { ContactPageComponent } from './contactSection/components/contact-page/contact-page/contact-page.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './homeSection/components/home-page/home-page.component';

export const routes: Routes = [
    { path: 'home', component:  AppComponent}, //, data: { animation: 'homePage' }
//    { path: 'projects', component: ProjectPageComponent }, // , data: { animation: 'projectsPage' }
//    { path: 'about', component: AboutPageComponent }, //, data: { animation: 'aboutPage' }
//    { path: 'contact', component: ContactPageComponent}//, data: { animation: 'contactPage' }
];
