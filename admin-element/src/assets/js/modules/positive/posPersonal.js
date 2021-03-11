var app =  new Vue({
    el: '#app',
    data:{
        ruleForm: {
            infoId:'',
            pCode:'',
            pName:'',
            pSex:'',
            pAge:'',
            pDepartment:'',
            pPhone:'',
            pInform:'',
            pDoctor:'',
            pInformdate:'',
            pResult:'',
            pXm:'',
            pDesk:'',
        },
        rules: {
            pName: [
                { required: true, message: '请输入用户名', trigger: 'blur' }
            ]
        }
    },
    methods: {
        positiveForm:function(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (isMobileEmail(app.ruleForm.pPhone)){
                        $.ajax({
                            url: context + 'user/editUser',
                            type: 'POST',
                            data: JSON.stringify(app.ruleForm),
                            dataType : 'json',
                            contentType:'application/json',
                            success: function (res) {
                                if (res.code === 200) {
                                    app.$message.success(res.message);
                                } else {
                                    app.$message.error(res.message);
                                }
                            }
                        })
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
             });
        }
    },
    mounted:function() {
        var sysUser = JSON.parse($("#sysUser").val());
        this.ruleForm.id = sysUser.id;
        this.ruleForm.name = sysUser.name;
        this.ruleForm.nickName = sysUser.nickName;
        this.ruleForm.sex = sysUser.sex;
        this.ruleForm.userRole = $("#roleName").val();
        this.ruleForm.mobile = sysUser.mobile;
        this.ruleForm.email = sysUser.email;
        this.ruleForm.birthday = sysUser.birthday;
        this.ruleForm.hobby = sysUser.hobby;
        this.ruleForm.liveAddress = sysUser.liveAddress;
    }
});


function isMobileEmail(pphone) {
    var flag = true;
    if (pphone !== ""){
        var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!phoneReg.test(pphone)) {
            layer.msg("手机号格式不正确，请重新输入！");
            document.getElementById("pphone").value = "";
            flag =  false;
        }
    }
    return flag;
}
