class Contenido{
    #titulo
    #calificacion
    constructor(titulo, calificacion){
        this.#titulo = titulo
        this.#calificacion = calificacion
    }

    getTitulo(){
        return this.#titulo
    }

}

class Pelicula extends Contenido{
    #director
    constructor(titulo, calificacion, director){
        this.#director = director
        super(titulo, calificacion)
    }
    reproducir(){
        console.log("reproduciendo la pelicula: " + this.getTitulo())
    }

    
}

class Serie extends Contenido{
    #temporada
    constructor(titulo, calificacion, temporada){
        super(titulo, calificacion)
        this.#temporada = temporada
    }
    reproducir(){
        console.log("reproduciendo la serie:" + this.getTitulo())
    }
}

const pelicula1 = new Pelicula("Inception", 8.8, "Christopher Nolan")
const serie1 = new Serie("Breaking Bad", 9.5, 5)
pelicula1.reproducir()
serie1.reproducir()