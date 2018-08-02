<template>
  <div>  
    <div class="mine-info">
    	<div class="mine-info__left">
    		<img src="https://tva4.sinaimg.cn/crop.0.0.1068.1068.180/ab9da63cjw8f57uj9eo5nj20to0tpwfv.jpg"  />
    		<div class="mine-info__left-text"><h1>安安安的安安安安仔</h1><p>简介：罗 忧 郁 .</p></div>
    	</div>
		<div class="mine-info__right">
			<svg class="icon mine-info__right-icon" aria-hidden="true">
			  <use xlink:href="#icon-weibiaoti-"></use>
			</svg>
			会员</div>
    </div>
    <div class="mine-date__info">
    	<div class="mine-date__info-list">
    		<div>71</div><p>微博</p>
    	</div>
    	<div class="mine-date__info-list">
    		<div>123</div><p>关注</p>
    	</div>
    	<div class="mine-date__info-list">
    		<div>23</div><p>粉丝</p>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MineInfo'
}
</script>

<style>

/* iconfont 彩色设置*/
/*组件的样式是全局样式，只需要设置一次*/
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}

/* #我的# 页面总布局 */

/* 个人信息样式 */
.mine-info{
	display: flex;
	height: 1.8rem;
	border-top: solid .01rem #eee;
	border-bottom: solid .01rem #eee;
}
.mine-info__left{
	flex: 1;
}
.mine-info__left img{
	height: 1.4rem;
	width: 1.4rem;
	border-radius: .7rem;
	float: left;
	margin: .2rem .2rem .2rem .4rem;
}
.mine-info__left-text{
	margin-top: .4rem;
	font-size: .38rem;
}
.mine-info__left-text p{
	font-size: .12rem;
	margin-top: .2rem;
	color: #696969;
}
.mine-info__right{
	line-height: 1.8rem;
	margin-right: .4rem;
	font-size: .28rem;
}
.mine-info__right-icon{
	font-size: .48rem;
}
/* 个人数据信息样式 */
.mine-date__info{
	height: 1.5rem;

	display: flex;
}
.mine-date__info-list{
	flex: 1;
	font-size: .36rem;
	padding: .3rem .6rem;
	text-align: center;
	border-bottom: solid .2rem #eee;
}
.mine-date__info-list p{
	font-size: .28rem;
	color: #696969;
	margin-top: .1rem;
}


</style>