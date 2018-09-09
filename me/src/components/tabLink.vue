<template>
  <span @tap="switchTab">{{label}}</span>
</template>

<script>
  export default {
    name: 'tab-link',
    props: {
      pagePath: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
    },
    methods: {
      switchTab() {
        wx.switchTab({
          url: this.pagePath,
        });
      },
    },
  };
</script>

<style scoped lang="scss">
  span {
    display: inline;
    text-decoration: underline;
    color: blue;
  }
</style>
