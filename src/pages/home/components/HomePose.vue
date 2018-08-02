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
	position: fixed;	/*根据页面定位，页面被我固定住了，并不会出现滚动现象，导致悬浮球定在一个固定页面中*/
	right: .4rem;
	top: 1rem;

	height: 1rem;
	line-height: 1rem;
	text-align: center;
	width: 1rem;
	border-radius: .5rem;
	background-color: #eee;
	font-size: .36rem;
}
</style>