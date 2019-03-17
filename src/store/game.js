import { MARKS, GAME_STATUS } from "../constants";

const state = {
  status: GAME_STATUS.menu,
  tiles: [null, null, null, null, null, null, null, null, null],
  turn: MARKS.x,
  winner: null
};

const getters = {
  tiles: state => state.tiles,
  turn: state => state.turn,
  winner: state => state.winner
};

const actions = {
  markTile({ commit, getters }, position) {
    const mark = getters.turn;
    const newMark = mark === MARKS.x ? MARKS.o : MARKS.x;
    if (getters.tiles[position] !== null) {
      return;
    }
    const availableTiles = getters.tiles.reduce(
      (s, current) => s + (current === null ? 1 : 0),
      0
    );

    commit("setTile", { position, mark });
    commit("setTurn", newMark);
    if (availableTiles <= 1) {
      commit("setStatus", GAME_STATUS.score);
    }
  }
};

const mutations = {
  setTile(state, { position, mark }) {
    const tiles = state.tiles.slice();

    tiles[position] = mark;

    state.tiles = tiles;
  },
  setTurn(state, newTurn) {
    state.turn = newTurn;
  },
  setStatus(state, newStatus) {
    state.status = newStatus;
  },
  setWinner(state, newWinner) {
    state.winner = newWinner;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
