var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        suma: 'Suma',
        n1: 0,
        n2: 0,
        rta: "",
        operaciones: ['sumar', 'restar', 'multiplicar', 'dividir'],
        frutas: [
            { nombre: 'manzana', cantidad: 5 },
            { nombre: 'mandarina', cantidad: 7 },
            { nombre: 'mango', cantidad: 10 }
        ],
        nombre: '',
        cantidad: '',
        seleccionar: '',
        cantidadComprar: ''
    },
    methods: {

        sumar() {
            this.rta = this.n1 + this.n2
        },

        restar() {
            this.rta = this.n1 - this.n2
        },

        multiplicar() {
            this.rta = this.n1 * this.n2
        },

        dividir() {
            this.rta = this.n1 / this.n2
        },

        agregar() {
            let bandera = true;
            this.frutas.forEach(fruta => {
                if (fruta.nombre == this.nombre) {
                    fruta.cantidad = fruta.cantidad + this.cantidad;
                    bandera = false;
                }
            })
            if (bandera) {
                this.frutas.push({ nombre: this.nombre, cantidad: this.cantidad })
            }
            this.limpiar();
        },

        comprar() {

            this.frutas.forEach(fruta => {
                if (fruta.nombre == this.seleccionar) {
                    fruta.cantidad = fruta.cantidad - this.cantidadComprar;
                }
            });
            this.limpiar();
        },

        limpiar() {
            this.nombre = '',
                this.cantidad = '',
                this.seleccionar = '',
                this.cantidadComprar = ''
        }
    }
})