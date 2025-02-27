export const fields = [
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter your name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
  {
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "Re-enter your password",
  },
  {
    name: "restaurantName",
    type: "text",
    label: "Restaurant Name",
    placeholder: "Enter restaurant name",
  },
  { name: "city", type: "text", label: "City", placeholder: "Enter city name" },
  {
    name: "address",
    type: "text",
    label: "Full Address",
    placeholder: "Enter full address",
  },
  {
    name: "contactNumber",
    type: "number",
    label: "Contact Number",
    placeholder: "Enter contact number",
  },
];

export const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  restaurantName: "",
  city: "",
  address: "",
  contactNumber: "",
};
