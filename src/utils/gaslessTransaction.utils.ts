export interface GaslessSwapPayload {
`tcreatorId: string;
`tamount: number;
`twalletAddress: string;
`tnonce: number;
`tchainId: number;
}

/** Build the signed message envelope sent to a gasless transaction relayer. */
export function buildGaslessSwapPayload(input: GaslessSwapPayload): GaslessSwapPayload {
`tif (!input.creatorId || !input.walletAddress) throw new Error('Gasless swaps require a creator and wallet address');
`tif (!Number.isSafeInteger(input.nonce) || input.nonce < 0) throw new Error('Gasless swaps require a non-negative integer nonce');
`tif (!Number.isInteger(input.chainId) || input.chainId <= 0) throw new Error('Gasless swaps require a valid chain id');
`tif (!Number.isFinite(input.amount) || input.amount <= 0) throw new Error('Gasless swaps require a positive amount');
`treturn { ...input };
}