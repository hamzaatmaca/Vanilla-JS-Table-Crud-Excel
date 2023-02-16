export const updateModal = (param) => {
  return `
      <div id="modalContainer" class="modalContainer">
          <div class="form-group row ">
            <label for="inputPassword" class="col-sm-4 col-form-label"><i class="fa-solid fa-signature"></i> &nbsp; FirstName</label>
            <div class="col-sm-8">
              <input type="text" value="${
                param.firstName
              }" class="form-control" id="updateFirstName" placeholder="FirstName">
            </div>
          </div>
          <div class="form-group row mt-3">
            <label for="inputPassword" class="col-sm-4 col-form-label"><i class="fa-solid fa-user"></i> &nbsp; LastName</label>
            <div class="col-sm-8">
              <input type="text" value="${
                param.lastName
              }" class="form-control" id="updateLastName" placeholder="LastName">
            </div>
          </div>
          <div class="form-group row mt-3">
            <label for="inputPassword" class="col-sm-4 col-form-label"><i class="fa-solid fa-dice-one"></i> &nbsp; Age</label>
            <div class="col-sm-8">
              <input type="text" value="${
                param.age
              }" class="form-control" id="updateAge" placeholder="Age">
            </div>
          </div>
          <div class="form-group row mt-3">
            <label for="inputPassword" class="col-sm-4 col-form-label"><i class="fa-solid fa-venus-mars"></i> &nbsp; Gender</label>
            <div class="col-sm-8">
              <select class="genderSelect" id="updateGender">
                <option selected>${param.gender}</option>
                <option value="1">${
                  param.gender === "Male" ? "Female" : "Male"
                }</option>
                
              </select>
            </div>
          </div>
          <div class="form-group row mt-3">
            <label for="inputPassword" class="col-sm-4 col-form-label"><i class="fa-solid fa-crosshairs"></i> &nbsp; Position</label>
            <div class="col-sm-8">
              <input type="text" value="${
                param.position
              }" class="form-control" id="updatePosition" placeholder="Position">
            </div>
          </div>
          <div class="form-group row mt-3">
          <button id="handleUpdate" class="saveButton mt-3">Save</button>
          <button id="handleCancel" class="cancelButton mt-3">Cancel</button>
          </div>
      </div>
      `;
};
