<template>
  <section class="layout">
    <NewTaskContainer
      @add="
        (newTodo) => {
          todos.unshift(newTodo);
        }
      "
    />
    <TasksList
      @select-todo="(todo) =>(selectedTodo = todo)"
      :todos-array="todos"
    />
    <TaskContainer
      @delete="deleteItem"
      @done="(todo) => (todo.done = !todo.done)"
      :selected-todo="selectedTodo"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import TasksList from "./components/allTasks/TasksList.vue";
import TaskContainer from "./components/taskDisplayers/TaskContainer.vue";
import NewTaskContainer from "./components/newTasks/NewTaskContainer.vue";
const todos = ref([
  {
    title: "Clean room",
    description: "clean everything that is related to you today",
    done: false,
  },
]);
const selectedTodo = ref(todos.value[0]);

function deleteItem(title) {
  console.log(title);
  todos.value = todos.value.filter((todo) => todo.title !== title);
  selectedTodo.value = todos.value[0];
}
</script>

<style lang="scss">
:root {
  --primDark: #262626;
  --primLight: #fff;
  --secondLight: #ffd2fa;
  --secondDark: #e072d3;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  &::selection {
    background-color: transparent;
  }
}
html {
  background-color: var(--primDark);
}
.layout {
  width: 100%;
  height: calc(100% - 3rem);
  padding: 0 15rem;
  padding-top: 2rem;
  display: grid;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-template-columns: repeat(5, 150px);
  grid-template-areas:
    "new new new new allTask"
    "new new new new allTask"
    "selected selected selected selected allTask"
    "selected selected selected selected allTask"
    "selected selected selected selected allTask"
    "selected selected selected selected allTask"
    "selected selected selected selected allTask";
  section {
    border-radius: 1rem;
    background-color: var(--primLight);
    box-shadow: 0 0 10px #111;
    padding: 1rem;
  }
}
.new {
  grid-area: new;
  height: 200px;
}
.all {
  grid-area: allTask;
}
.selected {
  grid-area: selected;
  min-height: 450px;
}
</style>
