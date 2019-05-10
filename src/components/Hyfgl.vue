<!-- 年龄段分布 -->
<template>
  <div>
    <header class="header_a">
      <i class="i_flag"></i>
      <span class="span_a">会员复购率</span>
      <span class="span_b">4月对比3月复购人数占比有所下滑</span>
    </header>

    <ul class="hyfgl_ul">
      <li class="hyfgl_ul_li_tittle">
        <span class="hyfgl_ul_li_span">月购次数</span>
        <span class="hyfgl_ul_li_span">人数</span>
        <span class="hyfgl_ul_li_span">占当月购买人数</span>
        <span class="hyfgl_ul_li_span">上月占比</span>
      </li>
      <li class="hyfgl_ul_li">
        <span class="hyfgl_ul_li_span">2次</span>
        <span class="hyfgl_ul_li_span">65489</span>
        <span class="hyfgl_ul_li_span">18.45%</span>
        <span class="hyfgl_ul_li_span">18.45%</span>
      </li>
      <li class="hyfgl_ul_li">
        <span class="hyfgl_ul_li_span">3次</span>
        <span class="hyfgl_ul_li_span">65489</span>
        <span class="hyfgl_ul_li_span">18.45%</span>
        <span class="hyfgl_ul_li_span">18.45%</span>
      </li>
      <li class="hyfgl_ul_li">
        <span class="hyfgl_ul_li_span">4次</span>
        <span class="hyfgl_ul_li_span">65489</span>
        <span class="hyfgl_ul_li_span">18.45%</span>
        <span class="hyfgl_ul_li_span">18.45%</span>
      </li>
      <li class="hyfgl_ul_li">
        <span class="hyfgl_ul_li_span">5次以上</span>
        <span class="hyfgl_ul_li_span">65489</span>
        <span class="hyfgl_ul_li_span">18.45%</span>
        <span class="hyfgl_ul_li_span">18.45%</span>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'Hyfgl'
  }
</script>

<style scoped>
  .hyfgl_ul_li_tittle{
    background-color: #159DEB;
    line-height: .8rem;
    color: white;
    display: flex;
    flex: 1;
  }
  .hyfgl_ul{
    display: flex;
    flex-direction: column;
    padding: 5px;

  }
  .hyfgl_ul_li:nth-child(odd){
    background-color: #EDF8FE;
  }
  .hyfgl_ul_li:nth-last-child(1){
    border-bottom: 1px solid #EFEFEF;
  }
  .hyfgl_ul_li{
    display: flex;
    flex: 1;
    border-left: 1px solid #EFEFEF;
    border-right: 1px solid #EFEFEF;
    line-height: 1.2rem;
  }
  .hyfgl_ul_li_span{
    display: flex;
    flex: 1;
    text-align: center;
    justify-content: center;
  }
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
