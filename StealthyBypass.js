// Made by StackTraced (2025)

setTimeout(() => {
  const API = window.API;

  if (!API || typeof API.LMSSetValue !== 'function') {
    console.error("Not found or not ready.");
    return;
  }

  // generate random total_time string
  function generateRandomTime() {
    const minutes = Math.floor(Math.random() * (25 - 15 + 1)) + 15; // Random between 15 and 25 inclusive
    const seconds = Math.floor(Math.random() * 60);               // Random between 0 and 59
    return `00:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  // Force completion
  API.LMSSetValue("cmi.core.lesson_status", "completed");
  API.LMSSetValue("cmi.core.score.raw", "100"); // set grade to 100%
  API.LMSSetValue("cmi.core.exit", "normal");
  API.LMSSetValue("cmi.core.total_time", generateRandomTime());

  // Commit changes
  API.LMSCommit("");

  // Optional: finish session cleanly
  API.LMSFinish("");

  console.log("SUCCESS! activity marked as COMPLETED!");
  console.log("> Now click 'Exit activity' to save.");
}, 2000);
