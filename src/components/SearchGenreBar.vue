<template>
    <div class="searchbar">
      <span class="p-input-icon-left searchbar-span">
        <i class="pi pi-search" />
        <InputText type="text"
                   :value="modelValue"
                   @input="$emit('update:modelValue', $event.target.value)"
                   placeholder="Search for Genre" />
      </span>
    </div>
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
  .searchbar {
    width: 100%;
    padding: 30px;
  }
  .searchbar-span{
    width: 100%;
  }
  .p-inputtext {
    width: 100%;
  }

</style>
