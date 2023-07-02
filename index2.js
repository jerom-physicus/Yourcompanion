import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref,push,onValue, remove,set, } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB863tyOJ-LAcBX-SrejyXEFzv0Zm3vfHg",
    authDomain: "blueloop-app.firebaseapp.com",
    databaseURL: "https://blueloop-app-default-rtdb.firebaseio.com",
    projectId: "blueloop-app",
    storageBucket: "blueloop-app.appspot.com",
    messagingSenderId: "733652313578",
    appId: "1:733652313578:web:603e8e1f7ecde3cf063e93"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var db = getDatabase(app);
let username = localStorage.getItem('username')
const data = ref(db,"user/")


document.getElementById('createBtn').addEventListener('click',function(){
    let title = document.getElementById('title').value
    let discription = document.getElementById('description').value
    set(ref(db,"user"+username), {
        title:title,
        discription:discription,
    
       
      });

})
















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