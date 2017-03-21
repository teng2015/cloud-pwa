<template>
  <div class="file-container">
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
      <li class="file"
          v-for="(item, index) in fileData">
        <div class="file"
             :class="item.isFolder ? 'column-folder' : 'column-file'">
          <div class="icon-container">
            <div class="icon"
                 :class="item.isFolder ? 'icon-folder' : 'icon-' + item.fileType"></div>
          </div>
          <p class="text" v-if="item.isFolder" v-text="item.fileName"></p>
          <div class="column-file-info" v-if="!item.isFolder">
            <p class="text" v-text="item.fileName"></p>
            <span class="size" v-text="formatFileSize(item.fileSize)">大小：2.24M</span>
            <span class="modified-time">21小时前</span>
          </div>
          <div class="arrow" v-if="!item.isFolder"></div>
        </div>
        <div class="file-info" v-if="!item.isFolder">
          <div class="btn">
            <a href="javascript:" class="preview">预览</a>
            <a href="javascript:" class="share">分享</a>
          </div>
        </div>
      </li>
      <!--<li class="file">
        <div class="file">
          <div class="icon-container">
            <div class="icon icon-torrent"></div>
          </div>
          <p class="text" v-if="isFolder">同步盘</p>
          <div class="column-file-info" v-if="!isFolder">
            <p class="text">欢迎使用天翼云盘.pdf</p>
            <span class="size">大小：2.24M</span>
            <span class="modified-time">21小时前</span>
          </div>
          <div class="arrow" v-if="!isFolder"></div>
        </div>
        <div class="file-info" v-if="!isFolder">
          <div class="btn">
            <a href="javascript:" class="preview">预览</a>
            <a href="javascript:" class="share">分享</a>
          </div>
        </div>
      </li>
      <li class="file">
        <div class="file column-file">
          <div class="icon-container">
            <div class="icon file-icon icon-pdf"></div>
          </div>
          <p class="text" v-if="!isFolder">同步盘</p>
          <div class="column-file-info" v-if="isFolder">
            <p class="text">欢迎使用天翼云盘.pdf</p>
            <span class="size">大小：2.24M</span>
            <span class="modified-time">21小时前</span>
          </div>
          <div class="arrow" v-if="isFolder"></div>
        </div>
        <div class="file-info" v-if="isFolder">
          <div class="btn">
            <a href="javascript:" class="preview">预览</a>
            <a href="javascript:" class="share">分享</a>
          </div>
        </div>
      </li>-->
    </ul>
  </div>
</template>

<script>
  let fileData = [
    {
      "createTime": "2017-03-20 12:33:08",
      "fileId": "0",
      "fileIdDigest": "23190A8688F2A312827E1A17D71009D9AD209DD82709B9E8D6867B07CE10F025CD03D9AF",
      "fileName": "同步盘",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-20 12:33:08",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-20 12:33:08",
      "fileId": "-12",
      "fileIdDigest": "5795B46AB0930B5798E60C02387886CA251C311E4A793417708E0D6CF0DD345FF9B1DFBA140683C1",
      "fileName": "我的图片",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-20 12:33:08",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-20 12:33:08",
      "fileId": "-14",
      "fileIdDigest": "C7FDE0C549E9608FD05DC2C80638AC00A903391A4611C0E4B2793B1F74467356FC4F0045A70CC32A",
      "fileName": "我的音乐",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-20 12:33:08",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-20 12:33:08",
      "fileId": "-13",
      "fileIdDigest": "481DBD8C388579D8B842A1984B3778964CB8A32F08E9BC8FF1D62C021166D9CA60825A753D6E7CE9",
      "fileName": "我的视频",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-20 12:33:08",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-20 12:33:08",
      "fileId": "-15",
      "fileIdDigest": "7140D9EFF2B04AAB940C70A658A382E27EC73E4B8563D6302CC3835383EEFFA39F1D33C6E74780F4",
      "fileName": "我的文档",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-20 12:33:08",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-20 12:33:08",
      "fileId": "-16",
      "fileIdDigest": "4C00086B20BC380D8B09AEDF0DA7EAC16A697AB6C6AD4BBFEA8F731FC671C1E958BBC48A947235ED",
      "fileName": "我的应用",
      "fileType": "",
      "groupSpaceInfo": {
        "groupSpaceType": 0
      },
      "isFolder": true,
      "isStarred": false,
      "lastOpTime": "2017-03-20 12:33:08",
      "parentId": "-11"
    },
    {
      "createTime": "2017-03-20 18:21:27",
      "fileId": "9136511392478995",
      "fileIdDigest": "B44FE1EFBA0B34A7E64DE311221305EE5C27976C6F484C2CFD66CC14333203BF74A98975EF034C032977F14F0D3DAD01333F6523",
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
      "fileIdDigest": "899D2B2F3278A7FA65F5983EEEFC5AB29A1CB401787BC7DF241208923A8F9996F03E4EE07B6AEE0FCDB98EFACD4DE73809F4540E",
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
      "createTime": "2017-03-20 18:11:40",
      "downloadUrl": "http:\/\/cloud.189.cn\/downloadFile.action?fileStr=601A5B5EAF0CB06B2E941CCFF2CEB8D8519BAA395E22F92CEFB96078668A26287355B28773AF7C3FF881E4B4C3962FF3436E50DD4C6174E6&downloadType=1",
      "fileId": "1151811694092285",
      "fileIdDigest": "C99A302003798BE20F1F90992746C2910A51C6426E3A3A0B0A1B4CC6A607F6104D6DFDE22D637288943109E52AFCBA7E12F92790",
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
      "downloadUrl": "http:\/\/cloud.189.cn\/downloadFile.action?fileStr=2617CE6A26700332BAC2FF426F92672348D41269191BFCF5E044D4484AB7008E967D6481A4F77D2B003D042075BA6FF11E994A3DEF0CD869&downloadType=1",
      "fileId": "1151811694092284",
      "fileIdDigest": "EBB3A1CD75888B2AC9A2706C8C6438217E4231A6D9469DB58289EA5FAA8B3C2DD41E6C49A39AB2358FC032E124EC158C5774610E",
      "fileName": "畅享云邮，天翼带您体验云端精彩.jpg",
      "fileSize": 516019,
      "fileType": "jpg",
      "icon": {
        "largeUrl": "http:\/\/preview.cloud.189.cn\/image\/imageAction?param=37D39232A6131865F87DCD8EDC1BFB9752B22BC2AAE3736A41DC6B32CB929E20FE69FA374F173F1FCE4EC92FE0A6BBCB5717E415229D966634821341B52FEC5A07ED6829C6576D12B4D5F8F3455585A9EF58F525A0384411C827EEC1D4431BF8B42F12F5B9009028EAC07418",
        "smallUrl": "http:\/\/preview.cloud.189.cn\/image\/imageAction?param=37D39232A6131865F87DCD8EDC1BFB9752B22BC2AAE3736A41DC6B32CB929E20FE69FA374F173F1FCE4EC92FE0A6BBCB5717E415229D966634821341B52FEC5A07ED6829C6576D12B4D5F8F3455585A9EF58F525A0384411C827EEC1D4431BF8B42F12F5B9009028EAC07418"
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
        fileData: fileData,
        className: {
          iconClass: {}
        }
      }
    },
    methods: {
      formatFileSize: function (value) {
        let result = '';
        if (0 <= value && value <= 1000000) {
          result = Math.round(value / 10) / 100 + 'K';
        } else if (1000000 < value && value <= 1000000000) {
          result = Math.round(value / 10000) / 100 + 'M';
        } else {
          result = Math.round(value / 10000000) / 100 + 'G';
        }

        return '大小：' + result;
      },
      formatOptTime: function (value) {

      }
    }
  }

</script>

<!-- scoped -->
<style lang="scss">
  /* 设备列表 */
  @import "list.scss";

</style>
