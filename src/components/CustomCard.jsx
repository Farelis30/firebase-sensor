import React from "react";

export default function CustomCard({ title, animation, value, textColor }) {
  return (
    <div className="border-2 border-blue-300 rounded-2xl p-10 flex flex-col items-center justify-center">
      <div className="text-center mb-4">
        <h1 className="text-base font-normal mb-2">{title}</h1>
        <h1 className={`text-4xl font-semibold ${textColor}`}>{value}</h1>
      </div>
      <div className="">{animation}</div>
    </div>
  );
}
