
import { ProjectInterface } from './project'

export class Project {
    public readonly id: number;
    public title: string;
    public title_second: string;
    public description_de: string;
    public description_en: string;
    public technology_de: string;
    public technology_en: string;
    public main_image: string;
    public images;
    public link: string;
    public host: string;
    public created_at: Date;
    public badge: [];

    constructor(
        id: number,
        title: string,
        title_second: string,
        description_de: string,
        description_en: string,
        technology_de: string,
        technology_en: string,
        main_image: string,
        images: [],
        link: string,
        host: string,
        created_at: Date,
        badge: [],
    ) {
        this.id = id;
        this.title = title;
        this.title_second = title_second;
        this.description_de = description_de;
        this.description_en = description_en;
        this.technology_de = technology_de;
        this.technology_en = technology_en;
        this.main_image = main_image;
        this.images = images;
        this.link = link;
        this.host = host;
        this.created_at = created_at;
        this.badge = badge;
    }

    public static createProject(project: ProjectInterface) {
        return new Project(
            project.id,
            project.title,
            project.title_second,
            project.description_de,
            project.description_en,
            project.technology_de,
            project.technology_en,
            project.main_image,
            project.images,
            project.link,
            project.host,
            project.created_at,
            project.badge
        );
    }

    public get projectId() {
        return this.id;
    }

    public get titleOne() {
        return this.title;
    }
    public set titleOne(value: string) {
        this.title = value;
    }
    
    public get titleTwo() {
        return this.title_second;
    }
    public set titleTwo(value: string) {
        this.title_second = value;
    }

    public get germanDescription() {
        return this.description_de;
    }
    public set germanDescription(value: string) {
        this.description_de = value;
    }

    public get englishDescription() {
        return this.description_en;
    }
    public set englishDescription(value: string) {
        this.description_en = value;
    }

    public get germanUsedTechnology() {
        return this.technology_de;
    }
    public set germanUsedTechnology(value: string) {
        this.technology_de = value;
    }

    public get englishUsedTechnology() {
        return this.technology_en;
    }
    public set englishUsedTechnology(value: string) {
       this.technology_en = value;
    }

    public get mainImageOfProject() {
        return this.main_image;
    }
    public set mainImageOfProject(value: string) {
        this.main_image = value;
    }

    public get subImageArray() {
        return this.images;
    }
    public set subImageArray(value: []) {
        this.images = value;
    }

    public get urlForGitHubLink() {
        return this.link;
    }
    public set urlForGitHubLink(value: string) {
        this.link = value;
    }

    public get urlForHostedProject() {
        return this.host;
    }
    public set urlForHostedProject(value: string) {
        this.host = value;
    }

    public get creationDate() {
        return this.created_at;
    }
    public set creationDate(value: Date) {
        this.created_at = value;
    }
    
    public get projectBadges() {
        return this.badge
    }
    public set projectBadges(value: []) {
        this.badge = value;
    }

    public contstructMainTitle():string {
        if(!this.titleTwo) return this.titleOne;
        return this.titleOne.concat(' ').concat(this.titleTwo);
    }

    public textShortener(start: number, end: number, text: string, ellipse: boolean): string {
        if (!ellipse) return text.slice(start, end);
        return text.slice(start, end).concat('...');
    }
}
