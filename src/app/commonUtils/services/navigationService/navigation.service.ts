import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface NavigationLink {
    id: number;
    title: string;
    link: string;
    iconSrc: string;
    iconName: string;
    iconSize: string;
}

const navigationLinkList = [
    {
        id: 1,
        title: 'home',
        link: '',
        iconSrc: '../../../assets/home-outline.svg',
        iconName: 'home-outline',
        iconSize: 'small',
    },
    {
        id: 2,
        title: 'projects',
        link: 'project',
        iconSrc: '../../../assets/terminal-outline.svg',
        iconName: 'terminal-outline',
        iconSize: 'small',
    },
    {
        id: 3,
        title: 'contact',
        link: 'contact',
        iconSrc: '../../../assets/chatbubbles-outline.svg',
        iconName: 'chatbubbles-outline',
        iconSize: 'small',
    },
    {
        id: 4,
        title: 'about',
        link: 'about',
        iconSrc: '../../../assets/person-circle-outline.svg',
        iconName: 'person-circle-outline',
        iconSize: 'small',
    },
    // {
    //     id: 4,
    //     title: 'email',
    //     link: 'email',
    //     iconSrc: '../../../assets/paper-plane-outline.svg',
    //     iconName: 'paper-plane-outline',
    //     iconSize: 'small',
    // },
];

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    public navigationIsOpen: boolean = false;
    public linkList: NavigationLink[] = navigationLinkList;

    constructor(
        private router: Router
        ) {}

    public openNavigation(): boolean {
        console.log('open');
        return (this.navigationIsOpen = true);
    }

    public closeNavigation(): boolean {
        console.log('closew');
        return (this.navigationIsOpen = false);
    }

    public provideNavigationLinkList(): NavigationLink[] {
        return this.linkList;
    }

    public openRoute(routerLink: string) {
        console.log(routerLink)
        this.router.navigate([`${routerLink}`])
    }
 }
