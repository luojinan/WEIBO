<template>
  <div class="mymessage-group">  
    <ul class="mymessage-group__list">
    	<li class="mymessage-group__item">
    		<div class="mymessage-group__item-img">@</div>
    		<div class="mymessage-group__item-text">
    			@我的
    			<span class="iconfont mymessage-group__icon" >&#xe600;</span>
    		</div>
    	</li>
    	<li class="mymessage-group__item">
    		<div class="mymessage-group__item-img" style="background:#009966"><span class="iconfont">&#xe60a;</span></div>
    		<div class="mymessage-group__item-text">
    			评论
    			<span class="iconfont mymessage-group__icon">&#xe600;</span>
    		</div>
    	</li>
    	<li class="mymessage-group__item">
    		<div class="mymessage-group__item-img" style="background:#FF9900"><span class="iconfont">&#xe607;</span></div>
    		<div class="mymessage-group__item-text">
    			赞
    			<span class="iconfont mymessage-group__icon">&#xe600;</span>
    		</div>
    	</li>
    	<li class="mymessage-group__item">
    		<div class="mymessage-group__item-img" style="background:#007AFF"><span class="iconfont">&#xe607;</span></div>
    		<div class="mymessage-group__item-text">
    			订阅号消息
    			<span class="iconfont mymessage-group__icon">&#xe600;</span>
    		</div>
    	</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'MymessageGroup'
}
</script>

<style>
.mymessage-group {
	
}
.mymessage-group__item-img{
	width: 1.2rem;
	height: 1.2rem;
	line-height: 1.1rem;
	text-align: center;
	background-color: #007AFF;
	border-radius: .6rem;
	color: #fff;
	font-size: .68rem;
	margin:.2rem;
	float: left;
}
.mymessage-group__item-img span{
	font-size: .6rem;
	line-height: .1rem;
}
.mymessage-group__item-text{
	height: 1.6rem;
	line-height: 1.6rem;
	font-size: .38rem;
	border-bottom: solid .02rem #eee;
}
.mymessage-group__icon{
	float: right;
	font-size: .8rem;
	line-height: .2rem;
}
</style>