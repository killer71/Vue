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

// var vm = new Vue({
//     data: data
// });

// vm.a === data.a;

// vm.a = 2;
// data.a;

// data.a = 3;
// vm.a;

var vm = new Vue({
    data: {
        newTodoText: '',
        visitCount: 0,
        hideCompletedTodos: false,
        todos: [],
        error: null,
    }
});

var obj = {
    foo: 'bar',
}

Object.freeze(obj);

var app8 = new Vue({
    el: '#app-8',
    data: obj
})

var data = { a: 1 };

var vm = new Vue({
    el: '#example',
    data: data
});

vm.$data === data; // true
vm.$el === document.getElementById('example'); // true

// $watch - метод экземпляра
vm.$watch('a', function(newValue, oldValue) {
    // Этот коллбэк будет вызван, когда изменится `vm.a`
})