export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    },
    location: {
        name: string;
        url: string;
    },
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface IInitialType{
    characters: Character[],
    favourites: Character[],
    selectedCharacter: Character,
    pagination:{
        next:string,
        prev:string
    },
    searchValue: string,
    loading: boolean,
    error: boolean
}
