<template>
  <div v-if="show" class="screen score">
    <h2>Congratulations {{winner}}!</h2>
    <button v-on:click="createNewGame">Play again</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { GAME_STATUS } from "../constants";

export default {
  computed: {
    ...mapGetters(["winner", "gameStatus"]),
    show() {
      return this.gameStatus === GAME_STATUS.score || true;
    }
  },
  methods: mapActions(["createNewGame"])
};
</script>

<style scoped>
.score {
  background: #e55b5b;
  padding: 20px;
  border-radius: 10px;
}
h2 {
  margin: 0;
}

button {
  color: #34344a;
  background: #fffcf2;
  margin-top: 20px;
  padding: 10px;
  font-size: 18px;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid;
  border-radius: 4px;
  transition: 0.3s;
}
button:hover {
  color: #34344a;
  background: #ffd23f;
  background: #d2d2d2;
}
</style>
