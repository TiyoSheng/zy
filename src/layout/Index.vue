<template>
  <a-layout style="min-height:100vh">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
    >
      <SiderMenu :selectedKeys="selectedKeys" :openKeys="openKeys" />
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" >
        <div :style="{padding: '0 16px', fontWeight: '500', fontSize: '0px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', lineHeight: 1, height: '100%'}">
          <p style="font-size: 16px">基于物联网的数控机床群状态监测及故障诊断系统</p>
          <div class="user" :style="{ display: 'flex', alignItems: 'center', fontSize: '16px'}">
            user
          </div>
        </div>
      </a-layout-header>
      <!-- <a-breadcrumb style="margin: 16px">
        <a-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index"><router-link to="/">{{item}}</router-link></a-breadcrumb-item>
      </a-breadcrumb> -->
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '16px 24px', background: '#fff', minHeight: '360px', boxSizing: 'border-box' }">
          <router-view />
        </div>
      </a-layout-content>
      <!-- <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';
import SiderMenu from '../components/SiderMenu.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    SiderMenu,
  },
  setup() {
    const selectedKeys = ref([])
    const openKeys = ref([])
    const breadcrumb = ref([])
    const onCollapse = (collapsed, type) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = broken => {
      console.log(broken);
    };

    const route = useRoute()
    watch(() => route.path, () => {
      selectedKeys.value = route.meta.menuKey[0]
      openKeys.value = route.meta.menuKey[1]
      breadcrumb.value = route.meta.breadcrumb
    })

    return {
      breadcrumb,
      selectedKeys,
      openKeys,
      onCollapse,
      onBreakpoint,
    };
  },
  created() {
    console.log(this.$route)
    this.selectedKeys = this.$route.meta.menuKey[0]
    this.openKeys = this.$route.meta.menuKey[1]
    this.breadcrumb = this.$route.meta.breadcrumb
  }
});
</script>
<style>
p {
  margin: 0 !important;
}
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}

.ant-layout-content >div {
  padding-bottom: 64px !important;
}
</style>