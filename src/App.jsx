import React from "react";
import { useEffect, useState } from "react";

const App = () => {
    const [temp, setTemp] = useState("");
    const [word, setWord] = useState("");
    const [bgColor, setBgColor] = useState("ffffff");
    const [qrCode, setQrCode] = useState("");
    const size = 400;

    useEffect(() => {
        setQrCode(
            `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`
        );
    }, [word, size, bgColor]);

    function handleClick() {
        setWord(temp);
    }

    return (
        <div className="border border-solid border-zinc-95 w-80 flex flex-col mx-auto h-screen justify-center items-center">
            <h1 className="text-2xl font-bold text-primary my-2">
                QR Code Generator
            </h1>
            <div className="flex border border-solid border-zinc-95 bg-fff">
                <input
                    type="text"
                    placeholder="www.example.com"
                    className="mx-2 text-sm"
                    onChange={(e) => {
                        setTemp(e.target.value);
                    }}
                />
                <button className="bg-accent p-2 font-semibold" onClick={handleClick}>
                    Generate
                </button>
            </div>
            <div className="flex my-2 justify-center items-center gap-2">
                <p className="text-sm">Change background color: </p>
                <input
                    type="color"
                    name=""
                    id=""
                    onChange={(e) => {
                        setBgColor(e.target.value.substring(1));
                    }}
                />
            </div>
            <div className="w-4/5 border border-dashed h-64 p-4 flex  justify-center items-center">
                <img src={qrCode} alt="Your QR code" />
            </div>
            <a href={qrCode} download="QRCode">
                <button
                    type="button"
                    className="mx-auto rounded-full p-2 text-text border border-solid border-text px-4 my-4 font-semibold hover:bg-primary hover:text-bg hover:border-bg transition-all"
                >
                    Download QR
                </button>
            </a>
        </div>
    );
};

export default App;
