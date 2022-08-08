import {createStore} from 'vuex'
// import {postModule} from "@/store/postModule";

export default createStore({
    state: () => ({
        students: [
            {id: 0, firstName: 'Алёша', lastName: 'Григорян', patronymic:'Крутой', groupOf: '9Б', nameOfObject: ['Математика','Биология','Абобавидение'], grades: ['']},
            {id: 1, firstName: 'Алёша2', lastName: 'Григорян', patronymic:'Крутой', groupOf: '9Б', nameOfObject: ['Математика','Валарантовидение'], grades: ['']}
        ],
        currentStudent: {},// Последний выбранный пользователем элемент
    }),
    mutations:{
        addPost(state, post){
          state.students.push(post) // Добавляет новый элемент массива из компонента addStudent
        },
        changePost(state, studentN){
            for (const stateElement of state.students) { // Меняет имя в массиве по индексу, который берётся при нажатии на currentStudent
                if(stateElement.id.toString().includes(studentN.idOf) ){
                    stateElement.firstName = studentN.fName
                    break
                }
            }
        },
        changeLname(state, studentL){ // Меняет фамилию в массиве по индексу, который берётся при нажатии на currentStudent
            for (const student of state.students) {
                if(student.id.toString().includes(studentL.idOf)){
                    student.lastName = studentL.lName
                    break
                }
            }
        },
        changePatronymic(state, studentP){ // Меняет отчество в массиве по индексу, который берётся при нажатии на currentStudent
            for (const student of state.students) {
                if(student.id.toString().includes(studentP.idOf)){
                    student.patronymic = studentP.patronymicOfS
                    break
                }
            }
        },
        changeGroup(state, studentG){ // Меняет группу в массиве по индексу, который берётся при нажатии на currentStudent
            for (const student of state.students) {
                if(student.id.toString().includes(studentG.idOf)){
                    student.groupOf = studentG.groupOfS
                    break
                }
            }
        },
        delStudent(state, idTaken){ // Удаление из массива по индексу, который берётся при нажатии на currentStudent
            state.students = state.students.filter(i => i.id !== idTaken)
        }
    }
})