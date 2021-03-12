<template>
  <div>
    <div class="layui-fluid" id="app">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-sm6 layui-col-md3">
          <div class="layui-card">
            <div class="layui-card-header">
              2014年
              <span class="layui-badge layui-bg-red layuiadmin-badge">体检人数</span>
            </div>
            <div class="layui-card-body layuiadmin-card-list">
              <p class="layuiadmin-big-font">58766</p>
              体检率：94.43%
            </div>
          </div>
        </div>
        <div class="layui-col-sm6 layui-col-md3">
          <div class="layui-card">
            <div class="layui-card-header">
              2015年
              <span class="layui-badge layui-bg-cyan layuiadmin-badge">体检人数</span>
            </div>
            <div class="layui-card-body layuiadmin-card-list">
              <p class="layuiadmin-big-font">57252</p>
              体检率：96.11%
            </div>
          </div>
        </div>
        <div class="layui-col-sm6 layui-col-md3">
          <div class="layui-card">
            <div class="layui-card-header">
              2016年
              <span class="layui-badge layui-bg-blue layuiadmin-badge">体检人数</span>
            </div>
            <div class="layui-card-body layuiadmin-card-list">
              <p class="layuiadmin-big-font">57748</p>
              体检率：95.68%
            </div>
          </div>
        </div>
        <div class="layui-col-sm6 layui-col-md3">
          <div class="layui-card">
            <div class="layui-card-header">
              2017年
              <span class="layui-badge layui-bg-orange layuiadmin-badge">体检人数</span>
            </div>
            <div class="layui-card-body layuiadmin-card-list">
              <p class="layuiadmin-big-font">54790</p>
              体检率：100%
            </div>
          </div>
        </div>
        <div class="layui-col-sm6 layui-col-md3">
          <div class="layui-card">
            <div class="layui-card-header">
              2018年
              <span class="layui-badge layui-bg-gray layuiadmin-badge">体检人数</span>
            </div>
            <div class="layui-card-body layuiadmin-card-list">
              <p class="layuiadmin-big-font">54349</p>
              体检率：99%
            </div>
          </div>
        </div>
        <div class="layui-col-sm6 layui-col-md3">
          <div class="layui-card">
            <div class="layui-card-header">
              2019年
              <span class="layui-badge layui-bg-green layuiadmin-badge">体检人数</span>
            </div>
            <div class="layui-card-body layuiadmin-card-list">
              <p class="layuiadmin-big-font">53331</p>
              体检率：98.13%
            </div>
          </div>
        </div>
        <div class="layui-col-sm6 layui-col-md3">
          <div class="layui-card">
            <div class="layui-card-header">
              2020年
              <span class="layui-badge layui-bg-black layuiadmin-badge">体检人数</span>
            </div>
            <div class="layui-card-body layuiadmin-card-list">
              <p class="layuiadmin-big-font">0</p>
              体检率：0%
            </div>
          </div>
        </div>

        <div class="layui-col-sm12">
          <div class="layui-card">
            <div class="layui-card-header">
              <span class="layui-badge layui-bg-red ">三类人员统计表</span>
            </div>
            <div class="layui-card-body">
              <div class="layui-row">
                <div class="layui-col-sm12">
                    <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="layui-col-sm12">
          <div class="layui-card">
            <div class="layui-card-header">
              <span class="layui-badge layui-bg-red ">体检异常统计表</span>
            </div>
            <div class="layui-card-body">
              <div class="layui-row">
                <div class="layui-col-sm12">
                    <ve-histogram :data="chartData1" :settings="chartSettings1"></ve-histogram>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
  </div>
  </div>
</template>
<script>
export default {
  name:'home',
  data() {return{
    chartData: {
      columns: ['日期', '一类', '二类','三类','总'],
      rows: [
        {'日期': '2014年', '一类': 44117, '二类': 4265,'三类':5261},
        {'日期': '2015年', '一类': 44367, '二类': 3406,'三类':4642},
        {'日期': '2016年', '一类': 45184, '二类': 4040,'三类':6048},
        {'日期': '2017年', '一类': 45558, '二类': 4168,'三类':6376},
        {'日期': '2018年', '一类': 45378, '二类': 4493,'三类':6364},
        {'日期': '2019年', '一类': 44261, '二类': 3665,'三类':6010},
      ]
    },
    chartSettings: {
      metrics: ['一类', '二类','三类'],
      dimension: ['日期']
    },

    chartData1:{
      columns: ['年份','超重',	'高血压','甘油三酯增高','总胆固醇增高','高血糖','低密度脂蛋白增高	','谷氨酰转酞酶增高','谷丙转氨酶增高',	'脂肪肝（轻度）'],
      rows: [
        {'年份':'2014年','超重':34710,'高血压':18343,'甘油三酯增高':18057,'总胆固醇增高':18388,'高血糖':6960,'低密度脂蛋白增高	':15829,'谷氨酰转酞酶增高':9801,'谷丙转氨酶增高':8183,'脂肪肝（轻度）':13196},
        {'年份':'2015年','超重':34527,'高血压':16681,'甘油三酯增高':17516,'总胆固醇增高':12089,'高血糖':11769,'低密度脂蛋白增高':8655,'谷氨酰转酞酶增高':6478,'谷丙转氨酶增高':5792,'脂肪肝（轻度）':13226},
        {'年份':'2016年','超重':35548,'高血压':20048,'甘油三酯增高':16272,'总胆固醇增高':14879,'高血糖':11274,'低密度脂蛋白增高':9098,'谷氨酰转酞酶增高':9580,'谷丙转氨酶增高':7357,'脂肪肝（轻度）':13928},
        {'年份':'2017年','超重':34884,'高血压':19921,'甘油三酯增高':16777,'总胆固醇增高':15780,'高血糖':11332,'低密度脂蛋白增高':11675,'谷氨酰转酞酶增高':10488,'谷丙转氨酶增高':8467,'脂肪肝（轻度）':13152},
        {'年份':'2018年','超重':31741,'高血压':18838,'甘油三酯增高':18203,'总胆固醇增高':16943,'高血糖':11970,'低密度脂蛋白增高':14391,'谷氨酰转酞酶增高':11662,'谷丙转氨酶增高':9571,'脂肪肝（轻度）':11911},
        {'年份':'2019年','超重':32319,'高血压':19371,'甘油三酯增高':19333,'总胆固醇增高':10222,'高血糖':13269,'低密度脂蛋白增高':12244,'谷氨酰转酞酶增高':11413,'谷丙转氨酶增高':7102,'脂肪肝（轻度）':13444}
      ]
    },
    chartSettings1: {
      metrics: ['超重',	'高血压','甘油三酯增高','总胆固醇增高','高血糖','低密度脂蛋白增高	','谷氨酰转酞酶增高','谷丙转氨酶增高',	'脂肪肝（轻度）'],
      dimension: ['年份']
    },
    }

  }

}
</script>