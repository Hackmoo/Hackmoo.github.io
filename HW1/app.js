const App = {
    data(){
        return {
             result: "",
              inputValue: "",
             selected: "",
            selected2: "",


        }


    },

    methods:{

    },

    computed: {
       cmp(){
           if(this.selected === "1" && this.selected2 === "1" ){
               let a = this.inputValue;
               this.result = a * 1;
               return this.result
           }

           else if(this.selected === "1" && this.selected2 === "2" ){
               let a = this.inputValue;
               this.result = a / 10;
               return this.result
           }

           else if(this.selected === "1" && this.selected2 === "3" ){
               let a = this.inputValue;
               this.result = a / 100;
               return this.result
           }

           else if(this.selected === "1" && this.selected2 === "4" ){
               let a = this.inputValue;
               this.result = a / 100000;
               return this.result
           }

           else if(this.selected === "2" && this.selected2 === "1" ){
               let a = this.inputValue;
               this.result = a * 10;
               return this.result
           }

           else if(this.selected === "2" && this.selected2 === "2" ){
               let a = this.inputValue;
               this.result = a * 1;
               return this.result
           }

           else if(this.selected === "2" && this.selected2 === "3" ){
               let a = this.inputValue;
               this.result = a / 10;
               return this.result
           }

           else if(this.selected === "2" && this.selected2 === "4" ){
               let a = this.inputValue;
               this.result = a / 10000;
               return this.result
           }

           else if(this.selected === "3" && this.selected2 === "1" ){
               let a = this.inputValue;
               this.result = a * 100;
               return this.result
           }

          else if(this.selected === "3" && this.selected2 === "2" ){
               let a = this.inputValue;
               this.result = a * 10;
               return this.result
           }

           else if(this.selected === "3" && this.selected2 === "3" ){
               let a = this.inputValue;
               this.result = a * 1;
               return this.result
           }

           else if(this.selected === "3" && this.selected2 === "4" ){
               let a = this.inputValue;
               this.result = a / 1000;
               return this.result
           }

           else if(this.selected === "4" && this.selected2 === "1" ){
               let a = this.inputValue;
               this.result = a * 100000;
               return this.result
           }

          else if(this.selected === "4" && this.selected2 === "2" ){
               let a = this.inputValue;
               this.result = a * 10000;
               return this.result
           }

           else if(this.selected === "4" && this.selected2 === "3" ){
               let a = this.inputValue;
               this.result = a * 1000;
               return this.result
           }

           else if(this.selected === "4" && this.selected2 === "4" ){
               let a = this.inputValue;
               this.result = a * 1;
               return this.result
           }



       }
    },

    watch: {
        inputValue(a){
            if(a < 0) {
                this.inputValue = ''
            }
        }
    }
}



Vue.createApp(App).mount('#app')