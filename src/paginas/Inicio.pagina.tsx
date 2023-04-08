import { useEffect, useState, useRef } from 'react'
import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { getCharacters, filterCharacters, actionSearch, actionClearSearch } from '../redux/charactersSlice'


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
    const [page, setPage] = useState<number>(1);
    const previousPage = () => {
        setPage((page) => page - 1);
    };
    const nextPage = () => {
        setPage((page) => page + 1);
    };

    useEffect(() => {
        dispatch(getCharacters(page));
    }, [page, dispatch]);

    let search:string = useAppSelector((state)=>state.characters.searchValue);
    const inputRef = useRef<HTMLInputElement>(null);

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        search = e.target.value;
        dispatch(actionSearch(search));
        dispatch(filterCharacters(search));
        inputRef?.current?.focus();
    };

    const clearSearch = ()=>{
        search = "";
        dispatch(actionClearSearch());
        inputRef?.current?.focus();
        dispatch(getCharacters(1));
    }

    console.log({search})

    //si hay filtro, que renderice solo los filtrados
    //sino que renderice todo
    
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
        <Paginacion
            isFirstPage={page === 1}
            onPrevious={previousPage}
            onNext={nextPage}
        />
        <GrillaPersonajes characters={characters} />  
        <Paginacion
            isFirstPage={page === 1}
            onPrevious={previousPage}
            onNext={nextPage}
        />
    </div>
}

export default PaginaInicio