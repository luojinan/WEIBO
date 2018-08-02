<template>
  <div class="home" ref="wrapper">  
  	<div >
		<home-content></home-content>
		<home-pose></home-pose>
	</div>
  </div>
</template>

<script>
import HomeContent from './components/HomeContent'
import HomePose from './components/HomePose'

import BScroll from 'better-scroll'

export default {
  name: 'Home',
  components:{
  	HomeContent,
  	HomePose
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper)
  },
}
</script>

<style>
.home {
	overflow: hidden;
    position: absolute;
    top:1.84rem;
    left: 0;
    right: 0;
    bottom: 0;
}

</style>