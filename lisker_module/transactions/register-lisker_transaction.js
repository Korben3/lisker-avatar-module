const { BaseAsset } = require("lisk-sdk");

class RegisterLisker extends BaseAsset {
  name = "registerLisker";
  id = 0;
  schema = {
    $id: "lisk/lisker/id",
    type: "object",
    required: ["liskerId"],
    properties: {
      liskerId: {
        fieldNumber: 1,
        dataType: "string",
      },
    },
  };

  validate({ asset }) {
    // if the LiskerId is provided, do some basic checks to see if it contains the miminum requirements of at
    // least 11 types, 4 colors, an expected length and characters. An empty id will remove the Lisker
    let { liskerId } = asset;

    if (liskerId !== "") {
      let numberOfTypes = liskerId.split("t").length - 1;
      let numberOfColors = liskerId.split("c").length - 1;
      let pattern = /[^0-9a-fA-Ftc]/g;

      if (
        numberOfTypes < 11 ||
        numberOfColors < 4 ||
        asset.liskerId.length < 76 ||
        asset.liskerId.length > 98 ||
        liskerId.match(pattern)
      ) {
        throw new Error("Invalid liskerId.");
      }
    }
  }

  async apply({ asset, stateStore, transaction }) {
    const senderAddress = transaction.senderAddress;
    const senderAccount = await stateStore.account.get(senderAddress);

    senderAccount.lisker.liskerId = asset.liskerId;
    stateStore.account.set(senderAccount.address, senderAccount);
  }
}

module.exports = RegisterLisker;
