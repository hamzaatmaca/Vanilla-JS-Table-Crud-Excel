export const handlePayload = (param) => {
  const { firstName, lastName, age, gender, position } = param;
  let obj = {
    firstName: String(firstName.value),
    lastName: String(lastName.value),
    age: Number(age.value),
    gender: String(gender.value),
    position: String(position.value),
  };
  return obj;
};
