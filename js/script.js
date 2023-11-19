var smallimg1 = document.querySelector('#cp .small-image');
    var largeimg1 = document.querySelector('#cp .large-image');
    var smallimg2 = document.querySelector('#androidp .small-image');
    var largeimg2 = document.querySelector('#androidp .large-image');
    var smallimg3 = document.querySelector('#databasep .small-image');
    var largeimg3 = document.querySelector('#databasep .large-image');
    smallimg1.addEventListener('mouseenter', ()=>{
        largeimg1.style.display='block';
        largeimg1.style.top='0';
    });
    smallimg1.addEventListener('mouseleave', ()=>{
        largeimg1.style.display='none';
    });
    smallimg2.addEventListener('mouseenter', ()=>{
        largeimg2.style.display='block';
        largeimg2.style.top='0';
    });
    smallimg2.addEventListener('mouseleave', ()=>{
        largeimg2.style.display='none';
    });
    smallimg3.addEventListener('mouseenter', ()=>{
        largeimg3.style.display='block';
        largeimg3.style.top='0';
    });
    smallimg3.addEventListener('mouseleave', ()=>{
        largeimg3.style.display='none';
    });

let modalOpen = false;
function openModal(title,content){
    if (modalOpen) {
        return;
    }
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("close-button");
    closeButton.onclick = closeModal;

    const modalTitle = document.createElement("h2");
    modalTitle.textContent = title;

    const modalContent = document.createElement("p");
    modalContent.textContent = content;

    modal.appendChild(closeButton);
    modal.appendChild(modalTitle);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);

    modalOpen = true;

    setTimeout(() => {
        document.addEventListener("click", outsideModalClick);
    }, 100);

}
function closeModal() {
    const modal = document.querySelector(".modal");
    if (modal) {
        modal.remove();
    }
    document.removeEventListener("click", outsideModalClick);
    modalOpen = false;
}
function outsideModalClick(event) {
    if (!modalOpen) {
        
        return;
    }
    const modal = document.querySelector(".modal");
    if (modal && (event.target === modal || modal.contains(event.target))) {
        
        return;
    }
    
    closeModal();
}
function openImageModal(imageSrc) {
    if (modalOpen) {
        return;
    }
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("close-button");
    closeButton.onclick = closeModal;

    
    const image = document.createElement("img");
    image.src = imageSrc;
    image.classList.add("modal-image");

    
    image.style.maxHeight = "80vh";
    modal.style.position = "fixed";
    modal.style.height = "auto"; 
    modal.style.margin = "0"; 
    modal.style.padding = "0";

    modal.appendChild(closeButton);
    modal.appendChild(image);

    document.body.appendChild(modal);
    modalOpen = true;

setTimeout(() => {
    document.addEventListener("click", outsideModalClick);
}, 100);   
}

var weixinimg = document.getElementById("weixin");
    var v1= document.getElementById("wei1");
    var v2= document.getElementById("wei2");

    v1.addEventListener("mouseenter",()=>{
        weixinimg.style.display = "inline-block";
    });
    v1.addEventListener("mouseleave",()=>{
        weixinimg.style.display = "none";
    });
    v2.addEventListener("mouseenter",()=>{
        weixinimg.style.display = "inline-block";
    });
    v2.addEventListener("mouseleave",()=>{
        weixinimg.style.display = "none";
    });

document.addEventListener("DOMContentLoaded", function() {
    const rightAngle = document.querySelector(".right-angle");
    const overlay = document.querySelector(".tv-screen"); 
    const content = document.querySelector("body");
    const box=document.querySelector(".box");

    box.addEventListener('mouseenter', function() {
        box.classList.add("shrink");
        setTimeout(function() {
            rightAngle.classList.add("su");

            setTimeout(function(){
                rightAngle.classList.add("rotate90");

                setTimeout(function() {
                    rightAngle.classList.remove("su", "rotate90");
                    rightAngle.classList.add("move-right");
                }, 1000); // 旋转动画持续时间

            }, 2000); // 放大动画持续时间

        }, 2000); // 缩小动画持续时间
    });

    // 监听.right-angle的动画结束
    rightAngle.addEventListener('animationend', function(e) {
        // 检查是不是move-right动画结束
        if (e.animationName === 'moveRight') {
            overlay.style.display = "none";
            content.style.overflow = "auto";
        }
    });
});
    
    