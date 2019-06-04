<template>
  <div>
    <shop-header></shop-header>
    <div class="tab">
      <div class="tab-item">
        <router-link class="item" to="/shop/goods">点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link class="item"  to="/shop/remarks">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link class="item"  to="/shop/infor">商家</router-link>
      </div>

    </div>
<router-view>

</router-view>
</div>
</template>

<script>
  import ShopHeader from '../../components/common/ShopHeader/ShopHeader'
    export default {
      name: 'Shop',
      components:{
        ShopHeader
      },
      mounted (){
        this.$store.dispatch('getShopInfo')
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../components/common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color dodgerblue
      a
        display block
        position relative
        text-decoration none
        color black
        &.router-link-active
          color dodgerblue
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background dodgerblue
</style>
