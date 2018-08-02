<template>
  <div>  
    <div class="find-search">
    	<div class="find-search__item">
    		<span class="iconfont">&#xe650;</span>
    		大家正在搜：#某小鲜肉接戏标准#
    	</div>
    </div>
</div>
</template>

<script>

export default {
  name: 'FindSearch',
}
</script>

<style>
.find-search{
	display: flex;
	height: 1rem;
	line-height: 1rem;
	width: 100%;
	color: #696969;
}
.find-search__item{
	flex: 1;
	height: .6rem;
	line-height: .1rem;
	text-align: center;
	width: 90%;
	margin: .2rem .2rem;
	border-radius: .1rem;
	padding-left: .1rem;
	background-color: #eee;
	font-size: .30rem;
}
</style>