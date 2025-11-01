// Made by Rypsec (2025)

setTimeout(() => {
  const API = window.API;

  if (!API || typeof API.LMSSetValue !== 'function') {
    console.error("Not found or not ready.");
    return;
  }

  // Force completion
  API.LMSSetValue("cmi.core.lesson_status", "completed");
  API.LMSSetValue("cmi.core.score.raw", "100"); // set grade to 100%
  API.LMSSetValue("cmi.core.exit", "normal");
  // API.LMSSetValue("cmi.core.total_time", "00:10:00"); // OPTIONAL: total time spent on the quiz (set to 10 minutes in this example)

  // Commit changes
  API.LMSCommit("");

  // Optional: finish session cleanly
  API.LMSFinish("");

  console.log("SUCCESS! activity marked as COMPLETED!");
  console.log("> Now click 'Exit activity' to save.");
}, 2000);
