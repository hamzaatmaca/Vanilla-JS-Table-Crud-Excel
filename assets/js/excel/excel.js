export const convertExcel = (payload) => {
  const csvBtn = document.getElementById("convertExcel");

  csvBtn.addEventListener("click", () => {
    if (payload.length > 0) {
      const filename = "persons.xlsx";
      var ws = XLSX.utils.json_to_sheet(payload);
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "People");
      XLSX.writeFile(wb, filename);
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "No Selected Row",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
};
