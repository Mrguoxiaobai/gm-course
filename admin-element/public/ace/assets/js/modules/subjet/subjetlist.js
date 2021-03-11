var vm = new Vue({
    el: '#app1',
    data: {
        tableData: [],
        total: 50,
        page_size: 20,
        current_page: 1,
        start:'',
        end:'',
        orgname:''
    },
    // computed:{
    //     <!-- 一个计算属性的getter -->
    //     start:function(){
    //         <!-- this指向vm实例 -->
    //         return this.start
    //     }
    // },

    methods: {


        getExcle:function () {
            if(vm.orgname==''){
                vm.orgname='all'
            }
            startdate=vm.start.getFullYear() + '-' + (vm.start.getMonth() + 1) + '-' + vm.start.getDate() + ' ' + vm.start.getHours() + ':' + vm.start.getMinutes() + ':' + vm.start.getSeconds()
            enddate=vm.end.getFullYear() + '-' + (vm.end.getMonth() + 1) + '-' + vm.end.getDate() + ' ' + vm.end.getHours() + ':' + vm.end.getMinutes() + ':' + vm.end.getSeconds()
            window.location.href=context + 'subjetvo/excelSubjets?start_date='+startdate+'&end_date='+enddate+'&orgname='+vm.orgname
            if(vm.orgname=='all'){
                vm.orgname=''
            }

            // $.ajax({
            //     url: context + 'subjetvo/excelSubjets?start_date='+startdate+'&end_date='+enddate,
            //     type: 'GET',
            //     success: function (res) {
            //         console.log(res);
            //         window.open(res.url)
            //
            //     }
            // });
        },
        handleSizeChange: function (val) {
            vm.page_size = val;
            this.getScoreList();
        },
        handleCurrentChange: function (val) {
            vm.current_page = val;
            this.getScoreList();
        },

        getScoreList: function () {
            startdate=vm.start.getFullYear() + '-' + (vm.start.getMonth() + 1) + '-' + vm.start.getDate() + ' ' + vm.start.getHours() + ':' + vm.start.getMinutes() + ':' + vm.start.getSeconds()
            enddate=vm.end.getFullYear() + '-' + (vm.end.getMonth() + 1) + '-' + vm.end.getDate() + ' ' + vm.end.getHours() + ':' + vm.end.getMinutes() + ':' + vm.end.getSeconds()
           if(vm.orgname==''){
               vm.orgname='all'
           }
            console.log(vm.orgname+"123")
            $.ajax({
                url: context + 'subjetvo/subjets?page=' + this.current_page + '&page_size=' + this.page_size+'&start_date='+startdate+'&end_date='+enddate+'&orgname='+vm.orgname,
                type: 'GET',
                success: function (res) {
                    console.log(res);
                    vm.tableData = res.data.scores;
                    vm.total = res.data.total;
                    vm.page_size = res.data.page_size;
                    vm.current_page = res.data.page;
                    if(vm.orgname=='all'){
                        vm.orgname=''
                    }
                }
            });
        }

    },

    //页面加载时触发的函数
    mounted: function () {
        this.getScoreList();
    }
});
