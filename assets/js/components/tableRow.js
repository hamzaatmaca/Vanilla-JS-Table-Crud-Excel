export const tableRow = (val, key) => {
  return `
             <tr>
                <th scope="row">${key + 1}</th>
                <td><input class="selectedRow" type="checkbox" /></td>
                <td>${val.firstName}</td>
                <td>${val.lastName}</td>
                <td>${val.age}</td>
                <td>${val.gender}</td>
                <td>${val.position}</td>
                <td class="deleteItem"><i class="fa-solid fa-trash deleteIcon"></i></td>
                <td class="updateItem"><i class="fa-solid fa-pen-to-square updateIcon"></i></td>
              </tr>
      `;
};
