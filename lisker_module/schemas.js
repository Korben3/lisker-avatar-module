const liskerAssetSchema = {
  $id: "lisk/lisker/id",
  type: "object",
  required: ["liskerId"],
  properties: {
    liskerId: {
      dataType: "string",
      fieldNumber: 1,
    },
  },
};

module.exports = {
  liskerAssetSchema,
};
