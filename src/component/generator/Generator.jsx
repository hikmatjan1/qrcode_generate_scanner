import React, { useState } from 'react';
import './generator.css';
// import QRCode from "react-qr-code";
import QRCode from "qrcode.react";
import { Link } from 'react-router-dom';

export default function Generator() {
    const [text, setText] = useState("");
    const [color, setColor] = useState("white");
    const [download, setDownload] = useState(false);

    const submitHandler = () => {
        if (text !== "") {
            // setText("");
            setDownload(true);
        }
    }

    const downloadFunction = () => {
        const qrCodeURL = document.getElementById("qr-gen")
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        // console.log(qrCodeURL);
        let downloadLink = document.createElement("a");
        downloadLink.href = qrCodeURL;
        downloadLink.download = `image.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        setText("");
    }

    return (
        <div className="generator">
            <div className="container">
                <div className="generatorWrapper">
                    <Link to="/"><h6>Home</h6></Link>
                    <h2>QR Code Generate</h2>
                    <form >
                        <input
                            type="text"
                            placeholder='Enter text to encode'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button type="button" onClick={submitHandler}>Generate</button>
                    </form>
                    <div className="color">
                        <h6>Color: &nbsp;</h6>
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </div>
                    <div className="imgQrcode">
                        <QRCode
                            id="qr-gen"
                            size="300"
                            value={text}
                            level={"H"}
                            bgColor={color}
                        />
                    </div>
                    <div className="subject">
                        <span><strong>Subject: </strong>{text}</span>
                    </div>

                    {download && (
                        <div className="download">
                            <button onClick={downloadFunction}>Download</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
