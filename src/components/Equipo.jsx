function Equipo({ nombre, marca, categoria, precio, stock, estado }) {
    return (
        <div className="col-md-6 col-lg-4 mb-3">
        <div className="card h-100 shadow-sm border border-secondary border-opacity-25 bg-white rounded-3">
            <div className="card-body p-3">
            <div className="d-flex justify-content-between align-items-start mb-1">
                <h5 className="card-title fw-bold text-dark mb-0">{nombre}</h5>
                <span className={`badge ${estado ? "bg-success" : "bg-danger"}`}>
                {estado ? "Disponible" : "No disponible"}
                </span>
            </div>

            <p className="card-subtitle small text-secondary mb-3">{marca}</p>

            <div className="bg-light p-2 rounded border border-secondary border-opacity-10">
                <div className="d-flex justify-content-between mb-1 small">
                <span className="text-secondary fw-semibold">Categoría:</span>
                <span className="badge bg-secondary text-white">{categoria}</span>
                </div>
                <div className="d-flex justify-content-between mb-1 small">
                <span className="text-secondary fw-semibold">Precio:</span>
                <span className="text-dark fw-bold">Bs. {Number(precio).toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between small">
                <span className="text-secondary fw-semibold">Stock:</span>
                <span className={`fw-semibold ${stock === 0 ? "text-danger" : "text-dark"}`}>
                    {stock} unidades
                </span>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
export default Equipo;