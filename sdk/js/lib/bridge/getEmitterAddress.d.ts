import { BytesLike, Hexable } from "ethers/lib/utils";
export declare function getEmitterAddressEth(contractAddress: number | BytesLike | Hexable): string;
export declare function getEmitterAddressSolana(programAddress: string): Promise<string>;
export declare function getEmitterAddressTerra(programAddress: string): Promise<string>;
