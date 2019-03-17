<template>
  <button v-if="show" class="fade-in" v-on:click="createNewGame" v-bind:class="className">Play again</button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { GAME_STATUS, MARKS } from "../constants";

export default {
  computed: {
    ...mapGetters(["winner", "gameStatus"]),
    show() {
      return this.gameStatus === GAME_STATUS.score;
    },
    className() {
      return {
        "winner-x": this.winner === MARKS.x,
        "winner-o": this.winner === MARKS.o
      };
    }
  },
  methods: mapActions(["createNewGame"])
};
</script>

<style scoped>
.winner-x {
  color: #e55b5b;
}

.winner-x:hover {
  background: #e55b5b;
  color: #fffcf2;
}

.winner-o {
  color: #25ced1;
}

.winner-o:hover {
  background: #25ced1;
  color: #fffcf2;
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
  background: #d2d2d2;
}
</style>
