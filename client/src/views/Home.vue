<template>
  <div>
    <Header />
    <div class="swiper">
      <el-carousel trigger="click" height="589px">
        <el-carousel-item
          v-for="(item, index) in homeData.banners"
          :key="index"
        >
          <img
            class="small"
            :src="'http://www.zhongzhenshengtai.com/static/images/banner2.jpg'"
          />
          <div>{{ item.title }}</div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-main>
      <el-row type="flex" class="section" justify="space-between">
        <Table
          :title="title"
          setWidth="746px"
          :tablist="homeData.news.newsnav.son"
        >
          <el-aside width="40%" class="table-img">
            <img
              style="width:100%; height:266px;"
              src="http://www.zhongzhenshengtai.com/static/images/banner2.jpg"
              alt=""
            />
          </el-aside>
          <el-table
            :data="homeData.news.newslist"
            style="width: 100%"
            :show-header="false"
            :default-sort="{ prop: 'date', order: 'descending' }"
            :header-row-style="{ color: '#000' }"
            :cell-style="{ border: 0, fontWeight: '700' }"
          >
            <el-table-column prop="title" :formatter="formatter">
            </el-table-column>
            <el-table-column prop="createtime" width="100"> </el-table-column>
          </el-table>
        </Table>
        <Table
          title="政策法规"
          setWidth="480px"
          :tablist="homeData.statute.statutenav"
        >
          <el-table
            :data="homeData.statute.statutelist"
            style="width: 100%"
            :show-header="false"
            :default-sort="{ prop: 'date', order: 'descending' }"
            :header-row-style="{ color: '#000' }"
            :cell-style="{ border: 0, fontWeight: '700' }"
          >
            <el-table-column prop="title" :formatter="formatter">
            </el-table-column>
          </el-table>
        </Table>
      </el-row>
      <el-row type="flex" class="section" justify="space-between">
        <Table
          title="林权流转"
          setWidth="746px"
          :tablist="homeData.folist.folistnav.son"
        >
          <el-table
            :data="homeData.folist.folists"
            style="width: 100%"
            :show-header="true"
            :default-sort="{ prop: 'date', order: 'descending' }"
            :header-row-style="{ color: '#000' }"
            :cell-style="{ border: 0, fontWeight: '700' }"
          >
            <el-table-column prop="goods_name" label="项目名称">
            </el-table-column>
            <el-table-column prop="forestry_type" label="类别" width="100">
            </el-table-column>
            <el-table-column prop="remark" label="性质" width="100">
            </el-table-column>
            <el-table-column prop="keywords" label="林地面积" width="100">
            </el-table-column>
            <el-table-column prop="market_price" label="预期价格" width="100">
            </el-table-column>
            <el-table-column prop="completetime" label="发布时间" width="100">
            </el-table-column>
          </el-table>
        </Table>
        <Table
          title="培训交流"
          setWidth="480px"
          :tablist="homeData.activityList.activitynav.son"
        >
          <el-table
            :data="homeData.activityList.activityLists"
            :show-header="false"
            :default-sort="{ prop: 'date', order: 'descending' }"
            :header-row-style="{ color: '#000' }"
            :cell-style="{ border: 0, fontWeight: '700' }"
          >
            <el-table-column prop="status"> </el-table-column>
          </el-table>
        </Table>
      </el-row>
      <el-row type="flex" class="section">
        <Table
          title="林业服务"
          :tablist="homeData.service.servicenav.son"
          style="height:100%;"
        >
          <el-row
            type="flex"
            justify="space-between"
            style="padding: 20px 0;height:100%;"
          >
            <el-col
              :span="3"
              :push="-2"
              v-for="(item, index) in homeData.service.servicelist"
              :key="index"
            >
              <el-card
                :body-style="{ padding: '0px', height: '183px' }"
                shadow="hover"
              >
                <img
                  src="http://www.zhongzhenshengtai.com/static/images/banner2.jpg"
                  style="height:105px;width:100%"
                />
                <div style="padding: 14px;">
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">{{
                      item.name
                    }}</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </Table>
      </el-row>
      <el-row type="flex" class="section">
        <img
          src="http://www.zhongzhenshengtai.com/static/images/ly.png"
          alt=""
        />
      </el-row>
      <el-row type="flex" class="section">
        <Table
          title="专家智库"
          :tablist="homeData.service.servicenav.son"
          style="height:100%;"
        >
          <el-row
            type="flex"
            justify="space-between"
            style="padding: 20px 0;height:100%;"
          >
            <el-col
              :span="3"
              :push="-2"
              v-for="(item, index) in homeData.service.servicelist"
              :key="index"
            >
              <el-card :body-style="{ padding: '15px' }" shadow="hover">
                <img
                  class="card-img"
                  src="http://www.zhongzhenshengtai.com/static/images/banner2.jpg"
                  style="height:105px;width:100%"
                />
                <div class="titles-box">
                  <span class="title">刘德华</span>
                  <span class="title-text">中国林业大学卢同志</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </Table>
      </el-row>
      <el-row type="flex" class="section">
        <Table title="产业策划" :tablist="homeData.service.servicenav.son">
          <el-row>
            <el-col v-for="(item, index) in 4" :key="index" :lg="6" :xl="8">
              <el-card
                :body-style="{ padding: '0' }"
                shadow="hover"
                class="card-offset"
              >
                <img
                  src="http://www.zhongzhenshengtai.com/static/images/banner2.jpg"
                  style="height:270px;width:100%;"
                />
                <div class="titles-box">
                  <span class="title">刘德华</span>
                  <span class="title-text">中国林业大学卢同志</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </Table>
      </el-row>
    </el-main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Table from "@/components/table-box";
import Footer from "@/components/Footer";
export default {
  name: "home",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          address: "国家林草局森林资源监督机构成立30周年!"
        },
        {
          date: "2016-05-04",
          address: "国家林草局森林资源监督机构成立30周年!"
        },
        {
          date: "2016-05-01",
          address: "国家林草局森林资源监督机构成立30周年!"
        },
        {
          date: "2016-05-03",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],

      title: "新闻中心",
      tablist: ["通知公告", "行业动态"],
      homeData: null
    };
  },
  async created() {
    const parame = {
      category_ids: 61
    };
    try {
      const {
        data: { data: homeData }
      } = await this.axios.post("/index", parame);
      this.homeData = homeData;
    } catch (e) {}    
  },
  mounted() {},
  methods: {},
  components: {
    Header,
    Table,
    Footer
  }
};
</script>
<style lang="less" scoped>
.el-main {
  background: #eee;
}
.section {
  width: 1280px;
  margin: auto;
  box-sizing: border-box;
  margin-bottom: 35px;

  .titles-box {
    display: block;
    width: 100%;
    padding-left: 15px;
    span {
      display: block;
      text-align: left;
      margin: 10px 0;
      font-size: 14px;
      font-weight: 500;
    }

    .title-text {
      color: #ccc;
    }
  }
  .card-offset {
    border-radius: 10px 10px 0 0;
    margin: 15px 15px 15px 0;
  }
}

.swiper {
  box-sizing: border-box;
}
.card-img {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  display: block;
  margin: auto;
}

.table-img {
  margin: 15px 15px 0 0;
  width: 289px;
  height: auto;
}
img {
  width: 100%;
  height: 100%;
  vertical-align: top;
  display: block;
  font-size: 0;
}
</style>
