<template>
  <div class="main">
    <div id="header">
      <div class="appname">
        <span class="gen">Gen</span>flix
      </div>
    </div>
    <router id="nav">
      <router-link class="router-link nav-btn" tag="div" to="/">
        <i class="pi pi-search" />
        Search
      </router-link>
      <router-link class="router-link nav-btn" tag="div" to="/about">
        <i class="pi pi-compass" />
        Browse
      </router-link>
    </router>
    <router-view class="view"/>
  </div>
</template>

<style lang="scss">
$mobile_break: 476px;

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
  height: calc(var(--vh, 1vh) * 100);;

}

.nav-btn {
  display: flex;
  flex-direction: column;
  height: 60px;
  width:100px;
  padding: 15px;
  text-decoration: none;
}

.router-link-exact-active {
  background-color: #B00020;
  color: white;
  font-weight: bold;
}
.gen{
  color: #B00020;
}
.router-link-exact-active:hover {
  background-color: #B00020;
  color: white;
  font-weight: bold;
}
.router-link-exact-active > i {
  font-weight: bold;
}
.main {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: grid;
}

.footer{
  grid-area: footer;
}
.view {
  grid-area: main;
  overflow-y: scroll;
  margin-bottom: 10px;
}
.appname {
  font-size: 2em;
  font-family: "Calibri Light";
}
#nav {
  grid-area: nav;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;

  height: 100%;
  border-right: 1px solid #DDD;
}
#header {
  padding: 0 1em 0 1em;
  display: flex;
  justify-content: left;

  grid-area: header;
  height: 20px;
  border-bottom: 1px solid #DDD;
}

a {
  color: #666;
  text-decoration: none;
}

@media screen and (max-width: $mobile_break) {
  .appname {
    font-size: 1em;
  }
  .main {
    grid-template-columns: 100%;
    grid-template-rows: 20px auto 60px 0;
    grid-template-areas: "header"
                         "main"
                         "nav" "nav";
  }
  #nav {
    border-top: 1px solid #DDD;
  }

}

@media screen and (min-width: $mobile_break) {
  .main {
    grid-template-columns: 100px auto;
    grid-template-rows: 50px auto 0;
    grid-template-areas: "header header"
    "nav main" "footer footer";
  }
  a:hover{
    background-color: #F9F9F9;
  }
  #header {
    height: 50px;
  }
}

</style>
