<template>
	<div>
		<my-header></my-header>
		<tab-header></tab-header>
		<div id="app">  
			<router-view/>
		</div>
	</div>
</template>

<script>
import TabHeader from '@/pages/header/TabHeader'
import MyHeader from '@/pages/header/MyHeader'

export default {
  name: 'App',
  components:{
  	TabHeader,
  	MyHeader
  }
}
</script>

<style>
</style>
