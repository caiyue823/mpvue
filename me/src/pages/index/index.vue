<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <section>
      <header>获取当前用户信息</header>
      <div class="content">
        <div class="userinfo" @click="bindViewTap">
          <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover"/>
          <div class="userinfo-nickname">
            <card :text="userInfo.nickName"></card>
          </div>
        </div>
      </div>
    </section>
    <section>
      <header>Vuex测试</header>
      <div class="content">
        <p>切换到
          <tab-link label="计数器" pagePath="/pages/counter/main"></tab-link>
          页面改变count的值，再切回到首页查看count值是否变化
        </p>
        <p>当前count值：</p>
        <p style="text-align: center">{{count}}</p>
      </div>
    </section>
    <section>
      <header>路由测试（小程序API）</header>
      <div class="content">
        <p>TAB页跳转
          <tab-link label="列表" pagePath="/pages/list/main"></tab-link>
        </p>
        <p>link普通跳转
          <a href="/pages/wild/main">野生的</a>
        </p>
      </div>
    </section>
    <section>
      <header>Ajax测试（基于flyio实现）</header>
      <div class="content">
        <button @tap="sendRequest">发送请求</button>
        <div>
          <div><label>响应</label></div>
          <div>{{responseData}}</div>
        </div>
      </div>
    </section>
    <section>
      <header>表单控件</header>
      <div class="content">
        <div class="usermotto">
          <div class="user-motto">
            <card :text="motto"></card>
          </div>
        </div>
        <form class="form-container">
          <div>
            <label>实时v-model</label>
            <input type="text" class="form-control" v-model="motto" placeholder="v-model"/>
          </div>
          <div>
            <label>延时v-model（blur后生效）</label>
            <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy"/>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
  import card from '@/components/card';
  import tabLink from '@/components/tabLink';
  import { mapState } from 'vuex';

  export default {
    components: {
      tabLink,
      card,
    },
    computed: {
      ...mapState(['count']),
    },
    data() {
      return {
        motto: '这里是老K的demo',
        userInfo: {},
        responseData: '',
      };
    },

    methods: {
      bindViewTap() {
        const url = '../logs/main';
        wx.navigateTo({ url });
      },
      getUserInfo() {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo;
              },
            });
          },
        });
      },
      clickHandle(msg, ev) {
        console.log('clickHandle:', msg, ev);
      },
      sendRequest() {
        this.$http.get('http://yapi.235.mistong.com/mock/223/backstage/improve/config/list').then((data) => {
          this.responseData = JSON.stringify(data);
        });
      },
    },

    created() {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo();
    },
  };
</script>

<style scoped lang="scss">
  section {
    border-top: 1px solid red;
    padding: 20px;
    /*display: block;*/
    width: 100%;
    position: relative;
    box-sizing: border-box;
    header {
      color: #ff0000;
      /*padding-bottom: 20px;*/
      /*border: 1px solid #fff;*/
      /*border-left: none;*/
    }
    .content {
      margin-top: 20px;
    }
    &:first-child {
      border-top: none;
    }
    &:nth-child(odd) {
      /*background: #ff0000;*/
    }
    &:nth-child(even) {
      /*background: #000;*/
      /*color: #fff !important;*/
    }
  }

  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }

  .userinfo-nickname {
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }
</style>
