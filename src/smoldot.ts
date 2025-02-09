import { chainSpec } from "polkadot-api/chains/polkadot";
import { startFromWorker } from "polkadot-api/smoldot/from-worker";
import SmWorker from "polkadot-api/smoldot/worker?worker";

const worker = new SmWorker();
const smoldot = startFromWorker(worker);
export const polkadotChain = smoldot.addChain({ chainSpec });
