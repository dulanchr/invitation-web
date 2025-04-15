const validCodes = [
    "1", "83516", "65074", "20485", "95362",
    "31784", "74590", "29136", "63825", "07491",
    "52687", "94312", "86735", "61942", "38257",
    "08463", "72914", "43698", "50728", "84136",
    "17954", "64238", "38704", "92516", "51470",
    "75384", "29063", "45718", "87269", "62304",
    "04752", "38196", "16427", "90483", "75249",
    "28361", "64972", "03485", "87621", "41890",
    "39716", "52748", "86041", "15973", "20468",
    "74819", "93056", "51287", "07436", "69281"
];

function checkCode() {
    const code = document.getElementById("access-code").value.trim();
    const errorMsg = document.getElementById("error-msg");
    const lockScreen = document.getElementById("lock-screen");
    
    if (validCodes.includes(code)) {
        // Smooth fade out
        lockScreen.style.opacity = "0";
        setTimeout(() => {
            lockScreen.style.display = "none";
        }, 400);
    } else {
        errorMsg.style.display = "block";
        document.getElementById("access-code").focus();
        
        // Shake effect on error
        const container = document.querySelector(".lock-container");
        container.style.animation = "shake 0.5s";
        setTimeout(() => {
            container.style.animation = "";
        }, 500);
    }
}

window.addEventListener("load", () => {
    // Make sure preloader is hidden if you have one
    const preloader = document.querySelector(".preloader");
    if (preloader) preloader.style.display = "none";

    const lockScreen = document.getElementById("lock-screen");
    lockScreen.style.display = "flex"; // show immediately
    document.getElementById("access-code").focus(); // auto-focus
    
    // Add keypress event listener for Enter key
    document.getElementById("access-code").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkCode();
        }
    });
    
    // Hide error message when typing
    document.getElementById("access-code").addEventListener("input", function() {
        document.getElementById("error-msg").style.display = "none";
    });
    
    // Add shake animation
    document.head.insertAdjacentHTML("beforeend", `
        <style>
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        </style>
    `);
});