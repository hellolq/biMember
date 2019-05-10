<!-- 年龄段分布 -->
<template>
  <div v-bind:style="{height:boxHeight+'px'}" style="overflow-y:scroll">
    <header class="header_a">
      <i class="i_flag"></i>
      <span class="span_a">近7日生日会员</span>
      <span class="span_b">共3人</span>
    </header>
    <MemberMessage></MemberMessage>
    <MemberMessage></MemberMessage>
  </div>
</template>

<script>
  import MemberMessage from '../components/MemberMessage'
  export default {
    name: 'SevenMemberList',
    data(){
      return{
        boxHeight:0
      }
    },
    mounted(){
      this.calBoxHeight();
    },
    methods:{
      calBoxHeight(){
        const v_heigth = document.documentElement.clientHeight || document.body.clientHeight;
        const html = document.getElementById("html");
        const header_height = parseFloat(html.style.fontSize)*1.4;
        this.boxHeight = v_heigth - header_height;
      }
    },
    components:{
      MemberMessage
    }
  }
</script>

<style scoped>
  .i_flag {
    height: .6rem;
    width: 5px;
    background-color: #00A0E8;
    border-radius: 10px;
    margin: auto 0;
  }
  .span_a{
    margin-left: 10px;
  }
  .span_b{
    font-size: 12px;
    font-weight: normal;
    right: 10px;
    position: absolute;
    color: #6F6F6F;
  }
  .header_a{
    display: flex;
    line-height: .8rem;
    font-size: 16px;
    padding: .3rem;
    font-weight: bold;
    position: relative;
  }
</style>
