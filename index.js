



  document.getElementById('ContactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

    if(email && message) {
        document.getElementById('formMessage').innerText = 'Thank you for your message! We will get back to you soon.';
        
        document.getElementById('ContactForm').reset();
    } else {
        document.getElementById('formMessage').innerText = 'Please fill out all fields.';
    }
});

  

document.getElementById("menu-icon").onclick = function() {
    document.getElementById("sidebar").style.width = "180px";
};

document.getElementById("closebtn").onclick = function() {
    document.getElementById("sidebar").style.width = "0";
};



function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function addAnimationClass() {
    const elements = document.querySelectorAll('.fade-in, .fade-right, .fade-left, .fade-up, .fade-down');
    elements.forEach(element => {
        if (isInViewport(element)) {
            if (element.classList.contains('fade-in')) {
                element.classList.add('animate-fade-in');
            } else if (element.classList.contains('fade-right')) {
                element.classList.add('animate-fade-right');
            } else if (element.classList.contains('fade-left')) {
                element.classList.add('animate-fade-left');
            } else if (element.classList.contains('fade-up')) {
                element.classList.add('animate-fade-up');
            } else if (element.classList.contains('fade-down')) {
                element.classList.add('animate-fade-down');
            } 
        }
    });
}


window.addEventListener('scroll', addAnimationClass);
window.addEventListener('load', addAnimationClass);
