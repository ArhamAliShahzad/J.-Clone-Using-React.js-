// components/Captcha.jsx
import React, { useState, useEffect, useCallback } from "react";

const Captcha = ({ setCaptchaValue }) => {
  const [code, setCode] = useState("");
  const [refresh, setRefresh] = useState(false);

  const generateCode = useCallback(() => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
    let newCode = "";
    for (let i = 0; i < 5; i++) {
      newCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCode(newCode);
    setCaptchaValue(newCode);
  }, [setCaptchaValue]);

  useEffect(() => {
    generateCode();
  }, [generateCode, refresh]);

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Enter the code below</span>
        <button
          type="button"
          onClick={() => setRefresh(!refresh)}
          className="text-blue-600 hover:text-blue-500 text-sm font-medium flex items-center"
        >
          Refresh
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>
      <svg
        width="100%"
        height="50"
        viewBox="0 0 200 50"
        className="bg-white rounded-md"
      >
        <filter id="distort">
          <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence" />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="5"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
        {code.split("").map((char, index) => (
          <text
            key={index}
            x={20 + index * 30}
            y="35"
            fontSize="24"
            filter="url(#distort)"
            transform={`rotate(${Math.random() * 10 - 5}, ${20 + index * 30}, 35)`}
            fill={`hsl(${Math.random() * 360}, 70%, 40%)`}
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
          >
            {char}
          </text>
        ))}
        {[...Array(3)].map((_, i) => (
          <line
            key={i}
            x1={Math.random() * 200}
            y1={Math.random() * 50}
            x2={Math.random() * 200}
            y2={Math.random() * 50}
            stroke={`hsl(${Math.random() * 360}, 70%, 60%)`}
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
};

export default Captcha;