const { BaseModule } = require("lisk-sdk");
const RegisterLisker = require("./transactions/register-lisker_transaction");

class LiskerModule extends BaseModule {
  name = "lisker";
  id = 2000;
  accountSchema = {
    type: "object",
    properties: {
      liskerId: {
        fieldNumber: 1,
        dataType: "string",
      },
    },
    default: {
      liskerId: "",
    },
  };
  transactionAssets = [new RegisterLisker()];

  actions = {};
  events = [];
  reducers = {};
  async beforeTransactionApply({ transaction, stateStore, reducerHandler }) {}

  async afterTransactionApply({ transaction, stateStore, reducerHandler }) {}
  async afterGenesisBlockApply({ genesisBlock, stateStore, reducerHandler }) {}
  async beforeBlockApply(context) {}
  async afterBlockApply(context) {}
}

module.exports = LiskerModule;
