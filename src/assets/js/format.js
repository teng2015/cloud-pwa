/* Size 转换 */
{
  /* 1 */
  function formatSize(value) {
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
  }

  /* 2 */
  function formatFileSize(value) {
    let result = '';
    if (0 <= value && value <= 1000000) {
      result = Math.round(value / 1024 * 100) / 100 + 'K';
    } else if (1000000 < value && value <= 1000000000) {
      result = Math.round(value / (1024 * 1024) * 100) / 100 + 'M';
    } else {
      result = Math.round(value / (1024 * 1024 * 1024) * 100) / 100 + 'G';
    }

    return '大小：' + result;
  }

  let size = 386004477;

  console.log(formatFileSize(size));
  console.log(formatSize(size));
}

/* 日期格式转换 */
{
  /* 根据字符串时间 "2017-03-21 16:34:29" 计算 距离当前时间点 的差值 */
  function calDeltaTime(date) {
    let originDate = new Date(date);
    /* 时间差 ms */
    let deltaMillisecond = Date.now() - originDate.valueOf();

    /*
     * 0~1h --> range = 0
     * 1h~1d --> range = 1
     * 1d~1m --> range = 2
     * 1m~1y --> range = 3 (这里一月粗略用30天代替)
     * 1y+ --> range = 4 (这里一年粗略用365天代替)
     * */
    range = deltaMillisecond < 60 * 60 * 1000 ? 0
      : ((deltaMillisecond < 24 * 60 * 60 * 1000) ? 1
        : ((deltaMillisecond < 30 * 24 * 60 * 60 * 1000) ? 2
          : ((deltaMillisecond < 365 * 24 * 60 * 60 * 1000) ? 3 : 4)));

    switch (range) {
      case 0:
        return `${Math.floor(deltaMillisecond / (60 * 1000))}分钟前`;
      case 1:
        return `${Math.floor(deltaMillisecond / (60 * 60 * 1000))}小时前`;
      case 2:
        return `${Math.floor(deltaMillisecond / (24 * 60 * 60 * 1000))}天前`;
      case 3:
        return `${Math.floor(deltaMillisecond / (30 * 24 * 60 * 60 * 1000))}月前`;
      case 4:
        return `${Math.floor(deltaMillisecond / (365 * 24 * 60 * 60 * 1000))}年前`;
      default:
        break;
    }
  }

  function calDeltaTime2(date) {
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

  let time1 = Date.now();
  console.log(calDeltaTime("2017-03-21 18:11:40"));
  let time2 = Date.now();
  console.log(time1, time2, time2 - time1);
  let time3 = Date.now();
  console.log(calDeltaTime2("2017-03-21 18:11:40"));
  let time4 = Date.now();
  console.log(time3, time4, time4 - time3);
}
