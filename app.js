let men = document.querySelector(".men-women");
let about = document.querySelector(".about");
let trends = document.querySelector(".trends");
let trend = document.querySelector(".trend");
let read = document.querySelector(".read");
let home1 = document.querySelector(".home");
let contact = document.querySelector(".contact");
let cart = document.querySelector(".cart")
// let cart2=document.getElementById("trendsec");
let cash=document.querySelector(".cash");
let delet=document.querySelector(".delete");
// let newImg = document.getElementById("newImg");
function shop() {
    men.style.display = "block";
    about.style.display = "none";
    home1.style.display = "none";
    trends.style.display = "block";
    trend.style.display = "none";
    read.style.display = "none";  
    contact.style.display = "none";
    cart.style.display = "none"
    cash.style.display="none";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "rgb(2,173,173)";
    document.getElementById("blog").style.color = "black";
    document.getElementById("About").style.color = "black";
    document.getElementById("Contact").style.color = "black";

    men.style.marginTop = "2rem";
}

function home() {
    men.style.display = "block";
    about.style.display = "none";
    home1.style.display = "flex";
    trends.style.display = "block";
    trend.style.display = "none";
    read.style.display = "none";
    contact.style.display = "none";
    cart.style.display = "none";
    cash.style.display="none";
    document.getElementById("home").style.color = "rgb(2,173,173)";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("About").style.color = "black";
    document.getElementById("Contact").style.color = "black";

}

function blog() {
    men.style.display = "none";
    about.style.display = "none";
    home1.style.display = "none";
    trends.style.display = "block";
    trend.style.display = "block";
    read.style.display = "flex";
    contact.style.display = "none";
    cart.style.display = "none"
    cash.style.display="none";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "rgb(2,173,173)";
    document.getElementById("About").style.color = "black";
    document.getElementById("Contact").style.color = "black";

}

function About() {
    men.style.display = "none";
    about.style.display = "block";
    home1.style.display = "none";
    trends.style.display = "block";
    trend.style.display = "none";
    read.style.display = "none";
    contact.style.display = "none";
    cart.style.display = "none"
    cash.style.display="none";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("About").style.color = "rgb(2,173,173)";
    document.getElementById("Contact").style.color = "black";

}

function Contact() {
    men.style.display = "none";
    about.style.display = "none";
    home1.style.display = "none";
    trends.style.display = "block";
    trend.style.display = "none";
    read.style.display = "none";
    contact.style.display = "block";
    cart.style.display = "none"
    cash.style.display="none";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("About").style.color = "black";
    document.getElementById("Contact").style.color = "rgb(2,173,173)";

}
function show(img) {

    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src = img.src;
    
    cart.style.display = "flex";
    men.style.display = "none";
    about.style.display = "none";
    home1.style.display = "none";
    trends.style.display = "block";
    trend.style.display = "none";
    read.style.display = "none";
    contact.style.display = "none";
    document.querySelector(".cart").style.dispaly = "flex";
    document.querySelector(".cart").firstElementChild.style.marginTop="3rem";
    document.querySelector(".purple").style.marginTop="3rem";
    document.querySelector(".btn-1").style.innertext="Bye Amazon<br>$15";
}
function signin() {
    alert("You successfully sign in.");
}
function addtocart2(){
    alert("Added to cart");
}
function addCart() {
    // alert("Added To Cart");
    // location.reload();
    // let images = document.getElementById("newImg-2");
    // console.log(img);
    // images.src=img.src;
    men.style.display = "none";
    about.style.display = "none";
    home1.style.display = "none";
    trends.style.display = "none";
    trend.style.display = "none";
    read.style.display = "none";
    contact.style.display = "none";
    cart.style.display = "none"
    cash.style.display="flex";
    delet.style.display="block";
    document.querySelector(".similar").style.display="flex";
    document.querySelector(".delete").style.marginTop="5rem";
}
function back() {
    location.reload();
}
function gotolink(link){
  window.location.href='https://www.amazon.com/s?k=lenovo+loq+gaming+laptop+geforce+rtx+4060&crid=PAB3OZ2PYPHP&sprefix=lenovo+loq+gaming+la%2Caps%2C274&ref=nb_sb_ss_ts-doa-p_1_20';

}
function gotolink2(link){
 location.href='https://www.flipkart.com/search?q=Lenovo%20LOQ%20Gaming%20Laptop%2C%20NVIDIA%20GeForce%20RTX%204060%2C%20Intel%2013th%20Gen%20i7-13700H%2C&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off';
}

function gotolink3(link){
    location.href='https://www.croma.com/searchB?q=Lenovo%20LOQ%20Gaming%20Laptop%2C%20NVIDIA%20GeForce%20RTX%204060%2C%20Intel%2013th%20Gen%20i7-13700H%2C%3Arelevance&text=Lenovo%20LOQ%20Gaming%20Laptop%2C%20NVIDIA%20GeForce%20RTX%204060%2C%20Intel%2013th%20Gen%20i7-13700H%2C';
}



function change(){
    let change=document.querySelector("#change");
    change.innerHTML="Noise Icon 3 1.9 Display with Bluetooth Calling, Metallic finish & Voice Assistant Smartwatch  <br>(Deep Wine Strap, Regula )<br>4.15,14,069 Ratings & 33,692 Reviews";
    let btn=document.querySelector(".btn-1");
    btn.innerHTML="Buy Amazon<br>$37.99";
    let btn2=document.querySelector(".btn-2");
    btn2.innerHTML="Buy Flipkart<br>1,299 rs";
    let btn3=document.querySelector(".btn-3");
    btn3.innerHTML="Buy Croma<br>1,149 rs";
    let button=document.getElementById("button");
    button.addEventListener("click",()=>{
window.location.href="https://www.amazon.com/s?k=smart+watch&crid=2W8JOUII1UPZ&sprefix=smart+watch%2Caps%2C552&ref=nb_sb_noss_1";
    })
    let button2=document.getElementById("button2");
    button2.addEventListener("click",()=>{
window.location.href="https://www.flipkart.com/search?q=smart+watch&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&as-pos=1&as-type=HISTORY";

    })
    let button3=document.getElementById("button3");
    button3.addEventListener("click",()=>{
window.location.href="https://www.croma.com/searchB?q=smartwatch%3Arelevance&text=smartwatch";

    })
    let item=document.getElementById("item-3 img");
    item.style.width="35rem";

}

function change2(){
    let change=document.querySelector("#change");
    change.innerHTML="Lenovo LOQ Gaming Laptop, NVIDIA GeForce RTX 4060, Intel 13th Gen i7-13700H, <br>15.6 FHD 144Hz Display, 32GB DDR5 RAM, 2TB PCIe SSD, Webcam, HDMI, RJ45, Backlit KB,<br> Wi-Fi 6, Windows 11 Home, Grey";
    let btn=document.querySelector(".btn-1");
    btn.innerHTML="Buy Amazon<br>104,000 rs";
    let btn2=document.querySelector(".btn-2");
    btn2.innerHTML="Buy Flipkart<br>999,900 rs";
    let btn3=document.querySelector(".btn-3");
    btn3.innerHTML="Buy Croma<br>110,999 rs";
    let button=document.getElementById("button");
    button.addEventListener("click",()=>{
window.location.href="https://www.amazon.com/s?k=lenovo+loq+gaming+laptop+geforce+rtx+4060&crid=PAB3OZ2PYPHP&sprefix=lenovo+loq+gaming+la%2Caps%2C274&ref=nb_sb_ss_ts-doa-p_1_20";

    })
    let button2=document.getElementById("button2");
    button2.addEventListener("click",()=>{
window.location.href="https://www.flipkart.com/lenovo-legion-5-intel-core-i7-11th-gen-11800h-16-gb-512-gb-ssd-windows-11-home-4-graphics-nvidia-geforce-rtx-3050-120-hz-15ith6-gaming-laptop/p/itmdee98c77635d7?pid=COMG62ZCYXBHRFZF&lid=LSTCOMG62ZCYXBHRFZFRCXW65&marketplace=FLIPKART&q=Lenovo+LOQ+Gaming+Laptop%2C+NVIDIA+GeForce+RTX+4060%2C+Intel+13th+Gen+i7-13700H%2C&store=search.flipkart.com&srno=s_1_3&otracker=search&otracker1=search&fm=organic&iid=a8b0e362-dcfc-477b-8ee9-1cd2cabc7eb3.COMG62ZCYXBHRFZF.SEARCH&ppt=None&ppn=None&ssid=dwh4wl5qb40000001714390895687&qH=66197352c90181ea";

    })
    let button3=document.getElementById("button3");
    button3.addEventListener("click",()=>{
window.location.href="https://www.croma.com/lenovo-loq-15irx9-intel-core-i7-13th-gen-gaming-laptop-16gb-1tb-ssd-windows-11-home-6gb-graphics-15-6-inch-144-hz-full-hd-ips-display-nvidia-geforce-rtx-4050-ms-office-2021-luna-grey-2-38-kg-/p/305693";

    })
}

function change3(){
    let change=document.querySelector("#change");
    change.innerHTML="Motorola G34 5G (Ocean Green, 128 GB)  (8 GB RAM)#JustHere4.244,390 Ratings & 4,491 Reviews";
    let btn=document.querySelector(".btn-1");
    btn.innerHTML="Buy Amazon<br>$129.99";
    let btn2=document.querySelector(".btn-2");
    btn2.innerHTML="Buy Flipkart<br>11,999 rs";
    let btn3=document.querySelector(".btn-3");
    btn3.innerHTML="Buy Croma<br>13,999";
    let button=document.getElementById("button");
    button.addEventListener("click",()=>{
window.location.href="https://www.amazon.com/s?k=Motorola+G34+5G+%28Ocean+Green%2C+128+GB%29+%288+GB+RAM%29&crid=1BLJ7DJCFEGPG&sprefix=motorola+g34+5g+ocean+green%2C+128+gb+8+gb+ram+%2Caps%2C322&ref=nb_sb_noss";

    })
    let button2=document.getElementById("button2");
    button2.addEventListener("click",()=>{
window.location.href="https://www.flipkart.com/search?q=smart%20phones&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off";

    })
    let button3=document.getElementById("button3");
    button3.addEventListener("click",()=>{
window.location.href="https://www.croma.com/searchB?q=smartphones%3Arelevance&text=smartphones";

    })

}


function change4(){
    let change=document.querySelector("#change");
    change.innerHTML="Alien Series 7 Books Collection Set (Out of the Shadows, Sea of Soccows, River of Pain, Invasion,<br> Cold Forge, Prototype & Isolation) Paperback – January 1, 2020";
    let btn=document.querySelector(".btn-1");
    btn.innerHTML="Buy Amazon<br>$43.00";
    let btn2=document.querySelector(".btn-2");
    btn2.innerHTML="Buy Flipkart<br>698 rs";
    let btn3=document.querySelector(".btn-3");
    btn3.innerHTML="Buy Croma<br>700 rs";
    let button=document.getElementById("button");
    button.addEventListener("click",()=>{
window.location.href="https://www.amazon.com/Collection-Shadows-Invasion-Prototype-Isolation/dp/1789096928/ref=sr_1_3?crid=241PWPY4TUGMU&dib=eyJ2IjoiMSJ9.XF23t_GZwLkmC9wYLGz1MDkAjFmvpK5xsTXrJfAAdDz_0bl5oGOwC3aOwRR2Hy9avNalh9oX-RkY_Qv9d0NqAawNF5bxUmq8LG5joqj6cRqCdX4u3d1x6ruVViw2jKdts8ZtQP1jbHwnxrh2lo22YaCDCslGUI_d0FaX4iWsof2055G_aAioyDTqdJoFlBVqdKlCow8t-cyTc_L49kBhLSDvRk_CA31WCh11HexU470.HBNZHw3dVBjMc-cuQqIQ3iSJE-Tb9_4u6w9fpaFYF60&dib_tag=se&keywords=books+aliens&qid=1714056012&sprefix=books+aliens%2Caps%2C543&sr=8-3";

    })
    let button2=document.getElementById("button2");
    button2.addEventListener("click",()=>{
window.location.href="https://www.flipkart.com/complete-alien-collection-shadow-archive-out-shadows-sea-sorrows-river-pain/p/itmdf8714f3b7678?pid=9781803361161&lid=LSTBOK9781803361161BN1LU6&marketplace=FLIPKART&q=book+alien&store=bks&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=09ed1e36-cbd9-40e3-bfa2-f96a104124e1.9781803361161.SEARCH&ppt=sp&ppn=sp&ssid=2poxf6lzf40000001714056303205&qH=f7c7ba787ff92a54";

    })
    let button3=document.getElementById("button3");
    button3.addEventListener("click",()=>{
window.location.href="";

    })

}


function change5(){
    let change=document.querySelector("#change");
    change.innerHTML="Philips One by Sonicare Snow Rechargeable Toothbrush, Brush Head Bundle, BD3002/AZ";
    let btn=document.querySelector(".btn-1");
    btn.innerHTML="Buy Amazon<br>$44.96";
    let btn2=document.querySelector(".btn-2");
    btn2.innerHTML="Buy Flipkart<br> 5,195 rs";
    let btn3=document.querySelector(".btn-3");
    btn3.innerHTML="Buy Croma<br>5,364 rs";
    let button=document.getElementById("button");
    button.addEventListener("click",()=>{
window.location.href="https://www.amazon.com/Philips-Sonicare-Rechargeable-Toothbrush-BD3002/dp/B0CKTSQHNB/ref=sr_1_1_sspa?crid=IDK08KOHH4GO&dib=eyJ2IjoiMSJ9.1_XL76cUKTjZr2tCWyx6hFRHK52Kr2SSvpx8-BctjEElwG1ywTpk0Mkh-li7LuYCPc9ZwCLyoKMHuwExbOjl-cm_z8exvYwobVIVjCW7cOyxsRBrSs9gO9TOO0H5jodsvkVvk17xBFNTMq6gkWzt0U24LCBPzoQI5Z7pbM0koUzuwNM_a0nBT07kptVqE_59NPO2IWYkqxBQLWsf9vpZN1dtKKo4L6XeWcPayCCgzhtY8165ap2VNCeXECQ6jsKvVouPLDZA3cGrXwk4-Hf3ydTfmtlVaSruAESNH_GIOj4.AXMDOebfKAMO0CUdN7HFwqRuGpGTWVrCgBto6HcRro4&dib_tag=se&keywords=personal+care+toothbrush&qid=1714055714&sprefix=personal+care+toothbrush%2Caps%2C321&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1";

    })
    let button2=document.getElementById("button2");
    button2.addEventListener("click",()=>{
window.location.href="https://www.flipkart.com/philips-hx6063-64-electric-toothbrush/p/itme23b8e815ffab?pid=ETBGU8ZG5TNJJBEV&lid=LSTETBGU8ZG5TNJJBEVFIBTOR&marketplace=FLIPKART&q=Philips+One+by+Sonicare+Snow+Rechargeable+Toothbrush%2C+Brush+Head+Bundle%2C+BD3002%2FAZ&store=zlw%2Fnyl%2Fbvv%2Fozv&srno=s_1_26&otracker=search&otracker1=search&fm=Search&iid=1e68da15-d464-4189-9686-dafb9b9c4027.ETBGU8ZG5TNJJBEV.SEARCH&ppt=sp&ppn=sp&qH=c50171dbe6e15f88";

    })
    let button3=document.getElementById("button3");
    button3.addEventListener("click",()=>{
window.location.href="https://www.croma.com/searchB?q=philips%20electric%20toothbrush%3Arelevance&text=philips%20electric%20toothbrush";

    })

}



function change6(){
    let change=document.querySelector("#change");
    change.innerHTML="Our Place Always Pan 2.0-10.5-Inch Nonstick, Toxin-Free Ceramic Cookware |<br> Versatile Frying Pan, Skillet, Saute Pan | Stainless Steel Handle | Oven Safe |<br> Lightweight Aluminum Body | Steam";
    let btn=document.querySelector(".btn-1");
    btn.innerHTML="Buy Amazon<br>$44.00";
    let btn2=document.querySelector(".btn-2");
    btn2.innerHTML="Buy Flipkart<br>1,499 rs";
    let btn3=document.querySelector(".btn-3");
    btn3.innerHTML="Buy Croma<br>1,599 rs";
    let button=document.getElementById("button");
    button.addEventListener("click",()=>{
window.location.href="https://www.amazon.com/MELENTA-Ceramic-Cookware-Induction-Nonstick/dp/B0CQ21F5H7/ref=sr_1_24?dib=eyJ2IjoiMSJ9.lEMkgSUu-zyLrIUUIzJCLOTU_xTKpT38rA5F0kzyoAcfRu3N2ZC5_RHFWZBIv1kvW_sCOBtHQMK3xCXIYqDUUG61Cpql9IGpBBn-qQS_YIAdZIxCqA9JNizxD9JyeV0e-NEXB6Tecbaou82cLQBVr6X9JabhKIYrAgoqHhJgW_yhTuXBiXrsQM-D1JQxzMyHm84an6DGtF4C26Njmm2wDJjyCxpaD45lVWvr4N87uGl9wNVcmu78nvnNqD-dR3X934ho8ZV-f0M_kQRTIx_wLfXffLLp0fiM-fUzIr-Laqw.zzs7LhJ5TBfPvkRTnxwGuZ92KpRjjUshLVmI-DAHmos&dib_tag=se&keywords=kitchen+cookware&qid=1714059446&sr=8-24";

    })
    let button2=document.getElementById("button2");
    button2.addEventListener("click",()=>{
window.location.href="https://www.flipkart.com/prestige-omega-festival-pack-build-your-kitchen-induction-bottom-non-stick-coated-cookware-set/p/itmfe87980c0ee3e?pid=CKSEHFJTRHPX3GFR&lid=LSTCKSEHFJTRHPX3GFRWZANWN&marketplace=FLIPKART&q=kithen+cookware&store=upp%2Ftnx&srno=s_1_3&otracker=search&otracker1=search&fm=organic&iid=c6682e6a-37bd-4ac0-871f-1503702df822.CKSEHFJTRHPX3GFR.SEARCH&ppt=hp&ppn=homepage&ssid=wyvb7tbrr40000001714059361500&qH=fb0f32698c0e64f1";

    })
    let button3=document.getElementById("button3");
    button3.addEventListener("click",()=>{
window.location.href="https://www.croma.com/anjali-black-emerald-carbon-jade-gift-set-4-pcs-cookware-set-even-heat-distribution-black-/p/229576";

    })

}

