// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
for (let name in restaurants) {
    newRestaurants.push("Restaurant Name: " + restaurants[name]);
}

console.log(newRestaurants);
