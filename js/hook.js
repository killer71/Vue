var vm = new Vue({
    el: '#app',
    data: {
        a: 1
    },
    created: function() {
        // `this` указывает на экземпляр vm
        console.log('Значение a: ' + this.a)
    },
    mounted: function() {
        this.$nextTick(function () {
            // Код, который будет запущен только после
            // отображения всех представлений
        })
    },
    updated: function() {
        this.$nextTick(function () {
            // Код, который будет запущен только после
            // обновления всех представлений
        })
    }
})
// => "Значение a: 1"