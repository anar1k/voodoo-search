<script setup lang="ts">
interface IProps {
  options: IOption[]
}

defineProps<IProps>();

const modelValue = defineModel<string | number>();
</script>

<template>
  <select
    v-model="modelValue"
    class="border rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-2 px-4"
  >
    <option
      disabled
      value=""
    >
      Filter by author
    </option>

    <option :value="0">
      All
    </option>

    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>
