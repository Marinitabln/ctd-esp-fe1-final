import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';
import { Character } from '../../redux/type';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */

interface IProps{
    character: Character
}

const TarjetaPersonaje = ({character}:IProps) => {
    const navigate = useNavigate();

    const favourites = useAppSelector(state => state.characters.favourites)
    const isFavourite = !!favourites.find(favourite =>favourite.id === character.id)

    const handlerOnClick = (character:Character)=>{
        navigate(`/detalle/${character.id}`)
    }

    return <div className="tarjeta-personaje">
        <img src={character.image} alt={character.name} onClick={()=>handlerOnClick(character)}/>
        <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <BotonFavorito esFavorito={isFavourite} character={character}/>
        </div>
    </div>
}

export default TarjetaPersonaje;