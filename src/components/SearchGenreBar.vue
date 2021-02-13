<template>
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText type="text"
                 :value="modelValue"
                 @input="$emit('update:modelValue', $event.target.value)"
                 placeholder="Search for Genre" />
    </span>
</template>

<script>
export default {
  name: 'search-genre-bar',
  props: ['modelValue'],
  data: () => ({
  })
}
</script>

<style scoped>

</style>
