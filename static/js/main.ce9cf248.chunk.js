(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],{112:function(e,t){},114:function(e,t){},115:function(e,t){},116:function(e,t){},117:function(e,t){},152:function(e,t,a){e.exports=a.p+"static/media/profile.2a565502.webp"},174:function(e,t){},189:function(e,t,a){},190:function(e,t,a){e.exports=a.p+"static/media/CV_show.903f9401.pdf"},191:function(e,t,a){e.exports=a.p+"static/media/CV.e06d30f9.pdf"},192:function(e,t,a){e.exports=a.p+"static/media/resulting_paths_asyncvi.55d079d0.webp"},193:function(e,t,a){e.exports=a.p+"static/media/barnsley_fern.0b155c21.webp"},194:function(e,t,a){e.exports=a.p+"static/media/basic_ml.3ff2e1b9.webp"},195:function(e,t,a){e.exports=a.p+"static/media/smartq.78fb16a1.webp"},196:function(e,t,a){e.exports=a.p+"static/media/simple_django_react_app.c9ad3e84.webp"},197:function(e,t,a){e.exports=a.p+"static/media/django_test.91a9777e.webp"},198:function(e,t,a){e.exports=a.p+"static/media/dash_test.29d82e46.webp"},199:function(e,t,a){e.exports=a.p+"static/media/smartbrain.2be6b264.webp"},200:function(e,t,a){e.exports=a.p+"static/media/robofriends.ce8190d4.webp"},201:function(e,t,a){e.exports=a.p+"static/media/explore-corona.1b451cc0.webp"},202:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),s=a(44),l=a(45),c=a(52),m=a(53),p=a(5),h=a.n(p),d=a(46);var u=function(){return r.a.createElement("div",{id:"hero",className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,r.a.createElement("a",{className:"back-to-top"},r.a.createElement("i",{className:"fa fa-angle-down fa-2x load-hidden","aria-hidden":"true"})))),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{left:!0},r.a.createElement("h1",{className:"hero-title"},"Hi, my name is ",r.a.createElement("span",{className:"text-color-main"},"Alex"),r.a.createElement("br",null),"I am your man!"),r.a.createElement("p",{className:"hero-cta"},r.a.createElement("a",{className:"cta-btn cta-btn--hero",href:"#about"},"Know more")))),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{bottom:!0},r.a.createElement("p",null,r.a.createElement("a",{onClick:d.animateScroll.scrollToBottom,className:"to-bottom"},r.a.createElement("i",{className:"fa fa-angle-down fa-2x","aria-hidden":"true"}))))))},f=a(47),g=a.n(f),b=a(92),k=a(31);var w=function(e){return r.a.createElement("div",{className:"scroll"},e.children)},_=a(30);_.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(_.pdfjs.version,"/pdf.worker.js");var y=function(e){var t=e.content,a=r.a.useState(!1),n=Object(b.a)(a,2),i=n[0],o=n[1],s=function(){return o(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",onClick:function(){return o(!0)}},"View Resume"),r.a.createElement(k.a,{show:i,onHide:s,dialogClassName:"modal-big"},r.a.createElement(k.a.Header,null,r.a.createElement(k.a.Title,null,r.a.createElement("h1",{className:"project-wrapper__text-title"},t.title))),r.a.createElement(k.a.Body,{className:"modal-body"},r.a.createElement(_.Document,{file:t.content.show,className:"PDFDocument"},r.a.createElement(w,null,r.a.createElement(_.Page,{pageNumber:1,scale:1.8,className:"PDFPage PDFPageOne"}),r.a.createElement(_.Page,{pageNumber:2,scale:1.8,className:"PDFPage PDFPageOne"})))),r.a.createElement(k.a.Footer,null,r.a.createElement("a",{rel:"noopener noreferrer",className:"cta-btn cta-btn--hero",onClick:s},"Close"),r.a.createElement("a",{rel:"noopener noreferrer",href:t.content.download,className:"cta-btn cta-btn--hero",download:"CV.pdf"},"Download"))))};var v=function(e){var t=e.about,n={title:"Resume",content:{show:t.link_show,download:t.link_download}};return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement("h2",{className:"section-title"},"About me")),r.a.createElement("div",{className:"row about-wrapper"},r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement(h.a,{bottom:!0},r.a.createElement("div",{className:"about-wrapper__image"},r.a.createElement(g.a,{options:{max:10}},r.a.createElement("img",{className:"img-fluid rounded shadow-lg",height:"auto",width:"500px",src:a(152),alt:"Profile Pic"}))))),r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement("div",{className:"about-wrapper__info"},r.a.createElement(h.a,{right:!0},r.a.createElement("p",{className:"about-wrapper__info-text"},t.section1),r.a.createElement("p",{className:"about-wrapper__info-text"},t.section2),r.a.createElement("p",{className:"about-wrapper__info-text"},t.section3),r.a.createElement("span",{className:"d-flex mt-3"},r.a.createElement(y,{content:n}))))))))},E=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(l.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. Something went wrong"):this.props.children}}]),a}(n.Component),N=a(51),j=a.n(N);var x=function(e){var t=e.title,a=e.description,n=e.link_live,i=e.link_source,o=e.link_picture,s=""===n?"none":"inline-block";return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 col-sm-12"},r.a.createElement("div",{className:"project-wrapper__text"},r.a.createElement(h.a,{left:!0},r.a.createElement("h3",{className:"project-wrapper__text-title"},t),r.a.createElement("div",null,r.a.createElement("p",{className:"mb-4"},j()(a))),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main src-link",href:i},"Source Code"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--hero",href:n,style:{display:s}},"See Live")))),r.a.createElement("div",{className:"col-lg-8 col-sm-12 myimg"},r.a.createElement("div",{className:"project-wrapper__image"},r.a.createElement("a",null,r.a.createElement(h.a,{right:!0},r.a.createElement("div",{className:"thumbnail rounded"},r.a.createElement(g.a,{options:{max:10}},r.a.createElement("img",{className:"img-fluid pic",src:o,alt:"../assets/".concat(o)}))))))))},S=a(54);var C=function(e){var t=e.name,a=e.data,n=e.description;return e.wrapped?r.a.createElement("div",{className:"wrapper"},r.a.createElement(S.a,{defaultActiveKey:"1"},r.a.createElement(S.a.Toggle,{as:"H3",variant:"link",eventKey:"0"},r.a.createElement("h3",{className:"project-wrapper__text-title accordion-button"},t),r.a.createElement("div",{className:"project-wrapper__text"},r.a.createElement("p",{className:"mb-4",style:{marginLeft:"2px"}},j()(n)))),r.a.createElement(S.a.Collapse,{eventKey:"0"},r.a.createElement("div",{className:"accordion-content"},a.map((function(e,t){return r.a.createElement(x,{key:a[t].title,title:a[t].title,description:a[t].description,link_live:a[t].link_live,link_source:a[t].link_source,link_picture:a[t].link_picture})})))))):r.a.createElement("div",{className:"wrapper"},r.a.createElement(x,{key:a[0].title,title:a[0].title,description:a[0].description,link_live:a[0].link_live,link_source:a[0].link_source,link_picture:a[0].link_picture}))};var P=function(e){var t=e.projects;return r.a.createElement("section",{id:"projects"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"project-wrapper"},r.a.createElement(h.a,null,r.a.createElement("h2",{className:"section-title dark-blue-text"},"Projects")),t.map((function(e,a){return r.a.createElement(C,{key:t[a].name,name:t[a].name,data:t[a].data,description:t[a].description,wrapped:t[a].wrapped})})))))};var T=function(e){var t=e.contact;return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement("h2",{className:"section-title"},"Contact")),r.a.createElement("div",{className:"contact-wrapper"},r.a.createElement(h.a,{bottom:!0},r.a.createElement("p",{className:"contact-wrapper__text"},t.call_to_action),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:t.email},"Write Mail")))))};var D=function(e){var t=e.network,a=e.link;return r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-".concat(t.toLowerCase()," fa-inverse")}))};var M=function(e){var t=e.social_networks;return r.a.createElement("footer",{className:"footer navbar-static-bottom"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{onClick:d.animateScroll.scrollToTop,className:"back-to-top",id:"bottom"},r.a.createElement("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"})),r.a.createElement("div",{className:"social-links"},t.map((function(e,a){return r.a.createElement(D,{key:t[a].network,network:t[a].network,link:t[a].link})}))),r.a.createElement("hr",null),r.a.createElement("p",{className:"footer__text"},"\xa9 2020 - Design by ",r.a.createElement("a",{href:"https://github.com/cobidev",target:"_blank",rel:"noopener noreferrer"},"Jacobo Mart\xednez")),r.a.createElement("p",{className:"footer__text"},"Implementation and Individualisation by ",r.a.createElement("a",{href:"https://github.com/papstchaka",target:"_blank",rel:"noopener noreferrer"},"Alexander Christoph"))))},A=(a(189),{section1:"Born 1996 in Karlsruhe, grown up near Stuttgart.",section2:"Started programming by the age of 11 during highschool with self made soccer playing robots. After finishing school and with begin of bachelors degree (Electrotechnics - B. Sc. - University of Stuttgart) moved on to data science and data analytics while working as working student @ Mercedes Benz. Later on moved to Munich making the masters degree (Electrotechnics - M. Sc. - TU Munich) focusing on data science, going deep into machine learning & artificial intelligence. Joined Siemens as working student in Munich focusing on assessment and implementation of machine learning algorithms in the sphere of industrial Edge-Cloud Environments and intelligent manufacturing Infrastructure",section3:"With passion and love into sports (soccer, volleyball, running), coding and spending time in the park with friends.",link_show:a(190),link_download:a(191)}),F=[{name:"High Performance Computing related projects [2020]",description:"The following repositories are directly related to <a href='https://www.ei.tum.de/ldv/startseite/' target='_blank'>Lehrstuhl f\xfcr Datenverarbeitung</a> course <a href='https://www.ei.tum.de/ldv/lehre/high-performance-computing-fuer-maschinelle-intelligenz/' target='_blank'>High Performance Computing for machine intelligence</a> at TU Munich. Goal of the course was to use parallelism in combination with C++ to speed-up different kinds of algorithms. First, algorithms were implemented using multiple threads on one single machine, later on - using <a href='https://www.openmp.org/' target='_blank'>OpenMP</a> and <a href='https://www.open-mpi.org/' target='_blank'>OpenMPI</a> - on mulitple machines.",data:[{title:"Asynchronous Value Iteration",description:"Main goal of this repository is to connect Python and C++ by using <a href='https://cffi.readthedocs.io/en/latest/' target='_blank'>CFFI</a>. Using the simplicity of Python for importing data files and plotting the result in combination with C++ speed-up and parallelization provides the best performance for projects that contain a variety of for-loops. The here used example implements <a href='https://artint.info/2e/html/ArtInt2e.Ch9.S5.SS2.html' target='_blank'>Asynchronous Value Iteration</a> following the <a href='https://en.wikipedia.org/wiki/Dynamic_programming' target='_blank'>Dynamic Programming</a> principle. Async VI is widely used in the field of <a href='https://en.wikipedia.org/wiki/Reinforcement_learning' target='_blank'>Reinforcement Learning</a> (see also <a href='https://github.com/papstchaka/basic_ml/blob/master/library/reinforcement_learning.py' target='_blank'>BasicML repositoriy</a> for examples). The here implemented algorithm is inspired by <a href='https://github.com/dennybritz/reinforcement-learning' target='_blank'>Denny Britz's</a> <a href='https://github.com/dennybritz/reinforcement-learning/blob/master/DP/Value%20Iteration%20Solution.ipynb' target='_blank'>Asynchronous Value Iteration in Python</a>. He states, referring to various further papers, that the used implementation - updating the values V and the policy PI after each state instead of using batches of states - converges faster. Since this kind of implementation is totally parallelizable, it is used in this repository as well.",link_live:"",link_source:"https://github.com/papstchaka/hpc_asyncvalueiteration",link_picture:a(192)},{title:"Barnsley Fern",description:"Parallel implementation of <a href='https://en.wikipedia.org/wiki/Barnsley_fern' target='_blank'>Barnsley Farn Algorithm</a> in C++. Repository follows up the <a href='https://en.wikipedia.org/wiki/Producer%E2%80%93consumer_problem' target='_blank'>producer-consumer-model</a> and is aware of upcoming <a href='https://en.wikipedia.org/wiki/Race_condition' target='_blank'>race conditions</a> (= threadsafe) by using mutexes. Algorithm produces a BarnsleyFern with high resolution (10k x 20k pixels). The implementation of the consumer-producer model is held modular, so it is very simple to change the desired algorithm without loosing a framework that works parallel and therefore very performant and efficient.",link_live:"",link_source:"https://github.com/papstchaka/hpc_barnsleyfern",link_picture:a(193)}],wrapped:!0},{name:"",description:"",data:[{title:"Basic ML [2020]",description:"The presented repository holds a library of most common algorithms used manually without using the help of <a href='https://scikit-learn.org/stable/' target='_blank'>sklearn</a> or other Machine Learning libraries like <a href='https://pandas.pydata.org/' target='_blank'>pandas</a>. All algorithms work mainly on <a href='https://numpy.org/' target='_blank'>numpy</a> and minor helper or built-in libraries. The algorithms that were implemented contain <a href='https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html' target='_blank'>Linear Regression</a>, <a href='https://scikit-learn.org/stable/modules/clustering.html' target='_blank'>Clustering</a>, <a href='https://scikit-learn.org/stable/modules/unsupervised_reduction.html' target='_blank'>Dimension Reduction</a>, <a href='https://scikit-learn.org/stable/modules/generated/sklearn.mixture.GaussianMixture.html' target='_blank'>Gaussian Mixture Models with Expectation Maximization Algorithm</a>, <a href='https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessRegressor.html' target='_blank'>Gaussian Processes</a>, <a href='https://pythonprogramming.net/q-learning-reinforcement-learning-python-tutorial/' target='_blank'>Reinforcement Learning</a>, <a href='http://scikit-learn.sourceforge.net/stable/modules/hmm.html' target='_blank'>Hidden Markov Models</a>, <a href='https://www.tensorflow.org/tutorials/keras/classification' target='_blank'>Deep Learning using Neural Networks</a>, <a href=https://pypi.org/project/sklearn-genetic/ target='_blank'>Genetic algorithm for DataSet manipulation</a>. For further information, please refer to the docs.",link_live:"",link_source:"https://github.com/papstchaka/basic_ml",link_picture:a(194)}],wrapped:!1},{name:"",description:"",data:[{title:"SmartQ [2020]",description:"This project is the result of the work from me and my team during the german wide hackathon <a href='https://covid19.hackatum.com/' target='_blank'>Hackatum</a> Hackathon which made us reach the 2nd place in the category of business-related projects. SmartQ helps people to find stores, supermarkets and co in times of long queues due to the heavy regulations made because of the coronavirus. Furthermore, the shop owner benefits from the use of SmartQ. With the integrated counting system, the owners of small or medium-sized shops get a useful managing system, to control and regulate the flow of persons into their facilities. See the full project description on <a href='https://devpost.com/software/smartqueue-4im8hf' target='_blank'>SmartQ</a>.",link_live:"http://dies-das-ananas.eu/#/",link_source:"https://github.com/sukram42/SmartQ",link_picture:a(195)}],wrapped:!1},{name:"Simple Frontend applications using different ways to implement [2020]",description:"These projects each provide a simple application that can easily be extended to become large and powerful projects. They are combining different frontend and backend frameworks, from <a href='https://django-rest-framework.org' target='_blank'>Django REST</a> respectively <a href='https://flask.palletsprojects.com/' target='_blank'>Flask</a> with <a href='https://reactjs.org' target='_blank'>ReactJS</a> over pure <a href='https://www.djangoproject.com/' target='_blank'>Django</a> with pure HTML+CSS up to pure Python (<a href='https://plotly.com/dash/' target='_blank'>dash</a>) with some CSS-styles.",data:[{title:"Backend + React App",description:"These projects combine the Django-REST-API respectively python's flask as backends and servers handling with the simple and clean frontend implementation of an ReactJS App. It therfor provides the possibility to manage a list of notes which shall be worked off until a certain deadline day which can also be easily changed and accessed. Main goal of the project is to show how Django and React work together, the functionality (here the list of notes) is secondary. The other project - in this case <a href='https://github.com/papstchaka/simple_flask_react_app' target='_blank'>the flask implementation</a> - can be also accessed through the Git-project which is linked below.",link_live:"",link_source:"https://github.com/papstchaka/simple_django_react_app",link_picture:a(196)},{title:"Django",description:"This repository shows how to implement a simple Application using Python's Django. Django therfor controls all the server and backend handling and can refer to custom HTML sites which need to be built additional. Main advantage is that you can pass python objects directly into the HTML-file without caring to much about POST and GET requests. Frontends like these are recommended for small projects that need a quick and easy frontend. Application provides a bunch of subwebsites with unique funtionalities. Please checkout the repository itself for more information.",link_live:"",link_source:"https://github.com/papstchaka/django_test",link_picture:a(197)},{title:"Dash",description:"This repository provides an almost similar Application as the above by using plotly's Dash. Dash can provide everything from backend to frontend. The whole HTML and JavaScript implementation of an application can be done by using dash only - maybe with some addiotional CSS-styles. Frontends like these are recommended for small projects that need a quick and easy frontend.  Please checkout the repository itself for more information about the projects functionality.",link_live:"",link_source:"https://github.com/papstchaka/dash_test",link_picture:a(198)}],wrapped:!0},{name:"Zero to Mastery Webdeveloper related projects [2020]",description:"These projects are the result of <a href='https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery' target='_blank'>The Complete Web Developer in 2020 Zero to Mastery</a> held by <a href='https://github.com/aneagoie' target='_blank'>Andrei Neagioe</a> on <a href='https://www.udemy.com/' target='_blank'>Udemy</a>.",data:[{title:"Smart Brain",description:"Finished the Final Project of the course. Project provides a website you can register and log in to (without email verification). So just register with whatever email you want (they will only be stored on my own SQL-DataBase which I don't care about, nobody will see them). Your passwords will also be stored there but hashed, so it is almost impossible for anyone (including me) to access them. Once logged in you can insert a photo-url (from the web) into the input and the API in the background will detect all faces which occur on the photo. Furthermore, once you are registered you'll get a unique score that tells you the amount of photos analysed by yourself.",link_live:"https://papstchaka.github.io/smartbrain/",link_source:"https://github.com/papstchaka/smartbrain",link_picture:a(199)},{title:"RoboFriends",description:"Finished my first App using ReactJS and successfully deploying the result on the web. Thanks to <a href='https://github.com/aneagoie' target='_blank'>Andrei Neagioe</a> for his course in WebDevelopment and bringing me and for sure more than 200k other fellow students into the world of HTML, CSS and JavaScript. The project was to build a facebook alike version that shows all of my virtual robotic friends with an implemented SearchBar. This SearchBar is updating the shown website's content in real time, feel free to check it out!",link_live:"https://papstchaka.github.io/robofriends/",link_source:"https://github.com/papstchaka/robofriends",link_picture:a(200)}],wrapped:!0},{name:"",description:"",data:[{title:"CovInteractive [2020]",description:"Result of the work from me and my team during the german wide hackathon <a href='https://wirvsvirushackathon.org/' target='_blank'>WirVsVirus</a> Hackathon. Goal was to develop a website that shows graphically the impact of curfews and other actions made by the government during the corona crisis in 2020. Basing on a basic SIR-model fed by RKI (Robert-Koch-Institut) and Johns Hopkins CSSE data with plots about the relative spread in each country in the world and with view on inner-german states and counties. See the full project description on <a href='https://devpost.com/software/covinteractive' target='_blank'>CovInteractive</a>.",link_live:"https://covinteractive.herokuapp.com/",link_source:"https://gitlab.com/jdcoding/explore-corona",link_picture:a(201)}],wrapped:!1}],I={call_to_action:"",email:"mailto:alexander.christoph@tum.de"},R=[{network:"Instagram",link:"https://z-p42.www.instagram.com/papstchaka/"},{network:"Xing",link:"https://www.xing.com/profile/Alexander_Christoph10"},{network:"Linkedin",link:"https://linkedin.com/in/alex-christoph"},{network:"Github",link:"https://github.com/papstchaka"},{network:"Gitlab",link:"https://gitlab.com/papstchaka"}],L=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(v,{about:A}),r.a.createElement(E,null,r.a.createElement(P,{projects:F})),r.a.createElement(T,{contact:I}),r.a.createElement(M,{social_networks:R}))}}]),a}(n.Component);o.a.render(r.a.createElement(L,null),document.getElementById("root"))},40:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=40},93:function(e,t,a){e.exports=a(202)}},[[93,1,2]]]);
//# sourceMappingURL=main.ce9cf248.chunk.js.map