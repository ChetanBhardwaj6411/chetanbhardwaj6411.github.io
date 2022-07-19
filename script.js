
const button = document.getElementById('contact-button');

button.addEventListener('click', (e)=>{

    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    fetch('https://cb-portfolio-website-backend.herokuapp.com/', {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            subject,
            message
        })
    }).then(()=>{

        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('subject').value = "";
        document.getElementById('message').value = "";
        
    }).catch((err)=>{

        console.log(err);

    });
    
});


(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


// const button = document.getElementById('contact-button');

// button.addEventListener('click', (e)=>{

//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const subject = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;

//     fetch('http://localhost:3000/savedetails', {
        
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name,
//             email,
//             subject,
//             message
//         })
//     }).then(()=>{

//         document.getElementById('name').value = "";
//         document.getElementById('email').value = "";
//         document.getElementById('subject').value = "";
//         document.getElementById('message').value = "";
//     }).catch((err)=>{

//         console.log(err);
//     });
    
// });



