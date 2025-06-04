const upperChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerChar="abcdefghijklmnopqrstuvwxyz"
const num="1234567890"
const specialChar="~`!@#$%^&*()_-+={[}]|\:;<,>.?/"
const passwordLen=12
const all= upperChar+lowerChar+num+specialChar



function generateRandomPassword(){
  let password=[ upperChar[Math.floor(Math.random()* upperChar.length)],
  lowerChar[Math.floor(Math.random()* lowerChar.length)],num[Math.floor(Math.random()* num.length)],
  specialChar[Math.floor(Math.random()* specialChar.length)]]

  for(let i=password.length;i<12;i++){
    password[i]=all[Math.floor(Math.random()* all.length)]
  }



  //Shuffle the array created 
  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
   }
   console.log(password.join(""));
 return password.join("");
  
}

function generatePasswords(){
    let pass1=generateRandomPassword();
    let pass2=generateRandomPassword();

    document.getElementById("passOne").textContent=pass1;
    document.getElementById("passTwo").textContent=pass2;

}