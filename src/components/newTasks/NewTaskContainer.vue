<template>
  <!-- @update:input="log" -->
  <section class="new">
    <form @submit.prevent="addHandler" ref="form">
      <div class="controllers">
        <FormGroup placeholder="title" :is-valid="isTitleValid" v-model="title" />
        <FormGroup placeholder="description" :is-valid="isDescValid" v-model="description" />
      </div>
      <div class="buttonContainer">
        <button>+</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { computed, nextTick, ref, watch } from "vue";
import FormGroup from "./FormGroup.vue";
function log(e) {
  console.log(e);
}
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

watch(title, (e) => {
  titleTouched.value = true;
});
watch(description, () => {
  descTouched.value = true;
});

const emits = defineEmits(["add"]);

function resetForm() {
  title.value = "";
  description.value = "";
  nextTick(() => {
    titleTouched.value = false;
    descTouched.value = false;
  });
}

function addHandler() {
  titleTouched.value = true;
  descTouched.value = true;
  if (!(isDescValid.value && isTitleValid.value)) return;
  emits("add", {
    title: title.value,
    description: description.value,
    done: false,
    id: new Date(),
    selected: true,
  });
  form.value.reset();
  nextTick(() => {
    resetForm();
  });
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
