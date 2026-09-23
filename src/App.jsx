import { useState } from "react";
import Encabezado from "./components/Encabezado";
import FormularioEquipo from "./components/FormularioEquipo";
import Equipo from "./components/Equipo";

function App() {
  const [equipos, setEquipos] = useState([]);

  const agregarEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, nuevoEquipo]);
  };

  return (
    <div className="container py-4" style={{ maxWidth: "860px" }}>

      <Encabezado
        titulo="Inventario Tecnológico"
        subtitulo="Control de equipos disponibles"
      />
      <FormularioEquipo agregarEquipo={agregarEquipo} />
      <div className="mt-4">
        <div className="d-flex justify-content-between align-items-center border-bottom border-secondary border-opacity-25 pb-2 mb-3">
          <h4 className="fw-bold text-dark mb-0">Listado de Equipos</h4>
          <span className="badge bg-dark text-white rounded-pill px-3 py-2">
            Total: {equipos.length}
          </span>
        </div>
        {equipos.length === 0 ? (
          <div className="alert alert-secondary text-center py-4 rounded-3 border-secondary border-opacity-25 shadow-sm" role="alert">
            <p className="mb-0 text-secondary fw-semibold">No existen equipos registrados.</p>
          </div>
        ) : (
          <div className="row">
            {equipos.map((equipo) => (
              <Equipo
                key={equipo.id}
                nombre={equipo.nombre}
                marca={equipo.marca}
                categoria={equipo.categoria}
                precio={equipo.precio}
                stock={equipo.stock}
                estado={equipo.estado}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;