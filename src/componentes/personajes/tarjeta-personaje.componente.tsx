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
    key: number,
    name: string,
    image: string,
    isFavourite: boolean,
    onClick: ()=>void
}


const TarjetaPersonaje = ({key, name, image, isFavourite, onClick}: IProps) => {
    return <div className="tarjeta-personaje">
        <img src={image} alt={name}/>
        <div className="tarjeta-personaje-body">
            <span>{name}</span>
            <BotonFavorito esFavorito={isFavourite} />
        </div>
    </div>
}

export default TarjetaPersonaje;