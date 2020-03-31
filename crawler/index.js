// const Agent = require("socks5-http-client/lib/Agent");
const R = require("ramda");
const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
const request = require("request-promise");
const host = "https://www.bt5156.com";

// 获取影视列表
const getVideoInit = async () => {
  const options = {
    url: `${host}/l/lianxuju/`,
    transform: body => cheerio.load(body)
  };
  let videoList = [];
  const $ = await request(options);
  $(".fed-list-info li").each(function() {
    const initDom = $(this).find("a");
    const title = initDom.eq(1).text();
    const coverImg = initDom.eq(0).attr("data-original");
    const idHref = initDom.eq(1).attr("href");
    const suTitle = $(this)
      .find("span")
      .text();
    videoList.push({
      title,
      coverImg,
      idHref,
      suTitle
    });
  });
  videoList = deteleObject(videoList);
  // 过滤数据字段字段层次不齐
  const fn = R.compose(
    R.filter(item => item.title && item.suTitle && item.coverImg && item.idHref)
  );
  videoList = fn(videoList);
  console.log("数据总合:" + videoList.length + "条");
  fs.writeFileSync("./video.json", JSON.stringify(videoList, null, 2), "utf-8");
};


const fetchVideoList = async (url) => {
  const options = {
    url,
    transform: body => cheerio.load(body)
  };
  const $ = await request(options);
  const domNode = $('.fed-part-rows');
  const starring = domNode.find('li.fed-col-md6').last();
  // const starring = domNode.find('li.fed-col-md6:last').text()

  // const director = domNode.find('li.')
  console.log(starring)
};

// 获取影视详情
const getVideoDetails = async () => {
  const videoDetails = require(path.resolve(__dirname, "./video.json"));
  for (let i = 0; i < 2; i++) {
    if (videoDetails[i].idHref) {
      const url = `${host + videoDetails[i].idHref}`;
      const data = fetchVideoList(url);
    }
  }
};

// 过滤重复数据
const deteleObject = obj => {
  var uniques = [];
  var stringify = {};
  for (var i = 0; i < obj.length; i++) {
    var keys = Object.keys(obj[i]);
    keys.sort(function(a, b) {
      return Number(a) - Number(b);
    });
    var str = "";
    for (var j = 0; j < keys.length; j++) {
      str += JSON.stringify(keys[j]);
      str += JSON.stringify(obj[i][keys[j]]);
    }
    if (!stringify.hasOwnProperty(str)) {
      uniques.push(obj[i]);
      stringify[str] = true;
    }
  }
  uniques = uniques;
  return uniques;
};
getVideoDetails()
