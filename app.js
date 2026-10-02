// Target only the clickable choices, ignoring the result image
let choices = document.querySelectorAll("#user-choice-container .user-choice");
let original_user_page = document.querySelector("#user-choice-container");
let result_user_page = document.querySelector("#user-result-container");
let result_user_image = document.querySelector("#user-result-img");
let original_computer_page = document.querySelector("#computer-choice-container");
let result_computer_page = document.querySelector("#computer-result-container");
let result_computer_image = document.querySelector("#comp-result-img");
let score_section = document.querySelector("#score-section");

let user_result_msg = document.querySelector("#user-result-msg");
let comp_result_msg = document.querySelector("#comp-result-msg");

let reset_button = document.querySelector("#reset");
let play_again_button = document.querySelector("#play-again");

// Accessing the score message
let your_score = document.querySelector("#your-score");
let computer_score = document.querySelector("#computer-score");

// for increment in the score
let your_count = 0;
let comp_count = 0;

choices.forEach(choice => {
    choice.addEventListener("click", () => {

        reset_button.classList.remove("hide");
        play_again_button.classList.remove("hide");

        original_user_page.classList.add("hide");
        original_computer_page.classList.add("hide");
        result_user_page.classList.remove("hide");

        score_section.classList.remove("hide");

        let user_num;
        if (choice.getAttribute('id') === "user-rock") {
            result_user_image.setAttribute("src", "IMAGE/rock.png");
            user_num = 1;
        } else if (choice.getAttribute('id') === "user-paper") {
            result_user_image.setAttribute("src", "IMAGE/paper.png");
            user_num = 2;
        } else {
            result_user_image.setAttribute("src", "IMAGE/scissors.png");
            user_num = 3;
        }

        result_computer_page.classList.remove("hide");
        let comp_num = Math.ceil(Math.random() * 3);
        if (comp_num === 1) {
            result_computer_image.setAttribute("src", "IMAGE/rock.png");
        } else if (comp_num === 2) {
            result_computer_image.setAttribute("src", "IMAGE/paper.png");
        } else {
            result_computer_image.setAttribute("src", "IMAGE/scissors.png");
        }

        // 1. Check for a tie first 
        if (user_num === comp_num) {
            user_result_msg.innerText = "Draw";
            comp_result_msg.innerText = "Draw";

            your_score.innerText = `${your_count}`;
            computer_score.innerText = `${comp_count}`;
        }
        // 2. All your winning conditions 
        else if (
            (user_num === 1 && comp_num === 3) || // Rock beats Scissors
            (user_num === 2 && comp_num === 1) || // Paper beats Rock
            (user_num === 3 && comp_num === 2)    // Scissors beats Paper
        ) {
            user_result_msg.innerText = "You Won";
            comp_result_msg.innerText = "Computer Lost";

            your_score.innerText = `${++your_count}`;
            computer_score.innerText = `${comp_count}`;
        }
        // 3. All losing conditions
        else {
            user_result_msg.innerText = "You Lost";
            comp_result_msg.innerText = "Computer Won";

            your_score.innerText = `${your_count}`;
            computer_score.innerText = `${++comp_count}`;
        }
    })
});

reset_button.addEventListener("click", () => {
    result_user_page.classList.add("hide");
    result_computer_page.classList.add("hide");
    original_user_page.classList.remove("hide");
    original_computer_page.classList.remove("hide");

    play_again_button.classList.add("hide");
    reset_button.classList.add("hide");

    score_section.classList.add("hide");
    your_count = 0;
    comp_count = 0;
})

play_again_button.addEventListener("click", () => {
    result_user_page.classList.add("hide");
    result_computer_page.classList.add("hide");
    original_user_page.classList.remove("hide");
    original_computer_page.classList.remove("hide");

    play_again_button.classList.add("hide");
    reset_button.classList.add("hide");
})