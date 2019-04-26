var app1 = new Vue({
    el: '#app-1',
    data: {
        isButtonDisabled: true
        // isButtonDisabled: false
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        text: "Hello",
    },
    methods: {
        revers: function() {
            this.text = this.text.split('');
        }
    }
})