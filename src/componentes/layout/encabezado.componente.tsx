import {Link} from "react-router-dom";
import './encabezado.css';
import { useAppSelector } from "../../redux/hook";

/**
 * Encabezado que contiene los links para navegar entre las páginas
 *
 * Uso: `<Encabezado />`
 *
 * @returns {JSX.Element}
 */
const Encabezado = () => {

    const {visitedCharacter, favourites } = useAppSelector(state => state.characters);

    return <header>
            <div>
                <div>
                    <h2>Examen Final de Frontend IV</h2>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to={!!favourites[0] ? "/favoritos" :"/"} className={!!favourites[0] ?  "" :"disabled"}>Favoritos</Link></li>
                        <li><Link to={visitedCharacter.id === 0 ? "/" :`/detalle/${visitedCharacter.id}`} className={visitedCharacter.id === 0 ? "disabled" : ""}>Último visitado</Link></li>
                    </ul>
                </nav>
            </div>
    </header>
}

export default Encabezado