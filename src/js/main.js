const aboutme = () => {
    const skills = document.getElementById('skills')
    const aboutme = document.getElementById('aboutme')
    const experience = document.getElementById('experience')
    const education = document.getElementById('education')
    aboutme.classList.add('d-block')
    aboutme.classList.remove('d-none')
    experience.classList.add('d-none')
    education.classList.add('d-none')
    // skills.classList.remove('d-none')
    skills.classList.add('d-none')
}
const skills = () => {
    const skills = document.getElementById('skills')
    const aboutme = document.getElementById('aboutme')
    const experience = document.getElementById('experience')
    const education = document.getElementById('education')
    aboutme.classList.add('d-none')
    experience.classList.add('d-none')
    education.classList.add('d-none')
    skills.classList.remove('d-none')
    skills.classList.add('d-block')
}
const experience = () => {
    const skills = document.getElementById('skills')
    const aboutme = document.getElementById('aboutme')
    const experience = document.getElementById('experience')
    const education = document.getElementById('education')
    aboutme.classList.add('d-none')
    experience.classList.remove('d-none')
    experience.classList.add('d-block')
    education.classList.add('d-none')
    // skills.classList.remove('d-none')
    skills.classList.add('d-none')
}
const education = () => {
    const skills = document.getElementById('skills')
    const aboutme = document.getElementById('aboutme')
    const experience = document.getElementById('experience')
    const education = document.getElementById('education')
    aboutme.classList.add('d-none')
    // experience.classList.remove('d-none')
    experience.classList.add('d-none')
    education.classList.remove('d-none')
    education.classList.add('d-block')
    // skills.classList.remove('d-none')
    skills.classList.add('d-none')
}


// text animation
const text = document.querySelector('.sec-text');
    const textLoad = () =>{
        setTimeout(()=>{
            text.textContent = "Web Developer ...";
        },0);
        setTimeout(()=>{
            text.textContent = "Freelearncer ...";
        },4000);
        setTimeout(()=>{
            text.textContent = "Bloger ...";
        },8000);
        setTimeout(()=>{
            text.textContent = "YouTuber ...";
        },12000);

    }
    textLoad();




