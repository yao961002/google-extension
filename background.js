chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SAVE_JOB") {
    const job = message.payload;

    chrome.storage.local.get(["jobs"], (result) => {
      const jobs = result.jobs || {};

      // 去重（同 jobId 覆盖）
      jobs[job.id] = {
        ...job,
        status: "Saved"
      };

      chrome.storage.local.set({ jobs }, () => {
        console.log("Job saved:", job.id);
      });
    });
  }
});
