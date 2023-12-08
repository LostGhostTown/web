$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,       
        autoplaySpeed: 3000,  
        arrows: false,        
        dots: false           
    });    
});


var smallimg1 = document.querySelector('#cp .small-image');
    var largeimg1 = document.querySelector('#cp .large-image');
    var smallimg2 = document.querySelector('#androidp .small-image');
    var largeimg2 = document.querySelector('#androidp .large-image');
    var smallimg3 = document.querySelector('#databasep .small-image');
    var largeimg3 = document.querySelector('#databasep .large-image');
    smallimg1.addEventListener('mouseenter', ()=>{
        largeimg1.style.display='block';
        largeimg1.style.top='0';
        if (!$('.slider', largeimg1).hasClass('slick-initialized')) {
            $('.slider', largeimg1).slick({
                
            });
        } else {
            $('.slider', largeimg1).slick('setPosition');
        }
    });
    smallimg1.addEventListener('mouseleave', ()=>{
        largeimg1.style.display='none';
        if (!$('.slider', largeimg1).hasClass('slick-initialized')) {
            $('.slider', largeimg1).slick({
                
            });
        } else {
            $('.slider', largeimg1).slick('setPosition');
        }
    });
    smallimg2.addEventListener('mouseenter', ()=>{
        largeimg2.style.display='block';
        largeimg2.style.top='0';
        if (!$('.slider', largeimg2).hasClass('slick-initialized')) {
            $('.slider', largeimg2).slick({
                
            });
        } else {
            $('.slider', largeimg2).slick('setPosition');
        }
    });
    smallimg2.addEventListener('mouseleave', ()=>{
        largeimg2.style.display='none';
        if (!$('.slider', largeimg2).hasClass('slick-initialized')) {
            $('.slider', largeimg2).slick({
               
            });
        } else {
            $('.slider', largeimg2).slick('setPosition');
        }
    });
    smallimg3.addEventListener('mouseenter', ()=>{
        largeimg3.style.display='block';
        largeimg3.style.top='0';
        if (!$('.slider', largeimg3).hasClass('slick-initialized')) {
            $('.slider', largeimg3).slick({
               
            });
        } else {
            $('.slider', largeimg3).slick('setPosition');
        }
    });
    smallimg3.addEventListener('mouseleave', ()=>{
        largeimg3.style.display='none';
        if (!$('.slider', largeimg3).hasClass('slick-initialized')) {
            $('.slider', largeimg3).slick({
               
            });
        } else {
            $('.slider', largeimg3).slick('setPosition');
        }
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
    const nav = document.querySelector("nav");
    const content = document.querySelector(".aboutMe");
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
                }, 1000); 

            }, 2000); 

        }, 2000); 
    });

    
    rightAngle.addEventListener('animationend', function(e) {
        
        if (e.animationName === 'moveRight') {
            overlay.style.display = "none";
            content.style.display="flex"
            content.style.visibility = 'visible';
            content.style.opacity = '1';
            nav.style.display="flex";
        }
    });
});

document.querySelectorAll('.projectIntroduction h1').forEach(function(elem) {
    elem.addEventListener('mouseenter', function() {
        this.style.color = 'skyblue'; 
    });

    elem.addEventListener('mouseleave', function() {
        this.style.color = 'black';
    });
});

const menuLinks = document.querySelectorAll("#menu a");
const aboutMeSection = document.querySelector(".aboutMe");
const selfIntroductionSection = document.querySelector(".selfIntroduction");
const projectIntroductionSection = document.querySelector(".projectIntroduction");
const shareSection = document.querySelector(".share");
const contactSection = document.querySelector(".contact");
const sectionMap = {
    "#1": aboutMeSection,
    "#2": selfIntroductionSection,
    "#3": projectIntroductionSection,
    "#4": shareSection,
    "#5": contactSection,
  };
  
  // 为每个链接添加点击事件监听器
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // 阻止默认的跳转行为
  
      // 获取目标锚点的 ID
      const targetId = link.getAttribute("href");
  
      // 隐藏所有内容部分
      for (const section of Object.values(sectionMap)) {
        section.style.opacity = '0';
        setTimeout(() => {
            section.style.visibility = 'hidden';
            section.style.display="none";
          }, 500);

      }
  
      // 显示目标内容部分
      const targetSection = sectionMap[targetId];
      if (targetSection) {
        
        setTimeout(() => {
            targetSection.style.display = "flex"
            targetSection.style.visibility='visible';
           
        }, 500);
        setTimeout(() => {
             targetSection.style.opacity = '1';
        }, 1000);
      }
    });
  });


    
    