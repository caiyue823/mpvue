<template>
  <div>
    <p>{{title}}</p>
    <tab-link pagePath="/pages/index/main" label="回到首页"></tab-link>
  </div>
</template>

<script>
  import tabLink from '@/components/tabLink';

  export default {
    components: {
      tabLink,
    },
    data: {
      title: '野生页面',
    },
  };
</script>

<style scoped>

</style>
