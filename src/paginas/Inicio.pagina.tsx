import { useEffect, useRef } from 'react'
import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { getCharacters, actionSearch, actionClearSearch, } from '../redux/charactersSlice'



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

    const { characters, loading, error} = useAppSelector(state => state.characters);
  

    useEffect(() => {
        dispatch(getCharacters(""));
        inputRef?.current?.focus();
    }, [dispatch]);


    let search: string = useAppSelector((state) => state.characters.searchValue);
    const inputRef = useRef<HTMLInputElement>(null);

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        search = e.target.value;
        dispatch(actionSearch(search));
        dispatch(getCharacters(search));
        inputRef?.current?.focus();
    };
  
    const clearSearch = () => {
        search = "";
        dispatch(actionClearSearch());       
        dispatch(getCharacters(""));
        inputRef?.current?.focus();
    }


    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={clearSearch}>Limpiar filtros</button>
        </div>
        <Filtros
            inputRef={inputRef}
            onSearch={onSearch}
            searchValue={search}
        />
        {error && (
            <>
                <h2>No se encontraron resultados para tu búsqueda</h2>
                <h3>Intentalo nuevamente</h3>
            </>
        )}
        {loading && (
            <>
                <h2>Cargando...</h2>
            </>
        )}
        {!loading && !error && (
            <>
                <Paginacion />
                <GrillaPersonajes characters={characters} /> 
                <Paginacion />
            </>
        )}
    </div>
}

export default PaginaInicio