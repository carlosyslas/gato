<template>
  <div class="board">
    <div class="tile" v-for="(tile, index) in tiles" v-bind:key="index">
      <div class="tile-content">{{index}} - {{tile}}</div>
    </div>
  </div>
</template>

<script>
const MARKS = {
  o: "o",
  x: "x"
};
export default {
  data: () => ({
    tiles: [MARKS.o, null, MARKS.o, MARKS.o, null, MARKS.o, null, MARKS.x, null]
  })
};
</script>

<style>
.board {
  background: #333;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1rf;
  column-gap: calc(100vw / 30);
  row-gap: calc(100vw / 30);
}

.tile {
  background: #fff;
  position: relative;
  border: 1px solid;
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
</style>