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

const calculateRowWinningTiles = (tiles, position, mark) => {
  const { row, col } = getCoordsByArrayPosition(position);

  const left = getPositionByCoords({ row, col: rounInBounds(col - 1) });
  const right = getPositionByCoords({ row, col: rounInBounds(col + 1) });
  if (mark === tiles[left] && mark === tiles[right]) {
    return [left, position, right];
  }

  return null;
};

const calculateColumnWinningTiles = (tiles, position, mark) => {
  const { row, col } = getCoordsByArrayPosition(position);

  const up = getPositionByCoords({ row: rounInBounds(row - 1), col });
  const down = getPositionByCoords({ row: rounInBounds(row + 1), col });
  if (mark === tiles[up] && mark === tiles[down]) {
    return [up, position, down];
  }

  return null;
};

const calculateMainDiagonalWinningTiles = (tiles, position, mark) => {
  const { row, col } = getCoordsByArrayPosition(position);

  const upLeft = getPositionByCoords({
    row: rounInBounds(row - 1),
    col: rounInBounds(col - 1)
  });
  const downRight = getPositionByCoords({
    row: rounInBounds(row + 1),
    col: rounInBounds(col + 1)
  });
  if (
    isMainDiagonal(position) &&
    mark === tiles[upLeft] &&
    mark === tiles[downRight]
  ) {
    return [upLeft, position, downRight];
  }

  return null;
};

const calculateAntidiagonalWinningTiles = (tiles, position, mark) => {
  const { row, col } = getCoordsByArrayPosition(position);

  const upRight = getPositionByCoords({
    row: rounInBounds(row - 1),
    col: rounInBounds(col + 1)
  });
  const downLeft = getPositionByCoords({
    row: rounInBounds(row + 1),
    col: rounInBounds(col - 1)
  });
  if (
    isAntidiagonal(position) &&
    mark === tiles[upRight] &&
    mark === tiles[downLeft]
  ) {
    return [upRight, position, downLeft];
  }

  return null;
};

const calculateWinningTiles = (tiles, position, mark) => {
  const rowWinningTiles = calculateRowWinningTiles(tiles, position, mark);
  if (rowWinningTiles) {
    return rowWinningTiles;
  }

  const columntWinningTiles = calculateColumnWinningTiles(
    tiles,
    position,
    mark
  );
  if (columntWinningTiles) {
    return columntWinningTiles;
  }

  const mainDiagonalWinningTiles = calculateMainDiagonalWinningTiles(
    tiles,
    position,
    mark
  );
  if (mainDiagonalWinningTiles) {
    return mainDiagonalWinningTiles;
  }

  const antidiagonalWinningTiles = calculateAntidiagonalWinningTiles(
    tiles,
    position,
    mark
  );
  if (antidiagonalWinningTiles) {
    return antidiagonalWinningTiles;
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
    const winningTiles = calculateWinningTiles(getters.tiles, position, mark);

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
