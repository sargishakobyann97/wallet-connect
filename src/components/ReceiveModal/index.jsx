import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import copyImgSrc from '../../assets/images/copy-svgrepo-com.svg'
import './style.scss'

function ReceiveModal({ setShowReceiveModal }) {
    const [showCopyText, setShowCopyText] = useState(false)
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflowY = 'scroll'
        };
    }, [])

    const dummyKey = "This is dummy Key !"

    const copyToClipboard = (text) => {
        setShowCopyText(!showCopyText)
        setTimeout(() => {
            setShowCopyText(false)
        }, 1500);
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    return (
        <div className="receive-modal-wrapper" id="m-wr" onClick={e => e.target.id === 'm-wr' && setShowReceiveModal(false)}>
            <div className="content">
                <button className="close-receive-modal-btn" onClick={() => setShowReceiveModal(false)}>&#215;</button>
                <QRCode value={dummyKey} />
                <p>Scan address to receive payment</p>
                <div className="qr-address">
                    <span>{dummyKey}</span>
                    <button className="copy-address-btn" onClick={() => copyToClipboard(dummyKey)}>
                        <img src={copyImgSrc} alt="" />
                    </button>
                </div>
                {showCopyText && <span className="copied">Copied !</span>}
            </div>
        </div>
    );
}

export default ReceiveModal;