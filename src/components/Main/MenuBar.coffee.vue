<template lang="pug">
div.menu-bar
  div.wrapper
    div.header
      user-info
      div.nav.bold
        div.nav-item-1.grey
          div.large-14.activated ONLY I FOLLOW
          div.small-10 12
        div.nav-item-2.grey
          div.large-14 FOLLOWING ME
          div.small-10 154
    div.people-lst
      div.people-only-i-follow
        router-link.people-lst-item(v-for="item in items" v-bind:to="{name:'Profile'}")
          div.people-lst-col1
            img.people-lst-img.round(src="/static/img/1.JPG")
          div.people-lst-col2
            div.heavy.large-15.people-lst-item-name   Julia Litvin
            div.grey.small-11 @ilitwin
          div.people-lst-col3
            div.unfollow.bold UNFOLLOW
        div.people-lst-item
          div.people-lst-col1
            img.people-lst-img.round(src="/static/img/3.JPG")
          div.people-lst-col2
            div.heavy.large-15.people-lst-item-name Lucinda Perez
            div.grey.small-11 @perez
          div.people-lst-col3
            div.unfollow.bold.confirm-unfollow CONFIRM
        div.people-lst-item
          div.people-lst-col1
            img.people-lst-img.round(src="/static/img/2.JPG")
          div.people-lst-col2
            div.heavy.large-15.people-lst-item-name Lokki Imstbung-Big-Amsdelvenitz
            div.grey.small-11 @lokki
          div.people-lst-col3
            div.unfollow.bold UNFOLLOW
</template>

<script lang="coffee">
import UserInfo from '../UserInfo'

export default {
  name: 'menu-bar'
  components: {
    UserInfo
  }
  data: -> {
    items: [1,2,3,4,5,6,7,8,9]
  }
}
</script>

<style lang="stylus" scoped>
.header
    background-color: #FFF
    position: fixed
    top:0
    left: 0
    width: 100%
    height: 270px
.people-lst
   position: fixed
   top: 280px
   bottom: 0
   width: 100%
   overflow: scroll
   background-color: #F8F8F8
   padding-top: 5px
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
  padding: 20px 10px 10px 10px
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
  padding: 0 0 5px 0
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
.people-lst-img
  width: 50px
  height: 50px
.people-lst-item
  display: block;
  background-color: #FFF
  margin: 5px 10px 5px 10px
  height: 90px
  text-align: left
  overflow: hidden
.people-lst-col1,
.people-lst-col2
  float: left
  margin-right: 10px
.people-lst-col1
  margin: 20px 10px 0 20px;
.people-lst-col3
  float: right
.people-lst-item-name
  color #000
  margin: 20px 0 5px 0
  max-width: 140px
  max-height: 60px
  overflow: hidden
  text-overflow: ellipsis
.unfollow
  color #FF7183
  font-size 12px
  font-weight bold
  padding: 40px 20px 35px 20px;
  width: 70px;
  height: 14px;
  text-align: center
.confirm-unfollow
  background-color #FF7183
  color: #FFF
.confirm-following
  background-color: #6EC888
  color: #FFF
.follow
  color: #6EC888

 </style>
