export const hero = {
    roles: [
        "Data Science", 1000, 
        "Machine Learning", 1000,
        "Artificial Intelligence", 1000,
        "Web Development", 1000,
        "Full-Stack", 1000,
        ""
    ]
}

export const about = {
    sections: [
        {
            data: "I was born in 1996 in Karlsruhe, Germany, and grew up in a small town near Stuttgart."
        },
        {
            data: "My programming career got its start in high school, at 11 years old, with self-made robots that played football."
        },
        {
            data: "After starting my BSc in Electrotechnics at University of Stuttgart, I entered the field of Data Science and Data Analytics as a working student at Mercedes Benz."
        },
        {
            data: "During my masters degree in Electrotechnics at TU Munich, I deepened my knowledge on Data Science, Machine Learning & Artificial Intelligence."
        },
        {
            data: "I spent one semester of my masters in Vienna doing an Erasmus exchange. There, I spent most of my time on improving my skills in informatics and data science."
        },
        {
            data: "Currently I am working for a small startup from Munich, called Vestigas. We focus on digitizing and revolutionizing the construction industry."
        },
        {
            data: "Apart from work, I spend most of my free time doing sports (football, volleyball, running), and love to spend time in a park with friends."
        }
    ],
    link_show: require("../assets/CV_show.pdf"),
    link_download: require("../assets/CV.pdf"),
    languages: [
        "Python", "Linux", "C++", "HTML", "CSS", "ReactJS", "SQL", "Java", "Spark", "Azure", "Django", "PyTorch", 
        "Tensorflow", "Flask"
    ]
};

export const projects = [
    {
        year: "2021",
        description: "During the second and third semester of my masters I further deepened my knowledge on other aspects than Machine Learning alone. Driven by a university project, I learnt to implement parallel working algorithms using C++ and <a href='https://www.open-mpi.org/' target=_'blank'>OpenMPI</a>. This helped a lot to gain an insight into the clomplexity of large-scale data centers or cloud platforms. Further minor projects focused on implementing a standard and easy-to-use Machine Learning Pipeline or other algorithms that may help during daily life, such as an algorithm to automatically relabel music files according to their original properties (song name, artist, album, etc.).",
        data: [
            {
                name: "",
                description: "",
                data: [
                    {
                        title: "Sort Music",
                        description: "This repository implements a script to detect an audio file using <a href='https://rapidapi.com/apidojo/api/shazam/' target='_blank'>Shazam API</a> to identify songs. After detecting the song and its properties - like artist, song name, album, year, etc. - it can change the properties of a given file respectively and save it as a MP3 file. To use the provided python script, you first have to create your own account at <a href='https://rapidapi.com/' target='_blank'>rapidAPI</a>. Using the free trial only, you can send up to 500 requests per months. While this project may not be suitable to reorganize a whole music bibliography of thousands of songs, it is a start in that direction.",
                        link_live: "",
                        link_source: "https://github.com/papstchaka/sort_music",
                        link_picture: require("../assets/sort_music.webp"),
                    }
                ],
                wrapped: false
            },
            {
                name: "",
                description: "",
                data: [
                    {
                        title: "MNIST",
                        description: "This repository is built to play around with some well-known datasets - such as <a href='http://yann.lecun.com/exdb/mnist/' target='_blank'>MNIST dataset</a> or <a href='https://www.unb.ca/cic/datasets/nsl.html' target='_blank'>UNB's NSL-KDD dataset</a> - to demonstrate a typical Machine Learning Pipeline and the power of Feature Reduction, using Neural Networks with <a href='https://towardsdatascience.com/image-similarity-using-triplet-loss-3744c0f67973' target='_blank'>Triplet Loss</a>. The name of the repository was chosen after using MNIST as the first dataset to check the network's performance. The proposed Pipeline consists of all typical steps during a Machine Learning process, such as NaN handling, conversion of categorical data into numerical, scaling, and feature reduction (to increase training/prediction process). In the end, the results are evaluated visually and statistically.",
                        link_live: "",
                        link_source: "https://github.com/papstchaka/mnist",
                        link_picture: require("../assets/mnist.webp"),
                    }
                ],
                wrapped: false,
            },
            {
                name: "High Performance Computing related projects",
                description: "The following repositories are directly related to <a href='https://www.ei.tum.de/ldv/startseite/' target='_blank'>Lehrstuhl für Datenverarbeitung</a> course <a href='https://www.ei.tum.de/ldv/lehre/high-performance-computing-fuer-maschinelle-intelligenz/' target='_blank'>High Performance Computing for machine intelligence</a> at TU Munich. The goal of the course was to use parallelism in combination with C++ to speed up different kinds of algorithms. First, algorithms were implemented using multiple threads on one single machine and later - using <a href='https://www.openmp.org/' target='_blank'>OpenMP</a> and <a href='https://www.open-mpi.org/' target='_blank'>OpenMPI</a> - on mulitple machines.",
                data: [
                    {
                        title: "Parallel Value Iteration",
                        description: "In this repository, an Asynchronous Value Iteration is implemented using  <a href='https://www.open-mpi.org/' target='_blank'>OpenMPI</a> for parallelization and performance boost. Therefore, different strategies of communication are implemented and afterwards evaluated and compared to each other. In principle, the task is exactly the same as the project below. The key difference is to parallelize the implementation not only on a local machine, but on multiple other physical machines as well.",
                        link_live: "",
                        link_source: "https://github.com/papstchaka/hpc_parallel",
                        link_picture: require("../assets/hpc_parallel.webp")
                    },
                    {
                        title: "Async Value Iteration",
                        description: "The main goal of this repository is to connect Python and C++ by using <a href='https://cffi.readthedocs.io/en/latest/' target='_blank'>CFFI</a>. Using the simplicity of Python for importing data files and plotting the result in combination with C++ speed and parallelization provides the best performance for projects that contain a variety of for-loops. The example used here implements <a href='https://artint.info/2e/html/ArtInt2e.Ch9.S5.SS2.html' target='_blank'>Asynchronous Value Iteration</a> following the <a href='https://en.wikipedia.org/wiki/Dynamic_programming' target='_blank'>Dynamic Programming</a> principle. Async VI is widely used in the field of <a href='https://en.wikipedia.org/wiki/Reinforcement_learning' target='_blank'>Reinforcement Learning</a> (see also <a href='https://github.com/papstchaka/basic_ml/blob/master/library/reinforcement_learning.py' target='_blank'>BasicML repository</a> for examples). The algorithm implemented here is inspired by <a href='https://github.com/dennybritz/reinforcement-learning' target='_blank'>Denny Britz's</a> <a href='https://github.com/dennybritz/reinforcement-learning/blob/master/DP/Value%20Iteration%20Solution.ipynb' target='_blank'>Asynchronous Value Iteration in Python</a>. He states, referring to various further papers, that the used implementation - updating the values V and the policy PI after each state instead of using batches of states - converges faster. Since this kind of implementation is totally parallelizable, it is used in this repository as well.",
                        link_live: "",
                        link_source: "https://github.com/papstchaka/hpc_asyncvalueiteration",
                        link_picture: require("../assets/resulting_paths_asyncvi.webp"),
                    },
                    {
                        title: "Barnsley Fern",
                        description: "This is the parallel implementation of the <a href='https://en.wikipedia.org/wiki/Barnsley_fern' target='_blank'>Barnsley Farn Algorithm</a> in C++. The repository follows the <a href='https://en.wikipedia.org/wiki/Producer%E2%80%93consumer_problem' target='_blank'>producer-consumer-model</a> and is aware of upcoming <a href='https://en.wikipedia.org/wiki/Race_condition' target='_blank'>race conditions</a> (= threadsafe) by using mutexes. The algorithm produces a BarnsleyFern with a high resolution (10k x 20k pixels). The implementation of the consumer-producer model is modular, so it is very simple to change the desired algorithm without losing a framework that works parallel and therefore very performant and efficient.",
                        link_live: "",
                        link_source: "https://github.com/papstchaka/hpc_barnsleyfern",
                        link_picture: require("../assets/barnsley_fern.webp"),
                    }
                ],
                wrapped: true
            },
        ]
    },
    {
        year: "2020",
        description: "After moving to a new city during the first Covid lockdown, I spent a lot of time improving my full-stack development skills. My special focus was on web development because I had never done much on this before. Using <a href='https://www.udemy.com/' target='_blank'>Udemy</a> and the help of <a href='https://github.com/aneagoie' target='_blank'>Andrei Neagoie</a>, I was able to implement several different web applications. Furthermore, I successfully participated in two hackathons and implemented my own little version of <a href='https://scikit-learn.org/stable/' target='_blank'>sklearn</a>, being inspired by one of my masters courses.",
        data: [
            {
                name: "",
                description: "",
                data: [
                    {
                        title: "Basic ML",
                        description: "The presented repository holds a library of the most common algorithms used manually without using the help of <a href='https://scikit-learn.org/stable/' target='_blank'>sklearn</a> or other Machine Learning libraries like <a href='https://pandas.pydata.org/' target='_blank'>pandas</a>. All algorithms work mainly on <a href='https://numpy.org/' target='_blank'>numpy</a> and minor helper, or built-in libraries. The algorithms that were implemented contain <a href='https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html' target='_blank'>Linear Regression</a>, <a href='https://scikit-learn.org/stable/modules/clustering.html' target='_blank'>Clustering</a>, <a href='https://scikit-learn.org/stable/modules/unsupervised_reduction.html' target='_blank'>Dimension Reduction</a>, <a href='https://scikit-learn.org/stable/modules/generated/sklearn.mixture.GaussianMixture.html' target='_blank'>Gaussian Mixture Models with Expectation Maximization Algorithm</a>, <a href='https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessRegressor.html' target='_blank'>Gaussian Processes</a>, <a href='https://pythonprogramming.net/q-learning-reinforcement-learning-python-tutorial/' target='_blank'>Reinforcement Learning</a>, <a href='http://scikit-learn.sourceforge.net/stable/modules/hmm.html' target='_blank'>Hidden Markov Models</a>, <a href='https://www.tensorflow.org/tutorials/keras/classification' target='_blank'>Deep Learning using Neural Networks</a> and <a href=https://pypi.org/project/sklearn-genetic/ target='_blank'>Genetic algorithm for DataSet manipulation</a>. For further information, please refer to the docs.",
                        link_live: "",
                        link_source: "https://github.com/papstchaka/basic_ml",
                        link_picture: require("../assets/basic_ml.webp"),
                    }
                ],
                wrapped: false
            },
            {
                name: "",
                description: "",
                data: [
                    {
                        title: "SmartQ",
                        description: "This project is the result of the work from me and my team during the Germany-wide hackathon <a href='https://covid19.hackatum.com/' target='_blank'>Hackatum</a>, that lead us to a 2nd place in the category of business-related projects. SmartQ helps people to find stores, supermarkets, etc. in times of long queues. Furthermore, the shop owner benefits from the use of SmartQ. With an integrated counting system, the owners of small or medium-sized shops access a useful managing system to control and regulate the flow of persons in their facilities. See the full project description on <a href='https://devpost.com/software/smartqueue-4im8hf' target='_blank'>SmartQ</a>.",
                        link_live: "",
                        link_source: "https://github.com/sukram42/SmartQ",
                        link_picture: require("../assets/smartq.webp"),
                    }
                ],
                wrapped: false
            },
            {
                name: "Simple Frontend applications using different ways to implement",
                description: "Each of these projects provide a simple application that can easily be extended to become large and powerful projects. They combine different frontend and backend frameworks, such as <a href='https://django-rest-framework.org' target='_blank'>Django REST</a> and <a href='https://flask.palletsprojects.com/' target='_blank'>Flask</a> combined with <a href='https://reactjs.org' target='_blank'>ReactJS</a>, pure <a href='https://www.djangoproject.com/' target='_blank'>Django</a> with pure HTML+CSS and pure Python (<a href='https://plotly.com/dash/' target='_blank'>dash</a>) with some CSS-styles.",
                data: [
                    {
                        title: "Backend + React App",
                        description: "This project combines the <a href='https://django-rest-framework.org' target='_blank'>Django REST API</a> and python's <a href='https://flask.palletsprojects.com/' target='_blank'>Flask</a> as backend with the simple and clean frontend implementation of an <a href='https://reactjs.org' target='_blank'>ReactJS</a> App. It therefore provides the possibility to manage a list of notes. The list is operational until a certain deadline day that can easily be changed and accessed. The main goal of the project is to show how Django and React work together, while the functionality (here, the list of notes) is secondary. The other project - in this case <a href='https://github.com/papstchaka/simple_flask_react_app' target='_blank'>the flask implementation</a> - can also be accessed through the Git-project that is linked below.",
                        link_live: "",
                        link_source: "https://github.com/papstchaka/simple_django_react_app",
                        link_picture: require("../assets/simple_django_react_app.webp"),        
                    },
                    {
                        title: "Django",
                        description: "This repository shows how to implement a simple application using Python's <a href='https://django-rest-framework.org' target='_blank'>Django</a>. Django, therefore, controls all the server and backend handling and can refer to custom HTML sites that have to be built additionally. The main advantage is passing python objects directly into the HTML-file without caring too much about POST and GET requests. Frontends like these are recommended for small projects that need a quick and easy visualization. The application provides a bunch of subwebsites with unique funtionalities. Please check out the repository itself for more information.",
                        link_live: "",
                        link_source: "https://github.com/papstchaka/django_test",
                        link_picture: require("../assets/django_test.webp"),
                    },
                    {
                        title: "Dash",
                        description: "This repository provides an almost similar Application as the above by using plotly's <a href='https://plotly.com/dash/' target='_blank'>Dash</a>. Dash can provide everything from backend to frontend. The whole HTML and JavaScript implementation of an application can be done by using dash only - maybe with some addiotional CSS-styles. As mentioned above, frontends like these are recommended for small projects.  Please checkout the repository itself for more information about the projects functionality.",
                        link_live: "",
                        link_source: "https://github.com/papstchaka/dash_test",
                        link_picture: require("../assets/dash_test.webp"),
                    }
                ],
                wrapped: true
            },
            {
                name: "Zero to Mastery Webdeveloper related projects",
                description: "These projects are the result of <a href='https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery' target='_blank'>The Complete Web Developer in 2020: Zero to Mastery</a> held by <a href='https://github.com/aneagoie' target='_blank'>Andrei Neagioe</a> on <a href='https://www.udemy.com/' target='_blank'>Udemy</a>.",
                data: [
                    {
                        title: "Smart Brain",
                        description: "This is the final project of the course. It provides a website where you can register and log in to (without email verification). So just register with whatever email you want (they will only be stored on my own SQL-DataBase which I don't care about, nobody will see them). Your passwords will also be stored there but hashed, so it is almost impossible for anyone (including me) to access them. Once logged in, you can insert a photo-url (from the web) into the input and the API in the background will detect all faces which occur on the photo. Furthermore, once you are registered you'll get a unique score that tells you the number of photos you have analysed so far.",
                        link_live: "https://papstchaka.github.io/smartbrain/",
                        link_source: "https://github.com/papstchaka/smartbrain",
                        link_picture: require("../assets/smartbrain.webp"),        
                    },
                    {
                        title: "RoboFriends",
                        description: "I finished my first App using <a href='https://reactjs.org' target='_blank'>ReactJS</a> and deployed it successfully on the web. This was possible thanks to <a href='https://github.com/aneagoie' target='_blank'>Andrei Neagioe</a> and his course in Web-Development, that brought me and more than 200k fellow students into the world of HTML, CSS and JavaScript. The project entailed building a Facebook look-alike, that showed all of my virtual robotic friends with an implemented SearchBar. The SearchBar is updating the website's content in real time, feel free to check it out!",
                        link_live: "https://papstchaka.github.io/robofriends/",
                        link_source: "https://github.com/papstchaka/robofriends",
                        link_picture: require("../assets/robofriends.webp"),
                    }
                ],
                wrapped: true
            },
            {
                name: "",
                description: "",
                data: [
                    {
                        title: "CovInteractive",
                        description: "This is the result of the work of me and my team during the Germany-wide hackathon <a href='https://wirvsvirushackathon.org/' target='_blank'>WirVsVirus</a>. The goal was to develop a website that shows the impact of curfews and other Covid-related governmental actions in 2020 graphically. It is based on a basic SIR-model fed by RKI (Robert-Koch-Institut) and Johns Hopkins CSSE data with plots about the relative spread in each country and each German federal state. See the full project description on <a href='https://devpost.com/software/covinteractive' target='_blank'>CovInteractive</a>.",
                        link_live: "",
                        link_source: "https://gitlab.com/jdcoding/explore-corona",
                        link_picture: require("../assets/explore-corona.webp"),
                    }
                ],
                wrapped: false
            }
        ]
    },
];

export const contact = {
    call_to_action: "",
    email: "mailto:alexander.christoph@vestigas.com"
};

export const social_networks = [
    {
        network: "Instagram",
        link: "https://z-p42.www.instagram.com/chaqueezy/"
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
