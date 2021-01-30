const {
  Application,
  genesisBlockDevnet,
  configDevnet,
  utils,
  HTTPAPIPlugin,
} = require("lisk-sdk");
const { LiskerModule } = require("./lisker_module");

genesisBlockDevnet.header.asset.accounts = genesisBlockDevnet.header.asset.accounts.map(
  (a) =>
    utils.objects.mergeDeep({}, a, {
      lisker: {
        liskerId: "",
      },
    })
);

const appConfig = utils.objects.mergeDeep({}, configDevnet, {
  label: "lisker-app",
  genesisConfig: { communityIdentifier: "lisker" },
  rpc: {
    enable: true,
    mode: "ws",
    port: 8888,
  },
  network: {
    port: 8887,
  },
  plugins: {
    httpApi: {
      port: 8886,
      whiteList: [],
    },
  },
  logger: {
    consoleLogLevel: "info",
  },
});

// Create the application instance
const app = Application.defaultApplication(genesisBlockDevnet, appConfig);

// Register Modules
app.registerModule(LiskerModule);

// Register Plugins
app.registerPlugin(HTTPAPIPlugin);

app
  .run()
  .then(() => app.logger.info("App started..."))
  .catch((error) => {
    console.error("Faced error in application", error);
    process.exit(1);
  });
