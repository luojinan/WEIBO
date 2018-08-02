<template>
  <div class="myheader">  
    <img src="https://tva4.sinaimg.cn/crop.0.0.1068.1068.180/ab9da63cjw8f57uj9eo5nj20to0tpwfv.jpg" />
    安安安的安安安安仔
  </div>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style>
.myheader {
	z-index: 99;
	padding: .1rem .2rem;
	font-size: .32rem;
	background-color: #F5F5F5;
	box-shadow: inset 0px 1px 1px -1px #A7A7AB;
}
.myheader img{
	width: .8rem;
	height: .8rem;
	border-radius: .4rem;
	margin-right: .1rem;
}
</style>