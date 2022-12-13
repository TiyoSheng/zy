<template>
  <div>
    <div class="operations">
      <a-input-search
        v-model:value="keywordValue"
        placeholder="输入机床ID搜索"
        enter-button
        @search="() => isShow = true"
        style="width: 300px;outline: none"
      />
      <div style="flex: 1"></div>
    </div>
    <div v-if="isShow">
      <a-radio-group v-model:value="size" button-style="solid" style="margin-bottom: 16px;margin-top: 16px">
        <a-radio-button value="1">主轴与伺服信息</a-radio-button>
        <a-radio-button value="2">刀具信息</a-radio-button>
        <a-radio-button value="3">PMC数据</a-radio-button>
      </a-radio-group>
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="相对位置">
          <div style="display: flex;align-items: center;flex-wrap: wrap;">
            <a-card size="small" title="相对位置" style="width: 150px;margin-right: 20px">
              <p>U: -1.51</p>
              <p>W: 0</p>
            </a-card>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="绝对位置">
          <div style="display: flex;align-items: center;flex-wrap: wrap;">
            <a-card size="small" title="绝对位置" style="width: 150px;margin-right: 20px">
              <p>X: 0</p>
              <p>Z: 0</p>
            </a-card>
          </div>
        </a-tab-pane>
        <a-tab-pane key="3" tab="综合">
          <div style="display: flex;align-items: center;flex-wrap: wrap;">
            <a-card size="small" title="相对位置" style="width: 150px;margin-right: 20px">
              <p>U: -1.51</p>
              <p>W: 0</p>
            </a-card>
            <a-card size="small" title="绝对位置" style="width: 150px;margin-right: 20px">
              <p>X: 0</p>
              <p>Z: 0</p>
            </a-card>
            <a-card size="small" title="机器位置" style="width: 150px;margin-right: 20px">
              <p>X: -341.76</p>
              <p>Z: -344.38</p>
            </a-card>
            <a-card size="small" title="剩余要走的量" style="width: 150px;margin-right: 20px">
              <p>X: -5</p>
              <p>Z: 0</p>
            </a-card>
          </div>
        </a-tab-pane>
      </a-tabs>
      <a-tabs v-model:activeKey="activeKey2" style="margin-top: 20px">
        <a-tab-pane key="1" tab="负载">
          <div style="display: flex;align-items: center;flex-wrap: wrap;">
            <a-card size="small" title="负载信息" style="width: 150px;margin-right: 20px">
              <p>负载信息</p>
            </a-card>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="伺服">
          <div style="display: flex;align-items: center;margin-bottom: 20px">
            <a-button>主轴/伺服负载信息</a-button>
            <a-input value="" placeholder="请输入主轴0，伺服-1" style="width: 300px;margin-left:20px" />
          </div>
          <div style="display: flex;align-items: center;flex-wrap: wrap;">
            <a-card size="small" title="" style="width: 250px;margin-right: 20px">
              <p>伺服的加载值： 10 0 0</p>
              <p>主轴的加载值： 0</p>
              <p>伺服的加载值： 5 0 0</p>
              <p>主轴的加载值： 3</p>
            </a-card>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
import { users } from '../data/devices';
export default {

  data() {
    return {
      isShow: false,
      activeKey: '3',
      activeKey2: '2',
      size: '1',
      vehicleBrandId: '',
      formState: {},
      addVehicleBrandVisible: false,
      addVehicleVisible: false,
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
