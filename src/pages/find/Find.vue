<template>
  <div class="find" ref="wrapper">  
    <div>
	    <find-search></find-search>
	    <find-swiper></find-swiper>
	    <find-icons></find-icons>
	    <find-shequ></find-shequ>
	    <find-content></find-content>
    </div>
  </div>
</template>

<script>
import FindSearch from './components/FindSearch'
import FindSwiper from './components/FindSwiper'
import FindIcons from './components/FindIcons'
import FindShequ from './components/FindShequ'
import FindContent from './components/FindContent'

import BScroll from 'better-scroll'

export default {
  name: 'find',
  components:{
  	FindSearch,
  	FindSwiper,
  	FindIcons,
  	FindShequ,
  	FindContent
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper)
  },
}
</script>

<style>
.find {
	overflow: hidden;
    position: absolute;
    top:1.84rem;
    left: 0;
    right: 0;
    bottom: 0;
	
}
</style>