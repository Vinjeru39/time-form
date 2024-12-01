document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dynamicForm");
  const submitButton = document.getElementById("submitForm");
  const jsonOutput = document.getElementById("jsonOutput");

  // Add a new row when the "+" button is clicked
  form.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-btn")) {
      const newRow = document.createElement("div");
      newRow.classList.add("row");

      newRow.innerHTML = `
          <input type="date" class="date-input" name="date">
          <input type="time" class="time-input" name="initialTime">
          <input type="time" class="time-input" name="finalTime">
          <button type="button" class="remove-btn">-</button>
          <button type="button" class="add-btn">+</button>
        `;

      form.appendChild(newRow);
    }
  });

  // Remove a row when the "-" button is clicked
  form.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const rows = document.querySelectorAll(".row");
      if (rows.length > 1) {
        e.target.closest(".row").remove();
      }
    }
  });

  // Generate JSON when "Generate JSON" button is clicked
  submitButton.addEventListener("click", () => {
    const rows = document.querySelectorAll(".row");
    const data = Array.from(rows).map((row) => {
      const inputs = row.querySelectorAll("input");
      return {
        date: inputs[0].value,
        initialTime: inputs[1].value,
        finalTime: inputs[2].value,
      };
    });

    // Display JSON output
    jsonOutput.textContent = JSON.stringify(data, null, 2);
  });
});
