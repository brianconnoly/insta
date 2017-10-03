<template lang="pug">
div.main-page
  div.logout
  menu-bar
</template>

<script lang="coffee">
import MenuBar from './MenuBar'

export default {
  name: 'main-page'
  components: {
    MenuBar
  }
  data: -> {
  }
}
</script>

<style lang="stylus">
@font-face {
   font-family: SF UI Display Heavy; /* Имя шрифта */
   src: url('../../../src/assets/fonts/SFUIDisplay-Heavy.otf'); /* Путь к файлу со шрифтом */
  }
@font-face {
     font-family: SF UI Display Bold; /* Имя шрифта */
     src: url('../../../src/assets/fonts/SF-UI-Display-Bold.otf'); /* Путь к файлу со шрифтом */
    }
@font-face {
   font-family: SF UI Display Regular; /* Имя шрифта */
   src: url('../../../src/assets/fonts/SF-UI-Display-Regular.ttf'); /* Путь к файлу со шрифтом */
  }
.main-page
  display: block;
.logout
  position: absolute;
  top: 20px
  left: 10px
  width: 40px
  height: 30px
  background: url('../../../src/assets/logout.png')
  background-size: 50%
  background-repeat: no-repeat
  background-position: center
  z-index: 100
</style>
