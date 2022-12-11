<template>
  <div>
    <div class="operations">
      <div style="flex: 1"></div>
    </div>
    <div class="pie">
      <div v-for="item in dataSource" :key="item.id" class="">
        <v-chart class="chart" :option="getOption(item)" />
      </div>
    </div>
    <div class="title">机床群加工进度</div>
    <div class="p">
      <div v-for="item in dataSource" :key="item.id" class="p-item">
        <a-progress type="circle" :percent="item.progress" />
        <p>{{item.name}}</p>
      </div>
    </div>
    <TiyoTable :gData="dataSource" :gColumns="columns" />
  </div>
</template>
<script>
import TiyoTable from '../components/TiyoTable.vue';
import { devices } from '../data/devices'
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
// import { ref, defineComponent } from 'vue';
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);
export default {
  components: {
    TiyoTable,
    VChart
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
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          width: 80,
        },
        {
          title: '机床名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '有效率',
          dataIndex: 'er',
          key: 'er',
        },
        {
          title: '表现性',
          dataIndex: 'ex',
          key: 'ex',
        },
        {
          title: '质量指数',
          dataIndex: 'quality',
          key: 'quality'
        },
        {
          title: 'OEE',
          dataIndex: 'oee',
          key: 'oee',
        },
      ]
    };
  },
  created() {
    this.getPetUsers();
  },
  methods: {
    getOption(item) {
      console.log(item)
      let option = {
        title: {
          text: item.name,
          left: 'center',
          top: '20px',
          textStyle: {
            fontSize: '12px'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}h ({d}%)',
        },
        legend: {
          bottom: '0px',
          padding: 5,
          itemWidth: 10,
          itemHeight: 10,
          left: 'center'
        },
        series: [
          {
            name: item.name,
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            }, 
            data: [
              { value: item.runTime, name: '加工' },
              { value: item.freeTime, name: '空闲' },
              { value: item.bugTime, name: '故障' },
              { value: item.stopTime, name: '关机' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      return option
    },
    showImg(url) {
      console.log(url);
      this.isShow = true;
      this.imgUrl = url;
    },

    getPetUsers() {
      let devicesData = localStorage.getItem('devices') || ''
      if (devicesData) {
        this.dataSource = JSON.parse(devicesData)
      } else {
        this.dataSource = devices
        localStorage.setItem('devices', JSON.stringify(devices))
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.pie {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.chart {
  height: 250px;
  width: 200px;
}
.title {
  font-weight: 500;
  font-size: 14px;
}
.p {
  margin: 10px 0 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  .p-item {
    flex: 1;
    text-align: center;
    margin: 20px;
    p {
      margin-top: 10px !important;
    }
  }
}
</style>
<style>
.ant-image {
  width: 36px;
}
</style>
