<template>
  <div class="mine-list">  
    <ul>
      <li class="mine-list__item">免流量</li>
      <li class="mine-list__item">草稿箱</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MineList',
}
</script>

<style>
.mine-list{
  border-bottom: solid .2rem #eee;
}
.mine-list__item{
  font-size: .36rem;
  height: .8rem;
  line-height: .8rem;
  border-bottom: solid .02rem #eee;
  margin: 0 .3rem;
}
</style>