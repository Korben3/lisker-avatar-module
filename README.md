# lisker-avatar-module
Blockchain module for the Lisk SDK, allows users to register a lisker avatar to their sidechains account.

### Docs and Demo

For a live demo: [demo.lisker.io](http://demo.lisker.io)

For the public node API: [136.244.102.229:8886/api](http://136.244.102.229:8886/api)

For the official site: [lisker.io](https://lisker.io)

Example calls:

- [View transaction](http://136.244.102.229:8886/api/transactions/9e937c51c7c6836ca05e205c77b42481c068d912aead19428eb3a11a6eec72d8)
- [View account info](http://136.244.102.229:8886/api/accounts/76f0088f353ed7efe6b144e09f4b656e4fe17e1a)
- [View node info](http://136.244.102.229:8886/api/node/info)

### Module and transaction

The lisker module contains a registerLisker transaction asset, which allows a liskerId to be applied to the senders account.

**module: lisker**

id: 2000

**Transaction: Register Lisker**

id: 0
```
string: chars (76-98)
```

### Prerequisites

- Node.js
- pm2 (recommended)

For more detailed information about the installation, check the [Lisk SDK documentation](https://lisk.io/documentation/lisk-sdk/index.html).

### Installation

```
git clone https://github.com/Korben3/lisker-avatar-module
cd lisker-avatar-module
npm install
```

### Run

Run the node and view logs: `node index.js | npx bunyan -o short`

Run the node as a background service:

Register name `pm2 start --name lisker-chain index.js`

After changing parts of the code you need to stop and restart the node:

```
pm2 stop lisker-chain
pm2 start lisker-chain
```

