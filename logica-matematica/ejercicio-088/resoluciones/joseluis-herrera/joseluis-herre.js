const Peliculas = [
    { titulo: "Blade Runner 2049", calificacionCritica: 8.8, popularidadPublico: 85, anioEstreno: 2017 },
    { titulo: "Interstellar", calificacionCritica: 8.6, popularidadPublico: 92, anioEstreno: 2014 },
    { titulo: "Tenet", calificacionCritica: 7.3, popularidadPublico: 78, anioEstreno: 2020 },
    { titulo: "Dune: Part Two", calificacionCritica: 9.0, popularidadPublico: 95, anioEstreno: 2024 },
    { titulo: "Matrix Resurrections", calificacionCritica: 5.7, popularidadPublico: 60, anioEstreno: 2021 }
];

let mejorPelicula = Peliculas[0];
let evaluar_patron_puntuacion = (p) => (p.calificacionCritica * 100) + (p.popularidadPublico * 2) + (p.anioEstreno * 0.5);

if (Peliculas.length === 0) {
    console.log("No hay películas de ciencia ficción registradas para evaluar el patrón de puntuación.");
} else {
    Peliculas.forEach((pelicula) => {
        if (evaluar_patron_puntuacion(pelicula) > evaluar_patron_puntuacion(mejorPelicula)) {
            mejorPelicula = pelicula;
        }
    });
    console.log(`La película de ciencia ficción con el mejor patrón de puntuación es "${mejorPelicula.titulo}"`);
}