axios.interceptors.response.use(
  res => {
    const remaining = res.headers['x-ratelimit-remaining'];
    console.log("Remaining:",remaining);
    if (remaining == 0) {
      alert("GitHub API rate limit reached. Try again later.");
    }
    return res;
  },
  err => {
    console.error("Axios error INterceptor:", err);
    return Promise.reject(err);
  }
);
