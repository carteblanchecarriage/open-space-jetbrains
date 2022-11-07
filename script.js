let specialInputs = document.getElementsByClassName('specialInputs');
let password = document.getElementById("password");
let ok = document.getElementById("ok");
let launchBtn = document.getElementById("launch");
let checkboxInput = document.querySelectorAll("input[type=checkbox]");
let leverInput = document.querySelectorAll("input[type=range]");
const rocket = document.querySelector(".rocket");



/* CHECKING FOR THE CORRECT PASSWORD AND ENABLING INPUTS */
ok.addEventListener("click", function () {
    if (password.value === 'TrustNo1') {
        for (let i in specialInputs) {
            specialInputs[i].disabled = false;
        }
    }
});

/* CHECKING WHETHER CHECKBOXES ARE CHECKED AND LEVERS ARE SET TO MAX  */
function checkboxChecked() {
    let count = 0;
    for (let index = 0; index < checkboxInput.length; index++) {
        if (checkboxInput[index].checked)
            count++;
    }
    console.log(count);
    return (count === checkboxInput.length);
}

function leverMax() {
    let count = 0;
    for (let index = 0; index < leverInput.length; index++) {
        if (leverInput[index].value === leverInput[index].max)
            count++;
    }
    return (count === leverInput.length);
}

Array.from(checkboxInput).forEach(function (checkbox) {
    checkbox.onchange = function () {
        launchBtn.disabled = !(checkboxChecked() && leverMax());
    };
})

Array.from(leverInput).forEach(function (checkbox) {
    checkbox.onchange = function () {
        launchBtn.disabled = !(checkboxChecked() && leverMax());
    };
})


/* ROCKET ANIMATION */
function moveRocket() {
    rocket.animate([{
        left: rocket.style.left,
        bottom: rocket.style.bottom
    },
    {
        left: '100vw',
        bottom: '100vh'
    }
    ], {
        duration: 2000,
        iterations: 1
    })
}

launchBtn.addEventListener('click', function () {
    moveRocket();
})


