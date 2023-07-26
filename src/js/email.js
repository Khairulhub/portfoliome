const form = document.getElementById('form');
const fname = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const contactFormContactMessage = document.getElementById('contact_message');



// function for send mail

const sendMail = (e) => {   
    e.preventDefault();
   
    // check if the field has a value 

    if(fname.value === '' || email.value === '' || message.value === '' || subject.value === '') {

        // show message error
        contactFormContactMessage.innerHTML = 'Please fill out all the fields';
        contactFormContactMessage.style.color = 'red';    
    }
    else{
        // service id - template id - #form  - publish key

        emailjs.sendForm('service_rhm4m9o', 'template_r8gfzup', '#form', 'm5sQGN8ktFI5mpzHj')
        .then(() =>{
            // show message success
            contactFormContactMessage.innerHTML = 'Message sent successfully';
            contactFormContactMessage.style.color = 'green';


            // remove message after 5 seconds

            setTimeout(() => {  
                contactFormContactMessage.innerHTML = '';
            }, 2000);
        })
    }
};



form.addEventListener('submit', sendMail);