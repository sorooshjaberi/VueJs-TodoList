<template>
  <div class="container">
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p v-if="!isValid" class="error">Title isn't valid</p>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
const value = ref("");
const props = defineProps(["isValid", "modelValue" , 'placeholder']);
const emits = defineEmits(["inputChange", "update:modelValue"]);
// watch(value, (val) => {
//   emits("inputChange", val);
// });
</script>

<style lang="scss" scoped>
.error {
  color: orangered;
}
.container {
  width: 100%;
  margin-bottom: 1.1rem;
}
p {
  position: absolute;
}
input {
  outline: none;
  border: none;
  height: 60px;
  background-color: var(--secondLight);
  padding: 1rem;
  border-radius: 0 1rem;
  width: 100%;
  font-size: 1.1rem;
}
</style>
