import { useAppDispatch } from '../../redux/hook';
import { Character } from '../../redux/type';
import './boton-favorito.css';
import { actionFavourites } from '../../redux/charactersSlice';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */

interface Props{
    esFavorito: boolean,
    character: Character
}

const BotonFavorito = ({esFavorito, character}: Props) => {

    const dispatch = useAppDispatch();
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={()=>dispatch(actionFavourites(character))}>
        <img src={src} alt={"favorito"}/>
    </div>
}

export default BotonFavorito;