<template>
  <div>
    <MyHeader/>
    <ShopList/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import ShopList from './components/ShopList.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    ShopList
  }
}
</script>

<style>

</style>
