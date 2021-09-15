import { bech32 } from "bech32";
export function canonicalAddress(humanAddress) {
    return new Uint8Array(bech32.fromWords(bech32.decode(humanAddress).words));
}
export function humanAddress(canonicalAddress) {
    return bech32.encode("terra", bech32.toWords(canonicalAddress));
}
