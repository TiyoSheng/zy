<template>
  <div>
    <div class="operations">
      <div style="flex: 1"></div>
    </div>
    <div style="margin-bottom: 30px">
      <a-card hoverable style="width: 300px">
        <a-card-meta title="Admin" description="超级管理员">
          <template #avatar>
            <a-avatar :size="48" src="/pic.jpg" />
          </template>
        </a-card-meta>
        <a-card-meta style="border-top: 1px solid #f0f0f0;margin-top:10px;padding-top:10px">
          <template #description>
            <p>上次登录时间：2022-5-29</p>
            <p>上次登录地点：南京</p>
          </template>
        </a-card-meta>
      </a-card>
      <a-card size="small" title="正常和异常的机床总比例" style="width: 300px;margin-top: 20px">
        <p>正常机床 <a-progress :percent="100" status="active" /></p>
        <p>异常机床 <a-progress :percent="0" /></p>
      </a-card>
    </div>
    <TiyoTable :gData="dataSource" :gColumns="columns" />
  </div>
</template>
<script>
import TiyoTable from '../components/TiyoTable.vue';
// import { use } from 'echarts/core';
// import { CanvasRenderer } from 'echarts/renderers';
// import { PieChart } from 'echarts/charts';
// import {
//   TitleComponent,
//   TooltipComponent,
//   LegendComponent,
// } from 'echarts/components';
// import VChart from 'vue-echarts';
export default {
  components: {
    TiyoTable,
  },

  data() {
    return {
      vehicleBrandId: '',
      formState: {},
      addVehicleBrandVisible: false,
      addVehicleVisible: false,
      isShow: false,
      imgUrl: '',
      dataSource: [],
      columns: [
        {
          title: '图片',
          dataIndex: 'img',
          key: 'img',
          customRender: val => {
            return <img src={val.value || ''} style="width: 120px" />
          }
        },
        {
          title: '机床信息',
          dataIndex: 'id',
          key: 'id',
          customRender: val => {
            return <div>
              <a-card size="small" title="" style="background: none;border: none">
                <p>机床编号：{val.record.id}</p>
                <p>机床名称：{val.record.name}</p>
                <p>轴承数目：{val.record.num}</p>
              </a-card>
            </div>
          }
        },
        {
          title: '轴承状态',
          dataIndex: 'name',
          key: 'name',
          customRender: val => {
            return <div>
              <a-card size="small" title="" style="background: none;border: none">
                <div>
                  <div>
                    <p>轴承编号：{val.record.status[0]}</p>
                    <p style="display: flex;align-items: center;">轴承状态：<span type="primary" size="small" style="background: #3f9315;padding: 4px 2px;text-align: center;color: #fff;font-size:12px;border-radius:2px">正常</span></p>
                  </div>
                  {
                    val.record.status[1] ? (
                       <div style="margin-top: 10px">
                        <p>轴承编号：{val.record.status[1]}</p>
                        <p style="display: flex;align-items: center;">轴承状态：<span type="primary" size="small" style="background: #3f9315;padding: 4px 2px;text-align: center;color: #fff;font-size:12px;border-radius:2px">正常</span></p>
                      </div>
                    ) : ''
                  }
                 
                </div>
              </a-card>
            </div>
          }
        },
        {
          title: '上次登录时间',
          dataIndex: 'time',
          key: 'time',
        }
      ]
    };
  },
  created() {
    this.getPetUsers();
  },
  methods: {
    showImg(url) {
      console.log(url);
      this.isShow = true;
      this.imgUrl = url;
    },

    getPetUsers() {
      let devicesData = [{
        img: '/1001.png',
        id: 1001,
        name: 'CKQ6450 全功能数控车床',
        num: 1,
        status: ['1-1'],
        time: '2022-5-29 16:06:34'
      }, {
        img: '/1002.png',
        id: 1002,
        name: '五轴加工中心 MCV-L850-5',
        num: 2,
        status: ['2-1', '2-2'],
        time: '2022-5-29 16:07:25'
      }, {
        img: '/1003.png',
        id: 1003,
        name: 'CKY400G 数控车床',
        num: 1,
        status: ['3-1'],
        time: '2022-5-29 16:10:06'
      }]
      this.dataSource = devicesData
    },
  },
};
</script>
<style lang="scss" scoped></style>
<style>
.ant-image {
  width: 36px;
}
</style>
