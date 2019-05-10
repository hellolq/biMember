<!-- 年龄段分布 -->
<template>
    <div>
      <header class="header_a">
        <i class="i_flag"></i>
        <span class="span_a">会员年龄段分布</span>
      </header>

      <div id="myChart"></div>

    </div>
</template>

<script>

  export default {
    name: 'Nld',
    data(){
      return {
        xAxisData:["18岁以下","18-24岁","25-34岁","35-44岁","45-55岁","55岁以上"],
        seriesData:[5, 20, 36, 10, 10, 20]
      }
    },
    mounted(){
      this.drawEchart();
    },
    methods:{
      drawEchart(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
       let option = {
          baseOption: {
            timeline: {
              show:false
            },
            title: {},
            tooltip: {
            },
            legend: {
              x: 'right',
              data: ['男', '女'],
              show:false
            },
            calculable : true,
            grid: {
              top: 30,
              bottom: 50,
              right:15,
              tooltip: {
                trigger: 'axis',
                axisPointer: {}
              }
            },
            xAxis: [
              {
                'type':'category',
                'axisLabel':{'interval':0,rotate:-40},
                'data':["18岁以下","18-24岁","25-34岁","35-44岁","45-55岁","55岁以上"],
                splitLine: {show: false}
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '人'
              }
            ],
            series: [
              {name: '人数',
                type: 'bar',
                barWidth : 26,
                itemStyle:{
                  normal:{
                    color:'#3AA1FF'
                  }
                }},

              {
                name: '性别占比',
                type: 'pie',
                itemStyle:{
                  normal:{
                    color:function(params) {
                      var colorList = ['#F53794','#537BC4'];
                      return colorList[params.dataIndex]
                    }
                  }
                },
                center: ['75%', '35%'],
                radius: '28%',
                z: 100
              }
            ]
          },
          options: [
            {
              series: [
                {data: [{name:'18岁以下',value:84.11},
                    {name:'18-24岁',value:84.21},
                    {name:'25-34岁',value:956.84},
                    {name:'35-44岁',value:197.8},
                    {name:'45-55岁',value:374.69},
                    {name:'55岁以上',value:374.69}]},
                {data: [
                    {name: '男', value: 100},
                    {name: '女', value: 200}
                  ]}
              ]
            },

          ]
        };
        // 绘制图表
        myChart.setOption(option);
      }
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
  .header_a{
    display: flex;
    line-height: .8rem;
    font-size: 16px;
    padding: .3rem;
    font-weight: bold;
  }

#myChart{
  height: 300px;
}
</style>
