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
              <input type="tel"  maxlength="11" placeholder="手机号" v-model="phone" />
              <button :disabled="!rightPhone" class="get_verify" :class="{right_phone:rightPhone}" @click="getCode">
                {{countTime>0 ? `剩余(${countTime})s` : '获取验证码'}}
              </button>
            </section>
            <section class="tel_num" >
              <input class="login_verify" type="tel" maxlength="8" placeholder="验证码" v-model="code"  />
            </section>
            <section class="login_hint">
              温馨提示：未注册帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
            <button class="loginbtn" @click="txtLogin">登录</button>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <input class="login_name" type="text" v-model="name" placeholder="手机号/邮箱/用户名" />
            <section class="login_verification">
              <input v-if="showPwd" type="text" class="login_password" placeholder="密码" v-model="pwd" />
              <input v-else type="password" class="login_password" placeholder="密码"  v-model="pwd"/>
              <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                <div class="switch_circle" :class="{right: showPwd}"></div>
                <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
              </div>
            </section>
            <section class="login_verification">
              <input type="text" maxlength="11" class="login_password"  placeholder="验证码" v-model="captcha">
              <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha"
                   @click="getCaptcha" ref="captcha">
            </section>
            <button class="loginbtn" style="margin-top: 20px" @click="nameLogin">登录</button>
          </mt-tab-container-item>
        </mt-tab-container>

      </div>
      <AlertTip v-show="showAlert"  @closeTip="closeTip" :alertText ="alertText"></AlertTip>
    </div>
</template>

<script>
  import AlertTip from '../../components/AlertTip/AlertTip'
  import {reqSendCode,reqSmsLogin,reqPwdLogin} from '../../api'
    export default {
      name: 'Login',
      data() {
        return {
          active: 'tab-container1',
          phone:'',
          countTime:0,
          showPwd: false,
          pwd:'', // 密码
          code:'',// 短信验证码
          name:'',//用户名
          captcha:'',//图形验证
          alertText:'',
          showAlert:false
        };
      },
      components:{
        AlertTip
      },
      computed:{
        rightPhone (){
          return /^1\d{10}$/.test(this.phone)
        }
      },
      methods:{
       async getCode() {//短信登录时候获取验证码
          if (!this.countTime) {
            this.countTime = 30;
            this.interval = setInterval(() => {
              this.countTime--;
              if (this.countTime <= 0) {
                clearInterval(this.interval);
              }
            }, 1000)
           const result = await reqSendCode(this.phone)
            if (result.code === 1){//验证失败
              this.showAlertDlog(result.msg)
              if (this.countTime) {//停止计时
                this.countTime = 0
                clearInterval(this.interval)
                this.interval = 0
              }
            }
          }
        },
        showAlertDlog(alertText){
          this.showAlert = true
          this.alertText = alertText
        },
        closeTip (){
          this.showAlert = false
          this.alertText = ''
        },
        // 短信登录
        async txtLogin () {
          const {phone,code} = this
          if (!this.rightPhone) {
            this.showAlertDlog('手机号码不正确');
            return;

          } else if (!/^\d{6}$/.test(code)) {//六位数字
            this.showAlertDlog('验证码必须为六位数字');
            return;
          }
          const result = await reqSmsLogin(phone,code)
          if (this.countTime) {//停止计时
            this.countTime = 0
            clearInterval(this.interval)
            this.interval = 0
          }
          if (result.code === 0) {
            const user = result.data
            this.$store.dispatch('recordUser',user)
            this.$router.replace('./profile')
          } else {
            const  msg = result.msg
            this.showAlertDlog(msg)
          }
        },
       async nameLogin () {
          const {name,pwd,captcha} = this
          if (!name) {
            this.showAlertDlog('用户名不能为空');
            return;
          } else if (!pwd) {//六位数字
            this.showAlertDlog('密码不能为空');
            return;
          } else if (!captcha) {
            this.showAlertDlog('验证码不正确');
            return;
          }
          const result = await reqPwdLogin({name,pwd,captcha})
           if (this.countTime) {//停止计时
             this.countTime = 0
             clearInterval(this.interval)
             this.interval = 0
           }
          if (result.code === 0) {
            const user = result.data
            this.$store.dispatch('recordUser',user)
            this.$router.replace('./profile')
          } else {
            const  msg = result.msg
            this.getCaptcha ()
            this.showAlertDlog(msg)
          }
        },
        getCaptcha () {
          this.$refs.captcha.src = 'http://localhost:4000/captcha?time='+Date.now()
        }


      }

    }
</script>

<style scoped>
.loginbtn{
  width: 80%;
  padding: 5px 0;
  font-size: 20px;
  color: #fff;
  background-color: dodgerblue;
  border: 0;
}
  .login_verification{
    position: relative;
    margin-top: 22px;
    font-size: 18px;
    background: #fff;
    width: 100%;
  }

  .switch_button{
    font-size: 12px;
    border: 1px solid #ddd;
    transition:  background-color .3s,border-color .3s;
    padding: 0 6px;
    width: 30px;
    height: 16px;
    line-height: 16px;
    color: #fff;
    position: absolute;
    top: 50%;
    right:12%;
    transform: translateY(-50%);
    border-radius: 8px;
  }
  .off{
    background:#fff
  }
  .on{
    background:#02a774
  }
  .switch_text{
    float:right;
    color:#ddd
  }
  .get_verification{
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    border: 0;
    color :#ccc;
    font-size: 18px;
    background:transparent;
    height: 40px;

  }
  .switch_circle{
  position: absolute;
    top: -1px;
    left: -1px;
    width: 16px;
    height: 16px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    transition:transform .3s
  }
  .right{
    transform: translateX(30px)
  }

  .right_phone{
    color: black;
  }

  .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 2px solid #26a2ff;

  }
  .mint-navbar .mint-tab-item{
    padding: 3px;
  }
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
    top: 13px;
    width: fit-content;
    font-size: 1rem;
    line-height: 16px;
    background-color: white;

  }
  .tel_num input{
    font-size: 18px;
    width: 100%;
    height: 40px;
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
    margin: 20px 4rem 10px;
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
    position: relative;
    margin-top: 25px;
    background: url("../../../static/img/ic_profile.png") no-repeat 100% 0;
    background-size: contain;
    font-size: 18px;
    width: 80%;
    height:40px;
    line-height:40px;
    border: 1px solid #7f7f7f;

  }
  .login_password{
    font-size: 18px;
    width: 80%;
    height:40px;
    line-height:40px;
  }
 .login_hint{
   margin:5% 10% 10%;
   width: 80%;
   color:#999;
   font-size:14px;
   line-height:20px
 }

</style>
