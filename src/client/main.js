import {
  establishConnection,
  establishPayer,
  loadProgram,
  sayHello,
  reportGameState,
  deploy,
} from "./deploy";

async function main() {
  await deploy();
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .then(() => process.exit());
# Change 0 on 2024-01-13
# Change 2 on 2024-02-24
