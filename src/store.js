import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  empId:'',
  empName:'',
  yearMonth:'',
  activeShopId:'',
  activeShopName:'',
  dl:'00',
  dlName:'全部',
  role:'',
  isLogin:false
}

const mutations = {
  ADD_LOGIN_USER(state,data){

    sessionStorage.setItem('empId',data.empId);
    sessionStorage.setItem('empName',data.empName);
    sessionStorage.setItem('role',data.role);
    sessionStorage.setItem('isLogin',true);
    sessionStorage.setItem('activeShopId',data.activeShopId);
    sessionStorage.setItem('activeShopName',data.activeShopName);
    sessionStorage.setItem('dl',data.dl);
    sessionStorage.setItem('dlName',data.dlName);
    sessionStorage.setItem('yearMonth',data.yearMonth);

    state.empId = data.empId;
    state.empName = data.empName;
    state.role = data.role;
    state.dl = data.dl;
    state.dlName = data.dlName;
    state.activeShopId = data.activeShopId;
    state.activeShopName = data.activeShopName;
    state.isLogin = true;
    state.yearMonth = data.yearMonth;
  },
  CHANGE_YEARMONTH(state,data){
    state.yearMonth = data.yearMonth;
    sessionStorage.setItem('yearMonth',data.yearMonth);
  },
  CHANGE_ROLE(state,data){
    state.role = data.role;
    sessionStorage.setItem('role',data.role);
  },
  CHANGE_ACTIVESHOPID(state,data){
    state.activeShopId = data.activeShopId;
    state.activeShopName = data.activeShopName;
    sessionStorage.setItem('activeShopId',data.activeShopId);
    sessionStorage.setItem('activeShopName',data.activeShopName);
  },
  CHANGE_DL(state,data){
    state.dl = data.dl;
    state.dlName = data.dlName;
    sessionStorage.setItem('dl',data.dl);
    sessionStorage.setItem('dlName',data.dlName);
  }
}

const actions = {
  add_login_user({commit,state},data){
    commit("ADD_LOGIN_USER",data);
  },
  change_yearmonth({commit,state},data){
    commit("CHANGE_YEARMONTH",data);
  },
  change_role({commit,state},data){
    commit("CHANGE_ROLE",data);
  },
  change_activeShopId({commit,state},data){
    commit("CHANGE_ACTIVESHOPID",data);
  },
  change_dl({commit,state},data){
    commit("CHANGE_DL",data);
  }
}

const getters = {

  isLogin(state){
    if(!state.isLogin ){
        state.empId = sessionStorage.getItem("empId");
        state.empName = sessionStorage.getItem("empName");
        state.isLogin = sessionStorage.getItem("isLogin");
        state.activeShopId = sessionStorage.getItem("activeShopId");
        state.activeShopName = sessionStorage.getItem("activeShopName");
        state.role = sessionStorage.getItem("role");
        state.dl = sessionStorage.getItem("dl");
        state.dlName = sessionStorage.getItem("dlName");
        state.yearMonth = sessionStorage.getItem("yearMonth");
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
