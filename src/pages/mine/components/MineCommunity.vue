<template>
  <div class="mine-community">  
    <div class="mine-community__header">
      超话社区
      <p>来你关注的超话签到发帖</p>
    </div>
    <div class="mine-community__item">
      <img src="http://i2.hdslb.com/bfs/archive/e486384587f45f4f0fd42f0b487aa72cf6ef0fd0.jpg" />
      <p>言言daily超话</p>
    </div>
    <div class="mine-community__more">
      查看全部
    </div>
  </div>
</template>

<script>

export default {
  name: 'MineCommunity',

}
</script>

<style>

.mine-community{
}
/*超话社区头部样式*/
.mine-community__header{
  padding: .3rem .3rem .1rem .3rem;
  font-size: .28rem;
  color: #ccc;
}
.mine-community__header p{
  font-size: .36rem;
  color: #696969;
  margin-top: .3rem;
}
/*超话社区内容列表样式*/
.mine-community__item img{
  width: 2rem;
  height: 2rem;
  margin:.2rem .3rem;
  float: left;
}
.mine-community__item p{
  line-height: 2.4rem;
  font-size: .38rem;
}
/*超话社区 刷新样式*/
.mine-community__more{
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