<template>
  <div>
    <div class="operations">
      <div style="flex: 1"></div>
      <a-button @click="(recordId = -1), (formType = 'add'), (showForm = true)">添加</a-button>
    </div>
    <TiyoTable :gData="dataSource" :gColumns="columns" />
    <DevicesForm :visible="showForm" :recordId="recordId" :formType="formType" :formData="formState" :recipeCategory="recipeCategory" :foods="foods" :recipesChoices="recipesChoices" @recipesTesting="recipesTesting" @formCancel="handleCancel" @formOk="handleOk" />
  </div>
</template>
<script>
import TiyoTable from '../components/TiyoTable.vue';
import DevicesForm from '../components/form/DevicesForm';
import { devices } from '../data/devices'
export default {
  components: {
    TiyoTable,
    DevicesForm,
  },
  data() {
    return {
      recipesChoices: [],
      recordId: -1,
      showForm: false,
      formType: 'add',
      dataSource: [],
      columns: [
        {
          title: '机床ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: '机床名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'IP地址',
          dataIndex: 'ip',
          key: 'ip'
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status'
        },
        {
          title: '备注',
          dataIndex: 'remark',
          key: 'remark'
        },
        {
          title: '操作',
          dataIndex: 'operation',
          key: 'operation',
          customRender: val => {
            return (
              <div>
                <a-dropdown
                  trigger={['click']}
                  overlay={
                    <a-menu>
                      <a-menu-item onClick={() => this.editRecipe(val.record)}>
                        <span>编辑</span>
                      </a-menu-item>
                      <a-menu-item onClick={() => this.editRecipe(val.record, 'publish')}>
                        <span v-html={val.record.isPublished ? '取消发布' : '发布'}></span>
                      </a-menu-item>
                      <a-menu-item onClick={() => this.editRecipe(val.record, 'del')}>
                        <span>删除</span>
                      </a-menu-item>
                    </a-menu>
                  }
                >
                  <a-button>操作</a-button>
                </a-dropdown>
              </div>
            );
          },
        },
      ],
    };
  },
  async created() {
    this.getDevices()
  },
  methods: {
    handleOk(formState) {
      console.log(formState)
      let dataSource = this.dataSource
      if (formState.id) {
        dataSource.forEach((e, i) => {
          if (e.id == formState.id) {
            dataSource[i] = formState
          }
        })
      } else {
        let id = +dataSource[dataSource.length - 1].id + 1
        formState.id = id
        dataSource.push(formState)
      }
      this.dataSource = JSON.parse(JSON.stringify(dataSource))
      this.showForm = false
      localStorage.setItem('devices', JSON.stringify(dataSource))
    },

    editRecipe(record, type) {
      if (type == 'del') {
        this.handleOk({ id: record.id, isDeleted: true })
      } else if (type == 'publish') {
        this.handleOk({ id: record.id, isPublished: !record.isPublished })
      } else {
        console.log(record)
        let formState = JSON.parse(JSON.stringify(record))
        this.formState = formState
        this.recordId = record.id
        this.formType = 'edit'
        this.showForm = true
      }
    },
    handleCancel() {
      this.showForm = false
      this.formState = {}
    },
    getDevices() {
      let devicesData = localStorage.getItem('devices') || ''
      if (devicesData) {
        this.dataSource = JSON.parse(devicesData)
      } else {
        this.dataSource = devices
        localStorage.setItem('devices', JSON.stringify(devices))
      }
    }
  },
};
</script>
<style lang="scss" scoped>

</style>
