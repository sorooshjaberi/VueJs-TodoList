<template>
  <section class="all">
    <ul v-if="todosArray.length">
      <li
        class="todoItem"
        v-for="todo in todosArray"
        :key="todo.title"
        @click="() => selectHandler(todo)"
      >
        <div>{{ todo.title }}</div>
      </li>
    </ul>
    <h3 v-else>Empty</h3>
  </section>
</template>

<script setup>
const props = defineProps({
  todosArray: Array,
});
const emits = defineEmits(["selectTodo"]);

function selectHandler(todo) {
  emits("selectTodo", todo);
}
</script>

<style lang="scss" scoped>
.todoItem {
  list-style-type: none;
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  cursor: pointer;
  transition: 0.43s;
  &:hover {
    background-color: #e5e5e571;
  }
}
</style>
