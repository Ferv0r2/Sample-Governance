import React, { useEffect } from "react";
import Nav from "components/Nav";

import { useRecoilState } from "recoil";
import { accountState, networkState } from "components/states";

const Layout = ({ children }) => {
  const [account, setAccount] = useRecoilState(accountState);
  const [network, setNetwork] = useRecoilState(networkState);

  useEffect(() => {
    loadAccountInfo();
    setNetworkInfo();
  }, []);

  const loadAccountInfo = async () => {
    const { klaytn } = window;

    if (klaytn) {
      try {
        await klaytn.enable();
        setAccountInfo(klaytn);
        klaytn.on("accountsChanged", () => {
          setAccountInfo(klaytn);
        });
      } catch (error) {
        // console.log(error);
        console.log("User denied account access");
      }
    } else {
      console.log(
        "Non-Kaikas browser detected. You should consider trying Kaikas!"
      );
    }
  };

  const setAccountInfo = async () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;

    const accountOf = klaytn.selectedAddress;
    setAccount(accountOf);
  };

  const setNetworkInfo = async () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;

    setNetwork(klaytn.networkVersion);
    klaytn.on("networkChanged", () => setNetwork(klaytn.networkVersion));
  };

  return (
    <div className="bg-light min-h-screen">
      <Nav account={account} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
