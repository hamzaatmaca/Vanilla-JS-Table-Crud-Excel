import "../styles/styles.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import { updateModal } from "./components/updateModal";
import { addModal } from "./components/addModal";
import { tableRow } from "./components/tableRow";
import { clearTableBody } from "./utils/clearTableBody";
import { handlePayload } from "./utils/payload";
import { fetchServices } from "./service/service";
import { convertExcel } from "./excel/excel";

const tableBody = document.getElementById("tbody");

function rowSelect(params) {
  const selectedRow = document.querySelectorAll(".selectedRow");

  let arr = [];

  Array.from(selectedRow).map((val, key) => {
    val.addEventListener("change", () => {
      if (val.checked === true) {
        arr.push(params[key]);
        convertExcel(arr);
      }

      if (val.checked === false) {
        const x = arr.find(
          (param) => param.firstName === params[key].firstName
        );

        arr.splice(arr.indexOf(x), 1);

        convertExcel(arr);
      }
    });
  });
}

(() => {
  const addButton = document.getElementById("addRow");

  addButton.addEventListener("click", () => {
    clearTableBody(tableBody);

    if (document.getElementById("addModalContainer")) {
      document.getElementById("addModalContainer").remove();
    }

    const modal = document.createElement("DIV");

    modal.innerHTML += addModal();

    document.body.insertBefore(modal, document.body.children[0]);

    run();

    const cancelModalButton = document.getElementById("handleAddCancel");
    const saveModalButton = document.getElementById("handleAdd");

    cancelModalButton.addEventListener("click", () => {
      document.getElementById("addModalContainer").remove();
    });

    saveModalButton.addEventListener("click", () => {
      clearTableBody(tableBody);
      const firstName = document.getElementById("addFirstName");
      const lastName = document.getElementById("addLastName");
      const age = document.getElementById("addAge");
      const gender = document.getElementById("addGender");
      const position = document.getElementById("addPosition");

      const validatedPayload = handlePayload({
        firstName,
        lastName,
        age,
        gender,
        position,
      });

      const personsArray = JSON.parse(localStorage.getItem("persons"));

      personsArray.push(validatedPayload);

      localStorage.setItem("persons", JSON.stringify(personsArray));

      document.getElementById("addModalContainer").remove();

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Person Add",
        showConfirmButton: false,
        timer: 1500,
      });

      run();
    });
  });
})();

function deleteItems(elements, params) {
  Array.from(params).map((val, key) => {
    val.addEventListener("click", () => {
      clearTableBody(tableBody);
      elements.splice(key, 1);
      localStorage.setItem("persons", JSON.stringify(elements));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Person Deleted",
        showConfirmButton: false,
        timer: 1500,
      });
      run();
    });
  });
}

function updateItems(elements, params) {
  Array.from(params).map((val, key) => {
    val.addEventListener("click", () => {
      clearTableBody(tableBody);

      if (document.getElementById("modalContainer")) {
        document.getElementById("modalContainer").remove();
      }

      const modal = document.createElement("DIV");

      modal.innerHTML += updateModal(elements[key]);

      document.body.insertBefore(modal, document.body.children[0]);

      run();

      const cancelModalButton = document.getElementById("handleCancel");
      const saveModalButton = document.getElementById("handleUpdate");

      cancelModalButton.addEventListener("click", () => {
        document.getElementById("modalContainer").remove();
      });

      saveModalButton.addEventListener("click", () => {
        clearTableBody(tableBody);
        const firstName = document.getElementById("updateFirstName");
        const lastName = document.getElementById("updateLastName");
        const age = document.getElementById("updateAge");
        const gender = document.getElementById("updateGender");
        const position = document.getElementById("updatePosition");

        const validatedPayload = handlePayload({
          firstName,
          lastName,
          age,
          gender,
          position,
        });

        const personsArray = JSON.parse(localStorage.getItem("persons"));

        personsArray[key] = validatedPayload;

        localStorage.setItem("persons", JSON.stringify(personsArray));
        document.getElementById("modalContainer").remove();
        run();
      });
    });
  });
}

async function run() {
  let elements = JSON.parse(localStorage.getItem("persons"));

  (await Array.isArray(elements)) &&
    elements.forEach((val, key) => {
      tableBody.innerHTML += tableRow(val, key);
    });

  const deleteIcons = document.querySelectorAll(".deleteItem");
  const updateIcons = document.querySelectorAll(".updateItem");

  deleteItems(elements, deleteIcons);
  updateItems(elements, updateIcons);
  rowSelect(elements);
}

fetchServices("GET")
  .then(async (res) => {
    await localStorage.setItem("persons", JSON.stringify(res));
    await run();
  })
  .catch((err) => {
    alert(err);
  });
