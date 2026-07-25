const PeliculasMiedo = [
    { titulo: "El Conjuro", sustosPorMinuto: 3.5, nivelOscuridad: 85, supervivenciaProtagonista: 70 },
    { titulo: "Hereditary", sustosPorMinuto: 2.0, nivelOscuridad: 95, supervivenciaProtagonista: 40 },
    { titulo: "La Monja", sustosPorMinuto: 4.5, nivelOscuridad: 90, supervivenciaProtagonista: 60 },
    { titulo: "Actividad Paranormal", sustosPorMinuto: 1.5, nivelOscuridad: 98, supervivenciaProtagonista: 20 },
    { titulo: "It", sustosPorMinuto: 3.0, nivelOscuridad: 75, supervivenciaProtagonista: 85 }
];

let mejorPelicula = PeliculasMiedo[0];

let simular_estado_terror = (pelicula) => {
    let factorSustos = pelicula.sustosPorMinuto * 20;
    let factorAmbiente = pelicula.nivelOscuridad * 0.5;
    return factorSustos + factorAmbiente + (100 - pelicula.supervivenciaProtagonista);
};

if (PeliculasMiedo.length === 0) {
    console.log("No hay películas de miedo registradas para simular los estados.");
} else {
    PeliculasMiedo.forEach((pelicula) => {
        if (simular_estado_terror(pelicula) > simular_estado_terror(mejorPelicula)) {
            mejorPelicula = pelicula;
        }
    });
    console.log(`La película de miedo con el nivel de simulación de terror más alto es "${mejorPelicula.titulo}"`);
}