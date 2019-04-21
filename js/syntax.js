var app = new Vue({
    el: '#app-1',
    data: {
        msg: "Hello World!"
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        msg: "Hello World!"
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        vHtml: "Hello World!"
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        isButtonDisabled: true
        // isButtonDisabled: false
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        msg: "Hello World!"
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        url: "https://ru.vuejs.org/v2/guide/syntax.html#%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BF%D0%BE%D0%BB%D1%8F%D1%86%D0%B8%D0%B8"
    }
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        text: "Hello",
    },
    methods: {
        revers: function() {
            this.text = this.text.split('');
        }
    }
})