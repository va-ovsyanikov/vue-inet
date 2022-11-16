<template>
  <div :class="[
    'select',
    { focus: focus },
    { disabled: disabled },
  ]">
    <h3>{{ label }}</h3>
    <div class="select__wrap">
      <select class="field select__field" @focus="focus = true" @blur="focus = false" :value="modelValue"
        @change="updateValue(($event.target as HTMLSelectElement).value)">
        <option v-for="(option, index) in options" :key="index" :value="option"
          :selected="modelValue === option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  modelValue: {
    type: [String],
    default: null,
  },
  label: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    default: () => [],
    required: true
  },
});


const focus = ref(false);


const emit = defineEmits(["update:modelValue"]);
const updateValue = (value: string) => {
  emit("update:modelValue", value);
};
</script>

<style lang="less" scoped>
.select {
  width: 300px;

  &__wrap {
    position: relative;
  }

  &__field {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .field {
    border: 1px solid #ccc;
    font-size: 16px;
    border-radius: 2px;
    color: #6b6969;
    height: 40px;
    padding-left: 10px;
    width: 100%;
  }
}

.focus {
  .select {
    &__field {
      border: 1px solid #0d5bd1;
      outline: 0;
    }
  }
}
.disabled {
  .select {
    &__field {
      pointer-events: none;
      color: #ccc;
    }
  }
}
</style>
