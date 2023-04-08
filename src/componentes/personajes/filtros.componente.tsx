import './filtros.css';


interface IProps{
    onSearch:(e: React.ChangeEvent<HTMLInputElement>) => void,
    inputRef:React.RefObject<HTMLInputElement>,
    searchValue: string
}


const Filtros = ({inputRef, onSearch, searchValue}: IProps) => {

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input 
            type="text"
            placeholder="Rick, Morty, Beth, Alien, ...etc"
            name="nombre"
            onChange={onSearch} 
            ref={inputRef}
            value={searchValue}
        />
    </div>
}

export default Filtros;