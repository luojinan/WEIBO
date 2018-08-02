<template>
	<div class="home-pose">  
    	发表
	</div>
</template>

<script>

export default {
  name: 'HomePose',
}
</script>

<style>
.home-pose{
	z-index: 99;
	position: absolute;	/*根据页面定位，*/
	right: .4rem;
	bottom: .4rem;

	height: 1.4rem;
	width: 1.4rem;
	border-radius: .7rem;
	line-height: 1.4rem;
	text-align: center;
	
	background-color: #fff;
	box-shadow:.05rem .1rem .1rem #c8c8c8;
	font-size: .38rem;
}
</style>