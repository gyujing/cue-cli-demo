<template lang="pug">
div.main 
  el-button(@click="goDetail") 详情
  Dialog(:title="dialogTitle" :visible.sync="visible" :datas="userDatas" @refresh="refresh") 
  //- <div>
  //-   <el-button @click="goDetail">详情</el-button>
  //-   <Dialog 
  //-     :title="dialogTitle"
  //-     :visible.sync="visible"
  //-     :datas="userDatas"
  //-     @refresh="refresh"
  //-   ></Dialog>
  //- </div>
</template>

<script>
import Dialog from './Dialog/edit.vue'
export default {
  name:'',
  data(){
   return {
    dialogTitle:"编辑用户信息",
    visible: false,
    userDatas: {},
   }
  },
  components: {
    Dialog
  },
  mounted(){},
  methods: {
    goDetail(){
      this.userDatas = {
        userId: '111',
        mobile: '15995400403',
        email:"",
        userName: '用户名',
        password: '111',
        department: '',
        position: '',
        roleId: ''
      };
      this.visible = true;

    },
    refresh () {
      console.log("refresh")
    },
  }
}

</script>
<style  lang="scss" scoped>
</style>
