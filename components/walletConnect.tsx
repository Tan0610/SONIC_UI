"use client"
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const WalletConnect = () => {

    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button onClick={openConnectModal} type="button">
                                        <div className="text-white font-medium items-center inline-flex bg-blue-600 hover:bg-blue-700 border border-blue-600 transition-colors focus:outline-none justify-center text-center px-4 py-2 rounded-lg text-sm">
                                            Connect Wallet
                                        </div>
                                    </button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <button onClick={openChainModal} className="text-white items-center inline-flex bg-red-600 hover:bg-red-700 border border-red-600 transition-colors focus:outline-none justify-center text-center px-4 py-2 rounded-lg text-sm">
                                        Wrong network
                                    </button>
                                );
                            }
                            return (
                                <div className="flex items-center space-x-3">
                                    <div className="bg-[var(--card-background)] border border-[var(--border-color)] rounded-lg px-3 py-2">
                                        <span className="text-white text-sm font-medium">
                                            {account.displayName}
                                        </span>
                                    </div>
                                    <button 
                                        onClick={openChainModal}
                                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                                    >
                                        {chain.name}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};