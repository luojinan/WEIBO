<template>
  <div class="mymessage" ref="wrapper">
  <div>  
	<mymessage-search></mymessage-search>
	<mymessage-group></mymessage-group>
	<mymessage-list></mymessage-list>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'

import MymessageSearch from './components/MymessageSearch'
import MymessageGroup from './components/MymessageGroup'
import MymessageList from './components/MymessageList'

export default {
  name: 'MyMessage',
  components:{
  	MymessageSearch,
  	MymessageGroup,
  	MymessageList
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper)
  },
}
</script>

<style>
.mymessage {
	overflow: hidden;
    position: absolute;
    top:1.84rem;
    left: 0;
    right: 0;
    bottom: 0;
}
.mymessage-search{
	display: flex;
	height: 1rem;
	line-height: 1rem;
	width: 100%;
	background-color: #eee;
	color: #ccc;
}
.mymessage-search__item{
	flex: 1;
	height: .6rem;
	line-height: .1rem;
	width: 90%;
	margin: .2rem .2rem;
	border-radius: .1rem;
	padding-left: .1rem;
	background-color: #fff;
	font-size: .32rem;
}
</style>