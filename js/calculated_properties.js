var vm = new Vue({
    el: '#example',
    data: {
      message: 'Привет'
    },
    computed: {
      // геттер вычисляемого значения
      reversedMessage: function () {
        // `this` указывает на экземпляр vm
        return this.message.split('').reverse().join('')
      }
    }
});

var vm2 = new Vue({
    el: '#example-2',
    data: {
      message: 'Привет'
    },
    methods: {
        reverseMessage: function () {
          return this.message.split('').reverse().join('')
        }
    }
});

var vm3 = new Vue({
    el: '#example-3',
    data: {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
      }
    }
});

var vm4 = new Vue({
    el: '#example-4',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
});

var vm5 = new Vue({
    el: '#example-5',
    data: {
        firstName: 'Иван Иванов',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
          // геттер:
          get: function () {
            return this.firstName + ' ' + this.lastName
          },
          // сеттер:
          set: function (newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
          }
        }
    }
});

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
      question: '',
      answer: 'Пока вы не зададите вопрос, я не могу ответить!'
    },
    watch: {
      // эта функция запускается при любом изменении вопроса
      question: function (newQuestion, oldQuestion) {
        this.answer = 'Ожидаю, когда вы закончите печатать...'
        this.debouncedGetAnswer()
      }
    },
    created: function () {
      // _.debounce — это функция lodash, позволяющая ограничить то,
      // насколько часто может выполняться определённая операция.
      // В данном случае мы ограничиваем частоту обращений к yesno.wtf/api,
      // дожидаясь завершения печати вопроса перед отправкой ajax-запроса.
      // Узнать больше о функции _.debounce (и её родственнице _.throttle),
      // можно в документации: https://lodash.com/docs#debounce
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
      getAnswer: function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ;-)'
          return
        }
        this.answer = 'Думаю...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Ошибка! Не могу связаться с API. ' + error
          })
      }
    }
  });