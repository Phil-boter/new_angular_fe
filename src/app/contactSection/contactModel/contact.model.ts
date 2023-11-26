import { ContactInterface } from "./contactInformation";

export class Contact {
    public readonly id: number;
    public info_text_de: string;
    public info_text_en: string;
    public created_at: Date;

    constructor(
        id: number,
        info_text_de: string,
        info_text_en: string,
        created_at: Date
    ) {
        this.id = id;
        this.info_text_de = info_text_de;
        this.info_text_en = info_text_en;
        this.created_at = created_at;

    }

    public static createAboutInformation(contactInformation: ContactInterface) {
        return new Contact(
            contactInformation.id,
            contactInformation.info_text_de,
            contactInformation.info_text_en,
            contactInformation.created_at,
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

    public get creationDate() {
        return this.created_at;
    }
    public set creationDate(value: Date) {
        this.created_at = value;
    }
}
