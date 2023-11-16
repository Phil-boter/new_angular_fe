export interface ProjectInterface {
    id: number;
    title: string;
    title_second: string;
    description_de: string;
    description_en: string;
    technology_de: string;
    technology_en: string;
    main_image: string;
    images: [];
    host: string;
    link: string;
    created_at: Date;
    badge: [];
}
