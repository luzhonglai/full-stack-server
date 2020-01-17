<template>
  <el-container>
    <el-footer style="height: auto;">
      <el-row class="footer">
        <el-col :span="3">
          <ul>
            <span>平台功能</span>
            <li>林权流转</li>
            <li>专家智库</li>
            <li>供求大厅</li>
            <li>林业联盟</li>
            <li>政策法规</li>
          </ul>
        </el-col>
        <el-col :span="3">
          <ul>
            <span></span>
            <li>林业服务</li>
            <li>产业策划</li>
            <li>培训交流</li>
            <li>协会之家</li>
            <li>资讯中心</li>
          </ul>
        </el-col>
        <el-col :span="6">
          <ul>
            <span>合作共赢</span>
            <li>关于我们</li>
            <li>在线建议</li>
            <li>用户协议</li>
            <li>建议反馈</li>
            <li>联系我们</li>
          </ul>
        </el-col>
        <el-col :span="6">
          <ul class="crumbs">
            <span>联系我们</span>
            <li>400-698-1116</li>
            <li>微信号：2315928819</li>
            <li>邮箱：hz@infobigdata.com</li>
          </ul>
        </el-col>
        <el-col :span="6" class="attract-log">
          <img
            src="http://www.zhongzhenshengtai.com/static/images/wx.png"
            alt=""
          />
          <span>关注我们</span>
        </el-col>
      </el-row>
      <el-row class="footerText">
        <el-col :span="24">
          <p>
            中国林业产业服务与交易网Copyright 。2014 - 2017 Bigdata Corporation
            . All Rights Reserved.
            运营服务:北京中镇生产力科技中心中镇风林规划设计研究院
            技术支持:中镇生态科技河北有限公司
          </p>
          <p>
            运营服务:北京中镇生产力科技中心中镇风林规划设计研究院
          </p>
          <p>
            技术支持:中镇生态科技河北有限公司
          </p>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "footerAll",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.footer {
  text-align: left;

  span {
    height: 31px;
    display: block;
    margin-bottom: 10px;
  }
}
.attract-log {
  width: 136px;
  height: 136px;
  margin-left: 60px;

  > span {
    margin-top: 10px;
    font-size: 14px;
    color: #fff;
    display: block;
    text-align: center;
  }
}
.clear :after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.el-footer {
  min-width: 1080px;
  padding: 46px 0 0 0;
  background: #363636;
}
.el-footer ul > li {
  margin-bottom: 10px;
  font-size: 16px;
}
.el-footer ul {
  font-size: 22px;
}
.footer {
  width: 1080px;
  margin: auto;
  color: white;
}
.crumbs {
  height: 195px;
  padding-left: 36px;
  border-right: 1px solid #545454;
  border-left: 1px solid #545454;
}
.footerText {
  margin-top: 46px;
  background: #2a2a2a;
}
.footerText p {
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: #ededed;
}
.footerText p:first-child {
  margin-top: 20px;
}
.footerText p:last-child {
  margin-bottom: 12px;
}
</style>
