<template>
  <div>
    <div class="item-box">
      <span class="tittle">大类选择:</span>
      <span class="note" @click="open()">{{defaultData[0].text}} ▼</span>
    </div>
    <vue-pickers
      :show="show"
      :columns="columns"
      :defaultData="defaultData"
      :selectData="pickData"
      @cancel="close"
      @confirm="confirmFn"></vue-pickers>
  </div>
</template>

<script>
  import vuePickers from 'vue-pickers'
  export default {
    name: 'SelectDl',
    components: {
      vuePickers
    },

    data() {
      return {
        show: false,
        columns: 1,
        defaultData: [
          {
            text: '-',
            value: '-'
          }
        ],

        pickData: {
          // 第一列的数据结构
          data1: []
        }
      }
    },
    mounted(){
      let res = [];
      let text = this.$store.state.dlName;
      let value = this.$store.state.dl;
      res[0] = {text:text,value:value};
      this.defaultData = res;
      this.getDlList();
    },
    methods: {
      getDlList(){
        var formData = new FormData();
        formData.append('dl', this.defaultData[0].value);
        let vm = this;
        this.$axios.post('/ajax_getDlList.action', formData).then(function (res) {
          let resultBck = res.data.rsData;
          vm.pickData.data1 = resultBck;
        }, function (res) {
          console.log('error');
        });
      },
      open(){
        this.toShow();
      },
      close() {
        this.show = false
      },
      confirmFn(val) {
        this.show = false
        this.defaultData = [val.select1]
        let dl = val.select1.value;
        let dlName = val.select1.text;
        let data = {dl:dl,dlName:dlName}
        this.$store.dispatch("change_dl",data);
      },
      toShow() {
        this.show = true
      }
    }
  }
</script>

<style scoped>
.item-box {
  text-align: right;
  padding: 8px;
  background-color: #1CC7D0;
  color: white;
}
span.note {
  border: 1px solid;
  padding: 2px 26px;
  border-radius: 3px;
  margin-left: 10px;
}
</style>
