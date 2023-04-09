import { getPagination } from "../../redux/charactersSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import "./paginacion.css";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */


const Paginacion = () => {

  const dispatch = useAppDispatch();

  const pagination = useAppSelector(state => state.characters.pagination)

  return (
    <div className="paginacion">
      <button disabled={!pagination.prev} className={"primary"} onClick={()=>dispatch(getPagination(pagination.prev))}>
        Anterior
      </button>
      <button disabled={!pagination.next} className={"primary"} onClick={()=>dispatch(getPagination(pagination.next))}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
