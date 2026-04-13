async function getUser() {
    const container = document.getElementById('containery');
    container.innerHTML = `<div class="loading text-center">Loading...</div>`;

    try {
      const response = await axios('https://randomuser.me/api/');
      const user = response.data.results[0];

  
      container.innerHTML = `
      <div class="d-flex align-items-center justify-content-center row vh-100" >
      <div class="col-md-12 col-lg-12 col-sm-12">
      <h1 class="text-center fw-bold mb-3">Random User Details</h1>
        <div class="card " style="width: 18rem; margin:auto;">
          <img src="${user.picture.large}" class="card-img-top" alt="User Picture">
          <div class="card-body">
            <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
            <p class="card-text">
              <strong>Gender:</strong> ${user.gender}<br>
              <strong>Email:</strong> ${user.email}<br>
              <strong>Phone:</strong> ${user.phone}<br>
              <strong>Cell:</strong> ${user.cell}<br>
              <strong>Location:</strong> ${user.location.city}, ${user.location.state}, ${user.location.country}<br>
              <strong>Street:</strong> ${user.location.street.number} ${user.location.street.name}<br>
              <strong>Postcode:</strong> ${user.location.postcode}<br>
              <strong>DOB:</strong> ${new Date(user.dob.date).toLocaleDateString()} (Age: ${user.dob.age})<br>
              <strong>Registered:</strong> ${new Date(user.registered.date).toLocaleDateString()} (Years: ${user.registered.age})
            </p>
            <button class="btn btn-dark w-100" onclick="back()">Back</button>
          </div>
        </div>
        </div>
        </div>
      `;
    } catch (error) {
      container.innerHTML = `<div class="error">Failed to load user data. Please try again.</div>`;
      console.error(error);
    }
  }

  function back(){
    const list=document.getElementById("containery");
    list.innerHTML=`
    <div class="container-fluid">
        <div class="text-center bg-primary rounded-3 p-4">
            <h1 class="display-3 fw-bold text-light">Random User Generator</h1>
            <p class="text-light">This will give you details about a Random User.</p>
            <button class="btn btn-warning text-muted" onclick="getUser()">Check</button>
        </div>

    </div>
    `
  }