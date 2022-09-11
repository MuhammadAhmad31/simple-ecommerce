document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name, product_price) {
    const inputConfirm = confirm("Apakah anda yakin ingin memesan " + product_name + " ?");
    if (inputConfirm == true){
        const message = `Halo saya mau beli ${product_name} - ${product_price}`
    const whatsapp = `https://wa.me/6282244187495?text=${message}`
    open(whatsapp, "_blank");
    } else {
        alert("Pesanan dibatalkan..!");
    }
}

function chat() {
    const inputConfirm = confirm("Apakah anda yakin ingin mengirim pesan ?");
    if (inputConfirm == true) {
        const messageInput = prompt("Masukkan Pesanmu...!");
        const whatsapp = `https://wa.me/6282244187495?text=${messageInput}`
        open(whatsapp, "_blank");
    } else {
        alert("Kamu tidak jadi mengirim pesan");
    }
}

const tombolWhatsApp = document.querySelector("div.chat");
tombolWhatsApp.addEventListener("mouseenter", () => {
    const message = document.createElement("p");
    const textMessage = document.createTextNode("Hubungi Kami");
    message.appendChild(textMessage);
    tombolWhatsApp.before(message);
    message.classList.toggle("transition");

    tombolWhatsApp.addEventListener("mouseleave", () => {
        document.querySelector(".message").removeChild(message);
    });
});

const column = document.getElementsByClassName("col");
for (let i = 0; i < column.length; i++){
    column[i].classList.add("animate__animated", "animate__fadeInDown");
}

const chatWa = document.getElementsByClassName("chat")[0];
chatWa.classList.add("animate__animated", "animate__zoomInDown");
chatWa.style.setProperty('--animate-duration', '2s');
