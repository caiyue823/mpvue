<template>
  <div>
    <div v-for="player in list">
      <span>No. {{player.number}}:{{player.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data: {
      list: [
        {
          name: 'Jason Williams',
          number: 55,
        },
        {
          name: 'Kobe Bryant',
          number: 8,
        },
        {
          name: 'Kevin Garnett',
          number: 21,
        },
        {
          name: 'Chris Webber',
          number: 21,
        },
        {
          name: 'Shaquille Oneal',
          number: 34,
        },
      ],
    },
  };
</script>

<style scoped>

</style>
