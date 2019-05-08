<template>
 <div class="profile">
   <div class="grid_top">
     <router-link to="/login">
       <div class="grid_top_child">
         <div class="avatar_div">
           <img  src="../../../static/img/avatar_default.png"/>
           <div class="avatar_name">
             <strong >登录/注册</strong>
             <div style="padding: 10px 0px" >暂无绑定手机号</div>
           </div>
         </div>
       </div>
     </router-link>

   </div>
   <div class="grid_center">
      <ul>
        <li>
          <img class="left_img" src="../../../static/img/ic_profile.png"/>
          <span>个人资料</span>
          <img class="right_img" src="../../../static/img/ic_arrow.png"/>
        </li>
        <li>
          <img class="left_img" src="../../../static/img/ic_change_passwd.png"/>
          <span>修改密码</span>
          <img class="right_img" src="../../../static/img/ic_arrow.png"/>
        </li>
      </ul>
   </div>
   <div class="grid_center" style="margin-top: 10px;margin-bottom: 130px">
     <ul>
       <li>
         <img class="left_img" src="../../../static/img/ic_feedback.png"/>
         <span>意见反馈</span>
         <img class="right_img" src="../../../static/img/ic_arrow.png"/>
       </li>
       <li>
         <img class="left_img" src="../../../static/img/ic_about.png"/>
         <span>关于电磁通</span>
         <img class="right_img" src="../../../static/img/ic_arrow.png"/>
       </li>
       <li>
         <img class="left_img" src="../../../static/img/ic_update.png"/>
         <span>版本更新</span>
         <img class="right_img" src="../../../static/img/ic_arrow.png"/>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
    export default {
        name: 'Profile'
    }
</script>

<style scoped>
.profile{
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.grid_top{
  background-image: url(../../../static/img/my_page_top_bg.png);
  height: 100px;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0;
  background-size: 100%;
  background-repeat: no-repeat;
}
.grid_top_child{
  background-image: url(../../../static/img/user_info_bg.png);
  height: 90px;
  border:1px solid #f5f5f5;
  border-radius: 16px;
}
.avatar_div{
  margin: 10px;
  padding:10px;

}
.avatar_div img{
  height: 50px;
  width: 50px;
}
.avatar_div .avatar_name{
  display: inline-block;
  height: 50px;
  padding-left: 10px;
}
.grid_center{
  background-color: white;
  margin: 0px;
}
.grid_center ul{
  vertical-align: middle;
  padding: 0px;
  margin: 0px;
}
.grid_center li{
  list-style: none;
  border-bottom:1px solid #F5F5F5;
  padding: 15px;
  vertical-align: middle;

}
.grid_center .left_img{
  width: 8%;
}
.grid_center .right_img{
  vertical-align: middle;
  float: right;
  width: 4%;
}
.grid_center span{
  text-align: center;
  font-size: 16px;
}
</style>
