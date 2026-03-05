export interface NetworkStats {
  blockNumber: number;
  gasPrice: string;
  chainId: number;
  difficulty?: string;
  hashrate?: string;
}

export interface Block {
  number: number;
  hash: string;
  timestamp: number;
  transactions: number;
  miner: string;
  gasUsed: string;
}

export interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  blockNumber: number;
  timestamp: number;
}
