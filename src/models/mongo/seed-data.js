export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "secret",
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "secret",
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "secret",
      },
    },
    viewPoints: {
      _model: "ViewPoint",
      vp1: {
        name: "Auf der Platte Ihrlerstein", 
        lat: 48.934559, 
        long: 11.866823, 
        altitude: 482, 
        isLandscape: true,
        userId: "->users.homer" , 
      }, 
      vp2: {
        name: "Herzogstand, Walchensee", 
        lat: 47.618056, 
        long: 11.306111, 
        altitude: 1731, 
        isLandscape: true,
        userId: "->users.homer" ,
      },
      vp3: {
        name: "Main Tower Frankfurt", 
        lat: 50.112493, 
        long: 8.672167, 
        altitude: 200, 
        isLandscape: false,
        userId: "->users.homer" ,
      }
    }
  };