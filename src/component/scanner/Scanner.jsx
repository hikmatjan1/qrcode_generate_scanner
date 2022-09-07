import React, { useState, useRef } from 'react';
import './scanner.css';
// import QrReader from 'react-qr-scanner';
import Footer from '../../component/footer/Footer';
import { Link } from 'react-router-dom';
import QrScanner from 'react-qr-reader';

export default function Scanner() {
    const [result, setResult] = useState("No result");
    const [uploadImg, setUploadImg] = useState(false);
    const [file, setFile] = useState(null);
    const [scanResultFile, setScanResultFile] = useState("");
    const qrRef = useRef(null);

    const camera = () => {
        setUploadImg(false);
        qrRef.current = null;
    }

    const previewStyle = {
        // height: 240,
        width: 400,
    }

    const handleError = (err) => {
        console.error(err)
    }

    const handleScan = (data) => {
        setResult(data);
    }

    const handleScanFile = (data) => {
        if (data) {
            setScanResultFile(data);
        }
    }

    const onScanFile = () => {
        qrRef.current.openImageDialog();
    }

    return (
        <div className="scanner">
            <div className="container">
                <div className="scannerWrapper">
                    <div className='scanInfo'>
                        <Link to="/"><h6>Home</h6></Link>
                        <h2>QR Code Scanner</h2>
                        <div className="btns">
                            <span onClick={camera}>Camera</span>
                            <span onClick={() => setUploadImg(true)}>Image</span>
                            {uploadImg && (
                                <span onClick={onScanFile}>Upload</span>
                            )}
                        </div>
                        <div className="scan">

                            {!uploadImg ? (
                                <>
                                    <QrScanner
                                        delay={300}
                                        onError={handleError}
                                        onScan={handleScan}
                                        style={previewStyle}
                                    />
                                    <span>{result}</span>
                                </>
                            ) : (
                                <>
                                    <QrScanner
                                        ref={qrRef}
                                        delay={300}
                                        onError={handleError}
                                        onScan={handleScanFile}
                                        style={previewStyle}
                                        legacyMode
                                    />
                                    {qrRef.current && (
                                        <span><strong>Scanned Code:</strong> {scanResultFile}</span>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
