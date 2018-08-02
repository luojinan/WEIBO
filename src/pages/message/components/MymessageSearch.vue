<template>
  <div>  
    <div class="mymessage-search">
    	<div class="mymessage-search__item">
    		<span class="iconfont">&#xe650;</span>
    		搜索
    	</div>
    </div>
</div>
</template>

<script>

export default {
  name: 'MymessageSearch',
}
</script>

<style>
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