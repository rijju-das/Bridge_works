const roleContent = {
  client: {
    label: "Client workspace",
    metrics: [
      ["Open jobs", "6", "2 closing this week"],
      ["Matched experts", "18", "5 newly recommended"],
      ["References", "12", "4 verified partners"]
    ],
    work: [
      ["Review shortlist for ERP rollout", "Compare 6 experts and invite 3 to discovery calls.", "Today"],
      ["Approve finance transformation proposal", "Procurement review is ready for final comments.", "Due Fri"],
      ["Request reference for market entry", "Ask two retail operators for implementation proof.", "This week"]
    ],
    profile: {
      title: "Northline Advisory",
      body: "Seeking senior operators and consultants for finance, supply chain, and market entry projects across Ireland and the UK.",
      tags: ["Finance", "Retail", "Operations", "Private references"]
    }
  },
  expert: {
    label: "Expert workspace",
    metrics: [
      ["Active proposals", "4", "1 awaiting client reply"],
      ["Profile views", "31", "Up 18% this month"],
      ["References shared", "9", "3 recently verified"]
    ],
    work: [
      ["Submit discovery plan", "Outline the first 14 days for a supply chain audit.", "Today"],
      ["Upload telecom case reference", "Add measurable outcomes and client contact preference.", "Due Thu"],
      ["Answer client question", "Clarify availability for a May implementation sprint.", "This week"]
    ],
    profile: {
      title: "Avery Collins",
      body: "Transformation advisor with 12 years in operating model design, cost reduction, vendor selection, and executive change programs.",
      tags: ["Transformation", "Cost reduction", "Vendor selection", "Available May"]
    }
  }
};

const timelineSeed = [
  {
    id: "job-pricing-strategy",
    type: "jobs",
    field: "Pricing strategy",
    title: "New opportunity posted",
    meta: "Client update · 18 min ago",
    body: "A consumer goods client needs an expert to lead a pricing strategy review before a new channel launch.",
    expertIds: ["expert-pricing", "expert-market-entry", "expert-finance"]
  },
  {
    id: "ref-finance-transformation",
    type: "references",
    title: "Reference verified",
    meta: "Platform update · 2 hr ago",
    body: "A finance transformation reference was verified with project scope, timeline, and measurable cost savings."
  },
  {
    id: "update-discovery-plan",
    type: "updates",
    title: "Proposal milestone",
    meta: "Expert update · Yesterday",
    body: "The discovery plan for the Irish retail expansion project is ready for client review."
  },
  {
    id: "job-support-redesign",
    type: "jobs",
    field: "Customer support redesign",
    title: "New support redesign opportunity",
    meta: "Client update · 3 days ago",
    body: "A scale-up client needs help redesigning support processes, escalation paths, and service quality reporting.",
    expertIds: ["expert-operations", "expert-market-entry", "expert-finance"]
  },
  {
    id: "job-erp-shortlist",
    type: "jobs",
    field: "ERP readiness",
    title: "Shortlist completed",
    meta: "Client update · Yesterday",
    body: "Three experts were shortlisted for the ERP readiness assessment and invited to interview.",
    expertIds: ["expert-erp", "expert-finance", "expert-operations"]
  }
];

const expertDirectory = [
  {
    id: "expert-pricing",
    name: "Lena Walsh",
    headline: "Pricing strategy consultant",
    field: "Pricing strategy",
    email: "lena@expert.local",
    availability: "Available this week",
    match: "94% match",
    tags: ["Pricing", "Consumer goods", "Channel launch"]
  },
  {
    id: "expert-market-entry",
    name: "Priya Raman",
    headline: "Market entry and scale-up advisor",
    field: "Market entry",
    email: "priya@expert.local",
    availability: "Available in May",
    match: "89% match",
    tags: ["Market entry", "Go-to-market", "Scale-up"]
  },
  {
    id: "expert-finance",
    name: "Avery Collins",
    headline: "Finance transformation advisor",
    field: "Finance transformation",
    email: "avery@expert.local",
    availability: "2 slots open",
    match: "88% match",
    tags: ["Finance", "Cost reduction", "Operating model"]
  },
  {
    id: "expert-erp",
    name: "Jonas Meyer",
    headline: "ERP readiness and vendor selection lead",
    field: "ERP readiness",
    email: "jonas@expert.local",
    availability: "Available next week",
    match: "96% match",
    tags: ["ERP", "Vendor selection", "Implementation risk"]
  },
  {
    id: "expert-operations",
    name: "Nadia Brooks",
    headline: "Operations and supply chain specialist",
    field: "Operations",
    email: "nadia@expert.local",
    availability: "Available now",
    match: "91% match",
    tags: ["Operations", "Supply chain", "Process design"]
  }
];

const opportunities = [
  {
    type: "job",
    jobId: "job-erp-shortlist",
    title: "ERP readiness assessment",
    company: "Northline Advisory",
    location: "Dublin · Hybrid",
    body: "Assess finance process maturity, system gaps, stakeholder readiness, and implementation risks before vendor selection.",
    tags: ["ERP", "Finance", "6 weeks"]
  },
  {
    type: "reference",
    title: "Supply chain cost reduction",
    company: "Verified reference",
    location: "UK manufacturing",
    body: "A verified project reference covering warehouse redesign, supplier consolidation, and measurable savings.",
    tags: ["Operations", "Manufacturing", "Verified"]
  },
  {
    type: "proposal",
    title: "Market entry sprint",
    company: "Avery Collins",
    location: "Ireland and UK",
    body: "A senior expert proposal for assessing demand, partner fit, routes to market, and first-quarter launch priorities.",
    tags: ["Strategy", "Market entry", "Available May"]
  },
  {
    type: "job",
    jobId: "job-support-redesign",
    title: "Customer support redesign",
    company: "Scale-up client",
    location: "Remote",
    body: "Design a lean support operating model, escalation process, hiring plan, and service quality dashboard.",
    tags: ["CX", "Process", "Remote"]
  },
  {
    type: "reference",
    title: "Procurement transformation",
    company: "Verified reference",
    location: "European retail",
    body: "Reference pack with savings model, supplier governance approach, and executive sponsor feedback.",
    tags: ["Procurement", "Retail", "Savings"]
  },
  {
    type: "proposal",
    title: "Fractional COO support",
    company: "Priya Raman",
    location: "London · Hybrid",
    body: "Part-time operating support for founders building repeatable delivery, reporting cadence, and leadership routines.",
    tags: ["COO", "Scale-up", "Leadership"]
  }
];

const adminAccount = {
  email: "admin@bridgeworks.local",
  password: "admin123",
  role: "admin",
  name: "Platform Admin"
};

const starterAccounts = [
  {
    id: "acct-client-1",
    role: "client",
    name: "Maya Bennett",
    company: "Northline Advisory",
    email: "maya@northline.local",
    password: "client123",
    focus: "Finance transformation and ERP readiness",
    status: "approved"
  },
  {
    id: "acct-expert-1",
    role: "expert",
    name: "Avery Collins",
    company: "Transformation Advisor",
    email: "avery@expert.local",
    password: "expert123",
    focus: "Operating model design and cost reduction",
    status: "approved"
  },
  {
    id: "acct-expert-2",
    role: "expert",
    name: "Priya Raman",
    company: "Fractional COO",
    email: "priya@expert.local",
    password: "expert123",
    focus: "Scale-up operations and leadership routines",
    status: "pending"
  }
];

let currentRole = "client";
let activeFilter = "all";
let activeAdminFilter = "all";
let activeConnectionJobId = "job-pricing-strategy";
let timeline = [...timelineSeed];
let currentUser = null;
let accounts = loadAccounts();
let chatMessages = {};

const views = document.querySelectorAll(".view");
const navLinks = document.querySelectorAll("[data-nav]");
const roleButtons = document.querySelectorAll(".role-btn");
const filterButtons = document.querySelectorAll(".filter-btn");
const adminFilterButtons = document.querySelectorAll("[data-admin-filter]");
const postForm = document.querySelector("#post-form");
const postInput = document.querySelector("#post-input");
const marketSearch = document.querySelector("#market-search");
const marketType = document.querySelector("#market-type");
const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");
const queryForm = document.querySelector("#query-form");
const queryExpert = document.querySelector("#query-expert");
const chatForm = document.querySelector("#chat-form");

function loadAccounts() {
  const stored = localStorage.getItem("bridgeworks-accounts");
  return stored ? JSON.parse(stored) : [...starterAccounts];
}

function saveAccounts() {
  localStorage.setItem("bridgeworks-accounts", JSON.stringify(accounts));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[character]));
}

function setView(viewId) {
  const [targetView, connectionJobId] = viewId.split(":");
  const nextView = document.querySelector(`#${targetView}`) ? targetView : "home";

  if (nextView === "connect") {
    activeConnectionJobId = connectionJobId || activeConnectionJobId;
    renderConnectionPage();
  }

  views.forEach((view) => view.classList.toggle("active", view.id === nextView));
  navLinks.forEach((link) => link.classList.toggle("active", link.dataset.nav === nextView));
}

function renderDashboard() {
  const content = roleContent[currentRole];
  document.querySelector("#role-label").textContent = content.label;

  content.metrics.forEach((metric, index) => {
    document.querySelector(`#metric-${["one", "two", "three"][index]}-label`).textContent = metric[0];
    document.querySelector(`#metric-${["one", "two", "three"][index]}-value`).textContent = metric[1];
    document.querySelector(`#metric-${["one", "two", "three"][index]}-note`).textContent = metric[2];
  });

  const workList = document.querySelector("#priority-list");
  workList.innerHTML = content.work.map((item) => `
    <article class="work-item">
      <div>
        <h4>${item[0]}</h4>
        <p>${item[1]}</p>
      </div>
      <span class="status">${item[2]}</span>
    </article>
  `).join("");

  const profile = document.querySelector("#profile-card");
  profile.innerHTML = `
    <h4>${content.profile.title}</h4>
    <p>${content.profile.body}</p>
    <div class="skill-list">
      ${content.profile.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;
}

function renderTimeline() {
  const list = document.querySelector("#timeline-list");
  const items = activeFilter === "all" ? timeline : timeline.filter((item) => item.type === activeFilter);

  list.innerHTML = items.map((item) => `
    <article class="timeline-item" data-type="${item.type}">
      <span class="timeline-dot" aria-hidden="true"></span>
      <div>
        <span class="timeline-meta">${escapeHtml(item.meta)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.body)}</p>
        ${item.type === "jobs" ? `
          <div class="job-response-row">
            <span class="tag">${escapeHtml(item.field || "General consulting")}</span>
            <a class="card-action" href="#connect:${item.id}">Respond</a>
          </div>
        ` : ""}
      </div>
    </article>
  `).join("");
}

function getExpertsForJob(job) {
  const explicitMatches = (job.expertIds || [])
    .map((expertId) => expertDirectory.find((expert) => expert.id === expertId))
    .filter(Boolean);

  if (explicitMatches.length) {
    return explicitMatches;
  }

  return expertDirectory.filter((expert) => {
    const haystack = `${expert.field} ${expert.tags.join(" ")}`.toLowerCase();
    return haystack.includes((job.field || "").toLowerCase());
  });
}

function getActiveConnection() {
  const job = timeline.find((item) => item.id === activeConnectionJobId) || timeline.find((item) => item.type === "jobs");

  return {
    job,
    experts: job ? getExpertsForJob(job) : []
  };
}

function renderChat(expertId) {
  const expert = expertDirectory.find((item) => item.id === expertId);
  const messages = chatMessages[expertId] || [
    {
      from: expert?.name || "Expert",
      body: "Thanks for connecting. Share the project context and I can suggest next steps."
    }
  ];

  document.querySelector("#chat-window").innerHTML = messages.map((message) => `
    <div class="chat-message ${message.from === "You" ? "mine" : ""}">
      <span>${escapeHtml(message.from)}</span>
      <p>${escapeHtml(message.body)}</p>
    </div>
  `).join("");
}

function renderConnectionPage() {
  const { job, experts } = getActiveConnection();

  if (!job) {
    return;
  }

  document.querySelector("#connection-title").textContent = `Respond to ${job.field || "job update"}`;
  document.querySelector("#connection-job-card").innerHTML = `
    <span class="timeline-meta">${escapeHtml(job.meta)}</span>
    <h3>${escapeHtml(job.title)}</h3>
    <p>${escapeHtml(job.body)}</p>
    <div class="reference-list">
      <span class="tag">${escapeHtml(job.field || "General consulting")}</span>
      <span class="tag">${experts.length} matched experts</span>
    </div>
  `;
  document.querySelector("#query-job-id").value = job.id;
  document.querySelector("#query-subject").value = `Query about ${job.field || job.title}`;
  document.querySelector("#query-message-status").textContent = "";

  document.querySelector("#expert-list").innerHTML = experts.map((expert) => `
    <article class="expert-card">
      <div>
        <span class="status approved">${escapeHtml(expert.match)}</span>
        <h4>${escapeHtml(expert.name)}</h4>
        <p>${escapeHtml(expert.headline)}</p>
        <span class="timeline-meta">${escapeHtml(expert.availability)} · ${escapeHtml(expert.email)}</span>
      </div>
      <div class="reference-list">
        ${expert.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
      <button class="secondary-action" type="button" data-select-expert="${expert.id}">Select</button>
    </article>
  `).join("");

  queryExpert.innerHTML = experts.map((expert) => `
    <option value="${expert.id}">${escapeHtml(expert.name)} · ${escapeHtml(expert.field)}</option>
  `).join("");

  if (experts[0]) {
    queryExpert.value = experts[0].id;
    renderChat(experts[0].id);
  }
}

function renderOpportunities() {
  const query = marketSearch.value.trim().toLowerCase();
  const type = marketType.value;
  const grid = document.querySelector("#opportunity-grid");

  const filtered = opportunities.filter((item) => {
    const matchesType = type === "all" || item.type === type;
    const content = `${item.title} ${item.company} ${item.location} ${item.body} ${item.tags.join(" ")}`.toLowerCase();
    return matchesType && content.includes(query);
  });

  grid.innerHTML = filtered.map((item) => `
    <article class="opportunity-card">
      <div>
        <header>
          <div>
            <span class="tag">${item.company}</span>
            <h3>${item.title}</h3>
          </div>
          <span class="type-pill ${item.type}">${item.type}</span>
        </header>
        <p>${item.body}</p>
        <div class="reference-list">
          <span class="tag">${item.location}</span>
          ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
      <a class="card-action" href="${item.type === "job" ? `#connect:${item.jobId || "job-pricing-strategy"}` : "#timeline"}">${currentRole === "client" ? "Discuss" : "Respond"}</a>
    </article>
  `).join("") || `<p>No matching opportunities found.</p>`;
}

function setCurrentRole(role) {
  currentRole = role;
  roleButtons.forEach((item) => item.classList.toggle("active", item.dataset.role === role));
  renderDashboard();
  renderOpportunities();
}

function renderAdmin() {
  const isAdmin = currentUser?.role === "admin";
  document.querySelector("#admin-lock").hidden = isAdmin;
  document.querySelector("#admin-console").hidden = !isAdmin;

  if (!isAdmin) {
    return;
  }

  const clients = accounts.filter((account) => account.role === "client");
  const experts = accounts.filter((account) => account.role === "expert");
  const pending = accounts.filter((account) => account.status === "pending");

  document.querySelector("#admin-client-count").textContent = clients.length;
  document.querySelector("#admin-expert-count").textContent = experts.length;
  document.querySelector("#admin-pending-count").textContent = pending.length;

  const visibleAccounts = accounts.filter((account) => {
    if (activeAdminFilter === "all") return true;
    if (activeAdminFilter === "pending") return account.status === "pending";
    return account.role === activeAdminFilter;
  });

  document.querySelector("#account-table-body").innerHTML = visibleAccounts.map((account) => `
    <tr>
      <td>
        <strong>${escapeHtml(account.name)}</strong>
        <span>${escapeHtml(account.company)}</span>
      </td>
      <td>${escapeHtml(account.role)}</td>
      <td>${escapeHtml(account.email)}</td>
      <td>${escapeHtml(account.focus)}</td>
      <td><span class="status ${account.status}">${escapeHtml(account.status)}</span></td>
      <td>
        <div class="table-actions">
          <button type="button" data-account-action="approve" data-account-id="${account.id}">Approve</button>
          <button type="button" data-account-action="suspend" data-account-id="${account.id}">Suspend</button>
          <button type="button" data-account-action="remove" data-account-id="${account.id}">Remove</button>
        </div>
      </td>
    </tr>
  `).join("") || `
    <tr>
      <td colspan="6">No accounts found.</td>
    </tr>
  `;
}

function syncHash() {
  setView(window.location.hash.replace("#", "") || "home");
  renderAdmin();
}

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCurrentRole(button.dataset.role);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderTimeline();
  });
});

adminFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeAdminFilter = button.dataset.adminFilter;
    adminFilterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderAdmin();
  });
});

postForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const body = postInput.value.trim();

  if (!body) {
    postInput.focus();
    return;
  }

  timeline = [{
    id: `update-${Date.now()}`,
    type: "updates",
    title: currentRole === "client" ? "Client update" : "Expert update",
    meta: "Posted just now",
    body
  }, ...timeline];

  postInput.value = "";
  activeFilter = "all";
  filterButtons.forEach((button) => button.classList.toggle("active", button.dataset.filter === "all"));
  renderTimeline();
});

document.querySelector("#expert-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-select-expert]");

  if (!button) {
    return;
  }

  queryExpert.value = button.dataset.selectExpert;
  renderChat(button.dataset.selectExpert);
  document.querySelector("#chat-message").focus();
});

queryExpert.addEventListener("change", () => {
  renderChat(queryExpert.value);
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(chatForm);
  const message = form.get("message").trim();
  const expertId = queryExpert.value;

  if (!message || !expertId) {
    return;
  }

  chatMessages[expertId] = [
    ...(chatMessages[expertId] || []),
    { from: "You", body: message }
  ];

  document.querySelector("#chat-message").value = "";
  renderChat(expertId);
});

queryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(queryForm);
  const job = timeline.find((item) => item.id === form.get("jobId"));
  const expert = expertDirectory.find((item) => item.id === form.get("expert"));
  const subject = form.get("subject").trim();
  const message = form.get("message").trim();

  if (!job || !expert || !subject || !message) {
    return;
  }

  timeline = [{
    id: `query-${Date.now()}`,
    type: "updates",
    title: `Query sent to ${expert.name}`,
    meta: "Connection update · just now",
    body: `${subject}: ${message}`
  }, ...timeline];

  document.querySelector("#query-message-status").textContent = `Query sent to ${expert.name} for ${job.field || job.title}.`;
  document.querySelector("#query-message").value = "";
  activeFilter = "all";
  filterButtons.forEach((button) => button.classList.toggle("active", button.dataset.filter === "all"));
  renderTimeline();
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(loginForm);
  const role = form.get("role");
  const email = form.get("email").trim().toLowerCase();
  const password = form.get("password");
  const message = document.querySelector("#login-message");

  if (role === "admin") {
    if (email === adminAccount.email && password === adminAccount.password) {
      currentUser = adminAccount;
      message.textContent = "Admin login successful.";
      window.location.hash = "admin";
      renderAdmin();
      return;
    }

    message.textContent = "Admin email or password is incorrect.";
    return;
  }

  const account = accounts.find((item) => item.role === role && item.email.toLowerCase() === email && item.password === password);

  if (!account) {
    message.textContent = "Email, password, or account type is incorrect.";
    return;
  }

  if (account.status !== "approved") {
    message.textContent = `This account is ${account.status}. Admin approval is required.`;
    return;
  }

  currentUser = account;
  setCurrentRole(account.role);
  message.textContent = `Welcome back, ${account.name}.`;
  window.location.hash = "dashboard";
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(registerForm);
  const email = form.get("email").trim().toLowerCase();
  const message = document.querySelector("#register-message");

  if (accounts.some((account) => account.email.toLowerCase() === email)) {
    message.textContent = "An account already exists with this email.";
    return;
  }

  const account = {
    id: `acct-${Date.now()}`,
    role: form.get("role"),
    name: form.get("name").trim(),
    company: form.get("company").trim(),
    email,
    password: form.get("password"),
    focus: form.get("focus").trim(),
    status: "pending"
  };

  accounts = [account, ...accounts];
  saveAccounts();
  registerForm.reset();
  message.textContent = "Registration submitted. An admin can approve it from the admin dashboard.";
  renderAdmin();
});

document.querySelector("#account-table-body").addEventListener("click", (event) => {
  const button = event.target.closest("[data-account-action]");

  if (!button) {
    return;
  }

  const action = button.dataset.accountAction;
  const accountId = button.dataset.accountId;

  if (action === "remove") {
    accounts = accounts.filter((account) => account.id !== accountId);
  } else {
    accounts = accounts.map((account) => {
      if (account.id !== accountId) return account;
      return {
        ...account,
        status: action === "approve" ? "approved" : "suspended"
      };
    });
  }

  saveAccounts();
  renderAdmin();
});

marketSearch.addEventListener("input", renderOpportunities);
marketType.addEventListener("change", renderOpportunities);
window.addEventListener("hashchange", syncHash);

renderDashboard();
renderTimeline();
renderOpportunities();
renderAdmin();
syncHash();
