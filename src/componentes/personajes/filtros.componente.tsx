import './filtros.css';
import PropTypes from "prop-types";


interface IProps {
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    inputRef: React.RefObject<HTMLInputElement>,
    searchValue: string
}

const Filtros = ({ onSearch, inputRef, searchValue }: IProps) => {

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

/**
 * @description Componente Filtro buscador
 * @param {Object} props - Propiedades del componente
 * @param {Function} props.onSearch - Función que captura el valor de búsqueda y dispara el llamado de la api para obtener personajes
 * @param {React.RefObject<HTMLInputElement>} props.inputRef - Referencia a input de búsqueda
 * @param {string} props.searchValue - Valor de la búsqueda ingresada en input
 * @returns {JSX.Element} 
 */

Filtros.propTypes = {
    onSearch: PropTypes.func.isRequired,
    inputRef: PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }),
    searchValue: PropTypes.string.isRequired,
};