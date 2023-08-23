<template lang="pug">
el-dialog(:title="title" :visible.sync="dialogVisible" width="500px" @opened="getData")
  el-form(:model="userForm" :rules="rules" ref="userForm" size="small" label-width="70px")
    el-form-item(label="账号" prop="account")
      el-input(:disabled="userForm.userId ? true : false" clearable v-model="userForm.account")
    el-form-item(label="密码" prop="password")
      template(#label)
        span(v-if="!userForm.userId" style="color:#F56C6C;margin-right: 4px;") *
        span 密码
      el-input(:disabled="userForm.userId ? true : false"
                    placeholder="密码须含有大小写字母、数字、符号中的两种,长度须在7-20个字符之间"
                    clearable
                    show-password
                    v-model="userForm.password")
    el-form-item(label="姓名" prop="userName")
      el-input(placeholder="请输入姓名" clearable v-model="userForm.userName")  
    el-form-item(label="部门")
      el-input(placeholder="请输入部门" clearable v-model="userForm.department")
    el-form-item(label="职位")
      el-input(placeholder="请输入职位" clearable v-model="userForm.position")
    el-form-item(label="角色" prop="roleId")
      el-select(style="width: 100%" v-model="userForm.roleId" filterable clearable placeholder="请选择角色")
        el-option(v-for="(item, index) in roleList" :key="Number(index)" :label="item.name" :value="item.id")
  span.dialog-footer(slot="footer")
    el-button(size="small" @click="handleClose") 取 消
    el-button(size="small" type="primary" @click="enter('userForm')") 确 定
</template>

<script>
import { baApi } from "@aispeech/ecard-base"
const { getRolerManageList, addUserManage, editUserManage } = baApi

export default {
  props: {
    title: String,
    visible: {
      type: Boolean,
      default: () => false
    },
    datas: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      roleList: [],
      userForm: {
        userId: '',
        account: '',
        userName: '',
        password: '',
        department: '',
        position: '',
        roleId: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { pattern: /(^1\d{10}$)|(^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$)/, message: '请输入正确的手机号和邮箱', }
        ],
        password: [
          { validator: this.validatePass, trigger: 'blur' }
        ],
        userName: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        roleId: [{ required: true, message: '请选择角色', trigger: ['change', 'blur'] }],
      }
    }
  },
  computed: {
    dialogVisible: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    }
  },
  watch: {
    datas: {
      handler (val) {
        if (!val || JSON.stringify(val) === '{}') {
          this.userForm = {
            userId: '',
            account: '',
            userName: '',
            password: '',
            department: '',
            position: '',
            roleId: ''
          }
          this.$refs['userForm'] && this.$refs['userForm'].resetFields();
        } else {
          const { mobile, email } = val
          this.userForm = Object.assign(this.userForm, val)
          this.userForm.account = mobile || email
        }
        console.log(this.userForm);
      },
      deep: true
    }
  },
  methods: {
    validatePass(rule, value, callback){
      //编辑状态不验证
      if(this.userForm.userId){
        callback();
        return;
      }
      if (!value) {
        callback(new Error('请输入密码'));
      } else if (/[^-+=|,0-9a-zA-Z!@#$%^&*?_.~+/\\(){}[\]<>]/.test(value)) {
        callback(new Error('含有非法字符'));
      } else if (!this.hasDoubleChars(value)) {
        callback(new Error('密码须含有大小写字母、数字、符号中的两种'));
      } else if (value.length < 7 || value.length > 20) {
        callback(new Error('长度须在7-20个字符之间'));
      } else {
        callback();
      }
    },
     // 验证是否包括字母、数字和符号中的两种(用于验证密码的正确性)
    hasDoubleChars(val){
      let _hasNumber = /\d/g.test(val)
      let _hasLetter = /[a-zA-Z]/g.test(val)
      let _hasCharacter = /[-+=|,!@#$%^&*?_.~+/\\()|{}[\]<>]/g.test(val)
      return (_hasNumber && _hasLetter)
        || (_hasNumber && _hasCharacter)
        || (_hasLetter && _hasCharacter)
    },
    getData () {
      console.log("opened","getData()");
      // this.getRoleList()
    },
    async getRoleList () {
      try {
        const params = {
          system: 'BA',
          type: 'private'
        }
        const res = await getRolerManageList(params)
        if (res.code === '200') {
          const { result } = res
          this.roleList = result || []
        }
      } catch (error) {
        this.roleList = []
        throw new Error(error)
      }
    },
    handleClose () {
      this.$refs['userForm'].resetFields();
      this.$emit('update:visible', false)
      this.$emit('refresh')
    },
    enter (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const { userId } = this.userForm
          if (userId) {
            this.editUserInfo()
          } else {
            this.addUserInfo()
          }
        } else {
          return false;
        }
      });
    },
    async addUserInfo () {
      try {
        const { account, password, department, position, userName, roleId } = this.userForm
        const params = {
          password, department, position, userName, roleId
        }
        if (/^1\d{10}$/.test(account)) {
          params.mobile = account
        } else if (/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(account)) {
          params.email = account
        }
        const res = await addUserManage(params)
        if (res.code === '200') {
          this.handleClose()
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    async editUserInfo () {
      try {
        const { userId, department, position, userName, roleId } = this.userForm
        const params = {
          userId, department, position, userName, roleId
        }
        const res = await editUserManage(params)
        if (res.code === '200') {
          this.handleClose()
        }
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
</script>
  
<style lang="scss">
.el-dialog__footer {
    border-top: 1px solid #ebeff9;
}
</style>
  