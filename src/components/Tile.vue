<template>
  <div class="tile" v-bind:class="dynamicClass" v-on:click="$emit('mark')">
    <div class="tile-content">{{content}}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { MARKS } from "../constants";

export default {
  props: ["tile", "turn", "not-winning"],
  methods: mapActions(["markTile"]),
  computed: {
    dynamicClass() {
      return {
        "turn-x": this.turn === MARKS.x && this.tile === null,
        "tile-x": this.tile === MARKS.x,
        "turn-o": this.turn === MARKS.o && this.tile === null,
        "tile-o": this.tile === MARKS.o,
        "tile-not-winning": this.notWinning
      };
    },
    content() {
      if (this.tile === null) {
        return this.turn;
      }
      return this.tile;
    }
  }
};
</script>

<style scoped>
.tile {
  text-align: center;
  position: relative;
  font-size: 80px;
  line-height: 0px;
  border-radius: 5px;
  background: #fffcf2;
  color: #fffcf2;
  transition: 0.3s;
  cursor: pointer;
}

.tile-x {
  background: #e55b5b;
}

.tile-o {
  background: #25ced1;
}

.turn-x:hover {
  background: #e55b5b;
  background: #f7d2d2;
}

.turn-o:hover {
  background: #25ced1;
  background: #c3f1f2;
}

.tile::before {
  content: " ";
  padding-bottom: 100%;
  width: 1px;
  display: inline-block;
}

.tile-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.tile-not-winning {
  filter: blur(5px) grayscale(50%) brightness(0.5) opacity(0.5);
  transform: scale(0.8);
}
</style>
