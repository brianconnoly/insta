<template lang="pug">
div#main.testpage
  h1 Header
  p Paragrapf of text
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
h1
  font-weight bold
  color #ff0000

p
  font-size: 22px
</style>
