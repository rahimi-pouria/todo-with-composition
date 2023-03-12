import { ref } from "vue";
import { defineStore } from "pinia";
  export const usAddTodoStore = defineStore("Todo", () => {
    let add = ''
    const Todo = ref([
      {
        id: 1,
        name: 'Do yoya'
      },
      {
        id: 2,
        name: '50 pushups'
      },
      {
        id: 3,
        name: 'order pizza'
      }
    ])
    let showTodo = true
    const Filter = null
    let FilterTodo = ref([])
    const removeTodo = ref([])
  const addTodo =  () => {
    Todo.value.push(
        {id: 5, name: add }
    )
    add = ''
  }
    //     filter
    const Filters = () => {
      console.log(Todo.value)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      FilterTodo = Todo.value.filter(item => item.name.includes(Filter))
      console.log(FilterTodo)
      showTodo = false
    }
//     remove
    const remove = (index) => {
      Todo.value.splice(index, 1)
    }
    return {
      addTodo, Filters, remove
    };
})
