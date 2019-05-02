let app1 = new Vue({
    el: "#app-1",
    data: {
        isActive: true
    }
});

let app2 = new Vue({
    el: "#app-2",
    data: {
        isActive: true,
        hasError: false
    }
});

let app3 = new Vue({
    el: "#app-3",
    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
});

let app4 = new Vue({
    el: "#app-4",
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
});

let app6 = new Vue({
    el: "#app-6",
    data: {
        text: 'Hello',
        activeColor: 'red',
        fontSize: 30
    }
});

let app7 = new Vue({
    el: "#app-7",
    data: {
        text: 'Hello',
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
});