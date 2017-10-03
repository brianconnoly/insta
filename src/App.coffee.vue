<template lang="pug">
div#app
  router-view
</template>

<script lang="coffee">
export default {
  name: 'app'
}
</script>

<style lang="stylus">
#app
  font-family: SF UI Display Regular
  webkit-font-smoothing: antialiased
  moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  position: absolute
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
</style>
