import Vue from 'vue';
import store from './store';
import http from './utils/http';
import App from './App.vue';

Vue.prototype.$store = store;
Vue.prototype.$http = http;
Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
  ...App,
  store,
});
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      navigationBarBackgroundColor: '#000',
      navigationBarTextStyle: 'white',
      navigationBarTitleText: 'SNK',
      navigationStyle: 'default',
      backgroundColor: '#ccc',
      backgroundTextStyle: 'dark',
      backgroundColorTop: '#ccc',
      backgroundColorBottom: '#ccc',
      enablePullDownRefresh: false,
      onReachBottomDistance: 50,
    },
    tabBar: {
      color: '#fff',
      selectedColor: 'red',
      backgroundColor: '#000',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/index/main',
          text: '首页',
          iconPath: '',
          selectedIconPath: '',
        },
        {
          pagePath: 'pages/list/main',
          text: '列表',
          iconPath: '',
          selectedIconPath: '',
        },
        {
          pagePath: 'pages/logs/main',
          text: '日志',
          iconPath: '',
          selectedIconPath: '',
        },
        {
          pagePath: 'pages/counter/main',
          text: '计数器',
          iconPath: '',
          selectedIconPath: '',
        },
      ],
      position: 'top',
    },
    networkTimeout: {
      request: 30000,
      connectSocket: 30000,
      uploadFile: 60000,
      downloadFile: 60000,
    },
    debug: true,
    requiredBackgroundModes: [
      'audio',
    ],
  },
};
