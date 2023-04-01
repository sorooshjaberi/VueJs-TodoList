<template>
  <section v-if="selectedTodo" class="selected">
    <h1 class="title">
      {{ selectedTodo.title }}
    </h1>
    <h3 class="description">
      {{ selectedTodo.description }}
    </h3>
    <div @click="deleteHandler" class="delete">_</div>
  </section>
  <section class="selected" v-else>
    <h1>Empty !</h1>
  </section>
</template>

<script setup>
const props = defineProps({
  selectedTodo: Object,
});
const emits = defineEmits(["delete"]);
function deleteHandler() {
  emits("delete", props.selectedTodo.title);
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
.delete {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: var(--primDark);
  color: var(--primLight);
  display: flex;
  align-items: start;
  justify-content: center;
  font-size: 3rem;
  cursor: pointer;
  position: absolute;
  right: 2rem;
  top: 2rem;
  transition: 0.4s;
  &:hover {
    background-color: var(--secondDark);
  }
}
</style>
