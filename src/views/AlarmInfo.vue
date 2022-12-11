<template>
  <div>
    <div class="operations">
      <div style="flex: 1">
        <a-range-picker v-model:value="rangeValue" :locale="locale" style="margin-right: 20px" @change="dateChange" />
        <a-input-search
          v-model:value="keywordValue"
          placeholder="输入机床ID搜索"
          enter-button
          @search="getCasebooks"
          style="width: 300px;outline: none"
        />
      </div>
    </div>
    <TiyoTable :gData="dataSource" :gColumns="columns" :gInnerColumns="innerColumns" />
  </div>
</template>
<script>
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import { errorList } from '../data/devices';
import TiyoTable from '../components/TiyoTable.vue';
export default {
  components: {
    TiyoTable,
  },

  data() {
    return {
      locale: locale,
      rangeValue: '',
      keywordValue: '',
      vehicleBrandId: '',
      formState: {},
      addVehicleBrandVisible: false,
      addVehicleVisible: false,
      isShow: false,
      imgUrl: '',
      dataSource: [],
      columns: [
        {
          title: '序号',
          dataIndex: 'index',
          key: 'index'
        },
        {
          title: '报警编号',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: '报警描述',
          dataIndex: 'desc',
          key: 'desc',
        },
        {
          title: '解决方案',
          dataIndex: 'solution',
          key: 'solution',
        },
        {
          title: '报警时间',
          dataIndex: 'time',
          key: 'time',
        }
      ]
    };
  },
  created() {
    this.getPeterrorList();
  },
  methods: {
    showImg(url) {
      console.log(url);
      this.isShow = true;
      this.imgUrl = url;
    },

    dateChange(e, data) {
      console.log(data)
      let start = new Date(data[0]).getTime()
      let end = new Date(data[1]).getTime()
      let error = errorList
      let d = []
      if (data.length && data.length == 2 && data[0]) {
        error.forEach(e => {
          let time = new Date(e.time).getTime()
          if (time >= start && time <= end) {
            d.push(e)
          }
        })
        this.dataSource = d
      } else {
        this.dataSource = errorList
      }
      
    },

    getPeterrorList() {
      let devicesData = localStorage.getItem('errorList') || ''
      if (devicesData) {
        this.dataSource = JSON.parse(devicesData)
      } else {
        this.dataSource = errorList
        localStorage.setItem('errorList', JSON.stringify(errorList))
      }
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
