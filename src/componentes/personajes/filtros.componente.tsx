import './filtros.css';


/* interface IProps {
    searchFilter:()=>Character[]
    inputRef:string
} */

interface IProps{
    onSearch:(e: React.ChangeEvent<HTMLInputElement>) => void,
    inputRef:React.MutableRefObject<null>
}


const Filtros = ({inputRef, onSearch}: IProps) => {

 /*    const dispatch = useAppDispatch();

    let search:string = useAppSelector((state)=>state.characters.searchValue);
    const inputRef = useRef(null);

   ; */


    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input 
            type="text"
            placeholder="Rick, Morty, Beth, Alien, ...etc"
            name="nombre"
            onChange={onSearch} 
            ref={inputRef}
        />
    </div>
}

export default Filtros;