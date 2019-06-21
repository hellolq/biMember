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
    props:['ty'],
    data(){
      return {
        xAxisData:[],
        seriesData:[],
        xbData:[]
      }
    },
    watch:{
      ty(){
        this.getAgeDurMap();
      }
    },
    mounted(){
      this.getAgeDurMap();
    },
    methods:{
      getAgeDurMap(){
        var formData = new FormData();
        formData.append('shopId', this.$store.state.activeShopId);
        formData.append('ty', this.ty);
        let vm = this;
        this.$axios.post('/ajax_getAgeDurMap.action', formData).then(function (res) {
          let resultBck = res.data.rsData;
          let seriesData = [resultBck.one,resultBck.two,resultBck.thr,resultBck.four,resultBck.five,resultBck.six,0,0,0,0,0];
          vm.seriesData = seriesData;
          let sexList = [{name:'男',value:resultBck.man},{name:'女',value:resultBck.woman}];
          vm.xbData = sexList;
          vm.drawEchart();
        }, function (res) {
          //vList
          console.log('error');
        });
      },
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
                'data':["18岁以下","18-24岁","25-34岁","35-44岁","45-55岁","55岁以上","","","","",""],
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
                {data: this.seriesData},
                {data: this.xbData}
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
