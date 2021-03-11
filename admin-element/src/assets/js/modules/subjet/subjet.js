$().ready(function(){
    var vm = new Vue({
        el: '#app',
        data: {
            tableData: [],
            genres:[],
            scoreCode:"",
            score: "",
            genre1Score:"",
            genre1:"",
            genre2:"",
            genre3:"",
            genre4:"",
            genre5:"",
            genreName:["身体疲劳","关系敏感","郁闷程度","焦虑程度","紧张反应","工作-家庭冲突"],
            genredes:{"身体疲劳":["身体无不适感","身体疲劳感不明显","偶尔会感到身体不适、疲乏","有时感到身体不适、疲乏","身体疲劳感明显，有时头部紧绷或胸闷"],
                "关系敏感":["能正确处理人际交往问题","人际关系较好","偶尔会特别在意别人对自己的看法，感到敏感",
                    "与人相处时有时感到不自信，过于看重别人的看法，过于敏感","人际交往中经常感到不自信和不自在，敏感性高，特别在意别人的看法"],
                "郁闷程度":["积极乐观，对生活充满希望","生活态度较为乐观、积极","偶尔也会封闭自己，不想和他人说话","有时会感觉对事物缺乏兴趣、懒散，感到悲观失望，封闭自己","总想把自己封闭起来，不愿面对一切，提不起兴趣"],
                "焦虑程度":["沉稳乐观","焦虑感不明显","会感到轻微的焦虑、不安","有时感到焦虑，坐立不安、烦躁","感到非常焦虑，坐立不安、烦躁"],
                "紧张反应":["很少感到精神紧张","基本能应付工作上的事情，紧张感低","有轻微的紧张感，特别是面对新工作、新方法","面对不确定的状况，有时感到心理紧张","面对不确定的状况，很容易产生紧张反应，工作中有很多失误"],
                "工作-家庭冲突":["能够做到工作-家庭平衡，处理良好","能够较为恰当地处理工作、家庭的关系","工作家庭有时无法做到平衡","为经常做不到工作-家庭平衡而产生一定的烦恼，一定的压力","常常感到工作—家庭不能平衡，产生烦恼"],
            },
            genrede:[]
            // results: [],
            // checkedValue:'1',
            // gender: ''
        },
        // watch:{
        //     checkedValue:function(){
        //         vm.results.push(vm.checkedValue);
        //         console.log(vm.checkedValue);
        //     }
        // },
        methods: {
            // submit:function(){
            //     console.log(vm.results[0]);
            // },
            // changeResult:function(id,score){
            //     var temp = {id:id,score:score};
            //     this.results.push(temp);
            //     alert(this.results.length);
            // },
            startmp:function(id){
            //iframe层-多媒体
                var src = ''
                if(id==1){
                   src =  'static/1.mp4'
                }else if(id==2){
                    src =  'static/2.mp4'
                }else if(id==3){
                    src =  'static/3.mp4'
                }

                layer.open({
                    type: 2,
                    title: false,
                    area: ['630px', '360px'],
                    shade: 0.8,
                    closeBtn: 0,
                    shadeClose: true,
                    content: src
                });
            },

            submit() {
                var falg =true
                code=true
                var t;
                var subjet = {
                };
                var key;
                var num=0;
                var num1=0;
                var num2=0;
                var num3=0;
                var num4=0;
                var num5=0;
                var num6=0;
                if( vm.scoreCode==""){
                    falg =false;
                    code=false;
                    parent.layer.msg("体检号不能为空！！！");
                }
                for (i = 1; i <=50; i++) {
                   var index= i+""
                   var score= $('input[type=radio][name='+index+']:checked').val()
                   if(score===undefined){
                       falg =false;
                       t=i;
                   }
                   if (score=="没有"){
                       score = 1
                   }else if (score=="较少有"){
                       score = 2
                   }else if (score=="有时有"){
                       score = 3
                   }else if (score=="经常有"){
                       score = 4
                   }else if (score=="一直有"){
                       score = 5
                   }
                   key ="subjet"+i;
                   subjet[key] =score;
                    if(score===undefined){
                        continue;
                    }
                       num = num + score;
                    if(i<=12){
                        num1 +=score;
                    }else if(i<=21){
                        num2 +=score;
                    } else if(i<=34){
                        num3 +=score;
                    }else if(i<=44){
                        num4 +=score;
                    }else if(i<=47){
                        num5 +=score;
                    }else if(i<=50){
                        num6 +=score;
                    }

                }

                var genreScore =num/50;

                subjet["scoreCode"]=vm.scoreCode;
                subjet["score"]=parseFloat(num);
                vm.score=num;
                subjet["genre1Score"]=genreScore;
                vm.genre1Score=genreScore;
                subjet["genre1"]=num1/12.0;
                subjet["genre2"]=num2/9.0;
                subjet["genre3"]=num3/13.0;
                subjet["genre4"]=num4/10.0;
                subjet["genre5"]=num5/3.0;
                subjet["genre6"]=num6/3.0;


                vm.genre1=num1/12.0;
                vm.genre2=num2/9.0;
                vm.genre3=num3/13.0;
                vm.genre4=num4/10.0;
                vm.genre5=num5/3.0;
                vm.genre6=num6/3.0;
                if (vm.genre1Score>=3.26){
                    vm.genre1Score ='五级'
                }else if(vm.genre1Score>=2.45){
                    vm.genre1Score ='四级'
                }else if(vm.genre1Score>1.95){
                    vm.genre1Score ='三级'
                }else if(vm.genre1Score>=1.47){
                    vm.genre1Score ='二级'
                }else {
                    vm.genre1Score ='一级'
                }
                 //1.身体疲劳
                if(vm.genre1>=3.48){
                    vm.genre1 = '五级'
                     vm.genrede[0]=vm.genredes["身体疲劳"][4]
                    // vm.genrede[0]=vm.genres[4]["genreDes"]
                }else if(vm.genre1>=2.63){
                    vm.genre1 = '四级'
                    vm.genrede[0]=vm.genredes["身体疲劳"][3]
                }else if(vm.genre1>=1.78){
                    vm.genre1 = '三级'
                    vm.genrede[0]=vm.genredes["身体疲劳"][2]
                }else if(vm.genre1>=1.10){
                    vm.genre1 = '二级'
                    vm.genrede[0]=vm.genredes["身体疲劳"][1]
                }else {
                    vm.genre1 = '一级'
                     vm.genrede[0]=vm.genredes["身体疲劳"][0]
                    // vm.genrede[0]=vm.genres[1]["genreDes"]
                }
                //2.关系敏感
                if(vm.genre2>=3.33){
                    vm.genre2 = '五级'
                    vm.genrede[1]=vm.genredes["关系敏感"][4]
                }else if(vm.genre2>=2.51){
                    vm.genre2 = '四级'
                    vm.genrede[1]=vm.genredes["关系敏感"][3]
                }else if(vm.genre2>=1.68){
                    vm.genre2 = '三级'
                    vm.genrede[1]=vm.genredes["关系敏感"][2]
                }else if(vm.genre2>=1.05){
                    vm.genre2 = '二级'
                    vm.genrede[1]=vm.genredes["关系敏感"][1]
                }else {
                    vm.genre2 = '一级'
                    vm.genrede[1]=vm.genredes["关系敏感"][0]
                }
                //3.郁闷程度
                if(vm.genre3>=3.42){
                    vm.genre3 = '五级'
                    vm.genrede[2]=vm.genredes["郁闷程度"][4]
                }else if(vm.genre3>=2.55){
                    vm.genre3 = '四级'
                    vm.genrede[2]=vm.genredes["郁闷程度"][3]
                }else if(vm.genre3>=1.77){
                    vm.genre3 = '三级'
                    vm.genrede[2]=vm.genredes["郁闷程度"][2]
                }else if(vm.genre3>=1.08){
                    vm.genre3 = '二级'
                    vm.genrede[2]=vm.genredes["郁闷程度"][1]
                }else {
                    vm.genre3 = '一级'
                     vm.genrede[2]=vm.genredes["郁闷程度"][0]
                }

                //4.焦虑程度
                if(vm.genre4>=3.26){
                    vm.genre4 = '五级'
                    vm.genrede[3]=vm.genredes["焦虑程度"][4]
                }else if(vm.genre4>=2.37){
                    vm.genre4 = '四级'
                    vm.genrede[3]=vm.genredes["焦虑程度"][3]
                }else if(vm.genre4>=1.51){
                    vm.genre4 = '三级'
                    vm.genrede[3]=vm.genredes["焦虑程度"][2]
                }else if(vm.genre4>=1.04){
                    vm.genre4 = '二级'
                    vm.genrede[3]=vm.genredes["焦虑程度"][1]
                }else {
                    vm.genre4 = '一级'
                    vm.genrede[3]=vm.genredes["焦虑程度"][0]
                }

                //5.紧张反应
                if(vm.genre5>=3.12){
                    vm.genre5 = '五级'
                    vm.genrede[4]=vm.genredes["紧张反应"][4]
                }else if(vm.genre5>=2.41){
                    vm.genre5 = '四级'
                    vm.genrede[4]=vm.genredes["紧张反应"][3]
                }else if(vm.genre5>=1.99){
                    vm.genre5 = '三级'
                    vm.genrede[4]=vm.genredes["紧张反应"][2]
                }else if(vm.genre5>=1.57){
                    vm.genre5 = '二级'
                    vm.genrede[4]=vm.genredes["紧张反应"][1]
                }else {
                    vm.genre5 = '一级'
                    vm.genrede[4]=vm.genredes["紧张反应"][0]
                }

                //6.工作-家庭冲突
                if(vm.genre6>=4.16){
                    vm.genre6 = '五级'
                    vm.genrede[5]=vm.genredes["工作-家庭冲突"][4]
                }else if(vm.genre6>=3.43){
                    vm.genre6 = '四级'
                    vm.genrede[5]=vm.genredes["工作-家庭冲突"][3]
                }else if(vm.genre6>=2.89){
                    vm.genre6 = '三级'
                    vm.genrede[5]=vm.genredes["工作-家庭冲突"][2]
                }else if(vm.genre6>=2.17){
                    vm.genre6 = '二级'
                    vm.genrede[5]=vm.genredes["工作-家庭冲突"][1]
                }else {
                    vm.genre6 = '一级'
                    vm.genrede[5]=vm.genredes["工作-家庭冲突"][0]
                }
                subjet["genreName"]= vm.genre1Score
                subjet["genre1Name"]= vm.genre1
                subjet["genre2Name"]= vm.genre2
                subjet["genre3Name"]= vm.genre3
                subjet["genre4Name"]= vm.genre4
                subjet["genre5Name"]= vm.genre5
                subjet["genre6Name"]= vm.genre6


                subjet["genre1des"]= vm.genrede[0]
                subjet["genre2des"]= vm.genrede[1]
                subjet["genre3des"]= vm.genrede[2]
                subjet["genre4des"]= vm.genrede[3]
                subjet["genre5des"]= vm.genrede[4]
                subjet["genre6des"]= vm.genrede[5]
                if (falg) {
                    $.ajax({
                        cache : true,
                        type : "POST",
                        url : context + 'subjetvo/addScore',
                        data :JSON.stringify(subjet),
                        dataType : 'json',
                        contentType:'application/json',
                        error : function(request) {
                            parent.layer.alert("Connection error");
                        },
                        success : function(data) {
                            if (data.code === 200) {
                                if (data.data.code === 200){
                                    layer.open({
                                        type: 1,
                                        skin: 'layui-layer-nobg',
                                        title: '--解读--',
                                        area: ['550px', '580px'],
                                        shadeClose: false, //点击遮罩关闭
                                        closeBtn: 0,
                                        content:

                                            '<div class="todo-wrap">\n' +
                                            '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +
                                            '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +
                                            '-------此生理心理解读，仅针对本次答题------- </br>'+
                                            '<label >&nbsp&nbsp身份证号： '+vm.scoreCode+'</label></br>'+
                                            '<ul class="todo-main layui-timeline " >\n' +
                                            ' <div class="todo-header">\n' +
                                            '<label  > -----&nbsp总分：'+vm.score+'&nbsp-----&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</label>' +
                                            '<label  > ------总症状：'+vm.genre1Score+'&nbsp------</label>' +
                                            '<ul class="layui-timeline">\n' +
                                            '  <li class="layui-timeline-item">\n' +
                                            '    <i class="layui-icon layui-timeline-axis"></i>\n' +
                                            '    <div class="layui-timeline-content layui-text">\n' +
                                            '      <h3 class="layui-timeline-title">'+vm.genreName[0]+':&nbsp&nbsp&nbsp'+vm.genre1 +'</h3>\n' +
                                            '      <p>'
                                            +vm.genrede[0] +
                                            '      </p>\n' +
                                            '    </div>\n' +
                                            '  </li>\n' +
                                            '  <li class="layui-timeline-item">\n' +
                                            '    <i class="layui-icon layui-timeline-axis"></i>\n' +
                                            '    <div class="layui-timeline-content layui-text">\n' +
                                            '      <h3 class="layui-timeline-title">'+vm.genreName[1]+':&nbsp&nbsp&nbsp'+vm.genre2+'</h3>\n' +
                                            '      <p>'+vm.genrede[1] +'</p>\n' +
                                            '    </div>\n' +
                                            '  </li>\n' +
                                            '  <li class="layui-timeline-item">\n' +
                                            '    <i class="layui-icon layui-timeline-axis"></i>\n' +
                                            '    <div class="layui-timeline-content layui-text">\n' +
                                            '      <h3 class="layui-timeline-title">'+vm.genreName[2]+':&nbsp&nbsp&nbsp'+vm.genre3 +'</h3>\n' +
                                            '      <p>\n' +
                                            vm.genrede[2] +
                                            '      </p>\n' +
                                            '    </div>\n' +
                                            '  </li>\n' +
                                            '  <li class="layui-timeline-item">\n' +
                                            '    <i class="layui-icon layui-timeline-axis"></i>\n' +
                                            '    <div class="layui-timeline-content layui-text">\n' +
                                            '      <h3 class="layui-timeline-title">'+vm.genreName[3]+':&nbsp&nbsp&nbsp'+vm.genre4 +'</h3>\n' +
                                            '      <p>\n' +
                                            vm.genrede[3] +
                                            '      </p>\n' +
                                            '    </div>\n' +
                                            '  </li>\n' +
                                            '  <li class="layui-timeline-item">\n' +
                                            '    <i class="layui-icon layui-timeline-axis"></i>\n' +
                                            '    <div class="layui-timeline-content layui-text">\n' +
                                            '      <h3 class="layui-timeline-title">'+vm.genreName[4]+':&nbsp&nbsp&nbsp'+vm.genre5 +'</h3>\n' +
                                            '      <p>\n' +
                                            vm.genrede[4] +
                                            '      </p>\n' +
                                            '    </div>\n' +
                                            '  </li>\n' +
                                            '  <li class="layui-timeline-item">\n' +
                                            '    <i class="layui-icon layui-timeline-axis"></i>\n' +
                                            '    <div class="layui-timeline-content layui-text">\n' +
                                            '      <h3 class="layui-timeline-title">'+vm.genreName[5]+':&nbsp&nbsp&nbsp'+vm.genre6 +'</h3>\n' +
                                            '      <p>\n' +
                                            vm.genrede[5] +
                                            '      </p>\n' +
                                            '    </div>\n' +
                                            '  </li>\n' +
                                            '</ul>  '+
                                            '                </div><div class="layui-form-item">' +

                                            // '</br><label  > 身体疲劳：'+vm.genre1+'</label>'+
                                            '</div>' +
                                            '</ul>'+
                                            '<button class="layui-btn layui-btn-radius layui-btn-normal " id="check">确 认</button>'+


                                            // '<ul class="todo-main" >\n' +
                                            // // '                <div class="todo-header">\n' +
                                            // // '                    <label  > 总分： '+vm.score+'</label>\n' +
                                            // // '                </div><div class="layui-form-item">' +
                                            // // '<label  > 总症状：'+vm.genre1Score+'</label></div>' +
                                            //
                                            // '</ul>'+

                                            '</div>'


                                    });
                                    $("#check").click(function () {
                                        self.location.reload()
                                        return false;
                                    });

                                    layer.close(index);

                                    parent.layer.msg("答题完成");

                                } else if(data.data.code === 500){
                                    parent.layer.msg("答题失败");
                                }
                                var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
                                parent.layer.close(index);
                            }
                        }
                    });
                }else {
                    if(code){
                        parent.layer.msg("第"+t+"题没有答！");
                    }


                    // layer.open({
                    //     type: 2,
                    //     title: '很多时候，我们想最大化看，比如像这个页面。',
                    //     shadeClose: true,
                    //     shade: false,
                    //     maxmin: true, //开启最大化最小化按钮
                    //     area: ['893px', '600px'],
                    //     content:  context
                    // });




            }

            },


            getSubjetList: function () {
                $.ajax({
                    url: context+'subjetvo/subjetList?group=心理评估' ,
                    type: 'GET',
                    success: function (res) {
                        vm.tableData = res.data.subjets;
                        vm.genres=res.data.genres;

                    }
                });
            }

        },



        mounted: function () {
            this.getSubjetList();
        }
    });
});