const demoProducts=[
 {name:"Bearing 6205",img:"https://placehold.co/70x70/png?text=Bearing",unit:"PCS",opening:100,purchase:50,issue:30,price:500,min:20},
 {name:"V-Belt A38",img:"https://placehold.co/70x70/png?text=V-Belt",unit:"PCS",opening:50,purchase:20,issue:10,price:350,min:15},
 {name:"Oil Seal 35x52",img:"https://placehold.co/70x70/png?text=Seal",unit:"PCS",opening:40,purchase:30,issue:15,price:400,min:20},
 {name:"Nut M10",img:"https://placehold.co/70x70/png?text=Nut",unit:"PCS",opening:200,purchase:50,issue:40,price:10,min:30},
 {name:"Bolt M10",img:"https://placehold.co/70x70/png?text=Bolt",unit:"PCS",opening:150,purchase:50,issue:60,price:15,min:40}
];
const money=n=>"৳ "+Number(n).toLocaleString("en-BD");
const img=u=>`<img class="product-img" src="${u}" alt="Product">`;

function render(){
 let purchase=0, issue=0, stock=0, low=0, pq=0, iq=0;
 document.getElementById("purchaseRows").innerHTML=demoProducts.slice(0,3).map(p=>{
   const q=p.purchase, t=q*p.price; purchase+=t;pq+=q;
   return `<tr><td>${p.name}</td><td>${img(p.img)}</td><td>${p.unit}</td><td>${q}</td><td>${money(p.price)}</td><td>${money(t)}</td></tr>`;
 }).join("");
 document.getElementById("issueRows").innerHTML=demoProducts.slice(0,3).map(p=>{
   const q=p.issue, t=q*p.price; issue+=t;iq+=q;
   return `<tr><td>${p.name}</td><td>${img(p.img)}</td><td>${p.unit}</td><td>${q}</td><td>${money(p.price)}</td><td>${money(t)}</td></tr>`;
 }).join("");
 document.getElementById("stockRows").innerHTML=demoProducts.map(p=>{
   const cur=p.opening+p.purchase-p.issue, val=cur*p.price;
   stock+=val;if(cur<=p.min)low++;
   return `<tr><td>${p.name}</td><td>${img(p.img)}</td><td>${p.unit}</td><td>${p.opening}</td><td>${p.purchase}</td><td>${p.issue}</td><td class="current">${cur}</td><td>${money(p.price)}</td><td>${money(val)}</td></tr>`;
 }).join("");
 document.getElementById("purchaseValue").textContent=money(purchase);
 document.getElementById("issueValue").textContent=money(issue);
 document.getElementById("stockValue").textContent=money(stock);
 document.getElementById("lowStock").textContent=low;
 document.getElementById("purchaseQty").textContent=pq;
 document.getElementById("issueQty").textContent=iq;
 document.getElementById("purchaseTotal").textContent=money(purchase);
 document.getElementById("issueTotal").textContent=money(issue);
 document.getElementById("stockItems").textContent=demoProducts.length;
 document.getElementById("stockTotal").textContent=money(stock);
 document.getElementById("recentPurchase").innerHTML=`<p><b>PRCH-1001</b> — Rahman Traders — <strong>${money(purchase)}</strong></p><p><b>PRCH-1000</b> — Karim & Co. — <strong>৳ 18,750</strong></p>`;
 document.getElementById("recentIssue").innerHTML=`<p><b>ISS-1001</b> — Maintenance — <strong>${money(issue)}</strong></p><p><b>ISS-1000</b> — Production — <strong>৳ 6,800</strong></p>`;
 document.getElementById("lowList").innerHTML=demoProducts.filter(p=>p.opening+p.purchase-p.issue<=p.min).map(p=>`<p><b>${p.name}</b> — ${p.opening+p.purchase-p.issue} ${p.unit} <span class="danger">Low Stock</span></p>`).join("")||"<p>No low-stock items.</p>";
}
function setDateTime(){
 const d=new Date();
 document.getElementById("today").textContent=d.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"});
 document.getElementById("clock").textContent=d.toLocaleTimeString();
}
function toggleSide(){document.querySelector(".sidebar").classList.toggle("collapsed");}
function logout(){localStorage.removeItem("reazLoggedIn");location.href="login.html";}
if(!localStorage.getItem("reazLoggedIn")) location.href="login.html";
document.addEventListener("DOMContentLoaded",()=>{render();setDateTime();setInterval(setDateTime,1000);document.getElementById("invDate").valueAsDate=new Date();document.getElementById("issueDate").valueAsDate=new Date();});