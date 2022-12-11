<template>
  <div>
    <div class="operations">
      <div style="flex: 1"></div>
      <a-button @click="addVehicleBrandVisible = true">添加</a-button>
    </div>
    <TiyoTable :gData="dataSource" :gColumns="columns" :gInnerColumns="innerColumns" />
  </div>
</template>
<script>
import { users } from '../data/devices';
import TiyoTable from '../components/TiyoTable.vue';
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
          title: 'id',
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: '用户名',
          dataIndex: 'name',
          key: 'name',
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
      let devicesData = localStorage.getItem('users') || ''
      if (devicesData) {
        this.dataSource = JSON.parse(devicesData)
      } else {
        this.dataSource = users
        localStorage.setItem('users', JSON.stringify(users))
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
