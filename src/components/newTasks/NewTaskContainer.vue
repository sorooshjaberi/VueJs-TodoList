<template>
  <section class="new">
    <form @submit.prevent="addHandler" ref="form">
      <div class="controllers">
        <FormGroup
          :input="title"
          :is-valid="isTitleValid"
          @input-change="(val) => (title = val)"
        />
        <FormGroup
          :input="description"
          :is-valid="isDescValid"
          @input-change="(val) => (description = val)"
        />
      </div>
      <div class="buttonContainer">
        <button>+</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import FormGroup from "./FormGroup.vue";

const title = ref("");
const description = ref("");
const titleTouched = ref(false);
const descTouched = ref(false);
const form = ref(null);

const isTitleValid = computed(() => {
  return !(title.value.length === 0 && titleTouched.value);
});
const isDescValid = computed(() => {
  return !(description.value.length === 0 && descTouched.value);
});

watch(title, () => {
  titleTouched.value = true;
});
watch(description, () => {
  descTouched.value = true;
});

const emits = defineEmits(["add"]);

function addHandler() {
  titleTouched.value = true;
  descTouched.value = true;
  if (!(isDescValid.value && isTitleValid.value)) return;
  emits("add", {
    title: title.value,
    description: description.value,
  });
  form.value.reset();
}
</script>

<style lang="scss" scoped>
section {
  min-height: 200px;
}
form {
  display: flex;
  height: 100%;

  .controllers {
    display: flex;
    width: 70%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
  }
  .buttonContainer {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    width: auto;
    button {
      border-radius: 40px;
      width: 80px;
      height: 80px;
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      color: var(--primLight);
      font-size: 3rem;
      font-weight: bolder;
      transition: 0.4s;
      background-color: var(--secondDark);
      cursor: pointer;
      &:hover {
        background-color: var(--primDark);
      }
    }
  }
}
</style>
