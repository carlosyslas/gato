<template>
  <div id="app">
    <Board></Board>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Board from "./components/Board";

export default {
  name: "app",
  components: {
    HelloWorld,
    Board
  }
};
</script>

<style>
#app {
  font-family: "Press Start 2P", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
