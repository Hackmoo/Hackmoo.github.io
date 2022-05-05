const App = {
   data(){
       return {
          placeholderS: 'Введите название заметки',
           inputValue: '',
           notes: []
       }
   },

   methods: {


       addHandler(event){
           if(this.inputValue !== ''){
               this.notes.push(this.inputValue)
               this.inputValue = ''
           }
            },
       delHandlerAll(){
           this.notes = []
       },
       delHandler(i){
            this.notes.splice(i, 1)
       },



       toUpperCase(a)
       {
           return a.toUpperCase()
       }


   },

    computed: {
       doubleCount() {
           return this.notes.length * 2
       },
    },

    watch: {
        inputValue(a){
                if(a.length > 12) {
                    this.inputValue = ''
            }
        },



    },
}

Vue.createApp(App).mount('#app')
