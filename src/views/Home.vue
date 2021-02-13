<template>
  <div class="home">
    <SearchGenreBar v-model="value"/>
    <GenreList :genres="genreList"/>
  </div>
</template>

<script lang="ts">
import genres from '../genres/genres.json'

import { Options, Vue } from 'vue-class-component'
import SearchGenreBar from '@/components/SearchGenreBar.vue' // @ is an alias to /src
import GenreList from '@/components/GenreList.vue' // @ is an alias to /src
import { Watch } from 'vue-property-decorator'

@Options({
  components: {
    SearchGenreBar,
    GenreList
  }
})
export default class Home extends Vue {
  value = ''
  genreList: { genre: string; code: number }[] = genres

  searchGenre (searchText: string) {
    this.genreList = genres.filter(x => {
      console.log(x, searchText, x.genre.includes(searchText))
      return x.genre.toLowerCase().includes(searchText.toLowerCase())
    })
  }

  @Watch('value')
  onValueChanged (value: string) {
    this.searchGenre(value)
  }
}
</script>
