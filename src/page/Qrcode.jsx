import React from 'react';
import './qrcode.css';
import { Link } from 'react-router-dom';

export default function Qrcode() {
    return (
        <div className="qrcode">
            <div className="container">
                <div className="qrcodeWrapper">
                    <h1>QR Code with React</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>QR Code Generate</h5>
                            <Link to="/generator">
                                <img src="/images/1.png" alt="" />
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <h5>QR Code Scanner</h5>
                            <Link to="/scanner">
                                <img src="/images/1.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
