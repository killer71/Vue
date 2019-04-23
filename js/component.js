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




Vue.component('blog-post-2', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <div v-html="post.content"></div>
        </div>
    `
});

new Vue({ 
    el: '#blog-2',
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