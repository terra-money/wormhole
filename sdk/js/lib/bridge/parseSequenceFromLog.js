import { Implementation__factory } from "../ethers-contracts";
export function parseSequenceFromLogEth(receipt, bridgeAddress) {
    // TODO: dangerous!(?)
    var bridgeLog = receipt.logs.filter(function (l) {
        return l.address === bridgeAddress;
    })[0];
    var sequence = Implementation__factory.createInterface().parseLog(bridgeLog).args.sequence;
    return sequence.toString();
}
export function parseSequenceFromLogTerra(info) {
    // Scan for the Sequence attribute in all the outputs of the transaction.
    // TODO: Make this not horrible.
    var sequence = "";
    var jsonLog = JSON.parse(info.raw_log);
    jsonLog.map(function (row) {
        row.events.map(function (event) {
            event.attributes.map(function (attribute) {
                if (attribute.key === "message.sequence") {
                    sequence = attribute.value;
                }
            });
        });
    });
    console.log("Terra Sequence: ", sequence);
    return sequence.toString();
}
var SOLANA_SEQ_LOG = "Program log: Sequence: ";
export function parseSequenceFromLogSolana(info) {
    var _a, _b;
    // TODO: better parsing, safer
    var sequence = (_b = (_a = info.meta) === null || _a === void 0 ? void 0 : _a.logMessages) === null || _b === void 0 ? void 0 : _b.filter(function (msg) { return msg.startsWith(SOLANA_SEQ_LOG); })[0].replace(SOLANA_SEQ_LOG, "");
    if (!sequence) {
        throw new Error("sequence not found");
    }
    return sequence.toString();
}
