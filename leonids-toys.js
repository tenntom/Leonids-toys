const toys = [
    {
    id: 1,
    name: "Snake-Eyes",
    type: "G.I. Joe",
    price: 9.99,
    inStock: true,
    customerAge: 5,
    description: "a bad ass ninja soldier guy who carries grenades and never talks"
    },
    {
    id: 2,
    name: "Wilson",
    type: "Basketball",
    price: 19.99,
    inStock: true,
    customerAge: 4,
    description: "a big orange ball that bounces"
    },
    {
    id: 3,
    name: "Wham-O",
    type: "Hulahoop",
    price: 12.99,
    inStock: true,
    minCustomerAge: 3,
    description: "a big ole hoop to twirl around"
    }
]

const skateboard = {
    name: "Skateboard",
    type: "Santa Cruz",
    price: 99.99,
    minCustomerAge: 10,
    description: "something all the cool kids have"
}

const doll = {
    name: "Strawberry Shortcake",
    type: "doll",
    price: 15.99,
    minCustomerAge: 5,
    description: "a super sweet smelling doll with a big head"
}

// toys.push(skateboard);
// toys.push(doll);

// const toyToFind = 2;

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1
    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addToyToInventory(doll)
addToyToInventory(skateboard)

console.log(toys)

// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//         console.log(`The price of ${toy.name} ${toy.type} is $${toy.price}. I hear that it is ${toy.description}.`)
//     }
// }

// for (const toy of toys) {
//     console.log("The "+ toy.name + " " + toy.type + " costs $"+ toy.price +".")
// }

// for (toy of toys) {
//     toy.price = toy.price*1.05
// }

// for (toy of toys) {
//     console.log(`The price of ${toy.name} ${toy.type} is $${toy.price}. I hear that it is ${toy.description}.`)
// }