let repos = [];

async function store() {
  const params = new URLSearchParams(window.location.search);
  const username = params.get("user");

  if (!username) {
    document.getElementById("insertintable").innerHTML =
      `<tr><td colspan="6" class="text-center text-danger">No username provided</td></tr>`;
    return;
  }

  try {
    const result = await axios.get(`https://api.github.com/users/${username}/repos`, {
      params: { per_page: 100 }
    });
        console.log(result);
    repos = result.data;

    renderTable(repos);
  } catch (err) {
    document.getElementById("insertintable").innerHTML =
      `<tr><td colspan="6" class="text-center text-danger">Error fetching repos</td></tr>`;
    console.error(err);
  }
}

function renderTable(data) {
  const published = data.map(x => `
    <tr>
      <td class="fw-bold">${x.name}</td>
      <td>${x.description || "No description"}</td>
      <td>${x.stargazers_count}</td>
      <td>${x.forks_count}</td>
      <td>${x.open_issues_count}</td>
      <td><a href="repo.html?user=${x.owner.login}&repo=${x.name}" class="btn btn-sm btn-danger">View</a></td>
    </tr>
  `).join("");
  document.getElementById("insertintable").innerHTML = published;
}

// Filter
document.getElementById("filterInput").addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const filtered = repos.filter(r => r.name.toLowerCase().includes(query));
  renderTable(filtered);
});

// Sort
document.getElementById("sortSelect").addEventListener("change", e => {
  const sortBy = e.target.value;
  const sorted = [...repos].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "stars") return b.stargazers_count - a.stargazers_count;
    if (sortBy === "forks") return b.forks_count - a.forks_count;
    if (sortBy === "issues") return b.open_issues_count - a.open_issues_count;
  });
  renderTable(sorted);
});

window.onload = store;
