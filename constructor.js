function Fruit(name, size, color){
    this.name = name
    this.size = size
    this.color = color
}
const fruits = new Fruit("Apple", "medium", "red")
fruits.seeds = "seed"
console.log(fruits)
console.log(fruits.name);

const fruit2 = new Fruit("Mango", "Medium", "Yellow")
console.log(fruit2)
console.log(fruit2.color);
