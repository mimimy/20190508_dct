<template>
    <div class="login">
      <div class="login_back" @click="$router.back()">
        <img src="../../../static/img/ic_back.png"/>
      </div>
      <div class="login_icon">
        <img src="../../../static/img/logo.png"/>
        <div >
          欢迎使用电磁通
        </div>
      </div>
      <div class="login_choose">
        <mt-navbar v-model="active">
          <mt-tab-item id="tab-container1">
            <strong >短信登录</strong>
          </mt-tab-item>
          <mt-tab-item id="tab-container2">
            <strong>密码登录</strong>
          </mt-tab-item>
        </mt-navbar>
      </div>


      <div class="login_type">
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" >
          <mt-tab-container-item id="tab-container1">
            <!-- cell组件 -->
            <section class="tel_num" >
              <input type="tel"  maxlength="11" placeholder="手机号" />
              <button disabled="disabled" class="get_verify">获取验证码</button>
            </section>
            <section class="tel_num" >
              <input class="login_verify" type="tel" maxlength="8" placeholder="验证码" />
            </section>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <input class="login_name" placeholder="手机号" />
            <input class="login_password" placeholder="密码" />
          </mt-tab-container-item>
        </mt-tab-container>

      </div>
      <section class="login_hint">
        温馨提示：未注册帐号的手机号，登录时将自动注册，且代表已同意
        <a href="javascript:;">《用户服务协议》</a>
      </section>
    </div>
</template>

<script>
    export default {
      name: 'Login',
      data() {
        return {
          active: 'tab-container1',

        };
      },
      methods:{


      }

    }
</script>

<style scoped>
  .tel_num{
   font-size: 16px;
    margin:5% 10%;
    width: 80%;
    position: relative;
  }
  .tel_num button{
    position:absolute;
    border:0;
    left: 69%;
    top: 5px;
    width: fit-content;
    font-size: 1rem;
    line-height: 16px;
    background-color: white;

  }
  .tel_num input{
    font-size: 1.3em;
    width: 100%;
  }
  .login{
    height: 100%;
    width: 100%;
    background-color: #fff;
  }
  .login_back{
    background-color: #0F73F8;
    padding-top: 10px;
  }
  .login_back img{
    width: 5%;
    padding-left: 15px;
    padding-right: 10px;
  }
  .login_icon{
    background-image: url("../../../static/img/login_page_top_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    text-align: center;
    padding: 40px;
    background-clip: padding-box;

  }
  .login_icon div{
    color: white;
    font-weight: bold;
    font-size: 1.3em;
    padding-top: 15px;
  }
  .login_icon img{
    width:14%;
  }
  .login_choose{
    margin: 20px 3rem 10px;
    text-align: center;
    font-size: 1.2em;
  }
  .login_choose strong {
   font-size: 16px;
   font-weight: bold;


 }

  .login_type{
    width: 100%;
    text-align: center;
  }
  .login_type .login_name{
    margin-top: 25px;
    background: url("../../../static/img/ic_profile.png") no-repeat 100% 0;
    background-size: contain;
    font-size: 1.3em;
    width: 70%;
    height:22px;
    line-height:15px;
    padding-right:20px;padding-top:5px;padding-bottom:5px;

  }
  .login_password{
    margin-top: 15px;
    background: url("../../../static/img/ic_change_passwd.png") no-repeat 100% 0;
    background-size: contain;
    font-size: 1.3em;
    width: 70%;
    height:22px;
    line-height:15px;
    padding-right:20px;padding-top:5px;padding-bottom:5px;
  }
 .login_hint{
   margin-top:10px;
   margin-right: 10px;
   margin-left: 10px;
   color:#999;
   font-size:14px;
   line-height:20px
 }

</style>
