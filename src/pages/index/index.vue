<template>
  <div>
    <headerNavs></headerNavs>
    <section class="banner-first clearfix" @click="click">
      <div class="first-box">
        <div class="first-text">
          <div class="first-title">留在时间长河里的印记</div>
          <div class="first-cxt">
            <p>时间无声</p>
            <p>不知觉间已走过数个冬夏</p>
            <p>回首望去</p>
            <p>一切已模糊无形</p>
            <p>留一份记忆给自己</p>
            <p>留一份期许给未来</p>
            <p>蜗牛Jia慢递！为你重拾回忆、慢递期许</p>
          </div>
        </div>
      </div>
    </section>

    <section class="banner-secend clearfix">
      <div class="secend-box">
        <div class="secend-title">信笺展示</div>
        <div class="secend-letter">
          信笺展示动效图
        </div>
        <button class="secend-btn">寄信</button>
        <div>可有三种方式寄信：微信、邮件、纸质、官网寄信；</div>
      </div>
    </section>

    <section class="banner-third clearfix">
      <div class="third-box">
        <div class="third-title">慢递家园</div>
        <div class="third-home">
          
        </div>
        <button class="third-btn">加入慢生活</button>
        <div>类似博客，微博、可发文章、照片，心情等；600字内，设置定位，查看权限</div>
      </div>
    </section>

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

.banner-secend{
  .secend-box{
    @include w-common;
  }
  .secend-title{
    
  }
  .secend-letter{
    
  }
  .secend-btn{
    
  }
}

.banner-third{
  height: 500px;
    background: $c-eee;
  .third-box{
    @include w-common;
  }
  .third-title{
    
  }
  .third-home{
    
  }
  .third-btn{
    
  }
}

.banner-fourth{
  .fourth-box{
    @include w-common;
  }
  .fourth-title{
    
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
