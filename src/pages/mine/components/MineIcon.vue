<template>
  <div class="mine-icons"> 
  	<div 
  		class="mine-icons__item"
  		v-for="(item,index) of list"
  		:key="index"
  	>
      <svg class="icon mine-icons__item-icon" aria-hidden="true">
        <use :xlink:href="item.icon"></use>
      </svg>
      {{item.text}}
    </div>
  </div>
</template>

<script>


export default {
  name: 'MineIcons',
  data(){
  	return {
  	list:[{
  			text:'我的相册',icon:'#icon-iconfont19'
  		},{
  			text:'我的故事',icon:'#icon-gushi'
  		},{
  			text:'我的赞',icon:'#icon-zan-copy-copy'
  		},{
  			text:'粉丝服务',icon:'#icon-cy1'
  		},{
  			text:'微博红包',icon:'#icon-wallet'
  		},{
  			text:'微博运动',icon:'#icon-yundongkuang'
  		},{
  			text:'粉丝头条',icon:'#icon-toutiao'
  		},{
  			text:'客服中心',icon:'#icon-kefu'
  		}]
  }
}
}
</script>

<style>
.mine-icons{
	height: 4rem;
	width:100%;
	border-bottom: solid .2rem #eee;
}
.mine-icons__item{
	float: left;
	width: 25%;
	height: 50%;
	text-align: center;
}
.mine-icons__item-icon{
	height: 40%;
	width: 40%;	
	display: block;
	margin: .3rem auto .2rem auto;
  
}
</style>