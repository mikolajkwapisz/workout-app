import React from "react";

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1D2D50] text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-[#F5F5F5]">7-Day Workout Plan</h1>
      
      <div className=" flex bg-[#E3E6F3] text-black rounded-xl shadow-lg p-4">
        {[
          "1", "2", "3", "4", "5", "6", "7"
        ].map((day, index) => (
            <div key={index} className="flex flex-col border border-gray-400  items-center px-2">
              <h2 className="text-xl font-semibold text-[#1D2D50] mb-8">Day {day}</h2>
              <ul className="flex-1 flex flex-col gap-4 justify-between text-gray-800 text-sm mb-4">
                <li>Exercise 1 - 4x10 | Rest: 60s</li>
                <li>Exercise 2 - 3x12 | Rest: 45s</li>
                <li>Exercise 3 - 3x8 | Rest: 90s</li>
                <li>Exercise 4 - 4x15 | Rest: 30s</li>
              </ul>

          </div>
        ))}
      </div>

      <button className="mt-4 px-4 py-2 bg-[#007BFF] hover:bg-[#005bb5] transition-all text-white font-semibold rounded-lg shadow-md">
        Start Workout
      </button>
    </div>
  );
};

export default TestPage;
