<template>
  <div class="table-box" :style="{ width: setWidth}">
    <el-row class="nav-top" type="flex" align="middle" justify="start">
      <el-row
        class="nav-title"
        type="flex"
        justify="space-between"
        align="middle"
      >
        <strong style="color: green">丨</strong>
        <span>{{ title }}</span>
      </el-row>
      <div class="nav-tag">
        <el-breadcrumb separator="|" class="arrow">
          <el-breadcrumb-item v-for="(item, index) in tablist" :key="index">
            {{ item.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="nav-sutitle">更多></div>
      </div>
    </el-row>
    <el-row type="flex" justify="space-between">
      <slot></slot>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "tableBox",
  props: {
    title: { type: String, defalut: "新闻中心" },
    tablist: Array,
    setWidth: String
  }
};
</script>
<style lang="less" scoped>
.table-box {
  width: 100%;
  min-height: 362px;
  border: 1px solid #ccc;
  padding: 0 20px;
  box-sizing: border-box;
  background: #fff;
  td {
    border: none;
  }
  
  .nav-top {
    width: auto;
    height: 64px;
    border-bottom: #ccc solid 1px;

    .nav-title {
      font-size: 18px;
      font-weight: 900;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .nav-tag {
      margin-left: 40px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;
      align-items: center;
    }
    .nav-sutitle {
      font-size: 14px;
      color: #ccc;
    }
  }
}
</style>
