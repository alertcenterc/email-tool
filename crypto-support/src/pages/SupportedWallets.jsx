import { useState } from "react";
import { useNavigate } from "react-router-dom";
import metamaskLogo from "../assets/metamask.jpg";
import trustWalletLogo from "../assets/trust-wallet.jpg";
import coinbaseWalletLogo from "../assets/coinbase-wallet.jpg";
import rainbowLogo from "../assets/rainbow.jpg";
import phantomLogo from "../assets/phantom.jpg";
import ledgerLogo from "../assets/ledger-live.jpg";
import trezorLogo from "../assets/trezor-suite.jpg";
import exodusLogo from "../assets/exodus.jpg";
import atomicWalletLogo from "../assets/atomic-wallet.jpg";
import myEtherWalletLogo from "../assets/myetherwallet.jpg";

const wallets = [
  {
    name: "MetaMask",
    tagline: "The most popular Web3 wallet for DeFi and NFTs.",
    logo: metamaskLogo,
  },
  {
    name: "Trust Wallet",
    tagline: "Mobile-first wallet with broad multi-chain support.",
    logo: trustWalletLogo,
  },
  {
    name: "Coinbase Wallet",
    tagline: "Secure wallet from the leading crypto exchange.",
    logo: coinbaseWalletLogo,
  },
  {
    name: "Rainbow",
    tagline: "Beautiful wallet built for Ethereum and NFTs.",
    logo: rainbowLogo,
  },
  {
    name: "Phantom",
    tagline: "Top wallet for Solana and NFT collectors.",
    logo: phantomLogo,
  },
  {
    name: "Ledger Live",
    tagline: "Hardware wallet companion for maximum security.",
    logo: ledgerLogo,
  },
  {
    name: "Trezor Suite",
    tagline: "Trusted hardware wallet with advanced recovery tools.",
    logo: trezorLogo,
  },
  {
    name: "Exodus",
    tagline: "User-friendly desktop and mobile wallet with multi-coin support.",
    logo: exodusLogo,
  },
  {
    name: "Atomic Wallet",
    tagline: "Decentralized wallet with instant swaps built in.",
    logo: atomicWalletLogo,
  },
  {
    name: "MyEtherWallet",
    tagline: "Ethereum-first wallet for advanced users and dApp access.",
    logo: myEtherWalletLogo,
  },

  {
    name: "(Select this if your wallet is not listed here)",
    tagline: "Ethereum-first wallet for advanced users and dApp access.",
    logo: myEtherWalletLogo,
  },
];

export const SupportedWallets = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selected) return;
    localStorage.setItem("selectedWallet", selected);
    navigate("/email-input");
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose your crypto wallet
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            Select the wallet you use so we can connect you to the
            right support path.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {wallets.map((wallet, index) => (
            <button
              key={wallet.name}
              onClick={() => setSelected(wallet.name)}
              className={`group text-left p-5 border rounded-3xl transition duration-300 hover:border-orange-500 ${
                selected === wallet.name
                  ? "border-orange-500 bg-gray-900"
                  : "border-gray-800 bg-gray-950"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={wallet.logo}
                  alt={`${wallet.name} logo`}
                  className="w-12 h-12 rounded-2xl object-contain bg-white/5 p-2"
                />
                <div>
                  <h2 className="text-lg font-semibold">{wallet.name}</h2>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-gray-400">
              {selected
                ? `Selected wallet: ${selected}`
                : "Pick one wallet to continue."}
            </p>
          </div>
          <button
            onClick={handleContinue}
            disabled={!selected}
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 text-white rounded-xl font-semibold transition duration-300 disabled:cursor-not-allowed"
          >
            Continue to Email
          </button>
        </div>
      </div>
    </div>
  );
};
