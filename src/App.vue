<template>
  <div id="nav">
    <div class="appname">
      Genreflix
    </div>
    <!--<router-link to="/">Home</router-link>-->
    <!--<router-link to="/about">About</router-link>-->
  </div>
  <router-view/>
</template>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.appname {
  font-size: 2em;
  font-family: "Calibri Light";
}

#nav {
  padding: 0 1em 0 1em;
  display: flex;
  justify-content: left;

  height: 40px;
}
</style>
