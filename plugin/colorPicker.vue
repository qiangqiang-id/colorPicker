<template>
  <div class="container">
    <div class="color-texts">
      <span>颜色</span>
    </div>
    <div class="color-panel"
         @click="showColorPickerMain"></div>
    <div ref="colorPickerMain"
         class="color-picker-main"
         v-show="isShowColorPickerMian"></div>
  </div>
</template>

<script>
export default {
  name: "colorPicker",
  props: {
    defaultColor: {
      type: Array,
      default: () => [
        "#000000",
        "#FFFFFF",
        "#FF1900",
        "#F47365",
        "#FFB243",
        "#FFE623",
        "#6EFF2A",
        "#1BC7B1",
        "#00BEFF",
        "#2E81FF",
        "#5D61FF",
        "#FF89CF",
        "#FC3CAD",
        "#BF3DCE",
        "#8E00A7",
        "rgba(0,0,0,0)",
      ],
    },
  },

  data() {
    return {
      isShowColorPickerMian: false,
    };
  },
  mounted() {
    this.closeColorPicker();
  },

  methods: {
    showColorPickerMain(e) {
      e.stopPropagation();
      this.isShowColorPickerMian = true;
    },
    closeColorPicker() {
      const colorPickerMain = this.$refs["colorPickerMain"];
      let handleClick = (e) => {
        const isClickOut = !colorPickerMain.contains(e.target);
        if (isClickOut) {
          this.isShowColorPickerMian = false;
        }
      };
      document.addEventListener("click", handleClick);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 5px 17px;
  width: 216px;
  height: 81px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  .color-texts {
    margin-bottom: 8px;
  }
  .color-panel {
    margin: 0 auto;
    height: 24px;
    background-color: pink;
    border-radius: 4px;
  }

  .color-picker-main {
    position: absolute;
    left: 100%;
    top: -50%;
    width: 267px;
    height: 424px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 5px;
    box-shadow: 0 0 10px #eee;
  }
}
</style>
