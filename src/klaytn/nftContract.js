import caver from "klaytn/caver";
import ABI from "abi/nft.json";

/**
 * 1. Create contract instance
 * ex:) new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)
 * You can call contract method through this instance.
 * Now you can access the instance by `this.countContract` variable.
 */

const KeplerContract = new caver.klay.Contract(
  ABI,
  "0x1C7FeD12d753D8a14aAfD223E87905B1Fe31B2Af"
);

export default KeplerContract;
