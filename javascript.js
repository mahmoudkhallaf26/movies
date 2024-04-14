var myhttp = new XMLHttpRequest;
var allposts = []
var allposts_t = []
var allposts_u = []
var allposts_p = []
var allposts_tr = []
var Trending = document.getElementById("Trending");
var upcoming = document.getElementById("Upcoming");
var Popular1 = document.getElementById("Popular");
var TopRated = document.getElementById("TopRated");
var submit = document.getElementById("submit")




call1()

   getdata()
    function getdata() {
        myhttp.open('GET','https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k')
        myhttp.send()
        myhttp.addEventListener('readystatechange',function () {
            if (myhttp.readyState == 4 && myhttp.status == 200)
            {
            allposts = JSON.parse(myhttp.response).results;
            displayposts()
    
            }
        });
    } 
        function displayposts()
           {

                    var hasala = ``
                    for(var i = 0; i < allposts.length; i++)
                    {
                        hasala +=` <div class="col-md-4 p-3">
                        <div class="image position-relative"><img class="img-fluid  " src="https://image.tmdb.org/t/p/w500${allposts[i].poster_path}">
                     <div class=" hover1 w-100 h-100   "> <h2 class ="text-center" >${allposts[i].original_title}</h2>
                     <p class ="text-center">${allposts[i].overview}</p> <p class ="text-center">${allposts[i].release_date}</p> <p class ="text-center">${allposts[i].vote_average}</p> </div></div>
                        
                      </div>`
                    }
                    document.getElementById('movies').innerHTML =hasala;
                }
        
    
   function search(term) 
   {
    var hasala = ``
      for (let i = 0; i < allposts.length; i++) {
          
        if (allposts[i].original_title.toLowerCase().includes(term.toLowerCase()) == true)
        {
             hasala +=` <div class="col-md-4 p-3 ">
            
                <div class="image position-relative"><img class="img-fluid " src="https://image.tmdb.org/t/p/w500${allposts[i].poster_path}">
             <div class=" hover1 w-100 h-100   "> <h2 class ="text-center" >${allposts[i].original_title}</h2>
             <p class ="text-center">${allposts[i].overview}</p> <p class ="text-center">${allposts[i].vote_average}</p> <p class ="text-center">${allposts[i].release_date}</p> </div></div>
                
              </div>`
            
        

        }
          
      }
      document.getElementById('movies').innerHTML =hasala;
   }

function call1() {
  let width = $(".nav_links").innerWidth()
  $(".nav").animate({left : -`${width}`},0)
  
}


   $(".nav span .menu1").click(function(){
     
    let nav = $(".nav").css("left")
    
    if(nav == "0px")
    {
                var width = $(".nav_links").innerWidth()
                $(".nav").animate({left : -`${width}`},1000)
                
            }
            else 
            {
                $(".nav").animate({left : `0px`},1000)
               
                
                
            }
     
    

})




function valid() {
  var form = document.getElementById("form");
  var email = document.getElementById("email1").value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email.match(pattern))
  {
  
    document.getElementById("text1").innerHTML = "your email valid";
    document.getElementById("text1").style.color ="blue";
  }
  else
  {
   
    document.getElementById("text1").innerHTML = "your email not valid";;
    document.getElementById("text1").style.color ="red";
  }
}
function valid2() {
  var form = document.getElementById("form");
  var name = document.getElementById("name").value;
  var myregex = /^[a-z]{3,10}$/

  if(name.match(myregex))
  {
   
    document.getElementById("text").innerHTML = "your name valid";
    document.getElementById("text").style.color ="blue";
  }
  else
  {
   
    document.getElementById("text").innerHTML = "your name not valid";;
    document.getElementById("text").style.color ="red";
  }
}
function valid1() {
  var form = document.getElementById("form");
  var phone = document.getElementById("phone1").value;
  var pattern = /^(002)?(01)[0125][0-9]{8}$/

  if(phone.match(pattern))
  {
   
    document.getElementById("text2").innerHTML = "your number valid";
    document.getElementById("text2").style.color ="blue";
  }
  else
  {
    
    document.getElementById("text2").innerHTML = "your number not valid";;
    document.getElementById("text2").style.color ="red";
  }
}

function valid3() {
  
  var age = document.getElementById("age").value;
  var pattern = /^([1-9][0-9]|60)$/

  if(age.match(pattern))
  {
   
    document.getElementById("text3").innerHTML = "your age valid";
    document.getElementById("text3").style.color ="blue";
  }
  else
  {
    
    document.getElementById("text3").innerHTML = "your age not valid";;
    document.getElementById("text3").style.color ="red";
  }
}
function valid4() {
  
  var password = document.getElementById("password").value;
  var pattern = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/

  if(password.match(pattern))
  {
   
    document.getElementById("text4").innerHTML = "your password valid";
    document.getElementById("text4").style.color ="blue";
  }
  else
  {
    
    document.getElementById("text4").innerHTML = "your password not valid";;
    document.getElementById("text4").style.color ="red";
  }
}
function valid5() {
  
  var repassword = document.getElementById("repassword").value;
  var password = document.getElementById("password").value;
  

  if(repassword == password)
  {
   
    document.getElementById("text5").innerHTML = "your password valid";
    document.getElementById("text5").style.color ="blue";
  }
  else
  {
    
    document.getElementById("text5").innerHTML = "your password not valid";;
    document.getElementById("text5").style.color ="red";
  }
}
  
submit.addEventListener('click',function submit() {
  
  
    document.getElementById("email1").value ="";
    document.getElementById("phone1").value ="";
    document.getElementById("password").value ="";
    document.getElementById("repassword").value ="";
    document.getElementById("name").value ="";
    document.getElementById("age").value ="";


})

Trending.addEventListener('click',function trending() {

  myhttp.open('GET','https://api.themoviedb.org/3/trending/movie/day?api_key=4deed4e9e7580d0cd06819e5d3f18985')
  myhttp.send()
  myhttp.addEventListener('readystatechange',function () {
      if (myhttp.readyState == 4 && myhttp.status == 200)
      {
      allposts_t = JSON.parse(myhttp.response).results;
      displayposts()
      call1()

      }
  });
  
  
})
 


upcoming.addEventListener('click',function upcoming() {

  myhttp.open('GET','https://api.themoviedb.org/3/movie/upcoming?api_key=4deed4e9e7580d0cd06819e5d3f18985&language=en-US&page=1')
  myhttp.send()
  myhttp.addEventListener('readystatechange',function () {
      if (myhttp.readyState == 4 && myhttp.status == 200)
      {
      allposts_u = JSON.parse(myhttp.response).results;
      displayposts()
      call1()
      }
  });
  
  
})

function Popular() {

  myhttp.open('GET','https://api.themoviedb.org/3/movie/popular?api_key=4deed4e9e7580d0cd06819e5d3f18985&language=en-US&page=1')
  myhttp.send()
  myhttp.addEventListener('readystatechange',function () {
      if (myhttp.readyState == 4 && myhttp.status == 200)
      {
      allposts_p = JSON.parse(myhttp.response).results;
      displayposts()
      call1()
      }
  });
  
  
}

TopRated.addEventListener('click',function TopRated() {

  myhttp.open('GET','https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid&language=en-US&page=1')
  myhttp.send()
  myhttp.addEventListener('readystatechange',function () {
      if (myhttp.readyState == 4 && myhttp.status == 200)
      {
      allposts_tr = JSON.parse(myhttp.response).results;
      displayposts()
      call1()
      }
  });
  
  
})

let sectiontop = $("#Contact1").offset().top;

$("#Contact1").click(function(){


  
  $("html","body").animate({sectiontop :1800},1000)

})


