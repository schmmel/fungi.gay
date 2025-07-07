const fileStructure = {
    "documents": {
        "meow": {
            "meow.txt": "meow meow meow",
            "kitty.jpg": "<img src='assets/img/kitty.jpg' alt='cat in a mushroom costume' height='400px'>"
        },
        "about-me.txt": "hi im sylvie! i like programming, i dont like writing.",
},  "projects": {
        "raycasters": {
            "raycaster-old.txt": "<a href=\"http://raycaster-old.schimmel.gay/\" target=\"_blank\" class=\"link\">https://<span>raycaster-old</span>.schimmel.gay</a>" +
                                "<div class=\"project\">" +
                                    "<div class=\"project-side\">" +
                                        "<a href=\"http://raycaster-old.schimmel.gay/\" target=\"_blank\">" +
                                            "<img src=\"/assets/img/projects/raycaster.png\" alt=\"picture of raycaster\">" + 
                                        "</a>" +
                                    "</div>" +
                                    "<span>The first raycaster I made. Very simple, and not very good.<br>" +
                                    "<a href=\"https://github.com/schmmel/raycaster-old\" target=\"_blank\">github</a></span>" +
                                "</div>",
            "js-raycaster.txt": "<a href=\"https://raycaster.schimmel.gay\" target=\"_blank\" class=\"link\">https://<span>raycaster</span>.schimmel.gay</a>" +
                                "<div class=\"project\">" +
                                    // "<div class=\"project-side\">" +
                                    //     "<a href=\"https://raycaster.schimmel.gay\" target=\"_blank\">" +
                                    //         "<img src=\"/assets/img/projects/raycaster.png\" alt=\"picture of raycaster\">" + 
                                    //     "</a>" +
                                    // "</div>" +
                                    "<span>A new raycaster I built after doing more research into the math of raycasters.<br>The math is based on <a href=\"https://lodev.org/cgtutor/raycasting.html\" target=\"_blank\">this guide</a>.<br>" +
                                    "<a href=\"https://github.com/schmmel/js-raycaster\" target=\"_blank\">github</a></span>" +
                                "</div>",
            "c-raycaster.txt": "<a href=\"https://github.com/schmmel/c-raycaster\" target=\"_blank\" class=\"link\">//https://github.com/schmmel/<span>c-raycaster</span></a>" +
                                "<div class=\"project\">" +
                                    "<div class=\"project-side\">" +
                                        "<a href=\"https://raycaster.schimmel.gay\" target=\"_blank\">" +
                                            "<img src=\"/assets/img/projects/c-raycaster.png\" alt=\"picture of raycaster\">" + 
                                        "</a>" +
                                    "</div>" +
                                    "<span>This project started as a port of my js-raycaster to C using raylib. After porting was done, any raycaster development was done on this one. Making this the best raycaster I've made.<br>" +
                                    "<a href=\"https://github.com/schmmel/c-raycaster\" target=\"_blank\">github</a></span>" +
                                "</div>",
        },
        "fungi.gay.txt": "<a href=\"https://schimmel.gay\" target=\"_blank\" class=\"link\">https://<span>schimmel.gay</span></a>" +
                            "<div class=\"project\">" +
                                "<div class=\"project-side\">" +
                                    "<a href=\"https://schimmel.gay\" target=\"_blank\">" +
                                        "<img src=\"/assets/img/projects/fungi.gay.png\" alt=\"picture of neofetch ascii\">" + 
                                    "</a>" +
                                "</div>" +
                                "<span>This is my portfolio, it's made entirely in vanilla JavaScript (and HTML & CSS). I made a command handler that runs every time you enter a command into the terminal, which checks what you entered, and then runs the corresponding command's script. If I were to work more on this project, I would add a backend using either PHP, or Node.js. I also need to work on making it more responsive.<br>" +
                                "<a href=\"https://github.com/schmmel/fungi.gay\" target=\"_blank\">github</a></span>" +
                            "</div>",
        "timestamp.txt": "<a href=\"https://timestamp.schimmel.gay\" target=\"_blank\" class=\"link\">https://<span>timestamp</span>.schimmel.gay</a><span class=\"timestampgi\">0</span>" +
                        "<div class=\"project\">" +
                            "<span>One day I decided to make my own timestamp. All it is is the unix timestamp minus a specific number (1707992306). This little project did teach me more about github pages, including how to use a custom domain. <br>" +
                            "<a href=\"https://github.com/schmmel/timestamp\" target=\"_blank\">github</a></span>" +
                        "</div>",                
}};

let currentDirectoryString = "";
let currentDirectoryPath = [];