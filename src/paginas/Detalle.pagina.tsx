import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCharacterById } from "../redux/charactersSlice";


/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */


const PaginaDetalle = () => {

    const { id } = useParams();
    const idNumber = Number(id);

    const dispatch = useAppDispatch();

    let selectedCharacter = useAppSelector(state => state.characters.visitedCharacter)

    useEffect(() => {
        dispatch(getCharacterById(idNumber));
    }, [dispatch, idNumber]);

    const favourites = useAppSelector(state => state.characters.favourites)
    const isFavourite = !!favourites.find(favourite => favourite.id === selectedCharacter.id)

    console.log({isFavourite});
    

    return <div className="container">
        <h3>{selectedCharacter.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={selectedCharacter.image} alt={selectedCharacter.name} />
                <div className={"detalle-header-texto"}>
                    <p>{selectedCharacter.name}</p>
                    <p>Planeta: {selectedCharacter.origin.name}</p>
                    <p>Genero: {selectedCharacter.gender}</p>
                </div>
                <BotonFavorito esFavorito={isFavourite} character={selectedCharacter} />
            </div>
        </div>
        {selectedCharacter.episode && (
            <>
                <h4>Lista de episodios donde apareció el personaje</h4>
                <div className={"episodios-grilla"}>
                    {
                        selectedCharacter.episode.map((url, i) => (
                            <TarjetaEpisodio urlEpisode={url} key={i} />
                        ))
                    }
                </div>
            </>
        )}

    </div>
}

export default PaginaDetalle