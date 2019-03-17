<template>
  <div class="board">
    <Tile
      v-for="(tile, index) in tiles"
      v-bind:key="index"
      v-bind:tile="tile"
      v-bind:turn="turn"
      v-bind:not-winning="winningTiles && winningTiles.indexOf(index) < 0"
      v-on:mark="markTile(index)"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Tile from "./Tile";

export default {
  computed: mapGetters(["tiles", "turn", "winningTiles"]),
  methods: mapActions(["markTile"]),
  components: {
    Tile
  }
};
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1rf;
  column-gap: 10px;
  row-gap: 10px;
  width: 280px;
  margin: 0 auto;
  padding: 20px;
}
</style>