import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { actionDeleteFavourites } from "../redux/charactersSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const favourites = useAppSelector(state => state.characters.favourites)
    const dispatch = useAppDispatch();

    let isDisableBtn = !!favourites[0];

    console.log({ isDisableBtn });

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className={isDisableBtn ? "danger" : "primary"} disabled={!isDisableBtn} onClick={() => dispatch(actionDeleteFavourites())}>Eliminar todos</button>
        </div>
        {!!favourites[0] ?
            <GrillaPersonajes characters={favourites} />
            :
            <h2>Aún no agregaste personajes a favoritos.</h2>
        }
    </div>
}

export default PaginaFavoritos