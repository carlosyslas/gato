import { MARKS, GAME_STATUS } from "../constants";

const state = {
  status: GAME_STATUS.menu,
  tiles: [null, null, null, null, null, null, null, null, null],
  turn: MARKS.x,
  winner: null,
  winningTiles: null
};

const getters = {
  tiles: state => state.tiles,
  turn: state => state.turn,
  winner: state => state.winner,
  gameStatus: state => state.status,
  winningTiles: state => state.winningTiles
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

const rounInBounds = n => {
  if (n < 0) {
    return 3 + n;
  }
  if (n > 2) {
    return n - 3;
  }
  return n;
};

const isMainDiagonal = position =>
  position === 0 || position === 4 || position === 8;

const isAntidiagonal = position =>
  position === 2 || position === 4 || position === 6;

const calculateWinningTiles = (tiles, possibleWinningPosition, mark) => {
  const { row, col } = getCoordsByArrayPosition(possibleWinningPosition);

  const left = getPositionByCoords({ row, col: rounInBounds(col - 1) });
  const right = getPositionByCoords({ row, col: rounInBounds(col + 1) });
  const up = getPositionByCoords({ row: rounInBounds(row - 1), col });
  const down = getPositionByCoords({ row: rounInBounds(row + 1), col });
  const upLeft = getPositionByCoords({
    row: rounInBounds(row - 1),
    col: rounInBounds(col - 1)
  });
  const upRight = getPositionByCoords({
    row: rounInBounds(row - 1),
    col: rounInBounds(col + 1)
  });
  const downLeft = getPositionByCoords({
    row: rounInBounds(row + 1),
    col: rounInBounds(col - 1)
  });
  const downRight = getPositionByCoords({
    row: rounInBounds(row + 1),
    col: rounInBounds(col + 1)
  });

  if (mark === tiles[left] && mark === tiles[right]) {
    return [left, possibleWinningPosition, right];
  }
  if (mark === tiles[up] && mark === tiles[down]) {
    return [up, possibleWinningPosition, down];
  }
  if (
    isMainDiagonal(possibleWinningPosition) &&
    mark === tiles[upLeft] &&
    mark === tiles[downRight]
  ) {
    return [upLeft, possibleWinningPosition, downRight];
  }
  if (
    isAntidiagonal(possibleWinningPosition) &&
    mark === tiles[upRight] &&
    mark === tiles[downLeft]
  ) {
    return [upRight, possibleWinningPosition, downLeft];
  }

  return null;
};

const actions = {
  markTile({ commit, getters }, position) {
    if (getters.tiles[position] !== null || getters.winningTiles !== null) {
      return;
    }

    const mark = getters.turn;
    const newMark = mark === MARKS.x ? MARKS.o : MARKS.x;
    const availableTiles = getters.tiles.reduce(
      (s, current) => s + (current === null ? 1 : 0),
      0
    );
    const winningTiles = calculateWinningTiles(getters.tiles, position, mark); // TODO: rename to calculate

    if (winningTiles) {
      commit("setStatus", GAME_STATUS.score);
      commit("setWinner", mark);
      commit("setWinningTiles", winningTiles);
    }

    commit("setTile", { position, mark });
    commit("setTurn", newMark);
    if (availableTiles <= 1 && !winningTiles) {
      commit("setStatus", GAME_STATUS.score);
      commit("setWinner", null);
      commit("setWinningTiles", null);
    }
  },
  createNewGame({ commit }) {
    commit("emptyBoard");
    commit("setStatus", GAME_STATUS.running);
    commit("setWinningTiles", null);
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
  },
  setWinningTiles(state, winningTiles) {
    state.winningTiles = winningTiles;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
