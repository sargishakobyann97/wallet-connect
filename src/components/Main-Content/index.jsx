import React from "react";
import buySrc from '../../assets/images/buy.svg'
import cardReceiveSrc from '../../assets/images/card-receive.svg'
import cardSendSrc from '../../assets/images/card-send.svg'
import emptyWalletTotalSrc from '../../assets/images/empty-wallet-total.svg'
import polygonTop1 from '../../assets/images/polygon-top1.svg'
import polygonBottom from '../../assets/images/polygon-bottom.svg'
import exportSrc from '../../assets/images/export.svg'
import "./style.scss"

function MainContent({ setShowReceiveModal }) {
    return (
        <div className="main-content">
            <div className="content-header">
                <dshowReceiveModaliv>
                    <div className="empty-wallet-wrapper">
                        <img src={emptyWalletTotalSrc} alt="empty wallet total" />
                    </div>
                    <h1>$434.54</h1>
                    <img className="polygon-top" src={polygonTop1} alt="polygon" />
                    <span>54%</span>
                    <img className="polygon-bottom" src={polygonBottom} alt="polygon" />
                </dshowReceiveModaliv>
                <div>
                    <button>
                        <img src={buySrc} alt="Buy" />
                        <span>Buy</span>
                    </button>
                    <button onClick={() => setShowReceiveModal(true)}>
                        <img src={cardReceiveSrc} alt="card receive" />
                        <span>Receive</span>
                    </button>
                    <button>
                        <img src={cardSendSrc} alt="card send" />
                        <span>Send</span>
                    </button>
                </div>
            </div>
            <main className="main">
                <div className="your-tokens"></div>
                <div className="your-nft">
                    <div>
                        <span>your nft</span>
                        <span>history <img src={exportSrc} alt="export img" /></span>
                    </div>
                    <div className="nft-items-wrapper">
                        <div className="nft-item">
                            <span>Degen Ape 6</span>
                        </div>
                        <div className="nft-item">
                            <span>Hello Kitty 1445</span>
                        </div>
                        <div className="nft-item">
                            <span>Brod 45</span>
                        </div>
                        <div className="nft-item">
                            <span>Degen Ape 6</span>
                        </div>
                        <div className="nft-item">
                            <span>Degen Ape 6</span>
                        </div>
                    </div>
                </div>
            </main>
        </div >
    );
}

export default MainContent;