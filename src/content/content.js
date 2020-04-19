export const about = {
    section1: "Born 1996 in Karlsruhe, grown up near Stuttgart.",
    section2: "Started programming by the age of 11 during highschool with self made soccer playing robots. After finishing school and with begin of bachelors degree (Electrotechnics - B. Sc. - University of Stuttgart) moved on to data science and data analytics while working as working student @ Mercedes Benz. Later on moved to Munich making the masters degree (Electrotechnics - M. Sc. - TU Munich) focusing on data science, going deep into machine learning & artificial intelligence.",
    section3: "With passion and love into sports (soccer, volleyball, running), coding and spending time in the park with friends.",
    link: require("../assets/Lebenslauf.pdf")
};

export const projects = [
    {
        name: "",
        description: "",
        data: [
            {
                title: "SmartQ [2020]",
                description: "This project is the result of the work from me and my team during the german wide hackathon <a href='https://covid19.hackatum.com/' target='_blank'>Hackatum</a> Hackathon. SmartQ helps people to find stores, supermarkets and co in times of long queues due to the heavy regulations made because of the coronavirus. Furthermore, the shop owner benefits from the use of SmartQ. With the integrated counting system, the owners of small or medium-sized shops get a useful managing system, to control and regulate the flow of persons into their facilities. See the full project description on <a href='https://devpost.com/software/smartqueue-4im8hf' target='_blank'>SmartQ</a>.",
                link_live: "http://dies-das-ananas.eu/#/",
                link_source: "https://github.com/sukram42/SmartQ",
                link_picture: require("../assets/smartq.jpg"),
            }
        ],
        wrapped: false
    },
    {
        name: "Simple Frontend applications using different ways to implement [2020]",
        description: "These projects each provide a simple application that can easily be extended to become large and powerful projects. They are working with different frontend respectively backend frameworks, from <a href='https://django-rest-framework.org' target='_blank'>Django REST</a> with <a href='https://reactjs.org' target='_blank'>ReactJS</a> over django with pure HTML+CSS up to pure Python (<a href='https://plotly.com/dash/' target='_blank'>dash</a>) with some CSS-styles.",
        data: [
            {
                title: "Backend + React App",
                description: "These projects combine the Django-REST-API respectively python\'s flask as backends and servers handling with the simple and clean frontend implementation of an ReactJS App. It therfor provides the possibility to manage a list of notes which shall be worked off until a certain deadline day which can also be easily changed and accessed. Main goal of the project is to show how Django and React work together, the functionality (here the list of notes) is secondary. The other project - in this case <a href='https://github.com/papstchaka/simple_flask_react_app' target='_blank'>the flask implementation</a> - can be also accessed through the Git-project which is linked below.",
                link_live: "",
                link_source: "https://github.com/papstchaka/simple_django_react_app",
                link_picture: require("../assets/simple_django_react_app.jpg"),        
            },
            {
                title: "Django",
                description: "This repository shows how to implement a simple Application using Python's Django. Django therfor controls all the server and backend handling and can refer to custom HTML sites which need to be built additional. Main advantage is that you can pass python objects directly into the HTML-file without caring to much about POST and GET requests. Frontends like these are recommended for small projects that need a quick and easy frontend. Application provides a bunch of subwebsites with unique funtionalities. Please checkout the repository itself for more information.",
                link_live: "",
                link_source: "https://github.com/papstchaka/django_test",
                link_picture: require("../assets/django_test.jpg"),
            },
            {
                title: "Dash",
                description: "This repository provides an almost similar Application as the above by using plotly's Dash. Dash can provide everything from backend to frontend. The whole HTML and JavaScript implementation of an application can be done by using dash only - maybe with some addiotional CSS-styles. Frontends like these are recommended for small projects that need a quick and easy frontend.  Please checkout the repository itself for more information about the projects functionality.",
                link_live: "",
                link_source: "https://github.com/papstchaka/dash_test",
                link_picture: require("../assets/dash_test.jpg"),
            }
        ],
        wrapped: true
    },
    {
        name: "Zero to Mastery Webdeveloper related projects [2020]",
        description: "These projects are the result of <a href='https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery' target='_blank'>The Complete Web Developer in 2020 Zero to Mastery</a> held by <a href='https://github.com/aneagoie' target='_blank'>Andrei Neagioe</a> on <a href='https://www.udemy.com/' target='_blank'>Udemy</a>.",
        data: [
            {
                title: "Smart Brain",
                description: "Finished the Final Project of the course. Project provides a website you can register and log in to (without email verification). So just register with whatever email you want (they will only be stored on my own SQL-DataBase which I don't care about, nobody will see them). Your passwords will also be stored there but hashed, so it is almost impossible for anyone (including me) to access them. Once logged in you can insert a photo-url (from the web) into the input and the API in the background will detect all faces which occur on the photo. Furthermore, once you are registered you'll get a unique score that tells you the amount of photos analysed by yourself.",
                link_live: "https://papstchaka.github.io/smartbrain/",
                link_source: "https://github.com/papstchaka/smartbrain",
                link_picture: require("../assets/smartbrain.jpg"),        
            },
            {
                title: "RoboFriends",
                description: "Finished my first App using ReactJS and successfully deploying the result on the web. Thanks to <a href='https://github.com/aneagoie' target='_blank'>Andrei Neagioe</a> for his course in WebDevelopment and bringing me and for sure more than 200k other fellow students into the world of HTML, CSS and JavaScript. The project was to build a facebook alike version that shows all of my virtual robotic friends with an implemented SearchBar. This SearchBar is updating the shown website's content in real time, feel free to check it out!",
                link_live: "https://papstchaka.github.io/robofriends/",
                link_source: "https://github.com/papstchaka/robofriends",
                link_picture: require("../assets/robofriends.jpg"),
            }
        ],
        wrapped: true
    },
    {
        name: "",
        description: "",
        data: [
            {
                title: "CovInteractive [2020]",
                description: "Result of the work from me and my team during the german wide hackathon <a href='https://wirvsvirushackathon.org/' target='_blank'>WirVsVirus</a> Hackathon. Goal was to develop a website that shows graphically the impact of curfews and other actions made by the government during the corona crisis in 2020. Basing on a basic SIR-model fed by RKI (Robert-Koch-Institut) and Johns Hopkins CSSE data with plots about the relative spread in each country in the world and with view on inner-german states and counties. See the full project description on <a href='https://devpost.com/software/covinteractive' target='_blank'>CovInteractive</a>.",
                link_live: "https://covinteractive.herokuapp.com/",
                link_source: "https://gitlab.com/jdcoding/explore-corona",
                link_picture: require("../assets/explore-corona.jpg"),
            }
        ],
        wrapped: false
    }
];

export const contact = {
    call_to_action: "",
    email: "mailto:alexander.christoph@tum.de"
};

export const social_networks = [
    {
        network: "Instagram",
        link: "https://z-p42.www.instagram.com/papstchaka/"
    },
    {
        network: "Xing",
        link: "https://www.xing.com/profile/Alexander_Christoph10"
    },
    {
        network: "Linkedin",
        link: "https://linkedin.com/in/alex-christoph"
    },
    {
        network: "Github",
        link: "https://github.com/papstchaka"
    },
    {
        network: "Gitlab",
        link: "https://gitlab.com/papstchaka"
    }
];