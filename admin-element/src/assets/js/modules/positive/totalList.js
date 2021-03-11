var vm = new Vue({
    el: '#app',
    data: {
        value1:"",
        tableData: [],
        total: 50,
        page_size: 20,
        current_page: 1,
        start:"",
        end:''

    },
    methods: {


        handleSizeChange: function (val) {
            vm.page_size = val;
            this.getTotalList();
        },
        handleCurrentChange: function (val) {
            vm.current_page = val;
            this.getTotalList();
        },

        getTotalList: function () {
            startdate=vm.start.getFullYear() + '-' + (vm.start.getMonth() + 1) + '-' + vm.start.getDate() + ' ' + vm.start.getHours() + ':' + vm.start.getMinutes() + ':' + vm.start.getSeconds()
            enddate=vm.end.getFullYear() + '-' + (vm.end.getMonth() + 1) + '-' + vm.end.getDate() + ' ' + vm.end.getHours() + ':' + vm.end.getMinutes() + ':' + vm.end.getSeconds()
            $.ajax({
                url: context + 'pxmvo/totalList?page=' + this.current_page + '&page_size=' + this.page_size+'&start_date='+startdate+'&end_date='+enddate,
                type: 'GET',
                success: function (res) {
                    console.log(res);
                    vm.tableData = res.data.totalList;
                    vm.total = res.data.total;
                    vm.page_size = res.data.page_size;
                    vm.current_page = res.data.page;
                }
            });
        }

    },

    //页面加载时触发的函数
    mounted: function () {
        this.getTotalList();
    }
});
