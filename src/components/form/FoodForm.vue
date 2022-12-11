<template>
  <a-modal
    :visible="visible"
    title="添加食物"
    destroyOnClose
    style="width:680px"
    :maskClosable="false"
    @ok="handleOk"
    @cancel="handleCancel"
    class="footer"
  >
    <a-form
      ref="form"
      :model="formState"
      name="form"
      :validateOnRuleChange="false"
      :label-col="{ span: 12 }"
      :wrapper-col="{ span: 12 }"
      autocomplete="off"
      scrollToFirstError
      style="display: flex; align-items: center;flex-wrap: wrap;width:100%"
    >
      <a-form-item
        label="食材名称"
        name="originalName"
        :rules="[{ required: true, message: '输入名称' }]"
      >
        <a-input v-model:value="formState.originalName" name="originalName" />
      </a-form-item>
      <a-form-item
        label="前端名称"
        name="name"
        :rules="[{ required: true, message: '输入名称' }]"
      >
        <a-input v-model:value="formState.name" name="name" />
      </a-form-item>
      <a-form-item
        label="微盟id"
        name="goodsId"
      >
        <a-input v-model:value="formState.goodsId" name="goodsId" />
      </a-form-item>
      <a-form-item
        label="成本价格"
        name="costPrice"
      >
        <a-input v-model:value="formState.costPrice" name="costPrice" />
      </a-form-item>
      <a-form-item
        label="价格"
        name="price"
      >
        <a-input v-model:value="formState.price" name="price" />
      </a-form-item>
      <a-form-item
        label="分类"
        name="category"
      >
        <a-input v-model:value="formState.category" name="category" />
      </a-form-item>
      <a-form-item
        label="能量(kcal)"
        name="a0"
      >
        <a-input v-model:value="formState.a0" name="a0" />
      </a-form-item>
      <a-form-item
        label="总蛋白质(g)"
        name="b0"
      >
        <a-input v-model:value="formState.b0" name="b0" />
      </a-form-item>
      <a-form-item
        label="精氨酸(g)"
        name="c0"
      >
        <a-input v-model:value="formState.c0" name="c0" />
      </a-form-item>
      <a-form-item
        label="组氨酸(g)"
        name="d0"
      >
        <a-input v-model:value="formState.d0" name="d0" />
      </a-form-item>
      <a-form-item
        label="异亮氨酸(g)"
        name="e0"
      >
        <a-input v-model:value="formState.e0" name="e0" />
      </a-form-item>
      <a-form-item
        label="亮氨酸(g)"
        name="f0"
      >
        <a-input v-model:value="formState.f0" name="f0" />
      </a-form-item>
      <a-form-item
        label="赖氨酸(g)"
        name="g0"
      >
        <a-input v-model:value="formState.g0" name="g0" />
      </a-form-item>
      <a-form-item
        label="甲硫氨酸(g)"
        name="h0"
      >
        <a-input v-model:value="formState.h0" name="h0" />
      </a-form-item>
      <a-form-item
        label="胱氨酸(g)"
        name="i0"
      >
        <a-input v-model:value="formState.i0" name="i0" />
      </a-form-item>
      <a-form-item
        label="甲硫氨酸+半胱氨酸(g)"
        name="j0"
      >
        <a-input v-model:value="formState.j0" name="j0" />
      </a-form-item>
      <a-form-item
        label="苯丙氨酸(g)"
        name="k0"
      >
        <a-input v-model:value="formState.k0" name="k0" />
      </a-form-item>
      <a-form-item
        label="酪氨酸(g)"
        name="l0"
      >
        <a-input v-model:value="formState.l0" name="l0" />
      </a-form-item>
      <a-form-item
        label="苯丙氨酸+酪氨酸(g)"
        name="m0"
      >
        <a-input v-model:value="formState.m0" name="m0" />
      </a-form-item>
      <a-form-item
        label="苏氨酸(g)"
        name="n0"
      >
        <a-input v-model:value="formState.n0" name="n0" />
      </a-form-item>
      <a-form-item
        label="色氨酸(g)"
        name="o0"
      >
        <a-input v-model:value="formState.o0" name="o0" />
      </a-form-item>
      <a-form-item
        label="缬氨酸"
        name="p0"
      >
        <a-input v-model:value="formState.p0" name="p0" />
      </a-form-item>
      <a-form-item
        label="总脂类(g"
        name="q0"
      >
        <a-input v-model:value="formState.q0" name="q0" />
      </a-form-item>
      <a-form-item
        label="亚油酸(18:2）(g)"
        name="r0"
      >
        <a-input v-model:value="formState.r0" name="r0" />
      </a-form-item>
      <a-form-item
        label="a-亚麻酸(18:3）(g）"
        name="s0"
      >
        <a-input v-model:value="formState.s0" name="s0" />
      </a-form-item>
      <a-form-item
        label="花生四烯酸(20:4)(g)"
        name="td4"
      >
        <a-input v-model:value="formState.td4" name="td4" />
      </a-form-item>
      <a-form-item
        label="EPA+DHA(g)"
        name="t0"
      >
        <a-input v-model:value="formState.t0" name="t0" />
      </a-form-item>
      <a-form-item
        label="LA+AA:ALA+EPA+DHA"
        name="u0"
      >
        <a-input v-model:value="formState.u0" name="u0" />
      </a-form-item>
      <a-form-item
        label="总碳水化合物(g)"
        name="v0"
      >
        <a-input v-model:value="formState.v0" name="v0" />
      </a-form-item>
      <a-form-item
        label="钙(mg)"
        name="w0"
      >
        <a-input v-model:value="formState.w0" name="w0" />
      </a-form-item>
      <a-form-item
        label="磷(mg)"
        name="x0"
      >
        <a-input v-model:value="formState.x0" name="x0" />
      </a-form-item>
      <a-form-item
        label="钙：磷"
        name="y0"
      >
        <a-input v-model:value="formState.y0" name="y0" />
      </a-form-item>
      <a-form-item
        label="钾(mg)"
        name="z0"
      >
        <a-input v-model:value="formState.z0" name="z0" />
      </a-form-item>
      <a-form-item
        label="钠(mg)"
        name="a1"
      >
        <a-input v-model:value="formState.a1" name="a1" />
      </a-form-item>
      <a-form-item
        label="氯(mg)"
        name="b2"
      >
        <a-input v-model:value="formState.b2" name="b2" />
      </a-form-item>
      <a-form-item
        label="镁(mg)"
        name="c2"
      >
        <a-input v-model:value="formState.c2" name="c2" />
      </a-form-item>
      <a-form-item
        label="铁(mg)"
        name="d2"
      >
        <a-input v-model:value="formState.d2" name="d2" />
      </a-form-item>
      <a-form-item
        label="铜(mg)"
        name="e2"
      >
        <a-input v-model:value="formState.e2" name="e2" />
      </a-form-item>
      <a-form-item
        label="锰(mg)"
        name="f2"
      >
        <a-input v-model:value="formState.f2" name="f2" />
      </a-form-item>
      <a-form-item
        label="锌(mg)"
        name="g2"
      >
        <a-input v-model:value="formState.g2" name="g2" />
      </a-form-item>
      <a-form-item
        label="碘(mg)"
        name="h2"
      >
        <a-input v-model:value="formState.h2" name="h2" />
      </a-form-item>
      <a-form-item
        label="锌(mg)"
        name="h2"
      >
        <a-input v-model:value="formState.h2" name="h2" />
      </a-form-item>
      <a-form-item
        label="硒(mcg）"
        name="i2"
      >
        <a-input v-model:value="formState.i2" name="i2" />
      </a-form-item>
      <a-form-item
        label="维生素 A(IU)"
        name="j2"
      >
        <a-input v-model:value="formState.j2" name="j2" />
      </a-form-item>
      <a-form-item
        label="维生素 D(IU)"
        name="k2"
      >
        <a-input v-model:value="formState.k2" name="k2" />
      </a-form-item>
      <a-form-item
        label="维生素E(mg)"
        name="o2"
      >
        <a-input v-model:value="formState.o2" name="o2" />
      </a-form-item>
      <a-form-item
        label="维生素K(mg)"
        name="p2"
      >
        <a-input v-model:value="formState.p2" name="p2" />
      </a-form-item>
      <a-form-item
        label="维生素B1/硫胺素(mg)"
        name="r2"
      >
        <a-input v-model:value="formState.r2" name="r2" />
      </a-form-item>
      <a-form-item
        label="维生素B2/核黄素(mg)"
        name="s2"
      >
        <a-input v-model:value="formState.s2" name="s2" />
      </a-form-item>
      <a-form-item
        label="维生素B5/泛酸(mg)"
        name="t2"
      >
        <a-input v-model:value="formState.t2" name="t2" />
      </a-form-item>
      <a-form-item
        label="维生素B3/烟酸(mg)"
        name="u2"
      >
        <a-input v-model:value="formState.u2" name="u2" />
      </a-form-item>
      <a-form-item
        label="维生素B6/吡哆醇(mg)"
        name="v2"
      >
        <a-input v-model:value="formState.v2" name="v2" />
      </a-form-item>
      <a-form-item
        label="维生素B7/生物素(mg)"
        name="w2"
      >
        <a-input v-model:value="formState.w2" name="w2" />
      </a-form-item>
      <a-form-item
        label="维生素B9/叶酸(mcg)"
        name="x2"
      >
        <a-input v-model:value="formState.x2" name="x2" />
      </a-form-item>
      <a-form-item
        label="维生素B12(mcg)"
        name="y2"
      >
        <a-input v-model:value="formState.y2" name="y2" />
      </a-form-item>
      <a-form-item
        label="胆碱(mg)"
        name="z2"
      >
        <a-input v-model:value="formState.z2" name="z2" />
      </a-form-item>
      <a-form-item
        label="牛磺酸(g)"
        name="a3"
      >
        <a-input v-model:value="formState.a3" name="a3" />
      </a-form-item>
      <a-form-item
        label="unknown"
        name="b3"
      >
        <a-input v-model:value="formState.b3" name="b3" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
import { ref, watch } from "vue";
export default {
  name: "ProductForm",
  props: [
    "formData"
  ],
  setup(props) {
    const formState = ref(props.formData);
    watch(
      () => props.formData,
      (newVal) => (formState.value = newVal)
    );
    return {
      formState,
      form: ref(null),
    };
  },

  methods: {
    handleOk() {
      this.form
        .validateFields()
        .then((res) => {
          let formState = Object.assign(this.formState, res);
          console.log(formState);
          this.$emit("formOk", formState);
        })
        .catch((err) => {
          console.error(err);
          this.$message.error(err.errorFields[0].errors[0]);
        });
    },
    handleCancel() {
      this.$emit("formCancel");
    },
  },
};
</script>
<style>
  .footer .ant-form-item {
    margin-right: 14px;
    margin-bottom: 14px;
    width: 300px;
  }
</style>