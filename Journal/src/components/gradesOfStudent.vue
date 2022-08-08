<template>
<div>
 <div class="myGreatestIdea">  <!-- Это начало пустого места -->
    <div style="
         display: flex;
         width: 14vw;
      ">
      <div style="padding: 0 16px; opacity: 0; cursor: default; -webkit-user-select: none" draggable="false">
        ПосхалОчка
      </div>
    </div> <!-- Конец пустого места и начало дат -->
    <div style="
     width: 100%;
     ">
      <div class="mainOfGreatestIdeaEver">
        <div v-for="(el) in 31" :key="el" style="text-align: center;">
          <input class="myInputOfGreatestIdeaEver" :value="el" readonly style="outline: none"/>
        </div>
      </div>
    </div>
  </div>  <!-- Выше не смотреть, там всё хорошо! -->
  <hr  style="color: teal">
 <div class="main" draggable="false">
   <div class="nameOfObject">
     <div class="name" v-for="(el, i) in this.$store.state.currentStudent.nameOfObject" :key="i">
       <name-of-grade> {{el}}: </name-of-grade>
     </div>
   </div>
   <div class="edit">
     <div v-if="this.$store.state.currentStudent.id !== undefined">
            <div v-for="el in this.$store.state.currentStudent.nameOfObject.length" :key="el">
       <grades-line/>
            </div>
     </div>
   </div>
  </div>
</div>
</template>

<script>
import nameOfGrade from "@/components/nameOfGrade";
import gradesLine from "@/components/gradesLine";
export default {
  components:{
    gradesLine,nameOfGrade
  },
  name: "gradesOfStudent",
  data: () => ({

  })
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  left: 50%;
  right: 50%;
}
.myGreatestIdea{
  display: flex;
  flex-direction: row;
}
.main{
  display: flex;
  flex-direction: row;
  cursor: default;
}
.name{
  display: flex;
  flex-direction: column;
  width: 12vw;
  border-right: 2px solid teal;
  overflow: scroll;
}
.edit{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.mainOfGreatestIdeaEver{
  display: flex;
  flex-direction: row;
  margin: 0 3px;
}
.myInputOfGreatestIdeaEver{
  width: 75%;
  text-align: center;
  border: none;
  cursor: default;
  background: none;
}
.nameOfObject{
  display: flex;
  flex-direction: column;
  border-right: 2px solid teal;
  height: 50vw;
  overflow: scroll;
  width: 14vw;
}
</style>