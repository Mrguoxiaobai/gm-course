$.validator.setDefaults({
    submitHandler : function() {
        addPositive();
    }
});

var app = new Vue({
    el: '#app',
    data:{
        value1: ''
    },
    methods:{

        getXmName: function () {
            $.ajax({
                cache : true,
                type : "GET",
                url : context + 'positive/getXmName',
                error : function(request) {
                    parent.layer.alert("Connection error");
                },
                success : function(data) {
                    if (data.code === 200) {
                        $("#pxm").html("");
                        var level = "";
                        level += "<div class='layui-input-inline'>";
                        level += "<select id='pxm' name='modules' lay-verify='required' lay-search=''style='width: 235px;height: 33.9px;border: 1px solid #ccc;border-radius: 4px;'>";
                        for (var i = 0; i < data.data.allXmName.length; i++){
                            level += "<option value='"+data.data.allXmName[i]+"'>"+data.data.allXmName[i]+"</option>";
                        }
                        level += "</select></div>";
                        $("#pxm").append(level);
                    }
                }
            });
        },




        validateRule:function () {
            var icon = "<i class='fa fa-times-circle'></i> ";
            $("#positiveForm").validate({
                rules : {
                    id : {
                        required : true
                    },
                    pname : {
                        required : true
                    }, pcode : {
                        required : true
                    },pphone : {
                        required : true
                    }
                },
                messages : {
                    pname : {
                        required : icon + "请输入姓名"
                    }, pcode : {
                        required : icon + "请输入体检号"
                    },pphone : {
                        required : icon + "请输入手机号"
                    }
                }
            })
        }
    },
    mounted:function () {
        if ($("#psex input:radio:checked").val() === undefined){
            $("[name='psex'][value='男']").prop("checked", "checked");
        }
        if ($("#pinform input:radio:checked").val() === undefined){
            $("[name='pinform'][value='否']").prop("checked", "checked");
        }
        //this.getAllRoleName();
        this.validateRule();
        this.getXmName();
    }
});

function addPositive() {
    var positive = {
        'pcode': $("#pcode").val(),
        'pname': $("#pname").val(),
        'psex': $("#psex input:radio:checked").val(),
        'pinform': $("#pinform input:radio:checked").val(),
        'page': $("#page").val(),
        'pdepartment': $("#pdepartment").val(),
        'pphone': $("#pphone").val(),
        'pInformdate': $("#pInformdate").val(),
        'presult': $("#presult").val(),
        'pxm': $('#pxm option:selected').text()

    };
    if (isMobileEmail($("#pphone").val())){
            $.ajax({
                cache: true,
                type: "POST",
                url: context + 'positive/addPositive',
                data: JSON.stringify(positive),
                dataType: 'json',
                contentType: 'application/json',
                error: function (request) {
                    parent.layer.alert("Connection error");
                },
                success: function (data) {
                    if (data.code === 200) {
                        if (data.data.code === 200) {
                            parent.layer.msg("操作成功");
                        } else if (data.data.code === 500) {
                            parent.layer.msg("操作失败");
                        }
                        var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
                        parent.layer.close(index);
                    }
                }
            });

        }
}


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



