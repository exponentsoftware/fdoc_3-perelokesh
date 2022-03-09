const users = [
    {
      _id: "ab12ex",
      username: "Alex",
      email: "alex@alex.com",
      password: "123123",
      createdAt: "17/05/2019 9:00 AM",
      isLoggedIn: false,
    },
    {
      _id: "fg12cy",
      username: "Asab",
      email: "asab@asab.com",
      password: "123456",
      createdAt: "17/05/2019 9:30 AM",
      isLoggedIn: true,
    },
    {
      _id: "zwf8md",
      username: "Brook",
      email: "brook@brook.com",
      password: "123111",
      createdAt: "17/05/2019 9:45 AM",
      isLoggedIn: true,
    },
    {
      _id: "eefamr",
      username: "Martha",
      email: "martha@martha.com",
      password: "123222",
      createdAt: "17/05/2019 9:50 AM",
      isLoggedIn: false,
    },
    {
      _id: "ghderc",
      username: "Thomas",
      email: "thomas@thomas.com",
      password: "123333",
      createdAt: "17/05/2019 10:00 AM",
      isLoggedIn: false,
    },
  ];
  
  const products = [
    {
      _id: "eedfcf",
      name: "mobile phone",
      description: "Huawei Honor",
      price: 200,
      ratings: [
        { userId: "fg12cy", rate: 5 },
        { userId: "zwf8md", rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: "aegfal",
      name: "Laptop",
      description: "MacPro: System Darwin",
      price: 2500,
      ratings: [],
      likes: ["fg12cy"],
    },
    {
      _id: "hedfcg",
      name: "TV",
      description: "Smart TV:Procaster",
      price: 400,
      ratings: [{ userId: "fg12cy", rate: 5 }],
      likes: ["fg12cy"],
    },
  ];
  
  // console.log(users);
  
  //creating randomid for new user.
  
  const randomId = () => {
    const numbersLetters = "1234567890qwertyuiopasdfghjkl".split("");
    let randomId = "";
    let randomIndex;
    for (let i = 0; i < 6; i++) {
      randomIndex = Math.floor(Math.random() * numbersLetters.length);
      // console.log(randomIndex);
      randomId += numbersLetters[randomIndex];
      // console.log(randomId);
    }
    return randomId;
  };
  const newUser = {
    _id: randomId(),
    username: "Mario",
    email: "mario248@gmail.com",
    password: "246810",
    createdAt: new Date(),
    isLoggedIn: false,
  };
  
  //User Signup.
  
  const signUp = () => {
    const { email } = newUser;
    for (const user of users) {
      if (user["email"] == email) {
        return "Email is already exist.";
      }
    }
    users.push(newUser);
    return "Signup Successfull";
  };
  console.log(signUp(newUser));
  console.log(users);
  
  const currentUser = {
    email: "mario248@gmail.com",
    password: "246810",
  };
  
  //User login.
  
  const signIn = (user) => {
    let found = false;
    const { email, password } = user;
    for (let i = 0; i < users.length; i++) {
      if (users[i]["email"] == email && users[i]["password"] == password) {
        users[i].isLoggedIn == true;
        return "Login Successfull.";
      }
    }
    if (!found) {
      return "Login Failed.";
    }
  };
  console.log(signIn(currentUser));
  console.log(users);
  console.log(signIn({ email: "thomas@thomas.com", password: "123333" }));
  
  //For give rating to products.
  
  const rateProduct = (productId, userId, ratingPoint) => {
    let found = false;
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === productId) {
        for (let j = 0; j < products[i].ratings.length; j++) {
          if (products[i].ratings[j].userId === userId) {
            const rate = { userId, rate: ratingPoint };
            products[i].ratings[j].rate = ratingPoint;
            found = true;
            break;
          }
        }
        if (!found) {
          products[i].ratings.push({ userId, rate: ratingPoint });
        }
      }
    }
  };
  rateProduct("hedfcg", "zwf8md", 4.5);
  rateProduct("aegfal", "ghderc", 5);
  console.log(products);
  
  //For showing averaging rating of a particular product.
  
  const avgRating = (productId) => {
    let sum = 0;
    let len;
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === productId) {
        len = products[i].ratings.length;
        for (let j = 0; j < len; j++) {
          if (len === 0) {
            return 0;
          } else {
            sum += products[i].ratings[j].rate;
          }
        }
      }
    }
    console.log(len);
    return sum/len;
  };
  
  console.log(avgRating('hedfcg'));
  
  //For give like to a product.
  
  const likeProduct = (productId, userId) => {
      for(let i=0; i < products.length; i++){
          if(products[i]._id === productId){
              const likes = products[i].likes;
              const index = products[i].likes.indexOf(userId);
              if(index !== -1){
                  products[i].likes.splice(index, 1);
              }else{
                  products[i].likes.push(userId);
              }
          }
      }
  };
  likeProduct('eedfcf', 'ghderc');
  likeProduct('eedfcf', 'ab12ex');
  console.log(products);