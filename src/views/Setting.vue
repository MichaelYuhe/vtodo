<template>
  <div class="setting-page">
    <ul class="configs">
      <li class="config" v-for="config in configs" :key="config.id">
          {{config.title}}
          <input type="checkbox" :checked="config.property" @click="changeProperty(config.id)"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      configs: this.$store.state.configs,
    };
  },
  methods: {
      changeProperty(id) {
          this.$store.commit('changeProperty', id)
        //   console.log(id)
        //   console.log(this.$store.state.configs.find(config => config.id === id))
      }
  }
};
</script>

<style scoped>
.setting-page {
  display: flex;
  margin-top: 80px;
  width: 800px;
  height: 400px;
  background-color: #fff;
}

.configs {
    margin-top: 20px;
    margin-left: 20px;
}

.config {
    margin: 10px 0;
}
</style>