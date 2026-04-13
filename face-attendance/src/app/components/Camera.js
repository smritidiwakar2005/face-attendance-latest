"use client";
import { useRef, useEffect } from "react";

export default function Camera({ captureImage }) {
  const videoRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      });
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay width="400" />
      <button onClick={() => captureImage(videoRef.current)}>
        Capture
      </button>
    </div>
  );
}