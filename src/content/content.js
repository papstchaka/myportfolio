export const about = {
    section1: "Born 1996 in Karlsruhe, grown up near Stuttgart.",
    section2: "Started programming by the age of 11 during highschool with self made soccer playing robots. After finishing school and with begin of bachelors degree (Electrotechnics - B. Sc. - University of Stuttgart) moved on to data science and data analytics while working as working student @ Mercedes Benz. Later on moved to Munich making the masters degree (Electrotechnics - M. Sc. - TU Munich) focusing on data science, going deep into machine learning & artificial intelligence.",
    section3: "With passion and love into sports (soccer, volleyball, running), coding and spending time in the park with friends.",
    link: require("../assets/Lebenslauf.pdf")
};

export const projects = [
    {
        data: [
            {
                title: "Smart Brain",
                description: "Finished the Final Project of <a href='https://github.com/aneagoie' target='_blank'>Andrei Neagioe</a>'s Zero to Mastery Webdevelopment course on <a href='https://www.udemy.com/' target='_blank'>Udemy</a>. Project provides a website you can register and log in to (without email verification). So just register with whatever email you want (they will only be stored on my own SQL-DataBase which I don't care about, nobody will see them). Your passwords will also be stored there but hashed, so it is almost impossible for anyone (including me) to access them. Once logged in you can insert a photo-url (from the web) into the input and the API in the background will detect all faces which occur on the photo. Furthermore, once you are registered you'll get a unique score that tells you the amount of photos analysed by yourself.",
                link_live: "https://papstchaka.github.io/smartbrain/",
                link_source: "https://github.com/papstchaka/smartbrain",
                link_picture: require("../assets/smartbrain.jpg"),        
            },
            {
                title: "RoboFriends",
                description: "Finished my first App using React. Thanks to <a href='https://github.com/aneagoie' target='_blank'>Andrei Neagioe</a> for his course in WebDevelopment and bringing me and for sure more than 200k other fellow students into the world of HTML, CSS and JavaScript. The project was to build a facebook alike version that shows all of my virtual robotic friends with an implemented SearchBar.",
                link_live: "https://papstchaka.github.io/robofriends/",
                link_source: "https://github.com/papstchaka/robofriends",
                link_picture: require("../assets/robofriends.jpg"),
            }
        ],
        wrapped: true
    },
    {
        data: [
            {
                title: "CovInteractive [2020]",
                description: "Result of the work from me and my team during the german wide hackathon <a href='https://wirvsvirushackathon.org/' target='_blank'>WirVsVirus</a> Hackathon. Goal was to develop a website that shows graphically the impact of curfews and other actions made by the government during the corona crisis in 2020. Basing on a basic SIR-model fed by RKI (Robert-Koch-Institut) and Johns Hopkins CSSE data with plots about the relative spread in each country in the world and with view on inner-german states and counties.",
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