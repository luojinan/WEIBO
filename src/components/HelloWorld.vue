<template>
  <div>
    <span id="wb_connect_btn" style="clear: both;float:right;"></span>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Fuck the shit'
    }
  },
  methods:{
    test(W){
      W.widget.connectButton({
          id: "wb_connect_btn", 
          type:"3,2",
          callback : {
            login:function(item){  //登录后的回调函数
              console.log(item)
            },  
            logout:function(){  //退出后的回调函数
            }
          }
      })
    }
  },
  mounted(){
    WB2.anyWhere(this.test)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
