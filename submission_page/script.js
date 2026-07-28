const selection_week = document.querySelector("#select-ini");

selection_week.addEventListener('change', (e) => {
  // e.target.value automatically gets the value of the SELECTED option
  const week_num = e.target.value; 
  const pageTitle = document.querySelector("#week-select");
  pageTitle.textContent = "Week " + week_num + " Submission:";
});