new Vue({
    el: '#components-demo'
})

Vue.component('button-counter', {
    data: function() {
        return { 
            count: 0 
        }
    },
    template: '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>'
})