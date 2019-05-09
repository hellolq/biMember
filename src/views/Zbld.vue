<template>
    <div>
      <MyHeader></MyHeader>
      <router-view></router-view>
    </div>
</template>

<script>
  import MyHeader from '../components/MyHeader.vue'
  export default {
    name: 'Zbld',
    components:{
      MyHeader
    }
  }
</script>

<style scoped>

</style>
