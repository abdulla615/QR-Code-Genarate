const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img")

generateBtn.addEventListener("click", () => {
       let qrValue = qrInput.value;
       if(!qrValue) return; // if the input is empty return
       generateBtn.innerHTML = "Genarating Qr Code..."
       //lest update user input 
       qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
       qrImg.addEventListener("load", ()=>{
        wrapper.classList.add("active");
        generateBtn.innerHTML = "QR Code genarate"
       })
})
//lets remove the active class from wrapper if the input feild is empty

qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active")
    }
})