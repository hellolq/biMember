<!-- 年龄段分布 -->
<template>
  <div>
    <header class="header_a">
      <i class="i_flag"></i>
      <span class="span_a">会员复购率</span>
      <span class="span_b">4月对比3月复购人数占比有所下滑</span>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Hyfgl'
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
    right: 5px;
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
