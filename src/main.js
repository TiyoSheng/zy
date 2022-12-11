import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Button, message, Layout, Menu, Breadcrumb, Table, Modal, Form, Input, Upload, Tooltip, Select, Dropdown, Image, Popconfirm, Typography, Divider, Progress, DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import { MessageOutlined, PlusOutlined, LoadingOutlined, HomeOutlined, BarsOutlined, CarOutlined, ProjectOutlined, TrademarkOutlined, InboxOutlined, ShoppingOutlined, BookOutlined, MinusCircleOutlined, UserOutlined, SyncOutlined } from '@ant-design/icons-vue';
const app = createApp(App);

app
  .use(Button)
  .use(DatePicker)
  .use(Progress)
  .use(Layout)
  .use(Menu)
  .use(Modal)
  .use(Breadcrumb)
  .use(Popconfirm)
  .use(Typography)
  .use(router)
  .use(Table)
  .use(Form)
  .use(Input)
  .use(Upload)
  .use(Tooltip)
  .use(Select)
  .use(Dropdown)
  .use(Image)
  .use(Divider)
  .component('MessageOutlined', MessageOutlined)
  .component('MinusCircleOutlined', MinusCircleOutlined)
  .component('PlusOutlined', PlusOutlined)
  .component('LoadingOutlined', LoadingOutlined)
  .component('HomeOutlined', HomeOutlined)
  .component('BarsOutlined', BarsOutlined)
  .component('CarOutlined', CarOutlined)
  .component('ProjectOutlined', ProjectOutlined)
  .component('TrademarkOutlined', TrademarkOutlined)
  .component('InboxOutlined', InboxOutlined)
  .component('ShoppingOutlined', ShoppingOutlined)
  .component('BookOutlined', BookOutlined)
  .component('UserOutlined', UserOutlined)
  .component('SyncOutlined', SyncOutlined)
  .mount('#app');

app.config.globalProperties.$message = message;
