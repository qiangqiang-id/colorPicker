<template>
  <div class="container">
    <p>这里是文字</p>
    <color-picker></color-picker>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
.container {
  width: 500px;
  height: 500px;
  background-color: green;
  p {
    font-size: 30px;
    text-align: center;
  }
}
</style>
