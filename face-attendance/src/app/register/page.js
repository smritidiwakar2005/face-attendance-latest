"use client";
import { useEffect } from "react";
import Camera from "../components/Camera";
import { loadModels, detectFace } from "../utils/faceRecognition";
import axios from "axios";

export default function Home() {

  useEffect(() => {
    loadModels();
  }, []);

  const captureImage = async (video) => {
    const faceData = await detectFace(video);

    if (faceData) {
      await axios.post("/api/recognize", {
        descriptor: Array.from(faceData.descriptor),
      });
      alert("Attendance Marked");
    } else {
      alert("Face not detected");
    }
  };

  return (
    <div>
      <h1>Face Recognition Attendance System</h1>
      <Camera captureImage={captureImage} />
    </div>
  );
}