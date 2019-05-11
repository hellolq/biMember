import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  empId:'',
  empName:'',
  isLogin:false
}

const mutations = {
  ADD_LOGIN_USER({state},data){
    sessionStorage.setItem('empId',data.empId);
    sessionStorage.setItem('empName',data.empName);
    sessionStorage.setItem('isLogin',true);
    state.empId = data.empId;
    state.empName = data.empName;
    state.isLogin = true;
  }
}

const actions = {
  add_login_user({commit,state},data){
    commit("ADD_LOGIN_USER",data);
  }
}

const getters = {

  isLogin(state){
    if(!state.isLogin ){
        state.empId = sessionStorage.getItem("empId");
        state.empName = sessionStorage.getItem("empName");
        state.isLogin = sessionStorage.getItem("isLogin");
    }
    return state.isLogin;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
