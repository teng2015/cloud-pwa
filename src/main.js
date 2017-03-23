import Vue from 'vue'
import App from './components/index/App'
import router from './router'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  /*template: '<App/>',
   components: {App},*/
  render: h => h(App)
});

/* 动态设置 html font-size 函数 */
(function (window, document) {
  let dpr, rem, scale;
  let docEl = document.documentElement;
  let fontEl = document.createElement('style');
  let metaEl = document.querySelector('meta[name="viewport"]');

  dpr = window.devicePixelRatio || 1;
  rem = docEl.clientWidth * dpr / 10;
  scale = 1 / dpr;

  /*设置viewport，进行缩放，达到高清效果*/
  metaEl.setAttribute('content',
    `width=${dpr * docEl.clientWidth}, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`
  );

  /*设置data-dpr属性，留作的css hack之用*/
  docEl.setAttribute('data-dpr', dpr);

  /*动态写入样式*/
  fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
  docEl.firstElementChild.appendChild(fontEl);

  /*给js调用的，某一dpr下rem和px之间的转换函数*/
  window.rem2px = function (v) {
    v = parseFloat(v);
    return v * rem;
  };
  window.px2rem = function (v) {
    v = parseFloat(v);
    return v / rem;
  };

  window.dpr = dpr;
  window.rem = rem;

  //console.log(dpr);
  //console.log(rem);
})(window, document);
