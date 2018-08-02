<template>
	<div class="find-swiper">  
    	<swiper :options="swiperOption" :not-next-tick="notNextTick">
		    <swiper-slide><img src="https://wx2.sinaimg.cn/large/a3283d0bly1ftte3prcvhj20se0bmk07.jpg" /></swiper-slide>
		    <swiper-slide><img src="https://wx3.sinaimg.cn/mw1024/006dvmOwgy1ftu96xqiw0j30se0bmqhs.jpg" /></swiper-slide>
		    <swiper-slide><img src="https://wx2.sinaimg.cn/large/6a287965ly1ftt2o8bs6aj20se0bmqsu.jpg" /></swiper-slide>
		    <swiper-slide><img src="https://wx2.sinaimg.cn/large/0076ZhLlgy1ftu1g6zvg3j30u00caguv.jpg" /></swiper-slide>

		    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
	</div>
</template>

<script>

export default {
  name: 'FindSwiper',
  data() {
      return {
       swiperOption:{
					autoplay: 3000,
			        pagination: '.swiper-pagination',
			        observeParents:true,	//解决页面首次加载，滑动错误的问题
					observer:true			//原因：首次加载的区域计算，使显示错误
				},
				notNextTick: true,
			}
   		},
}
</script>

<style>
/*不知道为什么没有穿透出去 修改样式*/
.find-swiper >>> .swiper-pagination-bullet-active{
		background: #fff !important ;
}
.find-swiper{
	overflow: hidden;
	height: 0;
	width: 100%;
	padding-bottom: 40%;
}
.find-swiper img{
	width: 100%;
}

</style>