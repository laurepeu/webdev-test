{/* <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script> */}

// $(document).ready(function(){
//   var flag = 0;  
//   $("button#changeSize").click(function(){
//     if(flag == 0) {
//       $("#dummyimage").attr("src","https://images.pexels.com/photos/39349/teens-robot-future-science-39349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
//       flag = 1;
//     }
//     else if(flag == 1) {
//       $("#dummyimage").attr("src","https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
//       flag = 0;
//     }
//   });
// });
// contain list inside the button 
 function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  

