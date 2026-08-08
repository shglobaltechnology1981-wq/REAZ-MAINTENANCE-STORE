function userLogin(){
  const u=document.getElementById("username").value.trim();
  const p=document.getElementById("password").value;
  const msg=document.getElementById("loginMsg");
  if(u==="admin" && p==="admin123"){
    localStorage.setItem("reazLoggedIn","1");
    location.href="index.html";
  }else{
    msg.textContent="Invalid username or password.";
  }
}
document.addEventListener("keydown",e=>{if(e.key==="Enter")userLogin();});