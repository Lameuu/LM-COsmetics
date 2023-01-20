const button = document.querySelector("button");
const modal  = document.querySelector("dialog");
const buttonsale =  document.querySelector("dialog button");


button.onclick = function() {

    modal.showModal()
}

// // buttonsale.onclick = function() {

// //     modal.close()
// // }


// const toggleModal = () => {
//     button.classList.toggle("hide");
//     buttonsale.classList.toggle("hide");
//   };
  
//   [button, buttonsale,modal].forEach((el) => {
//     el.addEventListener("click", () => toggleModal());
//   });