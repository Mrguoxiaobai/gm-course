<template>
  <div id="app">
    <div class="login">
      <el-form label-position="left" label-width="0px" class="login-form">
        <h3 class="title">石铁体检中心 管理系统</h3>
        <el-form-item>
          <el-input v-model='username' type="text" placeholder="账号">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model='password' type="password" placeholder="密码">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model='code' placeholder="验证码" style="width: 63%">
          </el-input>
          <div class="login-code">
            <img :src='codeUrl' @click="getCode()">
          </div>
        </el-form-item>
        <el-checkbox style="margin:0px 0px 25px 0px;">记住我</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button size="medium" type="primary" style="width:100%;" @click="login()">
            <span>登 录</span>
          </el-button>
        </el-form-item>
      </el-form>
      <!--  底部  -->
      <div id="el-login-footer">
        <span></span>
        <a href="" target="_blank"></a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      code: '',
      codeUrl: '',
      uuidCode: ''
    }

  },
/*  beforeRouteEnter(to, from, next) {
    document.querySelector('body').setAttribute('style', 'margin: 0 auto; width: 100%; max-width: 750px;min-width: 300px; background:#171b2a; overflow-x: hidden;height: 100%;');
   next()
  },
  beforeRouteLeave(to, from, next) {
  document.querySelector('body').setAttribute('style', '')
    next()
  },*/


   methods: {
     login:function (){
       this.$router.push('/admin');
     }
     /*getCode :function() {
       $.ajax({
         url: 'code',
         type: 'GET',
         success: function (res) {
           vm.codeUrl = res.img;
           vm.uuidCode = res.uuid;
         }
       })
     },
     login: function () {
       var localObj = window.location;
       var contextPath = localObj.pathname.split("/")[1];
       var password = CryptoJS.SHA256(vm.password).toString();
       console.log(password);
       $.ajax({
         url: 'login',
         type: 'POST',
         data: {
           username: vm.username,
           password: password,
           code : vm.code,
           uuidCode: vm.uuidCode
         },
         success: function (res) {
           if (res.code === 200) {
             location.href = 'http://' + location.host + "/" + contextPath;
           } else {
             vm.$message.error(res.message);
             vm.getCode();
           }
         }
       })
     }*/
   },
  mounted: function () {
    //this.getCode();
    window.onload = function () {
      //配置
      var config = {
        vx: 4,	//小球x轴速度,正为右，负为左
        vy: 4,	//小球y轴速度
        height: 2,	//小球高宽，其实为正方形，所以不宜太大
        width: 2,
        count: 600,		//点个数
        color: "64,158,255", 	//点颜色
        stroke: "64,158,255", 	//线条颜色
        dist: 6000, 	//点吸附距离
        e_dist: 20000, 	//鼠标吸附加速距离
        max_conn: 10 	//点到点最大连接数
      };
      //调用
      CanvasParticle(config);
    }
  }
}
</script>

<style >
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-size: cover;
  margin: 9% auto;
}

.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 385px;
  padding: 25px 25px 5px 25px;
}

input {
  height: 38px;
}

.login-code {
  width: 33%;
  display: inline-block;
  height: 38px;
  float: right;
}

img {
  cursor: pointer;
  vertical-align: middle
}
</style>
