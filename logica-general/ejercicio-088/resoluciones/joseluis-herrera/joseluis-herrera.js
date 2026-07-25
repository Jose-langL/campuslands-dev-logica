const Peliculas = [
    { titulo: "Blade Runner 2049", duracionMinutos: 164, presupuestoMillones: 150, recaudacionMillones: 260 },
    { titulo: "Interstellar", duracionMinutos: 169, presupuestoMillones: 165, recaudacionMillones: 730 },
    { titulo: "Tenet", duracionMinutos: 150, presupuestoMillones: 200, recaudacionMillones: 365 },
    { titulo: "Dune: Part Two", duracionMinutos: 166, presupuestoMillones: 190, recaudacionMillones: 711 },
    { titulo: "Matrix Resurrections", duracionMinutos: 148, presupuestoMillones: 190, recaudacionMillones: 159 }
];

let mejorPelicula = Peliculas[0];

let calcular_rentabilidad = (pelicula) => {
    let gananciaNeta = pelicula.recaudacionMillones - pelicula.presupuestoMillones;
    let eficienciaPresupuesto = gananciaNeta / pelicula.presupuestoMillones;
    return eficienciaPresupuesto - (pelicula.duracionMinutos * 0.001);
};

if (Peliculas.length === 0) {
    console.log("No hay películas de ciencia ficción registradas para procesar el flujo paso a paso.");
} else {
    Peliculas.forEach((pelicula) => {
        if (calcular_rentabilidad(pelicula) > calcular_rentabilidad(mejorPelicula)) {
            mejorPelicula = pelicula;
        }
    });
    console.log(`La película de ciencia ficción con el mejor flujo paso a paso evaluado es "${mejorPelicula.titulo}"`);
}