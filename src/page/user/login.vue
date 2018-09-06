<template>
<div class="page">
  <div class="view">

    <div class="login-warp">
      <div class="title">
        后台登录系统
      </div>
      <div class="main">

        <Form ref="formInline" :model="formInline" :rules="ruleInline" >
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem  class="text-center">
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
          </FormItem>
        </Form>

      </div>

    </div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码.', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码至少6位,请重新输入', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('错误!');
          }
        })
      }
    }
  }
</script>

<!--引用该组件样式-->
<style lang="less">
  @import "../../assets/public/less/page/jingdong/login/login.less";
</style>
