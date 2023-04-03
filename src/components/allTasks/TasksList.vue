<template>
  <section :class="['all']">
    <ul v-if="todosArray.length">
      <li
        class="todoItem"
        v-for="todo in todosArray"
        :key="todo.title"
        @click="() => selectHandler(todo)"
        :class="{
          selectedTodo: todo.selected,
        }"
      >
        <div :class="[{ done: todo.done }]">{{ todo.title }}</div>
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
  height: 3rem;
  text-align: center;
  padding: 1rem 0;
  cursor: pointer;
  transition: 0.43s;
 &.selectedTodo{
    min-height: 1px !important;
    background-color: #a1a1a171;
  }
  &:hover {
    background-color: #e5e5e571;
  }
  .done {
    text-decoration: line-through;
    color: #999;
  }
}
</style>
