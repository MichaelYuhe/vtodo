<template>
  <div class="add-task">
    <div class="add-button">
      <i @click="addTask" class="fas fa-plus-circle"></i>
      <span>Add a task</span>
    </div>

    <div class="add-form" v-show="showAdd">
      <form @submit="onSubmit">
        <div class="row1">
          <p>What should be done?</p>
          <input
            type="text"
            name="title"
            v-model="title"
            autocomplete="off"
            required
          />
        </div>
        <div class="row2">
          <div class="time-input">
            <p>Day & Time</p>
            <input
              type="text"
              name="time"
              v-model="time"
              autocomplete="off"
              required
            />
          </div>
          <div class="choose-category">
            <p>Category</p>
            <input
              :value="this.category"
              type="button"
              style="cursor: pointer"
              @click="chooseCategory"
            />
          </div>
        </div>
        <div class="row3">
          <input type="submit" value="Save Task" class="btn btn-block"/>
        </div>
      </form>
    </div>

    <div
      class="categories-page"
      v-show="showAdd"
      :class="{ open: this.showCategories }"
    >
      <ul class="categories">
        <li
          v-for="category in categories"
          :key="category.id"
          @click="setCategory(category.title, category.id)"
          :class="{ chosen: category.id == this.index }"
        >
          {{ category.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      title: "",
      time: "",
      showAdd: false,
      showCategories: false,
      category: this.$store.state.currentCategory,
      index: 1,
    };
  },
  props: {
    categories: Array,
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const newTask = {
        title: this.title,
        time: this.time,
        // default: unfinished and uncategorized
        finished: false,
        category: this.category,
      };
      this.$emit("add-task", newTask);
      // reset the input bar
      this.title = "";
      this.time = "";
      this.category = "uncategorized"
      this.showCategories = false
    },
    addTask() {
      this.showAdd = !this.showAdd;
      // console.log(this.showAdd);
    },
    chooseCategory() {
      this.showCategories = !this.showCategories;
      // console.log(this.showCategories)
    },
    setCategory(categoryTitle, categoryId) {
      this.category = categoryTitle;
      this.index = categoryId;
      // console.log(this.category)
    },
  },
  emits: ["add-task"],
};
</script>

<style scoped>
.add-task {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  position: relative;
}

/* input task details; choose category and time */
.add-form {
  width: 26%;
  height: 300px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  z-index: 2;
}

i {
  font-size: 20px;
  margin: 0 10px;
}

p {
  pointer-events: none;
  color: slateblue;
  transition: all 0.4s ease;
  margin: 4px 0;
  font-weight: bold;
  font-size: 13px;
}

input {
  border-radius: 3px;
  border: slateblue solid 1px;
  height: 50px;
  font-size: 22px;
  text-indent: 1em;
}

span {
  color: white;
}

form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.row1 {
  margin-top: 40px;
  width: 90%;
}

.row1 input {
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 5px inset;
}

.row2 {
  margin-top: 10px;
  width: 90%;
  display: flex;
  justify-content: start;
}

.row2 .time-input {
  width: 50%;
  margin-right: 30px;
}

.row2 .choose-category {
  width: 44%;
  background: #fff;
}

.row2 input {
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 5px inset;
  width: 100%;
}

.row2 .choose-category input {
  text-indent: 0;
}

.row3 {
  margin-top: 14px;
  display: flex;
  justify-content: start;
  width: 90%;
}

.row3 input {
  width: 140px;
  height: 40px;
  background-color: #969bfb;
  color: white;
  font-weight: bold;
  font-size: 17px;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
  text-indent: 0;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
}

.row3 input:hover {
  transform: scale(1.05);
}

.add-button {
  width: 100%;
  margin: 10px 0;
}

.categories-page {
  position: absolute;
  width: 250px;
  height: 300px;
  bottom: 0;
  border-radius: 10px;
  background-color: white;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  transition: 1s ease-in-out all;
  left: 600px;
}

.open {
  left: 1000px;
}

.categories {
  margin-top: 20px;
}

.categories .chosen {
  background-color: #969bfb;
}

.categories li {
  margin: 14px 20px;
  border-radius: 15px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  background-color: #ddd;
  transition: .5s;
}

.categories li:hover{
  transform: scale(1.03);
}
</style>