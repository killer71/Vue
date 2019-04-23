Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>'
});

new Vue({
    el: '#components',
});




Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
});

new Vue({ 
    el: '#blog',
    data: {
        posts: [
            {
                id: 1,
                title: 'My journey with Vue'
            },
            {
                id: 2,
                title: 'My with Vue'
            },
            {
                id: 3,
                title: 'My journey with'
            }
        ]
    }
});


// Рефакторинг компонента

Vue.component('blog-post-2', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <div v-html="post.content"></div>
            <p>Дата: {{post.data}}</p>
        </div>
    `
});

new Vue({ 
    el: '#blog-2',
    data: {
        posts: [
            {
                id: 1,
                title: 'My journey with Vue',
                content: 'Some content',
                data: '16.01.2019'
            },
            {
                id: 2,
                title: 'My with Vue',
                content: 'Some content',
                data: '16.01.2018'
            },
            {
                id: 3,
                title: 'My journey with',
                content: 'Some content',
                data: '16.01.2017'
            }
        ]
    }
});


// Прослушивание событий в дочерних компонентах

Vue.component('blog-post-3', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text')">
          Увеличить размер текста
        </button>
        <div v-html="post.content"></div>
      </div>
    `
});

new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            {
                id: 1,
                title: 'My journey with Vue',
                content: 'Some content',
                data: '16.01.2019'
            },
            {
                id: 2,
                title: 'My with Vue',
                content: 'Some content',
                data: '16.01.2018'
            },
            {
                id: 3,
                title: 'My journey with',
                content: 'Some content',
                data: '16.01.2017'
            }
        ],
        postFontSize: 1
    }
});


// Передача данных вместе с событием

Vue.component('blog-post-4', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text', 0.1)">
          Увеличить размер текста
        </button>
        <div v-html="post.content"></div>
      </div>
    `
});

new Vue({
    el: '#blog-4',
    data: {
        posts: [
            {
                id: 1,
                title: 'My journey with Vue',
                content: 'Some content',
                data: '16.01.2019'
            },
            {
                id: 2,
                title: 'My with Vue',
                content: 'Some content',
                data: '16.01.2018'
            },
            {
                id: 3,
                title: 'My journey with',
                content: 'Some content',
                data: '16.01.2017'
            }
        ],
        postFontSize: 1
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize += enlargeAmount
        }
    }
});