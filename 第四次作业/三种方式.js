const obj = new Object();​
obj.name = '111';​
obj.like = '30';​
console.log(obj);
  
let obj = {​
    name: '222',​
    like: '30'​
}​
console.log(obj); 
 
function Person(name, like) {​
    this.name = name​
    this.like  = like​
    this.sayname = () => {​
      console.log(this.name)​
    }​
  }​
  const p1 = new Person('333', 30)​

