<template>
  <div class="container">
    <p>这里是文字</p>
    <color-picker></color-picker>
  </div>
</template>

<script>
import ColorPicker from "../plugin/colorPicker.vue";
export default {
  name: "App",
  components: { ColorPicker },
};
</script>

<style lang="scss"></style>
