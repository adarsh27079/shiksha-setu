 const toggleBtn = document.getElementById('toggle_menu_button');
 const navList = document.getElementById('nav-list');
 var designtoggler = 0;
 toggleBtn.addEventListener("click", () =>{
   if(designtoggler==0){
   navList.classList.toggle('active');
   toggleBtn.innerHTML ='<i class="fa-solid fa-xmark fa-xl" style="color:#3B2A56;"></i>';
   designtoggler =1;
   }else{
     navList.classList.remove('active');
     toggleBtn.innerHTML ='<i class="fa-solid fa-bars fa-xl" style="color:#3B2A56;"></i>'
     designtoggler =0;
   }
 } )