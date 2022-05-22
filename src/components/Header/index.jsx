import React from "react";
import NarfexLogoSrc from '../../assets/images/logo.svg'
import heco from '../../assets/images/heco.svg'
import walletMoney from '../../assets/images/wallet-money.svg'
import notification from '../../assets/images/notification.svg'
import setting from '../../assets/images/setting.svg'
import './style.scss'

function Header() {
    return (
        <div className="header">
            <div>
                <img src={NarfexLogoSrc} alt="Narfex Logo" />
                <span>Narfex</span>
            </div>
            <div>
                <img src={heco} alt="Heco" />
                <button> <img src={walletMoney} alt="Wallet Money" /><span>Connect wallet</span></button>
                <img src={notification} alt="notification" />
                <img src={setting} alt="setting" />
            </div>
        </div>
    );
}

export default Header;