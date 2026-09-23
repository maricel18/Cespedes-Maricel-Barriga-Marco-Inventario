import { useState } from "react";

function FormularioEquipo({ agregarEquipo }) {
    const [nombre, setNombre] = useState("");
    const [marca, setMarca] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [estado, setEstado] = useState(true);

    const [mensajeError, setMensajeError] = useState("");
    const [mensajeExito, setMensajeExito] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMensajeError("");
        setMensajeExito("");

        const precioNum = Number(precio);
        const stockNum = Number(stock);
        if (
        !nombre.trim() ||
        !marca.trim() ||
        !categoria ||
        isNaN(precioNum) ||
        precioNum <= 0 ||
        isNaN(stockNum) ||
        stockNum < 0
        ) {
        setMensajeError("Complete correctamente los campos obligatorios.");
        return;
        }
        const nuevoEquipo = {
        id: Date.now(),
        nombre: nombre.trim(),
        marca: marca.trim(),
        categoria,
        precio: precioNum,
        stock: stockNum,
        estado: Boolean(estado),
        };
        agregarEquipo(nuevoEquipo);
        setMensajeExito("Equipo registrado correctamente.");
        setNombre("");
        setMarca("");
        setCategoria("");
        setPrecio("");
        setStock("");
        setEstado(true);
    };
    return (
        <div className="card shadow-sm border border-secondary border-opacity-25 mb-4 bg-white">
        <div className="card-header bg-dark text-white py-3 text-center border-bottom border-secondary border-opacity-25">
            <h5 className="mb-0 fw-semibold">Registrar equipo</h5>
        </div>
        <div className="card-body p-4">
            {mensajeError && (
            <div className="alert alert-danger py-2 border-danger border-opacity-25 text-center" role="alert">
                {mensajeError}
            </div>
            )}
            {mensajeExito && (
            <div className="alert alert-success py-2 border-success border-opacity-25 text-center" role="alert">
                {mensajeExito}
            </div>
            )}

            <form onSubmit={handleSubmit}>
            <div className="row g-3">
                <div className="col-md-6 text-center text-md-start">
                <label className="form-label text-dark fw-semibold small">Nombre:</label>
                <input
                    type="text"
                    className="form-control border-secondary border-opacity-25"
                    placeholder="Ej. ThinkPad T14"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                </div>

                <div className="col-md-6 text-center text-md-start">
                <label className="form-label text-dark fw-semibold small">Marca:</label>
                <input
                    type="text"
                    className="form-control border-secondary border-opacity-25"
                    placeholder="Ej. Lenovo"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                />
                </div>

                <div className="col-md-4 text-center text-md-start">
                <label className="form-label text-dark fw-semibold small">Categoría:</label>
                <select
                    className="form-select border-secondary border-opacity-25"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="">Seleccione una categoría...</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Monitor">Monitor</option>
                    <option value="Periférico">Periférico</option>
                    <option value="Impresora">Impresora</option>
                    <option value="Red">Red</option>
                    <option value="Otros">Otros</option>
                </select>
                </div>

                <div className="col-md-4 text-center text-md-start">
                <label className="form-label text-dark fw-semibold small">Precio (Bs):</label>
                <input
                    type="number"
                    step="0.01"
                    className="form-control border-secondary border-opacity-25"
                    placeholder="Mayor a 0"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                />
                </div>

                <div className="col-md-4 text-center text-md-start">
                <label className="form-label text-dark fw-semibold small">Stock:</label>
                <input
                    type="number"
                    className="form-control border-secondary border-opacity-25"
                    placeholder="0 o mayor"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
                </div>

                <div className="col-md-12 text-center text-md-start">
                <label className="form-label text-dark fw-semibold small">Estado:</label>
                <select
                    className="form-select border-secondary border-opacity-25"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value === "true")}
                >
                    <option value="true">Disponible</option>
                    <option value="false">No disponible</option>
                </select>
                </div>

                <div className="col-12 mt-4">
                <button type="submit" className="btn btn-dark w-100 py-2 fw-semibold shadow-sm">
                    Registrar equipo
                </button>
                </div>
            </div>
            </form>
        </div>
        </div>
    );
}
export default FormularioEquipo;