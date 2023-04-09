import { useEffect, useState } from 'react';
import './tarjeta-episodio.css';


/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */

interface IProps {
    urlEpisode: string
}

const TarjetaEpisodio = ({ urlEpisode }: IProps) => {

    //const idEpisode = Number(urlEpisode.split('https://rickandmortyapi.com/api/episode/')[1]);
    const [episode, setEpisode] = useState({
        id: 0,
        name: '',
        air_date: '',
        episode: '',
        characters:[],
        url: '',
        created: ''
    });

    const getEpisode = async (urlEpisode:string) => {
        const response = await fetch(urlEpisode);
        const parseRes = await response.json();
        setEpisode(parseRes);
        return parseRes;
    }

    useEffect(() => {
        getEpisode(urlEpisode);
    }, [urlEpisode]);

    console.log({episode});
    

    return <div className="tarjeta-episodio">
        <h4>{episode.name}</h4>
        <div>
            <span>{episode.episode}</span>
            <span>{episode.air_date}</span>
        </div>
    </div>
}

export default TarjetaEpisodio;