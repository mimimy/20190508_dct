<template>
	<div >
    <mt-swipe :auto="4000" style="height: 180px;width: 100%">
      <mt-swipe-item v-for="(item, index) in imgs" :key="index">

        <img :src="item" alt="" style="height: 100%;width: 100%;z-index: -1">
      </mt-swipe-item>
    </mt-swipe>
    <div class="grid">
      <div style="height: 50px;"></div>
      <div class="box">
        <my-ul>
          <my-li v-for="(module,index) in modules" :key="index">
            <router-link :to="module.route">
              <span :class="module.className"></span>
              <div>{{module.title}}</div>
            </router-link>
          </my-li>
        </my-ul>
      </div>

    </div>
    <div class="dtxx">
      <div style="height: 50px;">
        <div style="text-align:left;padding-top: 20px;padding-left: 10px;color: #fff">频管要情动态</div>
      </div>
      <ul>
         <li v-for="(goods,index) in typeGoods0" :key="index">
           <div >{{goods.goodsName}}</div>
           <div >{{goods.goodsImg}}</div>
           <div>
             <span style="color: #2c3e50">{{goods.goodsName}}</span>
             <span  style="color: #42b983">数量：{{goods.goodsId}}个</span>
             <span  style="color: #42b983">单价：{{goods.price}}元</span>
           </div>
         </li>
      </ul>

    </div>
	</div>
</template>

<script type="text/javascript">

  export default {
		data (){
			return{
        imgs: [
          '../../../../../static/img/banner1.png',
          '../../../../../static/img/banner1.png',
          '../../../../../static/img/banner1.png'
        ],
        modules:[
          {title:'频管网系',className:'back-pgwx',route:{name:'NewsList'}},
          {title:'频管装备',className:'back-pgzb',route:{name:'PhotoList',query:{id:0}}},
          {title:'台站信息',className:'back-tzxx',route:{name:'Home'}},
          {title:'典型信号',className:'back-dxxh',route:{name:'Home'}},
          {title:'短波选频',className:'back-dbxp',route:{name:'Home'}},
          {title:'电磁兼容',className:'back-dcjr',route:{name:'Home'}},
          {title:'频率划分',className:'back-plhf',route:{name:'Home'}},
          {title:'电磁防护',className:'back-dcfh',route:{name:'Home'}}
        ],
        typeGoods0:[]

			}
		},
    created:function () {
      let url ="https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods";
      this.$axios.get(url)
         .then(res=>{
             this.typeGoods0 = res.data[0];

         })
         .catch(err=>{
           console.log(err)
         })
    }
	}


</script>

<style type="text/css" scoped>
  .dtxx{
    margin-top: 10px;
    background-repeat: no-repeat;
    background-image: url(../../../static/img/banner3.png);
    background-size: 100% auto;
    height: fit-content;
    width: 100%;
  }
  .dtxx ul{
    text-align: left;
    background-color: #fff;
    margin: 10px;
    -webkit-padding-start: 0;
    margin-bottom: 55px;
  }
  .dtxx li{
    list-style: none;
    border-bottom: 1px solid beige;

  }
  .dtxx li div{
    padding: 5px;
    color:dodgerblue;
    white-space:normal;
    word-break:break-all;
    word-wrap:break-word;
  }
  .grid{
    margin-top: 10px;
    background-repeat: no-repeat;
    background-image: url(../../../static/img/banner2.png);
    background-size: 100% auto;
    height: fit-content;
    width: 100%;
  }
  .grid>.box{
    background-color: #fff;
    margin: 10px;
    padding: 10px;
    height: fit-content;
    border: solid 1px gainsboro ;
  }
  .grid span {
    display: inline-block;
    margin: 10px 0;
    width: 50px;
    height: 50px;
    background-repeat: round;
    background-clip: border-box;
  }
  a {
    text-decoration: none;
  }
  .back-pgwx{
    background-image: url(../../../static/img/ic_pgwx.png);
  }
  .back-tzxx{
    background-image: url(../../../static/img/ic_tzxx.png);
  }
  .back-pgzb{
    background-image: url(../../../static/img/ic_pgzb.png);
  }
  .back-dxxh{
    background-image: url(../../../static/img/ic_dxxh.png);
  }
  .back-dbxp{
    background-image: url(../../../static/img/ic_dbxx.png);
  }
  .back-dcjr{
    background-image: url(../../../static/img/ic_dcjr.png);
  }
  .back-plhf{
    background-image: url(../../../static/img/ic_plhf.png);
  }
  .back-dcfh{
    background-image: url(../../../static/img/ic_dcfh.png);
  }


</style>
