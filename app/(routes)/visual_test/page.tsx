import React from "react";

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1D2D50] text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-[#F5F5F5]">Workout Plan</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#E3E6F3] text-black rounded-2xl shadow-xl w-full max-w-3xl">
        {["Upper Body", "Lower Body", "Cardio & Core", "Rest & Recovery"].map((day, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg border border-gray-400">
            <h2 className="text-2xl font-bold text-[#1D2D50] mb-3">Day {index + 1}: {day}</h2>
            <div className="space-y-4">
              {["Exercise 1", "Exercise 2", "Exercise 3", "Exercise 4"].map((exercise, idx) => (
                <div key={idx} className="p-4 bg-gray-100 rounded-md border border-gray-300 flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{exercise}</p>
                    <p className="text-sm text-gray-600">Reps: 4x10 | Rest: 60s</p>
                  </div>
                  <div className="w-16 h-16 bg-gray-300 rounded-md"></div> {/* Placeholder for Image */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 px-6 py-3 bg-[#007BFF] hover:bg-[#005bb5] transition-all text-white font-semibold rounded-xl shadow-lg">
        Start Workout
      </button>
    </div>
  );
};

export default TestPage;
