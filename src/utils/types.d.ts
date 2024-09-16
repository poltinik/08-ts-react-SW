export interface SWContextValue {
    changePage: (page: string) => void,
    page: string
}

export interface HeroInfo {
    "name": string,
    "height": number,
    "mass": number,
    "hair_color": string,
    "skin_color": string,
    "eye_color": string,
    "birth_year": string,
    "gender": string
}