<template>
<div class="main">
  <div v-for="(el) in 31" :key="el" style="text-align: center">
  <input class="myInput" @input="myInput = $event.target.value"/>
  </div>
</div>
</template>

<script>
export default {
  name: "gradesLine",
  data: () => ({
    myInput: ''
  }),
  watch:{
    myInput(newValue){
      if(newValue < 0){
        this.myInput = ''
        console.log(this.myInput);
      }
    }
  }
}
</script>

<style scoped>
.main{
  display: flex;
  flex-direction: row;
  margin: 0 3px;
}
.myInput{
  width: 75%;
  text-align: center;
  border: 1px solid teal;
  border-radius: 4px;
}
</style>