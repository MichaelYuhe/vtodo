<template>
  <div class="tasks">
    <label v-show="unFinishedTask.length > 0">Unfinished</label>
    <div :key="task.id" v-for="task in unFinishedTask">
      <Task
        :task="task"
        @toggle-finish="this.$emit('toggle-finish', task.id)"
        @delete-task="this.$emit('delete-task', task.id)"
      />
    </div>
    <label style="margin-top: 30px" v-show="finishedTask.length > 0"
      >Finished</label
    >
    <div :key="task.id" v-for="task in finishedTask">
      <Task
        :task="task"
        @toggle-finish="this.$emit('toggle-finish', task.id)"
        @delete-task="this.$emit('delete-task', task.id)"
      />
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "Tasks",
  components: {
    Task,
  },
  props: {
    tasks: Array,
    
  },
  data() {
    return {
      // currentCategory: this.$store.state.currentCategory,
    }
  },
  emits: ["toggle-finish"],
  computed: {
    unFinishedTask() {
      return this.$store.state.currentCategory == "All"
        ? this.tasks.filter((task) => task.finished == false)
        : this.tasks
            .filter((task) => task.category == this.$store.state.currentCategory)
            .filter((task) => task.finished == false);
    },
    finishedTask() {
      return this.$store.state.currentCategory == "All"
        ? this.tasks.filter((task) => task.finished == true)
        : this.tasks
            .filter((task) => task.category == this.$store.state.currentCategory)
            .filter((task) => task.finished == true);
    },
  },
};
</script>

<style scoped>
.tasks {
  /* background-color: #ccc; */
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>