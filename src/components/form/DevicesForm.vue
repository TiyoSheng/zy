<template>
  <div>
    <a-modal :visible="visible" title="添加机床" destroyOnClose :maskClosable="false" @ok="handleOk" @cancel="handleCancel">
      <a-form ref="form" :model="formState" name="form" :validateOnRuleChange="false" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }" autocomplete="off" scrollToFirstError>
        <a-form-item label="机床名称" name="name" :rules="[{ required: true, message: '输入机床名称' }]">
          <a-input v-model:value="formState.name" name="name" />
        </a-form-item>
        <a-form-item label="IP地址" name="ip" :rules="[{ required: true, message: '输入机床ip地址' }]">
          <a-input v-model:value="formState.ip" name="ip" />
        </a-form-item>
        <a-form-item label="状态" name="status" >
          <a-select
            ref="select"
            :options="statusList"
            optionFilterProp="name"
            v-model:value="formState.status"
            style="width: 100%"
          />
        </a-form-item>
        <a-form-item label="加工时间(h)" name="runTime" >
          <a-input v-model:value="formState.runTime" name="runTime" />
        </a-form-item>
        <a-form-item label="空闲时间(h)" name="freeTime" >
          <a-input v-model:value="formState.freeTime" name="freeTime" />
        </a-form-item>
        <a-form-item label="故障时间(h)" name="bugTime" >
          <a-input v-model:value="formState.bugTime" name="bugTime" />
        </a-form-item>
        <a-form-item label="关机时间(h)" name="stopTime" >
          <a-input v-model:value="formState.stopTime" name="stopTime" />
        </a-form-item>
        <a-form-item label="工作进度(%)" name="progress" >
          <a-input v-model:value="formState.progress" name="progress" />
        </a-form-item>
        <a-form-item label="有效率(%)" name="er" >
          <a-input v-model:value="formState.er" name="er" />
        </a-form-item>
        <a-form-item label="表现性" name="ex" >
          <a-input v-model:value="formState.ex" name="ex" />
        </a-form-item>
        <a-form-item label="质量指数" name="quality" >
          <a-input v-model:value="formState.quality" name="quality" />
        </a-form-item>
        <a-form-item label="oee" name="oee" >
          <a-input type v-model:value="formState.oee" name="oee" />
        </a-form-item>
        <a-form-item label="备注" name="remark">
          <a-textarea v-model:value="formState.remark" name="remark" />
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal :visible="isShowReplace" title="添加替换食材" destroyOnClose :maskClosable="false" @ok="addReplace" @cancel="isShowReplace = false">
      <a-select placeholder="Please select" mode="multiple" v-model:value="optionalFoodIds" style="width: 100%" :options="foods" :field-names="{ label: 'name', value: 'id' }" optionFilterProp="name" />
    </a-modal>
  </div>
</template>
<script>
import { ref, watch } from 'vue';
import { status } from '../../data/devices'
export default {
  name: 'ProductForm',
  props: ['visible', 'recordId', 'formData', 'formType', 'recipeCategory', 'recipesChoices', 'foods'],
  setup(props) {
    const formState = ref(props.formData || {});
    const isShowReplace = ref(false);
    const optionalFoodIds = ref([]);
    let bomIndex = -1;
    watch(
      () => props.formData,
      newVal => (formState.value = newVal),
    );
    const addBom = () => {
      if (!formState.value.bom) formState.value.bom = [];
      formState.value.bom.push({
        grams: '',
        foodId: '',
      });
    };
    const showAddReplace = index => {
      bomIndex = index;
      let bom = formState.value.bom[bomIndex];
      optionalFoodIds.value = bom.optionalFoodIds || [];
      isShowReplace.value = true;
    };
    const addReplace = () => {
      if (bomIndex >= 0) {
        let bom = formState.value.bom[bomIndex];
        bom.optionalFoodIds = optionalFoodIds.value;
        formState.value.bom[bomIndex] = bom;
        isShowReplace.value = false;
        bomIndex = -1;
        optionalFoodIds.value = [];
      }
    };
    const removeBom = item => {
      console.log(item);
      let index = formState.value.bom.indexOf(item);
      if (index !== -1) {
        formState.value.bom.splice(index, 1);
      }
    };
    return {
      statusList: ref(status),
      removeBom,
      formState,
      isShowReplace,
      optionalFoodIds,
      form: ref(null),
      addBom,
      addReplace,
      showAddReplace,
    };
  },

  data() {
    return {
      isOk: false,
      errMsg: '',
    };
  },

  watch: {
    formState: {
      handler() {
        this.isOk = -1;
        this.errMsg = '';
      },

      deep: true,
      immediate: true,
    },
  },

  methods: {
    setImg(e, param, multiple) {
      console.log(e);
      let img = e.file;
      let formState = this.formState;
      if (multiple) {
        if (!formState[param] || !Array.isArray(formState[param])) formState[param] = [];
        formState[param] = formState[param].concat(img);
      } else {
        formState[param] = img;
      }
      console.log(formState);
      this.formState = JSON.parse(JSON.stringify(formState));
    },
    removeImg(id, param) {
      console.log(id);
      let formState = this.formState;
      let images = formState[param];
      images.forEach((e, index) => {
        if (e.id == id) {
          images.splice(index, 1);
        }
      });
      formState[param] = images;
      this.formState = JSON.parse(JSON.stringify(formState));
    },
    handleOk() {
      this.form
        .validateFields()
        .then(res => {
          let formState = Object.assign(this.formState, res);
          this.$emit('formOk', formState);
        })
        .catch(err => {
          console.error(err);
          this.$message.error(err.errorFields[0].errors[0]);
        });
    },
    handleCancel() {
      this.$emit('formCancel');
    },

    // 校验食谱
    testRecipeHandler() {
      const that = this;

      this.$emit('recipesTesting', {
        limitName: this.formState.limitName,
        hook({ isOk, errMsg, tonicGrams } = {}) {
          that.isOk = isOk;
          that.errMsg = errMsg;
        },
      });
    },
  },
};
</script>
<style>
.ant-form-item-control-input-content {
  /* display: flex; */
}
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
