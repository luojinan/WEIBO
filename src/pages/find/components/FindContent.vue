<template>
	<div class="find-content">  
    	<div class="find-content__header">
    		<div class="find-content__header-text">视频</div>
    		<div class="find-content__header-text">头条</div>
    		<div class="find-content__header-text">广州</div>
    		<div class="find-content__header-text">榜单</div>
    	</div>
    	<div class="find-content__item">
    		<div class="find-content__item-img"><img src="https://wx2.sinaimg.cn/large/a3283d0bly1ftte3prcvhj20se0bmk07.jpg" /></div>
    		<div class="find-content__item-img"><img src="https://wx3.sinaimg.cn/mw1024/006dvmOwgy1ftu96xqiw0j30se0bmqhs.jpg" /></div>
    		<div class="find-content__item-img"><img src="https://wx2.sinaimg.cn/large/6a287965ly1ftt2o8bs6aj20se0bmqsu.jpg" /></div>
    		<div class="find-content__item-img"><img src="https://wx2.sinaimg.cn/large/0076ZhLlgy1ftu1g6zvg3j30u00caguv.jpg" /></div>
    	</div>
	</div>
</template>

<script>

export default {
  name: 'FindContent',
}
</script>

<style>
.find-content{
	width: 100%;
	border-bottom: solid .02rem #eee; 
}
.find-content__header{
	height: 1.2rem;
	width: 80%;	
	margin: 0 auto;
	display: flex;
}
.find-content__header-text{
	float: left;
	flex: 1;
	height: 1rem;
	line-height: 1rem;
	font-size: .38rem;
	text-align: center;
	border-bottom: solid .04rem #FF9900;
}
.find-content__item-img{
	overflow: hidden;
	height: 0;
	width: 100%;
	padding-bottom: 40%;
}
.find-content__item-img img{
	width: 100%;
	margin-top: .4rem;
}
</style>