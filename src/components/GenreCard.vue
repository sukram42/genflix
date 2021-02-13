<template>
  <div class="genre-card p-card" v-on:click="openLink(genre.link)">
    <div class="genre-title">
      {{genre.genre}}
    </div>
    <div class="genre-code">
      {{genre.code}}
    </div>
  </div>

</template>

<script>
export default {
  name: 'GenreCard',
  props: ['genre'],
  methods: {
    openLink: function (link) {
      const win = window.open(`http://www.${link}`, '_blank')
    }
  }
}
</script>

<style scoped>
  .genre-title {
    grid-area: genre;
    padding: 0.5em;
    justify-content: center;
    justify-items: center;
  }
  .genre-code {
    grid-area: number;
    color: #AAA
  }
  .genre-card:hover {
    background-color: khaki;
    cursor: pointer;
  }
  .genre-card:hover > .genre-title {
    font-weight: bold;
  }
  .genre-card {

    display: grid;
    flex-shrink:0;
    width: 200px;
    height: 5em;

    align-items: center;
    grid-template-columns: auto;
    grid-template-rows: auto 1em;
    grid-template-areas:
      "genre genre genre"
      " . . number";
    padding: 5px;

  }

</style>
