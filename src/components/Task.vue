<template>
  <div class="task" :class="{ finished: task.finished }">
    <div class="done">
      <input
        type="checkbox"
        @click="this.$emit('toggle-finish', task.id)"
        :checked="task.finished"
      />
    </div>
    <div class="content">
      <div class="row1">
        <div class="task-title">{{ task.title }}</div>
        <div class="task-time">{{ task.time }}</div>
      </div>
      <div class="function">
        <i class="fas fa-trash" @click="this.$emit('delete-task', task.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {},
  emits: ["toggle-finish"],
};
</script>

<style scoped>
.task {
  width: 700px;
  background-color: #20212c;
  margin: 5px 0;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  border-radius: 30px;
  color: #d7d9e4;
  display: flex;
  align-items: center;
}

.done {
  margin-right: 18px;
}

.done input {
  border: 1px solid pink;
}

.task:hover {
  transform: scale(1.03);
}

.task .task-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
}

.task .task-time {
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 10px;
}

.content {
  display: flex;
  width: 625px;
  justify-content: space-between;
}

.finished {
  text-decoration: line-through;
}
</style>