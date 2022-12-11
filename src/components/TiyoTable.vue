<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :scroll="{ y: tabelHeight }"
    :row-key="record => record.id"
    :pagination="false"
  >

    <template v-if="innerColumns" #expandedRowRender={record}>
      <a-table :columns="innerColumns" :data-source="record.innerData" :pagination="false"  />
    </template>
  </a-table>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: ['gData', 'gColumns', 'gInnerColumns'],
  setup(props) {
    const data = ref(props.gData)
    const columns = ref(props.gColumns)
    const innerColumns = ref(props.gInnerColumns)
    watch(() => props.gData, (newVal) => data.value = newVal)
    const getClientHeight = () => {
      let clientHeight = 0;
      if(document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
      }
      else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
      }
      return clientHeight
    }
    const getTabelHeight = () => {
      let tabelHeight = getClientHeight() - 120
      console.log(tabelHeight)
      return tabelHeight
    }
    return {
      data,
      columns,
      innerColumns,
      tabelHeight: ref(getTabelHeight())
    };
  },

});
</script>