<template>
  <div class="genre-list" v-if="genres.length>0">
    <GenreCard :genre="genre"
               class="card"
               v-bind:key="index"
               v-for="(genre, index) in genres"/>
  </div>
  <div class="nothingFound" v-if="genres.length===0">
    <div class="sad-smiley">
      :(
    </div>
    <div class="sad-div">
      <div class="sad-text">
        Sadly there is not such a Genre.
      </div>
      <div class="sad-recommandations-title">
        But have you tried these?
      </div>
      <div class="sad-recommandations">
        <Tag v-on:click="()=>setSearchString('Documentaries')" rounded severity="info">Documentaries</Tag>
        <Tag v-on:click="()=>setSearchString('Comed')" rounded severity="info">Comedy</Tag>
        <Tag v-on:click="()=>setSearchString('Drama')" rounded severity="info">Drama</Tag>
        <Tag v-on:click="()=>setSearchString('Action')" rounded severity="info">Action</Tag>
      </div>
    </div>
  </div>
</template>

<script>
import GenreCard from '@/components/GenreCard.vue' // @ is an alias to /src

export default {
  name: 'GenreList',
  props: ['genres', 'setSearchString'],
  components: {
    GenreCard
  }
}
</script>

<style lang="scss" scoped>
  $mobile_break: 476px;

  .card{
    margin: 0.5em;
    flex-grow: 1;
  }
  .genre-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-grow: inherit;
  }
  .genre-list::after {
    content: '';
    flex-grow: 1000000000;
  }
  .p-tag:hover {
    cursor: pointer;
  }
  .p-tag {
    background-color: #B00020;
  }
  .nothingFound{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    flex-wrap: wrap;
  }
  .sad-smiley{
    font-size: 5em;
    font-family: "Segoe UI Light",sans-serif;
    margin-right: 20px;
  }
  .sad-text{
    font-size:1.5em;
    font-weight: lighter;
    font-family: "Segoe UI Light",sans-serif;
  }
  .sad-recommandations-title{
    font-size:1em;
    font-weight: lighter;
    font-family: "Segoe UI Light",sans-serif;
  }
  .sad-recommandations{
    margin-top: 10px;
  }
  .sad-recommandations > *{
    margin: 5px;
  }

  @media screen and (min-width: $mobile_break) {
    .sad-recommandations-title {
      font-size: 1.5em;
    }
    .sad-smiley {
      font-size: 9em;
    }

  }
</style>
