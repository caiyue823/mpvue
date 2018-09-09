<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <p>
      <tab-link pagePath="/pages/index/main" label="首页"></tab-link>
    </p>
  </div>
</template>

<script>
  // Use Vuex
  import { mapState, mapMutations } from 'vuex';
  import tabLink from '@/components/tabLink';

  export default {
    components: {
      tabLink,
    },
    computed: {
      ...mapState(['count']),
    },
    methods: {
      ...mapMutations(['increment', 'decrement']),
    },
  };
</script>

<style>
  .counter-warp {
    text-align: center;
    margin-top: 100px;
  }

  .home {
    display: inline-block;
    margin: 100px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
</style>
