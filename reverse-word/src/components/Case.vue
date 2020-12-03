<template>
  <div id="todo">
    <input v-model="newTodo" placeholder="new todo" /><br />
    <label style="color: " for="">Output: {{ reverseTodo }}</label>
    <div class="reversed" style="margin-bottom: ">
      <button @click="reversedWord()">reversed</button>
    </div>
    <ul>
      <li v-for="(todo, i) in todos" style="color: white">
        {{ todo }}
      </li>
    </ul>
    <div class="boxButton" style="margin: 5px">
      <button @click="add()">add</button>
      <button @click="undo()" :disabled="!canUndo">undo</button>
      <button @click="redo()" :disabled="!canRedo">redo</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo",
  data() {
    const todos = [];
    const history = [Object.assign([], todos)];
    const historyIndex = history.length - 1;
    return {
      newTodo: "",
      reverseTodo: "",
      todos: todos,
      history: history,
      historyIndex: historyIndex,
    };
  },
  computed: {
    canUndo: function () {
      return this.historyIndex > 0;
    },
    canRedo: function () {
      return this.history.length - 1 - this.historyIndex > 0;
    },
  },
  methods: {
    reversedWord: function () {
      this.reverseTodo = this.newTodo.split("").reverse().join("");
    },
    add: function () {
      if (this.newTodo) {
        this.todos.push(this.newTodo);
        this.newTodo = undefined;
        this.log(this.todos);
      }
    },
    log: function (todos) {
      this.historyIndex += 1;
      this.history.splice(this.historyIndex);
      this.history.push(Object.assign([], todos));
    },
    undo: function () {
      if (this.canUndo) {
        this.historyIndex -= 1;
        this.todos = this.history[this.historyIndex];
      }
    },
    redo: function () {
      if (this.canRedo) {
        this.historyIndex += 1;
        this.todos = this.history[this.historyIndex];
      }
    },
  },
};
</script>

<style>
#todo input {
  margin-bottom: 12px;
}
#todo label {
  color: white;
  margin-bottom: 25px;
}
.reserved {
  margin-bottom: 15px;
}
.boxButton button {
  margin: 2px;
}
</style>