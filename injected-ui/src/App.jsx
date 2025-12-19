import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [job, setJob] = useState(null);
  const [status, setStatus] = useState("Not Saved");

  /**
   * 接收来自 contentScript 的 JOB_DATA
   */
  useEffect(() => {
    function handleMessage(event) {
      if (
        event.source !== window ||
        event.data?.source !== "SMART_JOB_TRACKER" ||
        event.data?.type !== "JOB_DATA"
      ) {
        return;
      }

      setJob(event.data.payload);
      setStatus("Not Saved");
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  /**
   * Save Job → 发回 contentScript
   */
  function handleSaveJob() {
    if (!job) return;

    window.postMessage(
      {
        source: "SMART_JOB_TRACKER",
        type: "SAVE_JOB",
        payload: {
          ...job,
          status,
          savedAt: Date.now(),
        },
      },
      "*"
    );
  }

  return (
    <div className="sidebar">
      <h2>Smart Job Tracker</h2>

      {!job && (
        <p className="muted">Waiting for job info...</p>
      )}

      {job && (
        <div className="job-card">
          <h3 className="title">{job.title}</h3>

          {job.company && (
            <p className="company">{job.company}</p>
          )}

          {job.location && (
            <p className="meta">{job.location}</p>
          )}

          <div className="status">
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Not Saved</option>
              <option>Saved</option>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>

          <button className="primary" onClick={handleSaveJob}>
            Save Job
          </button>
        </div>
      )}
    </div>
  );
}
