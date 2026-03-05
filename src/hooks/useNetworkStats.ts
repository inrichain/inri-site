import { useState, useEffect } from 'react';
import { INRI_CHAIN_CONFIG } from '../constants';
import { NetworkStats } from '../types';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const useNetworkStats = () => {
  const [stats, setStats] = useState<NetworkStats>({
    blockNumber: 0,
    gasPrice: '0',
    chainId: INRI_CHAIN_CONFIG.chainId,
    difficulty: '0',
    hashrate: '0'
  });
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const responses = await Promise.all([
        fetch(INRI_CHAIN_CONFIG.rpcUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'eth_blockNumber',
            params: [],
            id: 1
          })
        }),
        fetch(INRI_CHAIN_CONFIG.rpcUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'eth_gasPrice',
            params: [],
            id: 2
          })
        })
      ]);

      const [blockNumberData, gasPriceData] = await Promise.all(
        responses.map(r => r.json())
      );

      const blockNumber = parseInt(blockNumberData.result, 16);
      const gasPrice = parseInt(gasPriceData.result, 16);
      const gasPriceGwei = (gasPrice / 1e9).toFixed(2);

      const newStats = {
        blockNumber,
        gasPrice: gasPriceGwei,
        chainId: INRI_CHAIN_CONFIG.chainId,
        difficulty: '0',
        hashrate: '0'
      };

      setStats(newStats);
      setLoading(false);

      await supabase.from('network_stats').insert({
        block_number: blockNumber,
        gas_price: parseFloat(gasPriceGwei),
        active_nodes: 42,
        tx_per_second: 150.5,
        total_supply: 21000000,
        staked_amount: 5250000,
        network_health: 98.5
      });
    } catch (error) {
      console.error('Error fetching network stats:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 10000);

    const subscription = supabase
      .channel('network_stats_live')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'network_stats' },
        (payload) => {
          console.log('Real-time update:', payload);
        }
      )
      .subscribe();

    return () => {
      clearInterval(interval);
      subscription.unsubscribe();
    };
  }, []);

  return { stats, loading, refresh: fetchStats };
};
