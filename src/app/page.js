"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import CustomCard from "@/components/CustomCard";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "@/lib/firebase-config";

export default function Home() {
  const [sensors, setSensors] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sensorsRef = ref(database);

    const unsubscribe = onValue(sensorsRef, (snapshot) => {
      setSensors(snapshot.val());
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <DotLottieReact autoResizeCanvas src="/loading.json" loop autoplay />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-10 h-screen items-center">
      <CustomCard
        title="Suhu Tubuh"
        textColor="text-orange-500"
        value={`${sensors.suhuTubuh} °C`}
        animation={
          <DotLottieReact
            autoResizeCanvas
            src="/temperature.json"
            loop
            autoplay
          />
        }
      />
      <CustomCard
        title="Detak Jantung"
        textColor="text-blue-700"
        value={`${sensors.detakJantung} BPM`}
        animation={
          <DotLottieReact
            autoResizeCanvas
            src="/heartRate.json"
            loop
            autoplay
          />
        }
      />
      <CustomCard
        title="Kelembapan"
        textColor="text-blue-500"
        value={`${sensors.kelembapan} RH`}
        animation={
          <DotLottieReact autoResizeCanvas src="/humidity.json" loop autoplay />
        }
      />
      <CustomCard
        title="Suhu Ruang"
        textColor="text-orange-500"
        value={`${sensors.suhuRuang} °C`}
        animation={
          <DotLottieReact
            autoResizeCanvas
            src="/houseTemp.json"
            loop
            autoplay
          />
        }
      />
    </div>
  );
}
