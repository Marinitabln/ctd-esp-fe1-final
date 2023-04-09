
const URL_BASE = 'https://rickandmortyapi.com/api/character/'

export const apiGetCaracters = async (name:string) => {
    
    const response = await fetch(`${URL_BASE}${name? "?name="+ name : ""}`);
    if(response.ok){
        const parseRes = await response.json();
        return parseRes
    }
}

export const apiGetCharacterById = async (id: number) => {
    const response = await fetch(`${URL_BASE}${id}`);
    if(response.ok){
        const parseRes = await response.json();
        return parseRes
    }
}

// En tarjetaEpisodio¿? 
/* export const apiGetEpisode = async (id: number) => {
    const response = await fetch(`${URL_BASE}episode/${id}`);
    if(response.ok){
        const parseRes = await response.json();
        return parseRes
    }
} */