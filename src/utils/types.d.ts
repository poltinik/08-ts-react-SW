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

export interface Item {
    title: string,
    path: string
}

export interface Hero {
    name: string,
    img: string,
    url: string
}
export interface Characters {
    [key: string]: Hero
}