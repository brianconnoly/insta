<template lang="pug">
div.profile
  a.prev(href="http://localhost:8080/#/")
  user-info
  div.follow-state Only you follow
  carousel
    slide
      img(src="/static/img/513257.JPG")
    slide(v-for="photo in photos")
      img(v-bind:src="'http://placeimg.com/240/240/any/' + photo")
  a.insta-link.grey(src="#") MORE ON INSTAGRAM
  button.unfollow-btn UNFOLLOW
</template>

<script lang="coffee">
import UserInfo from '../UserInfo'

import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'profile'

  components: {
    UserInfo
    Carousel
    Slide

  }
  data: -> {
    auto: 1
    navigationEnabled: true
    photos: [1,2,3,4]
  }
}
</script>

<style lang="stylus" scoped>
div
  background-color: #FFF
img
  height:240px
  width: 240px
  box-shadow: 8px 26px 165px -20px rgba(0,0,0,0.53)
.insta-link
 display: block
 height: 40px
 width: 240px
 background-color: #FFF
 position: absolute
 right: -100px
 bottom: 275px
 transform: rotate(-90deg)
 z-index: 1000
 font-size: 14px
.grey
   color #BABABA
.prev
  position: absolute;
  top: 20px
  left: 10px
  width: 40px
  height: 30px
  background: url('../../../src/assets/prev.png')
  background-size: 50%
  background-repeat: no-repeat
  background-position: center
  z-index: 100
.unfollow-btn
    border: 0
    width: 240px
    border-radius: 50px
    background-color: #FF7183
    box-shadow: 0 10px 20px 0 rgba(255,113,131,0.4)
    display: block
    color: #FFFFFF
    font-size: 14px
    letter-spacing: 1px
    line-height: 16px
    text-align: center
    padding: 17px 0 17px 0
    position: absolute;
    bottom: 50px;
    left: 50%;
    margin: -25px 0 0 -120px;
.follow-state
    height: 16px
    width: 275px
    color: #FF7183
    font-size: 14px
    font-weight: 500
    line-height: 16px
    text-align: center
    Width: 100%
    margin-bottom: 30px
</style>
