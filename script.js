function hideAllProfiles() {
  document.querySelectorAll('.profile-card').forEach(card => {
    card.style.display = 'none';
  });
}

function showProfile(id) {
  hideAllProfiles();
  document.getElementById(id).style.display = 'block';
}

function askCode() {
  let code = prompt("Enter special code to view 2A information:");
  if (code === "9304232203") {
    showProfile('2A');
  } else {
    alert("Invalid code!");
  }
}
function calculateFullAge(dobString) {
  const dob = new Date(dobString);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} years, ${months} months, ${days} days`;
}

function setAges() {
  document.getElementById('age-gulshan').innerText = `Age: ${calculateFullAge('15 June 2002')}`;
  document.getElementById('age-vashu').innerText = `Age: ${calculateFullAge('23 September 2024')}`;
  document.getElementById('age-khushi').innerText = `Age: ${calculateFullAge('25 December 2002')}`;
  document.getElementById('age-sonali').innerText = `Age: ${calculateFullAge('1999-10-10')}`;
}

window.onload = setAges;