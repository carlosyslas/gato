<template>
  <div id="app">
    <Board/>
    <PlayAgain/>
  </div>
</template>

<script>
import Board from "./components/Board";
import PlayAgain from "./components/PlayAgain";

export default {
  name: "app",
  components: {
    Board,
    PlayAgain
  }
};
</script>

<style>
body {
  margin: 0;
  background: #34344a;
  color: #fffcf2;
  font-family: "Raleway", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  width: 320px;
  margin: 60px auto;
}

.fade-in {
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0.2;
    transform: translate(0, 50px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
