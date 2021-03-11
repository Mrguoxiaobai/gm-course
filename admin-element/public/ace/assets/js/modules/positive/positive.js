var vm = new Vue({
    el: '#app',
    data: {
        tableData: [],
        total: 50,
        page_size: 5,
        current_page: 1,
        start:"",
        end:''
    },
    methods: {



        addPositive: function(){
            layer.open({
                type: 2,
                title: '新增',
                maxmin: true,
                shadeClose: false, // 点击遮罩关闭层
                area: ['800px', '520px'],
                content: context + 'positive/add',
                end: function () {
                    vm.getUserInfoList();
                }
            });
        },
        handleEdit: function(row) {
            layer.open({
                type: 2,
                title: '编辑',
                maxmin: true,
                shadeClose: false, // 点击遮罩关闭层
                area: ['800px', '520px'],
                content: context + 'positive/update?infoId='+row.infoId,
                end: function () {
                    vm.getUserInfoList();
                }
            });
        },
        handleDelete:function(row) {
            layer.confirm("您确定要删除吗？", function (index) {
                $.ajax({
                    url: context + 'positive/deletePositive?infoId=' + row.infoId,
                    type: 'GET',
                    success: function (res) {
                        if (res.code === 200){
                            if (res.data.code === 200){
                                layer.msg("操作成功");
                                vm.getUserInfoList();
                            } else {
                                layer.msg("操作失败");
                            }

                        }
                    }
                });
            });
        },
        formatShow: function (row, column) {
            return row.isShow == true ? '启用' : '未启用';
        },
        handleSizeChange: function (val) {
            vm.page_size = val;
            this.getUserInfoList();
        },
        handleCurrentChange: function (val) {
            vm.current_page = val;
            this.getUserInfoList();
        },

        getUserInfoList: function () {
            startdate=vm.start.getFullYear() + '-' + (vm.start.getMonth() + 1) + '-' + vm.start.getDate() + ' ' + vm.start.getHours() + ':' + vm.start.getMinutes() + ':' + vm.start.getSeconds()
            enddate=vm.end.getFullYear() + '-' + (vm.end.getMonth() + 1) + '-' + vm.end.getDate() + ' ' + vm.end.getHours() + ':' + vm.end.getMinutes() + ':' + vm.end.getSeconds()

            $.ajax({
                url: context + 'positive/getPositiveInfo?page=' + this.current_page + '&page_size=' + this.page_size+'&start_date='+startdate+'&end_date='+enddate,
                type: 'GET',
                success: function (res) {
                    console.log(res);
                    vm.tableData = res.data.UserInfoList;
                    vm.total = res.data.total;
                    vm.page_size = res.data.page_size;
                    vm.current_page = res.data.page;
                }
            });
        }

    },

    //页面加载时触发的函数
    mounted: function () {
        this.getUserInfoList();
    }
});
