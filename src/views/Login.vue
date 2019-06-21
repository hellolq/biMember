<template>
 <div>
   正在登陆，请稍后....
 </div>
</template>

<script>
  export default {
    name: 'Login',
    data(){
      return {
        empId:''
      }
    },
    mounted () {
      this.empId = this.$route.query.empId;
      this.authorizeByEmpId();
    },
    methods:{
      authorizeByEmpId(){
        //计算设备屏幕高度和宽度
        const screenHeight = document.documentElement.clientHeight || document.body.clientHeight
        const screenWidth = document.body.clientWidth;

        if(!this.$store.getters.isLogin){
          this.ajax_login();
        }else{
          this.$router.push('/zbld');
        }
      },
      ajax_login(){
         var formData = new FormData();
         formData.append('empId', this.empId);
         var vm = this;
         this.$axios.post('/ajax_login.action', formData).then(function (res) {
          var resultBck = res.data.rsData;
          let activeShopId = '000000';
          let activeShopName = '全司';
          //{role: "ZBLD", errorMsg: "ok"}
           if(resultBck.errorMsg == 'ok'){

             if(resultBck.role != 'ZBLD'){
               activeShopId = '012823';
               activeShopName = '广场长沙';
             }
             var data = {empId:vm.empId,role:resultBck.role,
               activeShopId:activeShopId,activeShopName:activeShopName,
             dl:'00',dlName:'全部'};
             vm.$store.dispatch("add_login_user",data);
             vm.$router.push('/zbld');
           }else{
             vm.$router.push('/error');
           }
        }, function (res) {
          console.log('error');
        });
      }
    }
  }
</script>

<style scoped>

</style>
