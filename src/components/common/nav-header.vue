<template>
    <header class="header">
        <section class="head-box">
            <div class="head-logo">
                <!-- <img src="@/static/imgs/logo.jpg" alt="蜗牛慢递"/> -->
                <img src="../../static/imgs/logo.jpeg" alt="蜗牛慢递"/>
            </div>
            <div class="head-login-box">
                <div class="head-login"><router-link to="/login">登录</router-link></div> 
                <div class="head-register"><router-link to="/register">注册</router-link></div>
            </div>
            <nav class="nav-box">
                <div class="nav-item"><router-link class="nav-item-a" to="/">首页</router-link></div>
                <div class="nav-item"><router-link class="nav-item-a" to="/homespace">慢递家园</router-link></div>
                <div class="nav-item"><router-link class="nav-item-a" to="/museum">信笺展示</router-link></div>
                <div class="nav-item"><router-link class="nav-item-a" to="/shop">慢递友商</router-link></div>
                <div class="nav-item"><router-link class="nav-item-a" to="/news">最新动态</router-link></div>
                <div class="nav-item"><router-link class="nav-item-a" to="/helps">帮助中心</router-link></div>
                <div class="nav-item"><router-link class="nav-item-a" to="/aboutUs">关于我们</router-link>  </div>
            </nav>
        </section>
    </header>
</template>
<style scoped lang="scss">
@import '@/static/css/common/constant.scss';
    $head-hgt: 60px;
    .header{
        width: 100%;
        height: $head-hgt;
        line-height: $head-hgt;
        border-bottom: 1px solid $c-eee;
        .head-box{
            @include w-common;
        }
        .head-logo{
            float: left;
            width:150px;
            height: $head-hgt;
            
            text-align: center;
            background: $c-eee;
            img{
                max-width: 100%;
                max-height: $head-hgt;
                vertical-align: middle;
            }
        }
        .nav-box{
             margin-left: 480px;
             margin-right: 160px;
            .nav-item-a{
                display: block;
               
                padding: 0 10px;
                &:hover{
                    color: $hover-color;
                }
            }
            .nav-item{
                float: left;
            }
        }
       
        .head-login-box{
             float: right;
            .head-login, .head-register{
                display: inline-block;
                padding: 0 5px;
            }
            a{
                &:hover{
                color: $hover-color;
            }
            }
        
        }
        
    }
</style>
<script>


</script>