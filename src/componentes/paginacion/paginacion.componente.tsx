import "./paginacion.css";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */

interface IProps {
  onPrevious: () => void;
  onNext: () => void;
  isFirstPage: boolean
}

const Paginacion = ({ isFirstPage, onPrevious, onNext }: IProps) => {
  return (
    <div className="paginacion">
      <button disabled={isFirstPage} className={"primary"} onClick={onPrevious}>
        Anterior
      </button>
      <button disabled={false} className={"primary"} onClick={onNext}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
