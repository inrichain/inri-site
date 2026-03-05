import { Search, TrendingUp, Activity, Zap, Copy, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BlockData {
  number: number;
  hash: string;
  miner: string;
  txCount: number;
  gasUsed: number;
  gasLimit: number;
  timestamp: number;
  ageSec: number;
}

interface TxData {
  hash: string;
  from: string;
  to: string | null;
  value: string;
  gas: number;
  gasUsed: number;
  status: string;
  blockNumber: number;
}

export const ExplorerFunctional = () => {
  const RPC_URL = 'https://rpc.inri.life';
  const [searchQuery, setSearchQuery] = useState('');
  const [blocks, setBlocks] = useState<BlockData[]>([]);
  const [transactions, setTransactions] = useState<TxData[]>([]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({ latestBlock: '-', gasPrice: '-', peers: '-' });
  const [activeTab, setActiveTab] = useState<'blocks' | 'txs'>('blocks');

  const fetchRpc = async (method: string, params: any[] = []) => {
    try {
      const response = await fetch(RPC_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jsonrpc: '2.0', id: Date.now(), method, params })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);
      return data.result;
    } catch (error) {
      console.error('RPC Error:', error);
      return null;
    }
  };

  const loadStats = async () => {
    try {
      const blockHex = await fetchRpc('eth_blockNumber');
      const gasHex = await fetchRpc('eth_gasPrice');
      const peersHex = await fetchRpc('net_peerCount');

      const blockNum = parseInt(blockHex || '0', 16);
      const gasPriceGwei = parseInt(gasHex || '0', 16) / 1e9;
      const peerCount = parseInt(peersHex || '0', 16);

      setStats({
        latestBlock: blockNum.toString(),
        gasPrice: gasPriceGwei.toFixed(2),
        peers: peerCount.toString()
      });
    } catch (error) {
      console.error('Stats error:', error);
    }
  };

  const loadLatestBlocks = async () => {
    setLoading(true);
    try {
      const latestHex = await fetchRpc('eth_blockNumber');
      const latest = parseInt(latestHex || '0', 16);
      const now = Math.floor(Date.now() / 1000);

      const blockPromises = [];
      for (let i = 0; i < 8; i++) {
        const bn = latest - i;
        blockPromises.push(fetchRpc('eth_getBlockByNumber', [`0x${bn.toString(16)}`, true]));
      }

      const blockResults = await Promise.all(blockPromises);
      const blockObjs: BlockData[] = blockResults
        .filter(Boolean)
        .map((b: any) => ({
          number: parseInt(b.number, 16),
          hash: b.hash,
          miner: b.miner,
          txCount: (b.transactions || []).length,
          gasUsed: parseInt(b.gasUsed, 16),
          gasLimit: parseInt(b.gasLimit, 16),
          timestamp: parseInt(b.timestamp, 16),
          ageSec: Math.max(0, now - parseInt(b.timestamp, 16))
        }));

      setBlocks(blockObjs);

      // Load latest transactions
      let txs: TxData[] = [];
      for (const block of blockObjs.slice(0, 3)) {
        if (block.txCount > 0) {
          const blockData = await fetchRpc('eth_getBlockByNumber', [`0x${block.number.toString(16)}`, true]);
          if (blockData?.transactions) {
            for (const tx of blockData.transactions.slice(0, 3)) {
              if (txs.length < 8) {
                const receipt = await fetchRpc('eth_getTransactionReceipt', [tx.hash]).catch(() => null);
                txs.push({
                  hash: tx.hash,
                  from: tx.from,
                  to: tx.to,
                  value: parseInt(tx.value || '0', 16).toString(),
                  gas: parseInt(tx.gas, 16),
                  gasUsed: receipt ? parseInt(receipt.gasUsed, 16) : 0,
                  status: receipt?.status === '0x1' ? 'success' : 'failed',
                  blockNumber: block.number
                });
              }
            }
          }
        }
      }
      setTransactions(txs);
    } catch (error) {
      console.error('Load blocks error:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadStats();
    loadLatestBlocks();
    const interval = setInterval(() => {
      loadStats();
      loadLatestBlocks();
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const shortHash = (hash: string) => hash.slice(0, 6) + '…' + hash.slice(-4);

  return (
    <section id="explorer" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Chain <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Explorer</span>
          </h2>
          <p className="text-lg text-gray-400">Real-time blockchain data and statistics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Latest Block', value: stats.latestBlock, icon: TrendingUp },
            { label: 'Gas Price', value: stats.gasPrice + ' Gwei', icon: Zap },
            { label: 'Connected Peers', value: stats.peers, icon: Activity },
            { label: 'Network', value: 'INRI (3777)', icon: ExternalLink }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 rounded-xl p-4 hover:border-blue-400/50 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 font-semibold uppercase">{item.label}</span>
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-black text-white">{item.value}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 rounded-2xl p-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-1 flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
              <Search className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search by address, tx hash, or block number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white outline-none placeholder-gray-600"
              />
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95">
              Search
            </button>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          {['blocks', 'txs'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'blocks' | 'txs')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {tab === 'blocks' ? 'Recent Blocks' : 'Recent Transactions'}
            </button>
          ))}
        </div>

        {activeTab === 'blocks' && (
          <div className="space-y-3">
            {blocks.length === 0 ? (
              <div className="text-center py-8 text-gray-400">Loading blocks...</div>
            ) : (
              blocks.map((block) => (
                <div
                  key={block.number}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-400/30 transition-all"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Block #</div>
                      <div className="font-black text-lg text-white">{block.number}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Hash</div>
                      <div className="font-mono text-sm text-cyan-400 cursor-pointer hover:text-cyan-300 flex items-center gap-2">
                        {shortHash(block.hash)}
                        <Copy className="w-3 h-3" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Transactions</div>
                      <div className="font-black text-white">{block.txCount}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Age</div>
                      <div className="text-sm text-white">{block.ageSec}s ago</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'txs' && (
          <div className="space-y-3">
            {transactions.length === 0 ? (
              <div className="text-center py-8 text-gray-400">Loading transactions...</div>
            ) : (
              transactions.map((tx) => (
                <div
                  key={tx.hash}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-400/30 transition-all"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Hash</div>
                      <div className="font-mono text-sm text-cyan-400 cursor-pointer hover:text-cyan-300 flex items-center gap-2">
                        {shortHash(tx.hash)}
                        <Copy className="w-3 h-3" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">From</div>
                      <div className="font-mono text-xs text-gray-300">{shortHash(tx.from)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">To</div>
                      <div className="font-mono text-xs text-gray-300">{tx.to ? shortHash(tx.to) : '—'}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Status</div>
                      <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                        tx.status === 'success'
                          ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                          : 'bg-red-500/20 text-red-300 border border-red-500/50'
                      }`}>
                        {tx.status === 'success' ? '✓' : '✕'} {tx.status}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Block</div>
                      <div className="font-mono text-sm text-white">{tx.blockNumber}</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {loading && (
          <div className="text-center py-4 text-gray-400">
            Updating data...
          </div>
        )}
      </div>
    </section>
  );
};
