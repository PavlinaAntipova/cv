import paths from "style-helper/imgPaths";
const { webStudio, iceCream, filmoteka, barbershop, richard, memoryGame, pense, slimMom } = paths;

export const projects = [
    {
        name: 'Web-studio',
        desc: 'Simple MPA for web development & design company. The project was made as a part of GoIT course.', 
        imgHome: webStudio.home,
        imgSection: webStudio.section,
        stack: 'HTML, SASS, JS. Adaptive layout.',
        sitePath: 'https://pavlinaantipova.github.io/goit-markup-hw-08/',
        githubPath: 'https://github.com/PavlinaAntipova/goit-markup-hw-08',
        type: 'JS'
    },
    {
        name: 'Ice-cream',
        desc: 'Simple landing page for a company that makes craft ice cream. Team project was made as a part of GoIT course.', 
         imgHome: iceCream.home,
        imgSection: iceCream.section,
        stack: 'HTML, SASS, JS, Parcel. Adaptive layout.',
        sitePath: 'https://romankhrapai.github.io/teem-project-icecream/',
        githubPath: 'https://github.com/PavlinaAntipova/teem-project-icecream',
        type: 'JS'
    },
    {
        name: 'BarberShop',
        desc: 'Simple landing page for barbershop. The project was made as a practice.', 
        imgHome: barbershop.home,
        imgSection: barbershop.section,
        stack: 'HTML, SASS, JS. Adaptive layout.',
        sitePath: 'https://pavlinaantipova.github.io/barbershop/',
        githubPath: 'https://github.com/PavlinaAntipova/barbershop',
        type: 'JS'
    },
    {
        name: 'Filmoteka',
        desc: "SPA has the possibility to check trend movies, search movies whatever you want, and get all information about them. Also you can sign up and have your own account with a library. Where you will save movies which you've watched or you want to watch. Team project was made as a part of GoIT course.", 
        imgHome: filmoteka.home,
        imgSection: filmoteka.section,
        stack: 'HTML, SASS, JS, Parcel, REST API, Firebase. Adaptive layout.',
        sitePath: 'https://romankhrapai.github.io/filmoteka/index.html#home&',
        githubPath: 'https://github.com/RomanKhrapai/filmoteka',
        type: 'JS'
    },
            {
        name: 'Memory Game',
        desc: 'Simple Memory game, whare users need to search for image pairs. The project was realized on Vanila JS. It was made as a practice.', 
        imgHome: memoryGame.home,
        imgSection: memoryGame.section,
        stack: 'HTML, SASS, JS. Adaptive layout.',
        sitePath: 'https://pavlinaantipova.github.io/memory-card/',
        githubPath: 'https://github.com/PavlinaAntipova/memory-card',
        type: 'JS'
    },
    // {
    //     name: 'Planner',
    //     desc: 'SPA was created by React.', 
    //      imgHome: webStudio.home,
    //     imgSection: webStudio.section,
    //     stack: 'React, Redux, Firebase. Adaptive layout.',
    //     sitePath: '',
    //     githubPath: '',
    //     type: 'React'
    // },
    //     {
    //     name: 'Duck Tinder',
    //     desc: '', 
    //      imgHome: webStudio.home,
    //     imgSection: webStudio.section,
    //     stack: 'React, Redux, Firebase. Adaptive layout.',
    //     sitePath: '',
    //     githubPath: '',
    //     type: 'React'
    // },
        {
        name: 'Slim Mom',
        desc: 'SPA was created by React. It can help you calculate your daily calorie intake and give you a list of foods that are not recommended depending on your blood type. Also you can sign up and have your own account with a food diary. Team project was made as a part of GoIT course.', 
        imgHome: slimMom.home,
        imgSection: slimMom.section,
        stack: 'React, Redux, Node.js. Adaptive layout.',
        sitePath: 'https://slim-mom7.netlify.app/',
        githubPath: 'https://github.com/RomanKhrapai/Slim-Mom',
        type: 'React'
    },
        {
        name: 'Richard',
        desc: 'Simple landing page for delivery app. The project was made as a practice.', 
        imgHome: richard.home,
        imgSection: richard.section,
        stack: 'HTML, SASS, JS. Adaptive layout.',
        sitePath: 'https://pavlinaantipova.github.io/richard/',
        githubPath: 'https://github.com/PavlinaAntipova/richard',
        type: 'JS'
    },
                            {
        name: 'pense',
        desc: 'Simple landing page for an app for tracking expenses. The project was made as a practice.', 
        imgHome: pense.home,
        imgSection: pense.section,
        stack: 'HTML, SASS, JS. Adaptive layout.',
        sitePath: 'https://pavlinaantipova.github.io/pense/',
        githubPath: 'https://github.com/PavlinaAntipova/pense',
        type: 'JS'
    }
]