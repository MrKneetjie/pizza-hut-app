<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: blockBeCondensed, futuraBookRegular, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 812px;
  width: 375px;
}

@font-face {
  font-family: blockBeCondensed;
  src: url(../public/assets/Fonts/blockbecondensed-webfont.woff);
}

@font-face {
  font-family: futuraBookRegular;
  src: url(../public/assets/Fonts/futura_book_regular-webfont.woff);
}

* {
  margin: 0px;
  padding: 0px;
}

h1 {
  letter-spacing: 1px;
}

h2, h3, h4, p {
  letter-spacing: 2px;
}
</style>
