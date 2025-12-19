console.log("Smart Job Tracker: content script loaded");

// 1️⃣ 创建 sidebar root（只创建一次）
function ensureSidebarRoot() {
  let root = document.getElementById("smart-job-tracker-sidebar-root");

  if (!root) {
    root = document.createElement("div");
    root.id = "smart-job-tracker-sidebar-root";

    root.style.position = "fixed";
    root.style.top = "0";
    root.style.right = "0";
    root.style.width = "360px";
    root.style.height = "100vh";
    root.style.background = "#ffffff";
    root.style.zIndex = "999999";
    root.style.borderLeft = "1px solid #e5e7eb";
    root.style.boxShadow = "-4px 0 12px rgba(0,0,0,0.08)";
    root.style.overflow = "auto";

    document.body.appendChild(root);
    console.log("Smart Job Tracker: sidebar root created");
  }

  return root;
}

// 2️⃣ 注入 React bundle（只注入一次）
function injectSidebarScript() {
  if (document.getElementById("smart-job-tracker-script")) return;

  const script = document.createElement("script");
  script.id = "smart-job-tracker-script";
  script.src = chrome.runtime.getURL("dist-ui/sidebar.js");
  script.defer = true;

  document.body.appendChild(script);
  console.log("Smart Job Tracker: sidebar script injected");
}

// 3️⃣ job 抽取（你已经基本对了）
let lastJobId = null;

function extractJob() {
  const title = document.querySelector("h1")?.innerText;
  if (!title) return;

  const jobId = title;
  if (jobId === lastJobId) return;
  lastJobId = jobId;

  const company =
    document.querySelector(
      ".job-details-jobs-unified-top-card__company-name a"
    )?.innerText;

  const location =
    document.querySelector(
      ".job-details-jobs-unified-top-card__primary-description"
    )?.innerText;

  window.postMessage(
    {
      source: "SMART_JOB_TRACKER",
      type: "JOB_DATA",
      payload: { title, company, location },
    },
    "*"
  );

  console.log("Smart Job Tracker: job sent", {
    title,
    company,
    location,
  });
}

// 4️⃣ 启动
ensureSidebarRoot();
injectSidebarScript();
setInterval(extractJob, 1200);
