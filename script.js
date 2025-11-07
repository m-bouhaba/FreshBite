
function toggleMenu() {
    const menulist = document.getElementById("menulist");
    menulist.classList.toggle("active");
  }

  function scrollToGallery() {
    document.getElementById("galerie").scrollIntoView({
      behavior: "smooth"
    });
  }

  
  const btnEnvoyer = document.getElementById('btnEnvoyer');
    let statusMessage = document.getElementById('statusMessage');
    let username = document.getElementById('user');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    let mailstatus = document.getElementById('mailstatus')
    console.log("===========" + mailstatus);
  btnEnvoyer.addEventListener("click", function contactez(){

    if (email.value.includes("@gmail.com")) {
        
        statusMessage.textContent = "✅ Message envoyé — merci !";
        statusMessage.style.color = "white";
        statusMessage.style.backgroundColor = '#689a04ff';
        username.value = "";
        email.value = "";
        message.value = "";
         mailstatus.innerHTML= "";
          email.style.border = "none";
    } else {
        email.style.border = "2px solid red";
        mailstatus.innerHTML= '<i> L\'\adresse email renseignée n\'\est pas valide</i>'
        mailstatus.style.margin = '0';
        mailstatus.style.color = "red";
        // statusMessage.textContent = "Erreur: le message n'a pas pu être envoyé."
        // statusMessage.style.color = "white";
        // statusMessage.style.backgroundColor = '#c00505ff';
        

    }
    
    
   
   

  });