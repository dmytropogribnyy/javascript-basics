// *Address Object
const address = {
  street: "a",
  city: "b",
  zipCode: 61145,
};

showAddress(address);

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

//*Factory & Constructor Functions

//1.Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const address1 = createAddress("a", "b", 61145);
console.log(address1);

// 2. Constructor Function
function Address(street, city, zipCode) {
  (this.street = street), (this.city = city), (this.zipCode = zipCode);
}

const address2 = new Address("a", "b", 61145);
console.log(address2);

// **********************************************************************************

// *OBJECT EQUALITY

const address3 = new Address("a", "b", 61145);
const address4 = new Address("a", "b", 61145);

console.log(areSame(address3, address4));
console.log(areEqual(address3, address4));

function areSame(address1, address2) {
  return address1 === address2;
}

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}
// ********************************************************************************

// *BLOG POST
const blogPost = {
  title: "Blog",
  body: "Hey there!",
  author: "Dmitry Pogrebnoy",
  views: 1250,
  comments: [{
      author: "a",
      body: "b"
    },
    {
      author: "c",
      body: "d"
    },
  ],
  isLive: true,
};

console.log(blogPost);
// **********************************************************************************

// *Constructor Function
function BlogPost(title, body, author) {
  (this.title = title),
  (this.body = body),
  (this.author = author),
  (this.views = 0),
  (this.comments = []),
  (this.isLive = false);
}

const blogPost1 = new BlogPost("a", "b", "c");
console.log(blogPost1);
// ***********************************************************************************

//*Price Ranges
let priceRange = [{
    label: "$",
    tooltip: "Inexpensive",
    minPerPerson: 0,
    maxPerPerson: 10
  },
  {
    label: "$$",
    tooltip: "Moderate",
    minPerPerson: 11,
    maxPerPerson: 20
  },
  {
    label: "$$$",
    tooltip: "Pricey",
    minPerPerson: 21,
    maxPerPerson: 50
  },
];

let restaurants = [{
  averagePerPerson = 5
}, ];
// *************************************************************************************
