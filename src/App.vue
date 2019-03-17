<template>
  <div id="app">
    <NavBar/>
    <Menu/>
    <Board/>
    <Score/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Board from "./components/Board";
import Score from "./components/Score";

export default {
  name: "app",
  components: {
    NavBar,
    Menu,
    Board,
    Score
  }
};
</script>

<style>
body {
  margin: 0;
  background: #383838;
  background: #ffd23f;
  background: #1f0322;
  background: #34344a;
  color: #fffcf2;
  font-family: "Raleway", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  width: 320px;
  margin: 0 auto;
}

.screen {
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0.2;
    transform: translate(0, -100px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
