<template>
  <div class="header">
    <el-row class="section" style="line-height:44px; padding:18px 0;">
      <el-col :span="8">
        <el-link :underline="false">
          <img
            src="http://www.zhongzhenshengtai.com/static/images/logo.jpg"
            alt=""
          />
        </el-link>
        <span style="cursor: pointer;font-size: 22px;"
          >中国林业产业服务与交易平台
        </span>
      </el-col>
      <el-col :span="6" :offset="2">
        <el-input
          placeholder="请输入关键字"
          :span="8"
          v-model="inputText"
          clearable
        >
        </el-input>
        <el-button type="success">Go</el-button>
      </el-col>
      <el-col class :span="6" :offset="2">
        <el-breadcrumb separator="|">
          <el-breadcrumb-item :to="{ path: '/' }">
            我的账户<i class="el-icon-caret-bottom"> </i>
          </el-breadcrumb-item>
          <el-breadcrumb-item>注册 登录</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-menu
      :default-active="activeIndex"
      class="nav-init el-menu-demo"
      mode="vertical"
      @select="handleSelect"
      background-color="#1d9e10"
      text-color="#fff"
      active-text-color="#fff"
    >
      <div class="section">
        <el-menu-item
          v-for="(item, index) in navData"
          :key="index"
          :index="index + 1"
        >
          {{ item.name }}
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      activeIndex: "1",
      navData: null
    };
  },
  created() {
    this.initNav();
  },
  methods: {
    async initNav() {
      console.log(11)
      const { data } = await this.axios.post("/getnav");
      console.log(data)
      this.navData = data.data;
    }
  },
};
</script>
<style lang="less" scoped>
.section {
  width: 1280px;
  margin: auto;
  display: flex;   
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }
}
.nav-init /deep/ .el-menu-item {
  font-size: 18px;
  color: #cddcd7;
  float: left;
}
.section .el-input {
  width: 236px;
  height: 28px;
  margin-right: -5px;
}
</style>
