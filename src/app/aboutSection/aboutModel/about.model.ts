
import { AboutInterface } from "./aboutInformation";

export class About {

    public readonly id: number;
    public info_text_de: string;
    public info_text_en: string;
    public badges: [];
    public created_at: Date;

    constructor(
        id: number,
        info_text_de: string,
        info_text_en: string,
        badges: [],
        created_at: Date
    ) {
        this.id = id;
        this.info_text_de = info_text_de;
        this.info_text_en = info_text_en;
        this.badges = badges;
        this.created_at = created_at;

    }

    public static createAboutInformation(aboutInformation: AboutInterface) {
        return new About(
            aboutInformation.id,
            aboutInformation.info_text_de,
            aboutInformation.info_text_en,
            aboutInformation.badges,
            aboutInformation.created_at,
        );
    }

    public get aboutId() {
        return this.id;
    }

    public get germanInfoText() {
        return this.info_text_de;
    }
    public set germanInfoText(value: string) {
        this.info_text_de = value;
    }

    public get englishInfoText() {
        return this.info_text_en;
    }
    public set englishInfoText(value: string) {
        this.info_text_en = value;
    }

    public get knowledgeBadges() {
        return this.badges;
    }
    public set knowledgeBadges(value: []) {
        this.badges = value;
    }

    public static badgeColor (badge: Object) {
        return Object.values(badge)[1];
    }
  
    public static badgeLogo (badge: Object) {
        return Object.values(badge)[0];
    }

    public get creationDate() {
        return this.created_at;
    }
    public set creationDate(value: Date) {
        this.created_at = value;
    }
}
