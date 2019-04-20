var app = new Vue({
    el: "#app",
    data: {
        text: "Hello World!"
    }
});

var app2 = new Vue({
    el: "#app-2",
    data: {
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            {text: "Изучить JS"},
            {text: "Изучить Vue"},
            {text: "Изучить"},
        ]
    }
});

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "Hello Vue"
    },
    methods: {
        reversMessage: function() {
            this.message = this.message.split('').reverse().join('');
            // this.message = this.message.toUpperCase();
        }
    }
});

var app6 = new Vue({
    el: "#app-6",
    data: {
        message: "Hello Vue!"
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        items: [
            { id: 0, text: 'Овощи' },
            { id: 1, text: 'Сыр' },
            { id: 2, text: 'Остальное' },
        ]
    }
})