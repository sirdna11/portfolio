const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})
document.querySelectorAll('.nav-link').forEach(n=>n.addEventListener('click',()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));
function modal(){
    document.querySelector('.bg-modal').style.display = 'flex';
}
function closemodal(){
    document.querySelector('.bg-modal').style.display = 'none';
}
document.querySelector('.close' ,'.modulebtn').addEventListener('click',()=>{
    document.querySelector('.bg-modal').style.display = 'none';
});



document.querySelector('.contact-form').addEventListener('submit',submitForm)

function submitForm(e){
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('e-mail');
    const massage = document.getElementById('massage');

    
}
function sendEmail(){
    var params = {
        from_name: document.getElementById('name').value,
        email_id:document.getElementById('e-mail').value,
        message: document.getElementById('massage').value,
    }
    emailjs.send("service_49gta09","template_xgl4jda",params).then(function(res){
        alert('message was sent')
    })
}




