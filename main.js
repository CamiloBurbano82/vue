var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        suma: 'Suma',
        n1:0,
        n2:0,
        rta:"",
        frutas: ['manzana','mandarina','mango', 'pera']
    },
    methods:{

        sumar(){
            this.rta = this.n1 + this.n2
        }
       
    }
})