<template>
  <div class="d-flex container justify-content-center pt-4">
    <div class="col-md-7 col-sm-12" style="gap: 10px">
      <!-- header !-->
      <div class="d-flex">
        <Header />
      </div>
      <!-- Input !-->
      <div class="d-flex w-100">
        <input type="text" v-model="Filter" @input="Filters" class="form-control addTodoInput text-center" placeholder="search todo" />
      </div>
      <!-- show data  !-->
      <div class="d-flex flex-column p-2" style="gap: 8px">
        <template v-for="(item, index) in Todo">
          <div v-if="showTodo" :key="index" class="d-flex justify-content-between align-items-center p-2 bg-Todo">
            <p class="pt-2">{{ item.name }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" class="pointer-event" @click="remove(index)">
              <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/>
            </svg>
          </div>
        </template>
<!--   filter array     -->
        <div v-for="(item, index) in FilterTodo" :key="index" class="d-flex justify-content-between align-items-center p-2 bg-Todo">
          <p class="pt-2">{{ item.name }}</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" class="pointer-event">
            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/>
          </svg>
        </div>
      </div>
      <!-- Input add  !-->
      <div class="d-flex flex-column w-100 justify-content-center text-center" style="gap: 10px">
        <p>Add new todo...</p>
        <div class="d-flex" style="gap: 10px">
          <button @click="addTodo" class="btnLinkAdd" style="width: 20% !important;">add Todo</button>
          <input type="text"
                 style="width: 75% !important;"
                 class="form-control addTodoInput text-center"
                 placeholder="add todo" v-model="add" @input="add = $event.target.value" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
    import Header from '@/components/Header.vue'
    import { ref } from "vue"

    const Todo = ref([
      {
        id: 1,
        name: 'Do yaya'
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
    // create variable
    let add = ''
    let showTodo = true
    let Filter = null
    let FilterTodo = ref([])
    let removeTodo = ref([])
//    btn add function
    const addTodo = () => {
      Todo.value.push(
          {name: add }
      )
      add = ''
    }
//     filter
    const Filters = () => {
      console.log(Todo.value)
      FilterTodo = Todo.value.filter(item => item.name.includes(Filter))
      console.log(FilterTodo)
      showTodo = false
    }
//     remove
    const remove = (index) => {
        Todo.value.splice(index, 1)
    }
</script>
<style lang="scss">
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    background: #353e5b !important;
    color: #fff !important;
  }
  .addTodoInput{
    background: #252c3f !important;
    border: 1px solid #2f4d79 !important;
  }
  .bg-Todo{
    background: #42396e !important;
  }
  svg{
    fill: #ffffff;
    cursor: pointer;
  }
  input{
    color: white !important;
  }
  button.btnLinkAdd {
    background: #42396e;
    border: 1px solid #42396e;
    color: white;
    border-radius: 8px;
  }
</style>
