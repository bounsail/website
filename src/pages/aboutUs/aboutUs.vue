<template>
  <div>

    <section class="banner-fourth clearfix">
      <div class="fourth-box">
        <div class="fourth-title">snail Jia品牌服装</div>
        <div class="fourth-home">
          
        </div>
        <button class="fourth-btn">加入慢生活</button>
        <div>服装定制，服装设计、服装打版、服装批发、</div>
      </div>
    </section>
    <footerNavs></footerNavs>
  </div>
</template>

<style lang='scss'>

@import '@/static/css/common/constant.scss';

.banner-first{
  height: 550px;
  background: $c-eee;
  .first-box{
    @include w-common;
  }
  .first-text{
    float: right;
    margin: 100px 60px 0 0;
  }
  .first-title{
    margin-bottom: 25px;
    font-size: 28px;
  }
  .first-cxt{
    line-height: 28px;
    font-size: 18px;
    font-weight: 300;
  }
}

</style>
<script>

import headerNavs from '@/components/common/nav-header.vue'
import footerNavs from '@/components/common/nav-footer.vue'

export default{
  components: {
    headerNavs,
    footerNavs
  },
  data(){
    return{
      
    }
  },
  mounted(){

  },
  methods:{

  }
}

</script>
