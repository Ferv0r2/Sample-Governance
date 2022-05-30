import { atom } from "recoil";

const accountState = atom({
  key: "addressState",
  default: "",
});

const balanceState = atom({
  key: "balanceState",
  default: 0,
});

const networkState = atom({
  key: "networkState",
  default: "",
});

const proposalState = atom({
  key: "proposalState",
  default: [],
});

export { accountState, balanceState, networkState, proposalState };
