async function loadRepoDetail() {
  const params = new URLSearchParams(window.location.search);
  const username = params.get("user");
  const repo = params.get("repo");

  if (!username || !repo) {
    document.getElementById("repoName").innerText = "INVALID REPOSITORY";
    return;
  }

  document.getElementById("repoName").innerText = `${username}/${repo}`;

  // README
  try {
    const readmeRes = await axios.get(
      `https://api.github.com/repos/${username}/${repo}/readme`,
      { headers: { Accept: "application/vnd.github.v3+json" } }
    );
    const readmeContent = atob(readmeRes.data.content);
    document.getElementById("readme").innerHTML = `<pre>${readmeContent}</pre>`;
  } catch {
    document.getElementById("readme").innerHTML = `<p class="text-danger">No README found</p>`;
  }

  // Commits
let commitsRes;
try {
  commitsRes = await axios.get(
    `https://api.github.com/repos/${username}/${repo}/commits`,
    { params: { per_page: 100, sha: "main" } } // specify branch if needed
  );
  document.getElementById("commits").innerHTML = commitsRes.data.slice(0, 10)
    .map(c => `<li class="list-unstyled">${c.commit.message}</li>`)
    .join("");
} catch (err) {
  console.error(err);
  document.getElementById("commits").innerHTML =
    `<li class="text-danger list-unstyled">Error loading commits</li>`;
}

// Personal Commits
try {
  const personalCommits = commitsRes.data.filter(c => {
    // Match against your GitHub username
    return c.author && c.author.login === username;
  });

  document.getElementById("personalCommits").innerHTML =
    personalCommits.slice(0, 10).map(c => `
      <li class="list-group-item list-unstyled">
        ${c.commit.message}
        <small class="text-muted">(${c.commit.author.name} on ${new Date(c.commit.author.date).toLocaleDateString()})</small>
      </li>
    `).join("") || `<li class="text-muted">No personal commits found</li>`;
} catch (err) {
  console.error(err);
  document.getElementById("personalCommits").innerHTML =
    `<li class="text-danger list-unstyled">Error loading your commits</li>`;
}

  // Issues
  try {
    const issuesRes = await axios.get(`https://api.github.com/repos/${username}/${repo}/issues`, { params: { per_page: 5 } });
    document.getElementById("issues").innerHTML = issuesRes.data.map(i => `<li>${i.title}</li>`).join("");
  } catch {
    document.getElementById("issues").innerHTML = `<li class="text-danger list-unstyled">Error loading issues</li>`;
  }

  // Contributors
  try {
    const contribRes = await axios.get(`https://api.github.com/repos/${username}/${repo}/contributors`);
    document.getElementById("contributors").innerHTML = contribRes.data.map(c => `
      <li class="list-group-item list-unstyled d-flex justify-content-between align-items-center">
        ${c.login}
        <span class="badge bg-primary rounded-pill">${c.contributions}</span>
      </li>
    `).join("");
  } catch {
    document.getElementById("contributors").innerHTML = `<li class="text-danger list-unstyled">Error loading contributors</li>`;
  }


// Commit History Graph
if (commitsRes) {
  const commitCounts = {};
  commitsRes.data.forEach(c => {
    if (c.commit && c.commit.author && c.commit.author.date) {
      const date = new Date(c.commit.author.date);
      const month = date.toLocaleString("default", { month: "short" });
      commitCounts[month] = (commitCounts[month] || 0) + 1;
    }
  });

  const labels = Object.keys(commitCounts);
  const data = Object.values(commitCounts);

  const ctx = document.getElementById("commitChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Commits",
        data: data,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        barThickness: 40,      
        maxBarThickness: 50    
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          categoryPercentage: 0.6, 
          barPercentage: 0.6       
        },
        y: { beginAtZero: true }
      }
    }
  });
}

}

window.onload = loadRepoDetail;
