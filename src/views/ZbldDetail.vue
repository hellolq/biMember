<template>
    <div id="zbidBox" v-bind:style="{height:boxHeight+'px'}">
      <SelectDl></SelectDl>
      <MemberDesc></MemberDesc>
      <QdFx></QdFx>
    </div>
</template>

<script>
  import MemberDesc from '../components/MemberDesc'
  import SelectDl from '../components/SelectDl'
  import QdFx from '../components/QdFx'
  export default {
    name: 'ZbldDetail',
    data(){
      return {
        boxHeight : 300
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
      MemberDesc,
      QdFx,
      SelectDl
    }
  }
</script>

<style scoped>
#zbidBox{
  overflow-y: scroll;
}
</style>
