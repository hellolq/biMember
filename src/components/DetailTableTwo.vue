<template>
  <ul class="xfd_ul" style="padding: 5px">
    <li class="xfd_ul_li_tittle">
      <span class="xfd_ul_li_tittle_span">品类偏好</span>
      <span class="xfd_ul_li_tittle_span">品牌偏好</span>
      <span class="xfd_ul_li_tittle_span">潜在品牌</span>
    </li>

    <li class="xfd_ul_li" v-for="(temp,index) in res" v-bind:key="index">

      <div class="xfd_ul_li_div">
        <ul class="xfd_ul_li_div_ul">
          <li class="xfd_ul_li_div_ul_li">
            <span class="xfd_ul_li_div_ul_li_span">{{temp[0].zlname}}</span>
            <span class="xfd_ul_li_div_ul_li_span">
                <b>购物次数</b>
                <b>{{temp[0].xsbs}}次</b>
              </span>
          </li>
          <li class="xfd_ul_li_div_ul_li">
              <span class="xfd_ul_li_div_ul_li_span">
                <b class="xfd_ul_li_div_ul_li_span_b">平均客单价</b>
                <b class="xfd_ul_li_div_ul_li_span_b">{{temp[0].kdj}}元</b>
              </span>
            <span class="xfd_ul_li_div_ul_li_span">
                <b class="xfd_ul_li_div_ul_li_span_b">渗透率</b>
                <b class="xfd_ul_li_div_ul_li_span_b">{{temp[0].gmrs}}人</b>
              </span>
          </li>
        </ul>
      </div>

      <div class="xfd_ul_li_div">
        <ul class="xfd_ul_li_div_ul">
          <li class="xfd_ul_li_div_ul_li">
            <span class="xfd_ul_li_div_ul_li_span">{{temp[1].zlname}}</span>
            <span class="xfd_ul_li_div_ul_li_span">
                <b>购物次数</b>
                <b>{{temp[1].xsbs}}次</b>
              </span>
          </li>
          <li class="xfd_ul_li_div_ul_li">
              <span class="xfd_ul_li_div_ul_li_span">
                <b class="xfd_ul_li_div_ul_li_span_b">平均客单价</b>
                <b class="xfd_ul_li_div_ul_li_span_b">{{temp[1].kdj}}元</b>
              </span>
            <span class="xfd_ul_li_div_ul_li_span">
                <b class="xfd_ul_li_div_ul_li_span_b">渗透率</b>
                <b class="xfd_ul_li_div_ul_li_span_b">{{temp[1].gmrs}}人</b>
              </span>
          </li>
        </ul>
      </div>

      <div class="xfd_ul_li_div">
        <ul class="xfd_ul_li_div_ul">
          <li class="xfd_ul_li_div_ul_li">
            <span class="xfd_ul_li_div_ul_li_span">{{temp[2].zlname}}</span>
            <span class="xfd_ul_li_div_ul_li_span">
                <b>购物次数</b>
                <b>{{temp[2].xsbs}}次</b>
              </span>
          </li>
          <li class="xfd_ul_li_div_ul_li">
              <span class="xfd_ul_li_div_ul_li_span">
                <b class="xfd_ul_li_div_ul_li_span_b">平均客单价</b>
                <b class="xfd_ul_li_div_ul_li_span_b">{{temp[2].kdj}}元</b>
              </span>
            <span class="xfd_ul_li_div_ul_li_span">
                <b class="xfd_ul_li_div_ul_li_span_b">渗透率</b>
                <b class="xfd_ul_li_div_ul_li_span_b">{{temp[2].gmrs}}人</b>
              </span>
          </li>
        </ul>
      </div>

    </li>


  </ul>

</template>

<script>
  export default {
    name: 'DetailTableTwo',
    props:['res']
  }
</script>

<style scoped>
  .xfd_ul_li_div_ul_li_span
  > b:nth-child(1){
      color: #999997;
  }
  .xfd_ul_li > div:nth-child(3){
    border-right: 1px solid #DDDDDD;
  }
  .xfd_ul_li_div_ul_li > .xfd_ul_li_div_ul_li_span:nth-child(1){
    flex: 1.2;
  }
  b{
    font-weight: normal;
  }
  .xfd_ul_li:nth-child(odd){
    background-color: #FFFFFF;
  }
  .xfd_ul_li:nth-child(even){
    background-color: #EDF8FE;
  }
  .xfd_ul_li_div_ul_li_span{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    text-align: center;
  }
  .xfd_ul_li_div_ul_li{
    display: flex;
    flex: 1;
    flex-direction: row;
  }
  .xfd_ul_li_div_ul{
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 3px;
  }
  .xfd_ul{
    display: flex;
    flex-direction: column;
  }
  .xfd_ul_li_div{
    display: flex;
    flex: 1;
    border-left: 1px solid #DDDDDD;
  }
  .xfd_ul_li_tittle, .xfd_ul_li{
    display: flex;
    flex: 1;
    flex-direction: row;
  }
  .xfd_ul_li_tittle_span{
    display: flex;
    flex: 1;
    justify-content: center;
    line-height: .8rem;
    background-color: #159DEB;
    color: white;
  }
</style>
