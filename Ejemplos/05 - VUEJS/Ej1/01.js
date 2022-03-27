const app = new Vue({
    el: '#app',
    data:{
        titulo:'Hola mundo con vue',
        frutas: ['Manzana','pera','Platano'],
        Frutas1:[
            {nombre: 'pera', cantidad:10},
            {nombre: 'manzana', cantidad:0},
            {nombre: 'pera', cantidad:11}
        ]
    }
})