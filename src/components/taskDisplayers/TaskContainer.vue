<template>
  <section v-if="selectedTodo" class="selected">
    <h1 class="title">
      {{ selectedTodo.title }}
    </h1>
    <h3 class="description">
      {{ selectedTodo.description }}
    </h3>
    <div @click="deleteHandler" class="delete">_</div>
    <div @click="doneHandler" class="done">{{ !selectedTodo.done? '&#10004' : '&#10006' }}</div>
  </section>
  <section class="selected" v-else>
    <h1>Empty !</h1>
  </section>
</template>

<script setup>
const props = defineProps({
  selectedTodo: Object,
});
const emits = defineEmits(["delete" , "done"]);
function deleteHandler() {
  emits("delete", props.selectedTodo.id);
}
function doneHandler(){
emits('done' , props.selectedTodo)
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 3rem;
  margin-bottom: 2rem;
}
section {
  position: relative;
}
@mixin taskButtons {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: var(--primDark);
  display: flex;
  align-items: start;
  color: var(--primLight);
  font-size: 3rem;
  justify-content: center;
  transition: 0.4s;
  cursor: pointer;
  position: absolute;
  right: 2rem;
  &:hover {
    background-color: var(--secondDark);
  }
}
.delete {
  @include taskButtons();
  top: 2rem;
}
.done {
  @include taskButtons();
  align-items: center;
  top: 15rem;
}
</style>
