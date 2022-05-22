import React from "react";
import mouseSquare from '../../assets/images/mouse-square.svg'
import convertCard from '../../assets/images/convert-card.svg'
import emptyWallet from '../../assets/images/empty-wallet.svg'
import trade from '../../assets/images/trade.svg'
import liquidity from '../../assets/images/wallet-minus.svg'
import farm from '../../assets/images/coin.svg'
import share from '../../assets/images/share.svg'
import ntfx from '../../assets/images/NTFX.svg'
import './style.scss'

function Aside() {
    return (
        <div className="aside-container ">
            <div>
                <button>
                    <img src={mouseSquare} alt="mouse square" />
                    <span>Dashboard</span>
                </button>
                <button>
                    <img src={emptyWallet} alt="empty-wallet" />
                    <span>Wallet</span>
                </button>
                <button>
                    <img src={convertCard} alt="convert card" />
                    <span>Exchanger</span>
                </button>
            </div>
            <div>
                <button>
                    <img src={trade} alt="Trade" />
                    <span>Trade</span>
                </button>
                <button>
                    <img src={liquidity} alt="Liquidity" />
                    <span>Liquidity</span>
                </button>
                <button>
                    <img src={farm} alt="Farm" />
                    <span>Farm</span>
                </button>
                <button>
                    <img src={share} alt="Validator" />
                    <span>Validator</span>
                </button>
            </div>
            <div>
                <img src={ntfx} alt="NTFX" />
                <span>Narfex</span>
                <span>$455.00</span>
                <span>NTFX</span>
                <span>&#9650;14%</span>
                <span>0.54</span>
            </div>
        </div>
    );
}

export default Aside;