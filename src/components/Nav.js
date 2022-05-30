import React from "react";
import { Disclosure } from "@headlessui/react";

import Loading from "components/Loding";

const Nav = ({ account }) => {
  let address = "";
  if (account !== undefined) {
    address = account.replace(account.substring(6, 36), "...");
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex">
              <img
                className="block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
          </div>
          {account ? (
            <div className="flex">
              <img className="w-6 mr-1" src="images/klaytn_logo.png" />
              <div className="block w-24 m-auto">
                <p className="text-base font-semibold text-gray-300 italic">
                  {address}
                </p>
              </div>
            </div>
          ) : (
            <>
              <Loading />
              <p className="ml-1 text-base font-semibold text-gray-300">
                CONNECT WALLET
              </p>
            </>
          )}
        </div>
      </div>
    </Disclosure>
  );
};

export default Nav;
