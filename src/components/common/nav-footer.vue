<template>
    <footer>
        <section class="foot-box clearfix">
            <div class="foot-links clearfix">
                <ul>
                    <div class="foot-title">商铺</div>
                    <li><a target="_blank" href="">淘宝店铺</a></li>
                    <li><a target="_blank" href="">实体店铺</a></li>
                    <li><a target="_blank" href="">微博店铺</a></li>
                    <li><a target="_blank" href="">微信店铺</a></li>
                </ul>
                 <ul>
                    <div class="foot-title">合作</div>
                    <li><a target="_blank" href="">合作方式</a></li>
                    <li><a target="_blank" href="">加盟</a></li>
                     <li><a target="_blank" href="">合作商城</a></li>
                </ul>
                 <ul>
                    <div class="foot-title">关于</div>
                    <li><a target="_blank" href="">关于我们</a></li>
                    <li><a target="_blank" href="">帮助中心</a></li>
                </ul>
            </div>
            <div class="foot-contact">
                <div class="foot-follow"> 
                    <div class="icon-box">
                        <svg class="icon" aria-hidden="true">  
                            <use xlink:href="#future-sina"></use>  
                        </svg> 
                        <div class="code-common code-sina"><img src="../../static/imgs/code-sina.png"/></div>
                    </div>
                    <div class="icon-box">
                        <svg class="icon" aria-hidden="true">  
                            <use xlink:href="#future-wechat"></use>  
                        </svg> 
                        <div class="code-common code-wechat"><img src="../../static/imgs/code-wechat.png"/></div>
                    </div>
                    <div class="icon-box">
                        <svg class="icon" aria-hidden="true">  
                            <use xlink:href="#future-qq"></use>  
                        </svg> 
                        <div class="code-common code-qq"><img src="../../static/imgs/code-qq.png"/></div>
                    </div>
                </div>
                <ul> 
                    <li>联系电话：123455555</li>
                    <li>Email：2324434@qq.com</li>
                    <li>地址：北京海淀区</li>
                
                </ul>
            </div>
        </section>
        <div class="foot-copyright">
            <p>Copyright © 2013 - 2019dfssfdsfsf Cloud. All Rights Reserved.</p>
        </div>
    </footer>
</template>

<script>
</script>

<style scoped lang='scss'>
@import '@/static/css/common/constant.scss';
    .icon-box{
        position: relative;
        display: inline-block;
         margin-right: 25px;
        .icon {   
            width: 25px; 
            height: 25px;  
            vertical-align: middle;  
            fill: currentColor;  
            overflow: hidden;  
            cursor: pointer;
        }  
        .code-common{
            display: none;
            position: absolute;
            left: -50px;
            top: -130px; 
            width: 110px;
            height: 110px;
            background: #000;
            img{
                width: 100%;
                height: 100%;
            }
        }
        &:hover .code-common{
            display: block;
        }
    }

      
    footer{
      background: $c-333;
      color: $c-fff;
      font-size: 14px;
      .foot-title{
          font-size: 18px;
          margin-bottom: 12px;
      }
      .foot-box{
          @include w-common;
          padding: 30px 0;
          li{
              line-height: 28px;
              font-weight: 100;
          }
          a{
              color: $c-fff;
              &:hover{color: $hover-color;}
          }
      }    
      .foot-links{
          float: left;
          ul{
              float: left;
              min-width: 200px;
              padding: 0 15px;
              
          }
      }  
      .foot-contact{
          float: right;
          padding-left: 50px;
          border-left: 1px solid $c-666;
          
          color: $c-ddd;
          .foot-follow{
              margin-bottom: 20px;
          }
          .follow-icon{
              position: relative;
              display: inline-block;
              width: 20px;
              height: 20px;;
          }
          .follow-code{
              position: absolute;
          }
      }  
      .foot-copyright{
          height: 45px;
          line-height: 45px;
          border-top: 1px solid $c-666;
          font-size: 12px;
          text-align: center;
          color: $c-ccc;
      }  
    }
</style>


