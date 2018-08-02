<template>
  <div class="tabheader">  
    <router-link 
    	to="/home"
    	tag="div"
    	class="tabheader-item"
    >首页
	</router-link>
	<router-link 
    	to="/message"
    	tag="div"
    	class="tabheader-item"
    >消息
	</router-link>
	<router-link 
    	to="/find"
    	tag="div"
    	class="tabheader-item"
    >发现
	</router-link>
	<router-link 
    	to="/mine"
    	tag="div"
    	class="tabheader-item"
    >我的
	</router-link>
</div>
</template>

<script>
export default {
  name: 'TabHeader'
}
</script>

<style>
.tabheader {
    z-index: 99;
	display: flex;
    background-color: #F5F5F5;
    box-shadow: inset 0px 1px 1px -1px #A7A7AB;
}
.tabheader-item{
	flex: 1;
	float: left;
	height: .8rem;
	text-align: center;
	line-height: .8rem;
	font-size: .36rem;
}
.router-link-active{
        color: #FF9900;
        border-bottom: .04rem solid #FF9900;
}
</style>