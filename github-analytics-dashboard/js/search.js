let debounceTimer;

async function searchUser() {
  const username = document.getElementById("user").value.trim();
  if (!username) return;

  document.getElementById("display_id").innerHTML = `<p><i>Loading...</i></p>`;

  try {
    const res = await axios.get(`https://api.github.com/search/users?q=${username}`);
    console.log(res);
    const users = res.data.items;

    const output = users.map(user => `
      <div class="col-sm-12 col-lg-4 col-md-6 mb-3">
        <div class="card p-2 shadow-sm">
          <div class="card-body">
            <h6 class="card-title">${user.login}</h6>
            <a href="repos.html?user=${user.login}" class="btn btn-sm btn-danger">View Profile</a>
          </div>
        </div>
      </div>
    `).join("");

    document.getElementById("display_id").innerHTML = output || "<p>No users found.</p>";
  } catch (error) {
    document.getElementById("display_id").innerHTML =
      `<p class="text-danger">Error fetching users: ${error.message}</p>`;
  }
}

// Debounce input
document.getElementById("user").addEventListener("input", function () {
  clearTimeout(debounceTimer);
  const query = this.value.trim();

  if (query.length < 2) {
    document.getElementById("display_id").innerHTML = "";
    return;
  }

  debounceTimer = setTimeout(() => {
    searchUser();
  }, 600); // waits 600ms after typing stops
});
