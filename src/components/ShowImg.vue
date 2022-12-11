<template>
  <div class="wrap" v-show="showImg" @click="close">
    <img class="img" :src="src" @click.stop />
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: ['src', 'showImg'],
  methods: {
    close() {
      this.$emit('close')
    }
  }
});
</script>
<style scoped>
.wrap {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
}
.img {
  position: fixed;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  padding: 0.1rem;
  max-width: 300px;
  border-radius: 0.05rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99999;
  transition: opacity 0.3s linear;
}

.toast-wrapper-enter-from,
.toast-wrapper-leave-to {
  opacity: 0;
}
</style>