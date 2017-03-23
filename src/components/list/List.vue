<template>
  <div class="file-container" @click="hideHandleBox()">
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <ul class="file-path">
        <li title="全部文件">
          <a href="javascript:">全部文件</a>&nbsp;&gt;&nbsp;
        </li>
        <li title="测试专用">
          <a href="javascript:">测试专用</a>&nbsp;&gt;&nbsp;
        </li>
        <li title="嵌套文件夹"><a href="javascript:">嵌套文件夹</a>&nbsp;&gt;&nbsp;
        </li>
        <li> ... &gt;</li>
        <li title="03"><a href="javascript:">03</a>&nbsp;&gt;&nbsp;
        </li>
        <li title="04"><a href="javascript:">04</a>&nbsp;&gt;&nbsp;
        </li>
        <li title="05">05</li>
      </ul>
    </div>

    <ul class="file-lists">
      <li class="file-box"
          v-for="(item, index) in fileData"
          :class="{'is-handling': handlingIndex === index}">
        <router-link class="file-link" :to="'/folder/' + item.fileId" @click="cl('clicked')">
          <div :class="item.isFolder ? 'column-folder' : 'column-file'">
            <div class="icon-container">
              <div class="icon"
                   :class="item.isFolder ? 'icon-folder' : 'icon-' + item.fileType.toLowerCase()"></div>
            </div>
            <div class="column-file-name" v-if="item.isFolder" v-text="item.fileName"></div>
            <div class="column-file-info" v-if="!item.isFolder">
              <p class="name" v-text="item.fileName"></p>
              <p class="info">
                <span class="size">{{ item.fileSize | formatFileSize }}</span>
                <span class="time">{{ item.lastOpTime | formatOptTime }}</span>
              </p>
            </div>
            <div class="arrow">
              <button class="icon" @click.stop.prevent="handleFile(index)"></button>
            </div>
          </div>
          <div class="handle-box" @click.stop.prevent>
            <div class="btn-container">
              <button class="btn view">重命名</button>
              <button class="btn mark">删除</button>
              <button class="btn share">分享</button>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  let fileData = [
    {
      "createTime": "2017-03-21 22:57:48",
      "fileId": "0",
      "fileIdDigest": "57C7FA33935019D750BD0BE28C6CFE55CCE07C046CB21CBD683363C43848B3584A85499F",
      "fileName": "同步盘",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-21 22:57:48",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-21 22:57:48",
      "fileId": "-12",
      "fileIdDigest": "E71CB9FB19B54A35D5D27EE5E91410F80203EDDB843AB5B024B839EB579DDC4DDF991FD00FE8199E",
      "fileName": "我的图片",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-21 22:57:48",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-21 22:57:48",
      "fileId": "-14",
      "fileIdDigest": "02AE7CCE86CB46EB678B21639E4F21D6F91F5D50007FC8AE3E8B76E8AC7209DCEDE788F736998A43",
      "fileName": "我的音乐",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-21 22:57:48",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-21 22:57:48",
      "fileId": "-13",
      "fileIdDigest": "94E809923B2E0B591A6949BE8F2896DC56A29CF361C3BDEC9248BB237D7DDF2F882E0D83BD5EB8A2",
      "fileName": "我的视频",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-21 22:57:48",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-21 22:57:48",
      "fileId": "-15",
      "fileIdDigest": "00AEE62F946B091295E092620550244213941CB883F917AD321E023801BAFFEC2F4C3A52B905CDFF",
      "fileName": "我的文档",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-21 22:57:48",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-21 22:57:48",
      "fileId": "-14",
      "fileIdDigest": "02AE7CCE86CB46EB678B21639E4F21D6F91F5D50007FC8AE3E8B76E8AC7209DCEDE788F736998A43",
      "fileName": "我的音乐",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-21 22:57:48",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-21 22:57:48",
      "fileId": "-13",
      "fileIdDigest": "94E809923B2E0B591A6949BE8F2896DC56A29CF361C3BDEC9248BB237D7DDF2F882E0D83BD5EB8A2",
      "fileName": "我的视频",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-21 22:57:48",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-21 22:57:48",
      "fileId": "-15",
      "fileIdDigest": "00AEE62F946B091295E092620550244213941CB883F917AD321E023801BAFFEC2F4C3A52B905CDFF",
      "fileName": "我的文档",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-21 22:57:48",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-21 22:57:48",
      "fileId": "-16",
      "fileIdDigest": "30DD16F262851594D3F9E8BA5B1699A92184C9A5D91834A63D04A4564209825B2F49C3F356049BFB",
      "fileName": "我的应用",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-21 22:57:48",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-20 18:21:27",
      "fileId": "9136511392478995",
      "fileIdDigest": "9CD609260E185DFDA71AC4BC96088E540064487D06AB0F2F43711962956DF7F3E1D2AB2832BA71C3ED5F420A6CD0DBDC52286955",
      "fileName": "我的群",
      "fileSize": 0,
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-20 18:21:27",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-20 18:13:25",
      "fileId": "2155011396146550",
      "fileIdDigest": "FF67E10B51920251BEB23DC81D344E97747AF0BFC75E7F8AD999E2A938864A38C071E3858F0BBD8FC2D06947DE1228E344B9F119",
      "fileName": "测试专用",
      "fileSize": 0,
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": true,
      "lastOpTime": "2017-03-20 18:20:25",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-21 16:41:03",
      "fileId": "7136511394502079",
      "fileIdDigest": "3C9896297D7DE816A5206AA7735C80405615513C12C112546500AFA8707E2EB72C15EBDDA3393CA0AC1F324752C8DCD3943BDDC1",
      "fileName": "转存的文件",
      "fileSize": 0,
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-21 16:41:04",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-21 16:34:29",
      "downloadUrl": "http:\/\/cloud.189.cn\/downloadFile.action?fileStr=E59A237AB34ECA54D8822705664E1694A0A3E5AFEE8FCC4268441DBA332E9AA34226DA449183F9986C4B3B9860147D5981194ED4197AA8F9&downloadType=1",
      "fileId": "5139731403033625",
      "fileIdDigest": "DAB4B197995A9389237DE87FD808A4B4104974494602461454ADD8F1A7C42EF3D3F8C97B9EA5F8C4D0BE9A1E8F1543CE630BB4EF",
      "fileName": "mqbw.MP4",
      "fileSize": 30341115,
      "fileType": "MP4",
      "icon": {
        "largeUrl": "http:\/\/preview.cloud.189.cn\/image\/imageAction?param=CA967E551E5A4B93954A8BE9813C4CFBDF75535AB61488890B784EF3DF180DC869F0012DE5E99FBA15E2972F2D6F5A7C6B0317A40DDAF61BDBDA271131933F42C27E295D53BBBF562EC65A9B01511519B169166BFADDB8AC81E9F5DEE467B3190A3E1C63AB6EC49ABED5FDA1",
        "smallUrl": "http:\/\/preview.cloud.189.cn\/image\/imageAction?param=CA967E551E5A4B93954A8BE9813C4CFBDF75535AB61488890B784EF3DF180DC869F0012DE5E99FBA15E2972F2D6F5A7C6B0317A40DDAF61BDBDA271131933F42C27E295D53BBBF562EC65A9B01511519B169166BFADDB8AC81E9F5DEE467B3190A3E1C63AB6EC49ABED5FDA1"
      },
      "isFolder": false,
      "isStarred": false,
      "lastOpTime": "2017-03-21 16:34:29",
      "mediaType": 3,
      "parentId": "-11",
      "videoUrl": "http:\/\/m.cloud.189.cn\/v2\/getVideoUrl.action?fileStr=E59A237AB34ECA54D8822705664E1694A0A3E5AFEE8FCC4268441DBA332E9AA34226DA449183F9986C4B3B9860147D5981194ED4197AA8F9"
    },
    {
      "createTime": "2017-03-20 18:11:40",
      "downloadUrl": "http:\/\/cloud.189.cn\/downloadFile.action?fileStr=A0980BF239B51828A35381D739823AB24CCC6657FCE2878E93FE215175BF2B566A9D92321882707A0C17C6E1CE3696F78574AFE47EBB8899&downloadType=1",
      "fileId": "1151811694092285",
      "fileIdDigest": "74BF4E34B7613F3B223C2DFD6AA4B0AD29C265F8A60633BA2132FA102559E343C6F1C48D4DF06577DDC5852B3EC7F553E1FE0E2B",
      "fileName": "欢迎使用天翼云盘.pdf",
      "fileSize": 2347757,
      "fileType": "pdf",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": false,
      "isStarred": false,
      "lastOpTime": "2017-03-20 18:11:40",
      "mediaType": 4,
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-20 18:11:40",
      "downloadUrl": "http:\/\/cloud.189.cn\/downloadFile.action?fileStr=B915D9D4E9AE6441AE267924C1646305B1DD419C11A76F96F18996470E5CB6168F804AC08C6AEB8DC94B378A5D7E4959CB482D3EA0D34108&downloadType=1",
      "fileId": "1151811694092284",
      "fileIdDigest": "BB728B185339CE5CCFC24DE19CC450899CA8B6DC836467BC25B525CAEA47E10DB0080297A39F27A6942C92C75E463C6958AEC7F3",
      "fileName": "畅享云邮，天翼带您体验云端精彩.jpg",
      "fileSize": 516019,
      "fileType": "jpg",
      "icon": {
        "largeUrl": "http:\/\/preview.cloud.189.cn\/image\/imageAction?param=3E27C9D8C856C3637308E948345D793C84523FC1F46F031CB49A2C597AA371478CC4492403EF6440FDF264899E50DED17C6F72DE811A0C3A1F32F73E1D059A32184C5F755D63B8686BB6AD1AEB05842D2ABC83BDC078499CE72DF2768E94C814C2D84928B4397E3702F44E06",
        "smallUrl": "http:\/\/preview.cloud.189.cn\/image\/imageAction?param=3E27C9D8C856C3637308E948345D793C84523FC1F46F031CB49A2C597AA371478CC4492403EF6440FDF264899E50DED17C6F72DE811A0C3A1F32F73E1D059A32184C5F755D63B8686BB6AD1AEB05842D2ABC83BDC078499CE72DF2768E94C814C2D84928B4397E3702F44E06"
      },
      "isFolder": false,
      "isStarred": false,
      "lastOpTime": "2017-03-20 18:11:40",
      "mediaType": 1,
      "parentId": "-11"
    }
  ];
  export default {
    props: ['list'],
    data () {
      return {
        /*文件数据*/
        fileData: fileData,
        /*文件操作栏 Flag*/
        handlingFlag: false,
        /*显示操作栏的文件索引*/
        handlingIndex: null
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        //this.getData();
      });
    },
    methods: {
      cl: function (value) {
        console.log(value)
      },
      getData: function () {
        axios.get('')
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      handleFile: function (index) {
        let _this = this;
        //console.log(_this.handlingFlag);
        _this.handlingIndex = index;
        _this.handlingFlag = true;
      },
      hideHandleBox: function (msg, event) {
        let _this = this;
        if (_this.handlingFlag === true) {
          _this.handlingIndex = null;
          _this.handlingFlag = false;
        }
      }
    },
    filters: {
      formatFileSize: function (value) {
        let range = null;
        /*
         * 0~1M --> range = 0
         * 1M~1G --> range = 1
         * 1G+ --> range = 2
         * */
        range = value < 1024 * 1024 ? 0
          : (value < 1024 * 1024 * 1024 ? 1 : 2);

        switch (range) {
          case 0:
            return `大小：${Math.round(value / 1024 * 100) / 100}K`;
          case 1:
            return `大小：${Math.round(value / (1024 * 1024) * 100) / 100}M`;
          case 2:
            return `大小：${Math.round(value / (1024 * 1024 * 1024) * 100) / 100}G`;
          default:
            break;
        }
      },
      formatOptTime: function (date) {
        let originDate = new Date(date);
        /* 时间差 ms */
        let deltaMillisecond = Date.now() - originDate.valueOf();

        //let second = Math.floor(deltaMillisecond / 1000);
        let minute = Math.floor(deltaMillisecond / (1000 * 60));
        let hour = Math.floor(deltaMillisecond / (1000 * 60 * 60));
        let day = Math.floor(deltaMillisecond / (1000 * 60 * 60 * 24));
        let mouth = Math.floor(deltaMillisecond / (1000 * 60 * 60 * 24 * 30));
        let year = Math.floor(deltaMillisecond / (1000 * 60 * 60 * 24 * 365));

        switch (true) {
          case year > 0:
            return `${year}年前`;
          case mouth > 0:
            return `${mouth}月前`;
          case day > 0:
            return `${day}天前`;
          case hour > 0:
            return `${hour}小时前`;
          default:
            return `${minute}分钟前`;
        }
      }
    }
  }

</script>

<!-- scoped -->
<style lang="scss">
  /* 设备列表 */
  @import "list.scss";

</style>
