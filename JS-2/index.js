
//  console.log('lets start');


//  // object create 
//    let rectangle = {
//      width: 100,
//      height: 100,


//    draw: function() {
//    console.log('drawing rectangle');
//    }
//  };


//  Object Creation
  // 1. Factory Function

//   function createRectangle(width, height){

//    return rectangle = {
//       width,height,
 
//     draw: function() {
//     console.log('drawing rectangle');
//     }
//   };
// }

// let rectangleObj1 = createRectangle(5,6); 



// 2.Constructor function -> Pascal notation -> First letter of every word is capitalized -> NumberOfStudent

// function Rectangle() {
//   this.width =1;
//   this.height =1;
//   this.draw = function() {
//     console.log('drawing');
//   }
// }


// //Object create constructor function
// let rectangleObject = new Rectangle();


// function Rectangle(width, height) {
//   this.width =1;
//   this.height =1;
//   this.draw = function() {
//     console.log('drawing');
//   }
// }


// //Object create constructor function
 
// let rectangleObject = new Rectangle();
 
// rectangleObject.color = 'Yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// // constructor Property

// rectangleObject.constructor;
// Rectangle.constructor; 





// let Rectangle1 = new Function('width', 'height', `
//   this.width = width;
//   this.height = height;
//   this.draw = function() {
//     console.log('drawing');
//   };
// `);

// let rect = new Rectangle1(2, 3);
// console.log(rect);


//for-of loop 
 let rectangle = {
  length:20,
  breadth: 30,
 }

//  for (let key of Object.keys(rectangle)){
//   console.log(key);
//  }

 
//  for (let key of Object.entries(rectangle)){
//   console.log(key);
//  }

 if("color" in rectangle)
 {console.log('present');}

 else
 {console.log('absent')};
 
//...