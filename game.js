

function initializeHideButtons() {
    hideButtons = document.querySelectorAll(".hidebox");

    for (count = 0; count < hideButtons.length; count++) {

        let eventNum = Math.random()

        let container = hideButtons[count].parentElement.parentElement;
        let content = container.querySelector(".sectioncontent");
        

        hideButtons[count].addEventListener('change',function() {
            console.log("Content-hiding event trigger " + eventNum);
            
            content.classList.toggle("hidden");
        })
    }
}

if (document.querySelectorAll(".hidebox")) {
    initializeHideButtons();
}
