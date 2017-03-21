function formatSize(value) {
  let res = '', range = null;
  /*
   * 0~1M -> range = 1
   * 1M~1G -> range = 2
   * 1G+ -> range = 3
   * */
  range = value < 1024 * 1024 ? 1
    : ( range = value < 1024 * 1024 * 1024 ? 2 : 3);
  console.log(range);

  switch (range) {
    case 1:
      return `大小：${Math.round(value / 1024 * 100) / 100}K`;
    case 2:
      return `大小：${Math.round(value / (1024 * 1024) * 100) / 100}M`;
    case 3:
      return `大小：${Math.round(value / (1024 * 1024 * 1024) * 100) / 100}G`;
    default:
      break;
  }
}

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

