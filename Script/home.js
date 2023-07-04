
// slideshow

 //khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
 // KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
     //chuyển đến slide tiếp theo
    slideIndex++;
     //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
    slideIndex = 0
    }    
     //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
}
 //mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);


function currentSlide(n) {
showSlides(slideIndex = n);
}



//updown slide

 //Khi người dùng cuộn chuột thì gọi hàm scrollFunction
 window.onscroll = function() {scrollFunction()};
 // khai báo hàm scrollFunction
 function scrollFunction() {
     // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         //nếu lớn hơn 20px thì hiện button
         document.getElementById("myBtn").style.display = "block";
     } else {
          //nếu nhỏ hơn 20px thì ẩn button
         document.getElementById("myBtn").style.display = "none";
     }
 }
 //gán sự kiện click cho button
 document.getElementById('myBtn').addEventListener("click", function()
 {
     //Nếu button được click thì nhảy về đầu trang
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 })


 //include html
 function includeHTML() {
    var z, i, element, file, http;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      element = z[i];
      /*search for elements with a certain attribute:*/
      file = element.getAttribute("loan-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        http = new XMLHttpRequest();
        http.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {element.innerHTML = this.responseText;}
            if (this.status == 404) {element.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            element.removeAttribute("loan-include-html");
            includeHTML();
          }
        }      
        http.open("GET", file, true);
        http.send();
        /*exit the function:*/
        return;
      }
    }
  };



    