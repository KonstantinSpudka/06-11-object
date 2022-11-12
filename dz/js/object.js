//1---------------
const customer = {
  firstName: "Name",
  lastName: "Surname",
  email: "surname@gmail.com",
  password: "qwerty",
  telephone: "0508569584",
  adress: "city Zaporozhye st Voronina 13/7",
  changeTelephone(newTelephone) {
    this.telephone = newTelephone;
  },
};
function getFullAdress(customer1) {
  return `${customer1.adress}`;
}

console.log("getFullAdress(customer) :>> ", getFullAdress(customer));

customer.changeTelephone("0978569584");

function getFullTelephone(customer2) {
  return `${customer2.telephone}`;
}

console.log("New Telephone :>> ", getFullTelephone(customer));

customer.isMale = true;
console.log("isMale :>> ", customer.isMale);

delete customer.adress;
console.log("customer :>> ", customer);

const customer7 = Object.assign({}, customer);
console.log("customer7 :>> ", customer7);

const customer8 = { ...customer };
console.log("customer8 :>> ", customer8);
