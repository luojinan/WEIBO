<template>
  <div >  
  	<div >
		<home-content></home-content>
		<home-pose></home-pose>
	</div>
  </div>
</template>

<script>
import HomeContent from './components/HomeContent'
import HomePose from './components/HomePose'



export default {
  name: 'Home',
  components:{
  	HomeContent,
  	HomePose
  },
  
}
</script>

<style>


</style>