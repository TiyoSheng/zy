<template>
  <div class="menu">
    <a-menu
      :selectedKeys="selectedKeys"
      :openKeys="openKeys"
      theme="dark"
      mode="inline"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <span style="color: #FFF">
            <BookOutlined />
            <span style="color: #FFF">系统管理</span>
          </span>
        </template>
        <a-menu-item key="3"><span class="nav-text"><router-link to="/devices">设备管理</router-link></span></a-menu-item>
        <a-menu-item key="4"><span class="nav-text"><router-link to="/users">用户管理</router-link></span></a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span style="color: #FFF">
            <BarsOutlined />
            <span style="color: #FFF">实时状态检测</span>
          </span>
        </template>
        <a-menu-item key="5"><span class="nav-text"><router-link to="/running-status">机床运行状态</router-link></span></a-menu-item>
        <a-menu-item key="6"><span class="nav-text"><router-link to="/energy">实时能效分析</router-link></span></a-menu-item>
      </a-sub-menu>
      <a-menu-item key="7">
        <UserOutlined />
        <span class="nav-text"><router-link to="/alarm-info">报警信息</router-link></span>
      </a-menu-item>
      <a-menu-item key="8">
        <BarsOutlined />
        <span class="nav-text"><router-link to="/bug">故障识别</router-link></span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
// import { ref } from "vue";
export default {
  name: "SiderMenu",
  props: ['selectedKeys', 'openKeys'],
  setup() {
    return {
    };
  },
};
</script>

<style lang="scss">
.ant-menu-item {
  a {
    color: #fff !important;
  }
}
</style>
