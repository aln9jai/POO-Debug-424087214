class Matriz {
    constructor (fila, columna){
        this.fila = fila
        this.columna = columna
        this.valores = []
        for(let i = 0; i < this.fila; i++){
            let nuevaFila = []
            for(let j = 0; j < this.columna; j++){
                nuevaFila.push(0)
            }
            this.valores.push(nuevaFila)
        }
    }
    asignarValor(fila, columna, valor){
        this.valores[fila][columna] = valor
    }
    mostrar(){
        for(let i = 0; i < this.fila; i++){
            console.log(this.valores[i])
            for(let j = 0; j < this.columna; j++){
                console.log(this.valores[i][j])
            }
        }
    }
    sumarMatriz(){

    }
}

const matriz1 = new Matriz(2, 2)
matriz1.asignarValor(0, 0, 1)
matriz1.asignarValor(0, 1, 2)
matriz1.asignarValor(1, 0, 3)
matriz1.asignarValor(1, 1, 4)

matriz1.mostrar()
