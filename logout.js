import { auth } from "./config.js";
import {signOut} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
const button = document.querySelector('.logout')

const XuLyDangXuat = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
        alert("dang xuat thanh cong roiiii!")
        window.location.href = "./dangki.html"
        
      }).catch((error) => {
        // An error happened.
      });

}
button.addEventListener('click', XuLyDangXuat)