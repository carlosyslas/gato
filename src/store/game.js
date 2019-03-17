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
  winner: state => state.winner,
  gameStatus: state => state.status
};

const getCoordsByArrayPosition = position => {
  const row = Math.floor(position / 3);
  const col = position % 3;

  return {
    row,
    col
  };
};

const getPositionByCoords = ({ row, col }) => row * 3 + col;

const getWinningTiles = (tiles, possibleWinningPosition) => {
  const { row, col } = getCoordsByArrayPosition(possibleWinningPosition);

  console.log("COORDS:", row, col, getPositionByCoords({ row, col }));

  return null;
};

const actions = {
  markTile({ commit, getters }, position) {
    if (getters.tiles[position] !== null) {
      return;
    }

    const mark = getters.turn;
    const newMark = mark === MARKS.x ? MARKS.o : MARKS.x;
    const availableTiles = getters.tiles.reduce(
      (s, current) => s + (current === null ? 1 : 0),
      0
    );
    getWinningTiles(getters.tiles, position);

    commit("setTile", { position, mark });
    commit("setTurn", newMark);
    if (availableTiles <= 1) {
      commit("setStatus", GAME_STATUS.score);
    }
  },
  createNewGame({ commit }) {
    commit("emptyBoard");
    commit("setStatus", GAME_STATUS.running);
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
  },
  emptyBoard(state) {
    state.tiles = [null, null, null, null, null, null, null, null, null];
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
