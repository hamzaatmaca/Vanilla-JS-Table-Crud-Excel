export const addModal = (param) => {
  return `
      <div id="addModalContainer" class="modalContainer">
          <div class="form-group row ">
            <label for="inputPassword" class="col-sm-4 col-form-label"><i class="fa-solid fa-signature"></i> &nbsp; FirstName</label>
            <div class="col-sm-8">
              <input type="text"  class="form-control" id="addFirstName" placeholder="FirstName">
            </div>
          </div>
          <div class="form-group row mt-3">
            <label for="inputPassword" class="col-sm-4 col-form-label"><i class="fa-solid fa-user"></i> &nbsp; LastName</label>
            <div class="col-sm-8">
              <input type="text"  class="form-control" id="addLastName" placeholder="LastName">
            </div>
          </div>
          <div class="form-group row mt-3">
            <label for="inputPassword" class="col-sm-4 col-form-label"><i class="fa-solid fa-dice-one"></i> &nbsp; Age</label>
            <div class="col-sm-8">
              <input type="number" min="0" class="form-control" id="addAge" placeholder="Age">
            </div>
          </div>
          <div class="form-group row mt-3">
            <label for="inputPassword" class="col-sm-4 col-form-label"><i class="fa-solid fa-venus-mars"></i> &nbsp; Gender</label>
            <div class="col-sm-8">
              <select class="genderSelect" id="addGender">
                <option selected>Gender</option>
                <option value="1">Male</option>
                <option value="1">Female</option>
              </select>
            </div>
          </div>
          <div class="form-group row mt-3">
            <label for="inputPassword" class="col-sm-4 col-form-label"><i class="fa-solid fa-crosshairs"></i> &nbsp; Position</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="addPosition" placeholder="Position">
            </div>
          </div>
          <div class="form-group row mt-3">
          <button id="handleAdd" class="saveButton mt-3">Save</button>
          <button id="handleAddCancel" class="cancelButton mt-3">Cancel</button>
          </div>
      </div>
      `;
};
