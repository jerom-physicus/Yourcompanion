import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref,push,onValue, remove,set, } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBofwhquW437EuGRfL7z5yXLz4zgPxBaIg",
  authDomain: "your-companion-73a01.firebaseapp.com",
  projectId: "your-companion-73a01",
  storageBucket: "your-companion-73a01.appspot.com",
  messagingSenderId: "686996366341",
  appId: "1:686996366341:web:d7588e31b423b52323e86c",
  measurementId: "G-KXXHY5V128"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var db = getDatabase(app);
let username = localStorage.getItem('username')
const data = ref(db,"user/")


var date = new Date();
var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
//console.log(current_date)
var date = new Date();
	var current_time = date.getHours()+":"+date.getMinutes()
	//console.log(current_time) 

document.getElementById('createBtn').addEventListener('click',function(){
    let title = document.getElementById('title').value
    let discription = document.getElementById('description').value
    set(ref(db,"user"+username +`/${title}`), {
        title:title,
        discription:discription,
        data: current_date,
        time: current_time
    
       
      });

})
onValue(ref(db,"user"+username),function(snapshot){
  content2.innerHTML = ""
  let dbtitle = Object.keys(snapshot.val('title'))
  let keys = Object.entries(snapshot.val('title'))
  
  console.log(keys[1])
  for (let i = 0; i < dbtitle.length; i++) {
    globalThis.titledb = dbtitle[i];
    //console.log(titledb)
    

    onValue(ref(db,"user"+username+`/${titledb}`),function(snapshot){
      let dbdis = Object.values(snapshot.val('discription'))
      console.log(dbdis[1])
      let discription = dbdis[1]
      info(titledb,discription)
      
        
      
    
    })
    
  }
  
  



})



function info(titledb,discription ){
  let infobox = document.createElement("div")
  let infobox_title = document.createElement("h1")
  let infobox_discription = document.createElement("p")
  infobox_title.innerHTML = titledb
  infobox_discription.textContent = discription
  content2.append(infobox)
  infobox.append(infobox_title)
  infobox.append(infobox_discription)
  infobox.addEventListener('click',function(){
    localStorage.setItem('title',titledb)
    window.location.href = 'index3.html'
  })
  

}
















//console.log(username)
document.getElementById('username').innerHTML = username

plus.addEventListener('click',function(){
   console.log('hello')    
   
     document.getElementById('create-interface').style.transform = 'translateY(0%)';
})

cancelBtn.addEventListener("click",function(){
    document.getElementById('create-interface').style.transform = 'translateY(200%)';
})

// function run(){
//     document.getElementById('create-interface').style.transform = 'translateY(100%)';
    
// }