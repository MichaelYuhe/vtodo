<template>
  <div class="side-bar" :class="{open: this.showSideBar}">
    <h3>Categories</h3>
    <ul class="categories">
      <li>
        <h4 class="category" @click="this.$emit('show-all')">All</h4>
      </li>
      <li
        v-for="category in categories"
        :key="category.id"
        class="category"
        @click="this.$emit('choose-category',category.title)"
      >
          <h4>{{ category.title }}</h4>
      </li>
      <li class="add-category" >
        <i class="fas fa-plus-circle" @click="addCategory"></i>
        <div class="new-category" v-show="showAdd">
          <input type="text" v-model="cateName" required />
          <button @click="finishAddCategory">Save</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheSideBar",
  data() {
    return {
      showAdd: false,
      cateName: "",
    };
  },
  props: {
    categories: Array,
    showSideBar: Boolean
  },
  methods: {
    addCategory() {
      this.showAdd = !this.showAdd;
    },
    finishAddCategory() {
      if (this.cateName == "") {
        alert("The category's name can not be empty");
        return;
      }
      this.showAdd = false;
      const newCategory = {
        title: this.cateName,
      };
      this.$emit("add-category", newCategory);
      this.cateName = "";
    },
  },
};
</script>

<style scoped>
.side-bar {
  width: 200px;
  background-color: #20212c;
  height: calc(100vh - 55px);
  transition: 0.6s all ease-in-out;
  position: absolute;
  left: -200px;
}

.open {
  left: 0;
}

h3 {
  color: whitesmoke;
  margin: 30px 0;
}

h4 {
  color: whitesmoke;
}

.category {
  width: 100%;
  height: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.category:hover {
  background-color: #272833;
}

.add-category {
  margin-top: 20px;
}
</style>