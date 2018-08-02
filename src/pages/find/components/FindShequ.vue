<template> 
    <div class="find-shequ">
    		<div class="find-shequ__item">#CF火线盛典#</div>
    		<div class="find-shequ__item">#大猫你好#</div>
    		<div class="find-shequ__item">#明日之子#</div>
    		<div class="find-shequ__item">#超话社区#</div>
    </div>
</template>

<script>

export default {
  name: 'FindShequ',
}
</script>

<style>
.find-shequ{
	height: 1.8rem;
	border-bottom: solid .2rem #eee;
}
.find-shequ__item{
	float: left;
	height: .8rem;
	line-height: .8rem;
	width: 44%;
	padding: 0 2.5%;	
	font-size: .32rem;
	border-bottom: solid .02rem #eee;
	border-right: solid .02rem #eee;
}
.find-shequ__icon{
	font-size: .48rem;
	margin-right: .1rem;
}
</style>