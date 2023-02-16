import { endpoint } from "../endpoint/endpoint";

export const fetchServices = (method) => {
  return new Promise((resolve, reject) => {
    // reject(new Error(`method can not be empty`));

    if (
      String(method) === undefined ||
      String(method) === null ||
      String(method) === ""
    )
      reject(new Error(`method can not be empty`));

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => {
        reject(new Error(`Data Not Reachable`));
      });
  });
};
