import Tarjeta from "../components/Tarjeta.jsx";
import ContenedorGlobal from "../components/ContenedorGlobal.jsx";
import coches from "../data/coches.js";
import { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";

function CatalogoCoches() {
    const [searchTerm, setSearchTerm] = useState("");

    // Filtro por nombre del intérprete
    const filteredVehicles = useMemo(() => {
        if (!searchTerm) {
            return coches;
            // Si no hay término, devuelve la lista completa
        }
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return coches.filter((coche) =>
            // Filtra por el nombre del vehiculo
            coche.nombre.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [searchTerm]);

    return (
        <>
            <ContenedorGlobal titulo="Nuestros Vehículos" subtitulo="Prestigio, Calidad y Estetica">

                <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    placeholder="Buscar vehículo por nombre..."
                />

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
                    {filteredVehicles.length > 0 ? (
                        filteredVehicles.map((coche, index) => (
                            <Tarjeta
                                key={index}
                                nombre={coche.nombre}
                                foto={coche.imagen}
                                descripcion={coche.descripcion}
                                precio={coche.precio}
                                to={`/coches/${index}`}
                            >
                            </Tarjeta>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500 p-4">
                            No se encontraron vehículos con el término "{searchTerm}".
                        </p>
                    )}
                </section>
            </ContenedorGlobal>
        </>
    );
}

export default CatalogoCoches;