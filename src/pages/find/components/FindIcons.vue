<template>
  <div class="find-icons"> 
  	<div 
  		class="find-icons__item"
  		v-for="(item,index) of list"
  		:key="index"
  	>
      <svg class="icon find-icons__item-icon" aria-hidden="true">
        <use :xlink:href="item.icon"></use>
      </svg>
      {{item.text}}
    </div>
  </div>
</template>

<script>


export default {
  name: 'FindIcons',
  data(){
  	return {
  	list:[{
  			text:'找人',icon:'#icon-iconfont19'
  		},{
  			text:'广州',icon:'#icon-gushi'
  		},{
  			text:'游戏',icon:'#icon-zan-copy-copy'
  		},{
  			text:'直播',icon:'#icon-cy1'
  		},{
  			text:'电影',icon:'#icon-wallet'
  		},{
  			text:'尤物志',icon:'#icon-yundongkuang'
  		},{
  			text:'赛事',icon:'#icon-toutiao'
  		},{
  			text:'财经',icon:'#icon-kefu'
  		},{
  			text:'红人淘',icon:'#icon-yundongkuang'
  		},{
  			text:'更多',icon:'#icon-yundongkuang'
  		}]
  }
}
}
</script>

<style>
.find-icons{
	height: 4rem;
	width:100%;
	border-bottom: solid .04rem #eee;
}
.find-icons__item{
	float: left;
	width: 20%;
	height: 50%;
	text-align: center;
}
.find-icons__item-icon{
	height: 40%;
	width: 40%;	
	display: block;
	margin: .3rem auto .2rem auto;
}
</style>