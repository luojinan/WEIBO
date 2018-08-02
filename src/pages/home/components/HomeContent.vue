<template>
  <div>  
    <div class="home-content__header">
    	<div class="home-content__header-left">
    		<img src="https://tva4.sinaimg.cn/crop.0.0.1068.1068.180/ab9da63cjw8f57uj9eo5nj20to0tpwfv.jpg"  />
    		<div class="home-content__name">安安安的安安安安仔</div>
    		<div class="home-content__time">1小时前  来自iphone se</div>
    	</div>
		<div class="home-content__header-right">
			<span class="iconfont home-content__header-icon">&#xe600;</span>
		</div>
    </div>

    <div class="home-content__item">
    	微博内容
    </div>

    <div class="home-content__buttons">
    	<div class="home-content__buttons-item"><span class="iconfont">&#xe651;</span>转发</div>
    	<div class="home-content__buttons-item"><span class="iconfont">&#xe60a;</span>69</div>
    	<div class="home-content__buttons-item"><span class="iconfont">&#xe602;</span>215</div>
    </div>

    <div class="home-content__header">
    	<div class="home-content__header-left">
    		<img src="https://tva4.sinaimg.cn/crop.0.0.1068.1068.180/ab9da63cjw8f57uj9eo5nj20to0tpwfv.jpg"  />
    		<div class="home-content__name">安安安的安安安安仔</div>
    		<div class="home-content__time">1小时前  来自iphone se</div>
    	</div>
		<div class="home-content__header-right">
			<span class="iconfont home-content__header-icon">&#xe600;</span>
		</div>
    </div>

    <div class="home-content__item">
    	发表图片
    	<img src="http://i2.hdslb.com/bfs/archive/e486384587f45f4f0fd42f0b487aa72cf6ef0fd0.jpg" />
    </div>

    <div class="home-content__buttons">
    	<div class="home-content__buttons-item"><span class="iconfont">&#xe651;</span>转发</div>
    	<div class="home-content__buttons-item"><span class="iconfont">&#xe60a;</span>69</div>
    	<div class="home-content__buttons-item"><span class="iconfont">&#xe602;</span>215</div>
    </div>

    <div class="home-content__header">
    	<div class="home-content__header-left">
    		<img src="https://tva4.sinaimg.cn/crop.0.0.1068.1068.180/ab9da63cjw8f57uj9eo5nj20to0tpwfv.jpg"  />
    		<div class="home-content__name">安安安的安安安安仔</div>
    		<div class="home-content__time">1小时前  来自iphone se</div>
    	</div>
		<div class="home-content__header-right">
			<span class="iconfont home-content__header-icon">&#xe600;</span>
		</div>
    </div>

    <div class="home-content__item">
    	发表图片
    	<img src="http://i2.hdslb.com/bfs/archive/e486384587f45f4f0fd42f0b487aa72cf6ef0fd0.jpg" />
    </div>

    <div class="home-content__buttons">
    	<div class="home-content__buttons-item"><span class="iconfont">&#xe651;</span>转发</div>
    	<div class="home-content__buttons-item"><span class="iconfont">&#xe60a;</span>69</div>
    	<div class="home-content__buttons-item"><span class="iconfont">&#xe602;</span>215</div>
    </div>

    <div class="home-content__header">
    	<div class="home-content__header-left">
    		<img src="https://tva4.sinaimg.cn/crop.0.0.1068.1068.180/ab9da63cjw8f57uj9eo5nj20to0tpwfv.jpg"  />
    		<div class="home-content__name">安安安的安安安安仔</div>
    		<div class="home-content__time">1小时前  来自iphone se</div>
    	</div>
		<div class="home-content__header-right">
			<span class="iconfont home-content__header-icon">&#xe600;</span>
		</div>
    </div>

    <div class="home-content__item">
    	发表图片
    	<img src="http://i2.hdslb.com/bfs/archive/e486384587f45f4f0fd42f0b487aa72cf6ef0fd0.jpg" />
    </div>

    <div class="home-content__buttons">
    	<div class="home-content__buttons-item"><span class="iconfont">&#xe651;</span>转发</div>
    	<div class="home-content__buttons-item"><span class="iconfont">&#xe60a;</span>69</div>
    	<div class="home-content__buttons-item"><span class="iconfont">&#xe602;</span>215</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContent'
}
</script>

<style>

/* 个人信息样式 */
.home-content__header{
	display: flex;
	height: 1.4rem;
}
.home-content__header-left{
	flex: 1;
}
.home-content__header-left img{
	height: 1rem;
	width: 1rem;
	border-radius: .5rem;
	float: left;
	margin: .2rem .2rem .2rem .2rem;
}
.home-content__name{
	margin-top: .3rem;
	font-size: .38rem;
}
.home-content__time{
	margin-top: .1rem;
	font-size: .24rem;
	color: #696969;
}
.home-content__header-icon{
	line-height: 0rem;
	margin-right: .2rem;
	font-size: .8rem;
}
.home-content__item{
	padding: 0 .2rem .2rem .2rem;
	font-size: .32rem;
	color: #696969;
	border-bottom: solid .02rem #eee;
}
.home-content__buttons{
	display: flex;
	height: .8rem;
	border-bottom: solid .3rem #eee;
}
.home-content__buttons-item{
	font-size: .32rem;
	float: left;
	flex: 1;
	text-align: center;
}
.home-content__buttons-item span{
	line-height: .2rem;
	margin-right: .1rem;
}
.home-content__item img{
	margin-top: .1rem;
	width: 100%;
}
</style>