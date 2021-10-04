<template>
  <div id="nav">
    <router-link to="/"><i class="fas fa-home"></i></router-link>
    <router-link to="/setting"><i class="fas fa-cogs"></i></router-link>
    <router-link to="/login"><i class="fas fa-user"></i></router-link>
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>

<style scoped>
#nav {
  height: 55px;
  background-color: #20212c;
  display: flex;
  justify-content: end;
  align-items: center;
  box-shadow: 5px 3px rgba(0, 0, 0, 0.3);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 20px;

}

#nav a.router-link-exact-active {
  color: #ff4b2b;
}

i {
  font-size: 25px;
  cursor: pointer;
}

.menu {
  margin-left: 30px;
}

.options {
  margin-right: 30px;
}
</style>