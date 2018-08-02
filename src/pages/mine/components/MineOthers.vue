<template>
  <div class="mine-others">  
    <div class="mine-others__header">
      签到领红包
      <p>今天你领红包了吗</p>
    </div>
    <div class="mine-others__item">
      <img src="http://i2.hdslb.com/bfs/archive/e486384587f45f4f0fd42f0b487aa72cf6ef0fd0.jpg" />
    </div>
    <div class="mine-others__more">
      立即领取
    </div>
  </div>
</template>

<script>
export default {
  name: 'MineOthers',
}
</script>

<style>
/*广告区域头部样式*/
.mine-others__header{
  padding: .3rem .3rem .1rem .3rem;
  font-size: .28rem;
  color: #ccc;
}
.mine-others__header p{
  font-size: .36rem;
  color: #696969;
  margin-top: .3rem;
}
/*广告区域内容样式*/
.mine-others__item{
  padding:.2rem .3rem;
}
.mine-others__item img{
  width: 100%;
  height: 3rem;
}

/*广告区域 刷新样式*/
.mine-others__more{
  clear: both;
  height: .8rem;
  background-color: #F5F5F5;
  text-align: center;
  line-height: 1rem;
  font-size: .32rem;
  color: #007AFF;
  border-bottom: solid .2rem #eee;
}
</style>