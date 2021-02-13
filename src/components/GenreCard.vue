<template>
  <div class="genre-card" v-on:click="openLink(genre.link)">
    <div class="genre-title">
      {{genre.genre}}
    </div>
    <div class="genre-code">
      {{genre.code}}
    </div>
    <div class="watch">
      <i class="pi pi-angle-double-right" />
      Watch
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenreCard',
  props: ['genre'],
  methods: {
    openLink: function (link) {
      window.open(`http://www.${link}`, '_blank')
    }
  }
}
</script>

<style scoped>
  .genre-title {
    grid-area: genre;
    font-size: 1.7em;
    color: white;
    text-align: left;
    font-weight: lighter;
    font-family: "Segoe UI",sans-serif;
  }
  .genre-code {
    grid-area: number;
    color: #FFFF;
    opacity: 85%;
    text-align: right;
  }
  .genre-code:hover{
    opacity: 100%;
  }
  .watch {
    position: absolute;
    bottom:0;
    right:-10px;
    justify-self: end;
    align-self: end;
    font-size: 1em;
    background-color: #F9F9F9;
    border-radius: 100px;
    height: 60px;
    width: 85px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16),
    0 3px 6px rgba(0,0,0,0.23);

    display: none;
    justify-content: center;
    flex-direction: column;

  }
  .watch:hover {
    background-color: #DDD;
    font-weight: bold;
  }
  .watch > i{
    font-size: 2em;
  }
  .genre-card:hover > .watch {
    display: flex;

  }
  .genre-card {
    position: relative;
    display: grid;
    flex-shrink:0;
    width: 278px;
    height: 120px;
    //background-image: linear-gradient(to bottom right, #64bafd, #dae8ff);
    background-color: #B00020;
    align-items: center;
    grid-template-columns: auto;
    grid-template-rows: 1em auto;
    grid-template-areas:
      " . . number"
      "genre genre genre";
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  .genre-card:hover {
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }

</style>
