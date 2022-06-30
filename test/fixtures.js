export const serviceUrl = "http://localhost:4000";

export const maggie = {
  firstName: "Maggie",
  lastName: "Simpson",
  email: "maggie@simpson.com",
  password: "secret",
};

export const maggieCredentials = {
  email: "maggie@simpson.com",
  password: "secret",
};

export const testUsers = [
  {
    firstName: "Homer",
    lastName: "Simpson",
    email: "homer@simpson.com",
    password: "secret",
  },
  {
    firstName: "Marge",
    lastName: "Simpson",
    email: "marge@simpson.com",
    password: "secret",
  },
  {
    firstName: "Bart",
    lastName: "Simpson",
    email: "bart@simpson.com",
    password: "secret",
  },
];

export const testViewPoints = [
  {
    name: "Auf der Platte Ihrlerstein",
    lat: 48.934559,
    long: 11.866823,
    altitude: 482,
    isLandscape: true,
    userId: maggie._id,
  },
  {
    name: "Herzogstand, Walchensee",
    lat: 47.618056,
    long: 11.306111,
    altitude: 1731,
    isLandscape: true,
    userId: maggie._id,
  },
  {
    name: "Main Tower Frankfurt",
    lat: 50.112493,
    long: 8.672167,
    altitude: 380,
    isLandscape: false,
    userId: maggie._id,
  },
];
