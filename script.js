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
const provider = new GoogleAuthProvider();

document.getElementById('login').addEventListener('click',function(){   
    //localStorage.clear() 
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        //localStorage.clear();
       
        localStorage.setItem('email',user.email );
        let username= user.displayName
        let accountname1 = username.replace(' ','')
        let accountname = accountname1.replace(' ','')
        localStorage.setItem('username',accountname );
        alert("Successfuly login'd as"+` ${user.email}`)
        window.location.href = 'index2.html'
        
        
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
})

document.getElementById('continue-btn').addEventListener('click',function(){
    console.log("hello")
    window.location.href = 'index2.html'
})