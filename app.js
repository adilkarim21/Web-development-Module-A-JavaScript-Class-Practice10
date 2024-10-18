// Chap # 51:


// var h1Element = document.getElementById("heading");

// var paraElement = document.getElementById("para");

// var anchorElement = document.getElementById("link");

// console.log(h1Element);

// console.log(paraElement);

// console.log(anchorElement);

// anchorElement.innerHTML = "Google";

// anchorElement.href = "https://www.google.com";

// anchorElement.target = "_blank";

// anchorElement.style.textDecoration = "none";


// var div = document.getElementById("container");

// div.innerHTML = "<h1>Container Heading</h1>";

// console.log(div);




// Two properties of document:

// 1.innerHTML
// 2.innerText



// function on() {

//     var img = document.getElementById("img");

//     img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcfEtx8lYHh0tBmU7deUFAxIjT025ILM3jxVWIHfz96zOrQMytmDR4ge9_ngL7i2KDHw&usqp=CAU";

//     img.width = "200";
// }


// function off() {

//     var img = document.getElementById("img");

//     img.src = "https://cdn.pixabay.com/photo/2014/11/26/21/09/bulb-546859_640.jpg";

//     img.width = "180";

// }


// function completePara() {

//     var para = document.getElementById("para");

//     var link = document.getElementById("link");

//     if ( link.innerHTML === "Read More" ) {

//         para.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil repellendus similique quod rerum. Molestiae et eius iure eos minima eaque saepe amet id, animi nesciunt voluptas dolor quaerat! Unde, eius maiores beatae ex dignissimos dolore a reprehenderit! Autem soluta ab totam ipsa tempore optio exercitationem voluptatem consequuntur, dolorum cupiditate nisi itaque nihil quas accusantium neque, assumenda laboriosam. Iusto, aut error.";

//         link.innerHTML = "Read Less";

//     }

//     else {

//         para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto non provident nesciunt quae nemo fuga!";

//         link.innerHTML = "Read More";

//     }

// }


// function changeColor() {

//     var button = document.getElementById("button");

//     var body = document.getElementById("body");

//     if ( button.innerHTML === "Change Bg Color" ) {

//         body.style.backgroundColor = "yellow";

//         button.innerHTML = "Change Bg Color Back";

//     }

//     else {

//         body.style.backgroundColor = "white";

//         button.innerHTML = "Change Bg Color";

//     }

// }



// var div = document.getElementById("main");

// div.className = "div";

// console.log(div);



// function hideImg() {

//     var img = document.getElementById("img");

//     img.className = " hide";

// }