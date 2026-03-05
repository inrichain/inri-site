import { useState, useEffect } from 'react';
import { INRI_CHAIN_CONFIG } from '../constants';

interface Web3State {
  account: string | null;
  chainId: number | null;
  isConnected: boolean;
  isCorrectNetwork: boolean;
}

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const useWeb3 = () => {
  const [state, setState] = useState<Web3State>({
    account: null,
    chainId: null,
    isConnected: false,
    isCorrectNetwork: false
  });

  const checkConnection = async () => {
    if (!window.ethereum) return;

    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const chainIdNumber = parseInt(chainId, 16);

      setState({
        account: accounts[0] || null,
        chainId: chainIdNumber,
        isConnected: accounts.length > 0,
        isCorrectNetwork: chainIdNumber === INRI_CHAIN_CONFIG.chainId
      });
    } catch (error) {
      console.error('Error checking connection:', error);
    }
  };

  const connect = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask to connect your wallet');
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });

      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const chainIdNumber = parseInt(chainId, 16);

      setState({
        account: accounts[0],
        chainId: chainIdNumber,
        isConnected: true,
        isCorrectNetwork: chainIdNumber === INRI_CHAIN_CONFIG.chainId
      });

      if (chainIdNumber !== INRI_CHAIN_CONFIG.chainId) {
        await switchNetwork();
      }
    } catch (error) {
      console.error('Error connecting:', error);
    }
  };

  const switchNetwork = async () => {
    if (!window.ethereum) return;

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: INRI_CHAIN_CONFIG.chainIdHex }],
      });
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: INRI_CHAIN_CONFIG.chainIdHex,
              chainName: INRI_CHAIN_CONFIG.chainName,
              nativeCurrency: INRI_CHAIN_CONFIG.nativeCurrency,
              rpcUrls: [INRI_CHAIN_CONFIG.rpcUrl],
              blockExplorerUrls: [INRI_CHAIN_CONFIG.blockExplorerUrl]
            }],
          });
        } catch (addError) {
          console.error('Error adding network:', addError);
        }
      }
    }
  };

  const disconnect = () => {
    setState({
      account: null,
      chainId: null,
      isConnected: false,
      isCorrectNetwork: false
    });
  };

  useEffect(() => {
    checkConnection();

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', checkConnection);
      window.ethereum.on('chainChanged', checkConnection);

      return () => {
        window.ethereum.removeListener('accountsChanged', checkConnection);
        window.ethereum.removeListener('chainChanged', checkConnection);
      };
    }
  }, []);

  return {
    ...state,
    connect,
    disconnect,
    switchNetwork
  };
};
