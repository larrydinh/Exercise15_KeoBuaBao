/* eslint-disable no-lone-blocks */
/* eslint-disable no-fallthrough */
const stateDefault = {
  soBanThang: 0,
  soBanChoi: 0,
  gameArray: [
    { id: "keo", hinhAnh: "./img/keo.png", chonMenu: false },
    { id: "bua", hinhAnh: "./img/bua.png", chonMenu: true },
    { id: "bao", hinhAnh: "./img/bao.png", chonMenu: false },
  ],
  result: "I'm Iron Man, I Love U 3000",
  playerAI: { id: "bao", hinhAnh: "./img/bao.png" },
};
export const BTGameOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "PICK_ITEM": {
      let itemArray = [...state.gameArray];
      itemArray = itemArray.map((item, index) => {
        if (item.id === action.datCuoc) {
          return { ...item, chonMenu: true };
        }
        return { ...item, chonMenu: false };
      });
      state.gameArray = itemArray;
      return { ...state };
    }
    case "PLAY_GAME": {
      let numberRandom = Math.floor(Math.random() * 3);
      let arrRandom = state.gameArray[numberRandom];
      state.playerAI = arrRandom;
    }
    case "GAME_RESULT": {
      state.soBanChoi += 1;
      let player = state.gameArray.find((item) => item.chonMenu === true);
      let AI = state.playerAI;
      switch (player.id) {
        case "keo":
          {
            if (AI.id === "keo") {
              state.result = "drawwww";
            } else if (AI.id === "bua") {
              state.result = "loseeeee";
            } else {
              state.result = "winnnnn";
              state.soBanThang += 1;
            }
          }
          break;
        case "bua":
          {
            if (AI.id === "keo") {
              state.result = "winnnnn";
              state.soBanThang += 1;
            } else if (AI.id === "bua") {
              state.result = "drawwww";
            } else {
              state.result = "loseeeee";
            }
          }
          break;
        case "bao":
          {
            if (AI.id === "keo") {
              state.result = "loseeeee";
            } else if (AI.id === "bua") {
              state.result = "winnnnn";
              state.soBanThang += 1;
            } else {
              state.result = "drawwww";
            }
          }
          break;

        default:
          break;
      }
    }
    default:
      break;
  }
  return { ...state };
};
