<template lang="pug">

    div.user-info
      div.grid
        div.col1.font
          div.clear-left.heavy.count 13.4k
          div.grey followers
        div.col2
            img.profile-img.round(src="/static/img/IMG_0010.JPG")
        div.col3
          div.clear-left.count.heavy 246
          div.grey following
      div.profile-name
          div.grey.login @constant
          div.clear-left.heavy.name Johanna Linch
</template>

<script lang="coffee">
export default {
  name: 'user-info'
  components: {
  }
  data: -> {
    items: [1,2,3,4,5,6,7,8,9]
  }
}
</script>

<style lang="stylus" scoped>
.user-info
    background-color: #FFF
    padding-top: 20px;
.menu-bar
  position: relative;
.profile-img
  width: 120px;
  height: 120px;
  -webkit-box-shadow: 38px 98px 66px 0px rgba(218,224,227,0.64);
  -moz-box-shadow: 38px 98px 66px 0px rgba(218,224,227,0.64);
  box-shadow: 7px 7px 26px 0px rgba(218,224,227,0.64);
.round
  border-radius: 80%;
.clear-left
  clear: left
.wrapper
  z-index: 1
  position: relative
.grid
  &>DIV
    font-size: 14px
    line-height: 24px;
    float: left;
  &:after
    content: "";
    display: table;
    clear: both;
.col1
  width: 33%;
  padding: 11% 0 0 0
.col2
  left: 33%;
  width: 34%;
.col3
  right: 0;
  width: 33%;
  padding: 11% 0 0 0
.nav
  letter-spacing: 1px;
  line-height: 16px;
  font-size: 12px
  padding: 30px 10px 10px 10px
.nav:after
  content: "";
  display: table;
  clear: both;
.nav-item-1
  width: 50%
  float: left
.nav-item-2
  width: 50%
  float: right
.grey
  color #BABABA
.name
  padding: 5px 0 0 0
  font-size: 20px
.heavy
  font-family: SF UI Display Heavy
.bold
  font-family: SF UI Display Bold
.count
  font-size: 18px
  line-height: 21px;
  padding: 10px 0 0 0
.profile-name
  padding: 0 10px 10px 10px;
.login
  font-size: 14px
  padding-top: 5px
.activated
  	color: #5FB0FF;
.large-16
    font-size: 16px
.large-14
    font-size: 14px
.large-15
    font-size: 15px
.small-10
    font-size: 10px
.small-11
  font-size: 11px

 </style>
