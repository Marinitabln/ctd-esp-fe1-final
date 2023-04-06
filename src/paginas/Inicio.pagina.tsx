import {useEffect, useState} from 'react'
import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { getCharacters} from '../redux/charactersSlice'

 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {

    const dispatch = useAppDispatch();
    const characters = useAppSelector(state => state.characters.characters);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getCharacters(page));
    }, [page, dispatch]);

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Limpiar filtros</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes characters={characters} />
        <Paginacion />
    </div>
}

export default PaginaInicio