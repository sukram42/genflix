<template>
  <div class="genre-list">
    <GenreCard :genre="genre"
               class="card"
               v-bind:key="index"
               v-for="(genre, index) in genres"/>
  </div>
</template>

<script>
import GenreCard from '@/components/GenreCard.vue' // @ is an alias to /src

export default {
  name: 'GenreList',
  props: ['genres'],
  components: {
    GenreCard
  }
}
</script>

<style scoped>
  .card{
    margin: 0.5em;
  }
  .genre-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>
