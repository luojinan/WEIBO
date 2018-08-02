<template>
  <div class="mine" ref="wrapper">
    <div>  
      <mine-info></mine-info>
      <mine-icon></mine-icon>
      <mine-community></mine-community>
      <mine-others></mine-others>
      <mine-others></mine-others>
      <mine-list></mine-list>
    </div>
</div>
</template>

<script>
import MineInfo from './components/MineInfo'
import MineIcon from './components/Mineicon'
import MineCommunity from './components/MineCommunity'
import MineOthers from './components/MineOthers'
import MineList from './components/MineList'

import BScroll from 'better-scroll'

export default {
  name: 'Mine',
  components:{
  	MineInfo,
  	MineIcon,
    MineCommunity,
    MineOthers,
    MineList
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper)
  },
}
</script>

<style>
/* #我的# 页面总布局 */
/*固定页面 定义溢出隐藏，则页面无法滚动*/
.mine{
    overflow: hidden;
    position: absolute;
    top:1.84rem;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>