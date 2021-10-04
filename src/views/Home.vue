<template>
  <div class="home">
    <div class="menu">
      <i class="fas fa-bars menu-button" @click="toggleSideBar"></i>
      <TheSideBar
        :categories="categories"
        @add-category="addCategory"
        @choose-category="chooseCategory"
        @show-all="showAll"
        :showSideBar="showSideBar"
      />
    </div>
    <div class="tasks-page">
      <div class="tasks-category">
        <h1>{{ this.$store.state.currentCategory }}</h1>
      </div>
      <AddTask @add-task="addTask" :categories="categories" />
      <Tasks
        :tasks="tasks"
        @toggle-finish="toggleFinish"
        @delete-task="deleteTask"
      />
    </div>
  </div>
</template>

<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";
import TheSideBar from "../components/TheSideBar.vue";
export default {
  name: "Home",
  components: {
    Tasks,
    AddTask,
    TheSideBar,
  },
  data() {
    return {
      isLogin: this.$store.state.isLogin,
      tasks: [],
      showSideBar: false,
      category: this.$store.state.category,
      categories: [],
      // currentCategory: this.$store.state.currentCategory,
    };
  },
  methods: {
    async fetchCategories() {
      const res = await fetch("api/categories");
      const data = res.json();
      return data;
    },

    async fetchTasks() {
      const res = await fetch("api/tasks");

      const data = res.json();

      return data;
    },

    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);

      const data = res.json();

      return data;
    },

    async fetchCategory(id) {
      const res = await fetch(`api/categories/${id}`);

      const data = res.json();

      return data;
    },

    async addTask(newTask) {
      await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      this.tasks = await this.fetchTasks();
    },

    async deleteTask(id) {
      const res = await fetch(`api/tasks/${id}`, {
        method: "DELETE",
      });
      res.status === 200
        ? (this.tasks = this.tasks.filter((task) => task.id !== id))
        : alert("ERROR DELETING TASK");
    },

    async addCategory(newCategory) {
      await fetch("api/categories", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });
      this.categories = await this.fetchCategories();
    },

    // toggle finish button, finished status change
    async toggleFinish(id) {
      const toggledTask = await this.fetchTask(id);
      const updateTask = { ...toggledTask, finished: !toggledTask.finished };
      await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateTask),
      });
      this.tasks = await this.fetchTasks();
    },

    toggleSideBar() {
      this.showSideBar = !this.showSideBar;
    },

    chooseCategory(title) {
      this.$store.commit('changeCategory', title)
      this.$forceUpdate();
      console.log(this.$store.state.currentCategory)
    },

    showAll() {
      this.$store.commit('changeCategory', 'All')
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
    this.categories = await this.fetchCategories();
    // console.log(this.tasks)
  },
};
</script>

<style scoped>
.home {
  width: 100%;
}

i {
  font-size: 24px;
}

.tasks-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.tasks-category {
  margin-top: 30px;
  width: 45%;
  display: flex;
  justify-content: start;
}

h1 {
  color: white;
}

.menu-button {
  position: fixed;
  left: 25px;
  top: 15px;
}
</style>
