(window["webpackJsonpbreaking-monolith-react"]=window["webpackJsonpbreaking-monolith-react"]||[]).push([[0],{18:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/carousalBackground1.bf3f9a53.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/carousalBackground2.4c74d810.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/carousalBackground3.f26ae42c.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/whiteHome.924e8ca1.png"},28:function(e,t,a){e.exports=a(44)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),i=(a(18),a(7)),s=a(8),o=a(10),m=a(9),p=a(11),u=a(14),d=a(5),h=(a(33),function(e){var t=e.backLinks.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:"#/".concat(e.name)},e.name)))});return r.a.createElement("div",{className:"flipContainer",style:{top:e.top,left:e.left,width:e.width,height:e.height}},r.a.createElement("div",{className:"flipCard"},r.a.createElement("div",{className:"frontCard"},r.a.createElement("p",{className:"verticalCenter"},e.frontText)),r.a.createElement("div",{className:"backCard"},r.a.createElement("p",{className:"verticalCenter"},r.a.createElement("table",null,t)))))}),E=a(21),f=a.n(E),g=a(22),v=a.n(g),b=a(23),T=a.n(b),N=(a(34),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"demo",class:"carousel slide","data-ride":"carousel"},r.a.createElement("ul",{class:"carousel-indicators"},r.a.createElement("li",{"data-target":"#demo","data-slide-to":"0",class:"active"}),r.a.createElement("li",{"data-target":"#demo","data-slide-to":"1"}),r.a.createElement("li",{"data-target":"#demo","data-slide-to":"2"})),r.a.createElement("div",{class:"carousel-inner"},r.a.createElement("div",{class:"carousel-item active"},r.a.createElement("img",{src:f.a}),r.a.createElement("div",{class:"carousel-caption"},r.a.createElement("h1",null,"Breaking The Monolith"),r.a.createElement("p",null,"Loosley Coupled Tightly Integrated Microservice Ecosystem? Yes its possible"))),r.a.createElement("div",{class:"carousel-item"},r.a.createElement("img",{src:v.a}),r.a.createElement("div",{class:"carousel-caption"},r.a.createElement("h1",null,"Responsive and Reactive UI Designs"),r.a.createElement("p",null,"Powerful yet simple Frontend ? Yes it is possible"))),r.a.createElement("div",{class:"carousel-item"},r.a.createElement("img",{src:T.a}),r.a.createElement("div",{class:"carousel-caption"},r.a.createElement("h1",null,"Running your Buisness from Cloud"),r.a.createElement("p",null,"Including infrastructure and state of art Devops? Yes its possible")))))}}]),t}(n.Component));a(35);var k=function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{className:"options"},r.a.createElement(h,{top:"20px",height:"130px",width:"18%",left:"10%",frontText:"DevOps-Platform",backLinks:[{name:"CI and CD"},{name:"Infrastructure as code"},{name:"Monitoring and Logging"},{name:"Tools"}]}),r.a.createElement(h,{top:"160px",height:"120px",width:"18%",left:"10%",frontText:"UI",backLinks:[{name:"UI and UX"},{name:"UI Development"},{name:"Framework"},{name:"Mobile App"}]}),r.a.createElement(h,{top:"20px",height:"80px",width:"18%",left:"30%",frontText:"GraphQL",backLinks:[{name:"Single end point orchestration"}]}),r.a.createElement(h,{top:"110px",height:"170px",width:"18%",left:"30%",frontText:"Micro Services",backLinks:[{name:"API Governance"},{name:"Go Serverless"},{name:"Containers and Pods"},{name:"Orchestration Layer"},{name:"Development Framework"}]}),r.a.createElement(h,{top:"20px",height:"260px",width:"16%",left:"50%",frontText:"Agile",backLinks:[{name:"Requirement gathering"},{name:"Story mapping"},{name:"Planning"},{name:"Stand up"},{name:"Scrum of Scrums"},{name:"Review"},{name:"Retro"},{name:"Health check"}]}),r.a.createElement(h,{top:"20px",height:"140px",width:"18%",left:"68%",frontText:"Testing",backLinks:[{name:"UI Testing"},{name:"Micro Services Testing"},{name:"Performance Testing"},{name:"Security Testing"}]}),r.a.createElement(h,{top:"170px",height:"110px",width:"18%",left:"68%",frontText:"Managing Monolith",backLinks:[{name:"Graceful Decommission"},{name:"Continuous Scynchronization"},{name:"Data Migration"}]})))},w=a(24),y=a.n(w),S=(a(36),function(e){return r.a.createElement("div",{className:"pageHeader"},r.a.createElement("div",{className:"heading"},r.a.createElement("h2",null,e.children)),r.a.createElement("a",{href:"#/"},r.a.createElement("img",{className:"headerImage",src:y.a})))}),x=a(25),I=(a(42),function(e){var t=e.children.map(function(t){return r.a.createElement("tr",{className:"leftLinksTableRow"},r.a.createElement("td",{className:"leftLinksTableCell"},r.a.createElement(x.HashLink,{className:"leftLinksTableCell",to:"/".concat(e.heading,"#").concat(t)},t)))});return r.a.createElement("div",{className:"leftLinks"},r.a.createElement("table",{className:"leftLinksList"},t))}),C=(a(43),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pageContainer"},r.a.createElement(S,null,this.props.header),r.a.createElement(I,{heading:this.props.header},this.props.topics),r.a.createElement("div",{className:"mainContent"},this.props.children))}}]),t}(n.Component));var L=function(){var e=["What is Micro Service testing?","Importance of Micro Service Testing","How to test Micro services","Sample tools to use","Live example tests"];return r.a.createElement("div",null,r.a.createElement(C,{header:"Micro Services Testing",topics:e},r.a.createElement("div",{id:e[0],className:"borderAndBackColor"},r.a.createElement("h3",null,e[0]),r.a.createElement("p",{className:"paragraphStart"},"Micro service architectures are small components designed to coexist with each other. As such issues identified can easily be compartmentalised leading to which microservice is responsible for errant behavior compared to their Monolith counterparts where errant behavior could be possibly due to multiple reasons."),r.a.createElement("br",null),r.a.createElement("p",{className:"paragraph"},"Different type of tests a micro service should undergo:",r.a.createElement("ul",{className:"unorderedList"},r.a.createElement("li",null,"Unit test"),r.a.createElement("li",null,"Functional/Component test"),r.a.createElement("li",null,"Integration test"),r.a.createElement("li",null,"E2E test"),r.a.createElement("li",null,"Contract test"))),r.a.createElement("p",{className:"paragraph"},"Different criterias of a good test which ideally a microservice tests should have are :",r.a.createElement("ul",{className:"unorderedList"},r.a.createElement("li",null,"Fail fast"),r.a.createElement("li",null,"Shift left approach"),r.a.createElement("li",null,"Small tests but many"),r.a.createElement("li",null,"Easy maintainable"),r.a.createElement("li",null,"Quickly automatable"))),r.a.createElement("br",null),r.a.createElement("h4",null,"UNIT TEST"),r.a.createElement("p",{className:"paragraphStart"},"Unit tests exercise the small pieces of software such as a function in the application to determine whether they produce the desired output given a set of known inputs."),r.a.createElement("p",{className:"paragraph"},r.a.createElement("b",null,"Eg:")," A field in API response should be in UUID format , whereas if not covered in unit test the test would pass with a random String bieng passed in place of UUID or a field has restriction on number of chracters it can accept."),r.a.createElement("p",{className:"paragraph"},r.a.createElement("b",null,"Tools/library")," :JUNIT, NUNIT, RSPEC etc."),r.a.createElement("br",null),r.a.createElement("h4",null,"FUNCTIONAL/COMPONENT TEST"),r.a.createElement("p",{className:"paragraphStart"},"Functinal test is testing of the whole service itself but in isolation i.e. using test doubles or mocks for all other dependencies on which the service depends on to behave as is expected out of it.Dependencies includes Database, other microservice, MQ's etc which all can be mocked or stubbed. One of the major objective of functional test is it tests the behavior of the service without depending on dependencies which service needs as such need for an full fledged environment is eliminated."),r.a.createElement("p",{className:"paragraph"},r.a.createElement("b",null,"Eg:")," Microservice responding with 200 on providing correct credential and 401 on incorrect credential."),r.a.createElement("p",{className:"paragraph"},r.a.createElement("b",null,"Tools/library")," :JKARATE, APIARY, RESTASSURED, FRISBY, TestRestTemplate etc"),r.a.createElement("br",null),r.a.createElement("h4",null,"INTEGRATION TEST"),r.a.createElement("p",{className:"paragraphStart"},"Integration test primarily test inter-service communication and hence depends on full fledged environment having instances of all dependent services and components in place."),r.a.createElement("p",{className:"paragraph"},"It tests the co-existense of service under test with other services and dependency and checks overall behavior of the system of which service is a small part."),r.a.createElement("p",{className:"paragraph"},r.a.createElement("b",null,"Eg:")," Service getting error code on calling other service if not providing required parameter to called service"),r.a.createElement("p",{className:"paragraph"},r.a.createElement("b",null,"Tools/library")," :JKARATE, APIARY, RESTASSURED, FRISBY, TestRestTemplate, POSTMAN etc")),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("div",{id:e[1],className:"borderAndBackColor"},r.a.createElement("h3",null,e[1]),r.a.createElement("p",{className:"paragraphStart"},"It is very important to test the microservices as it gives confidence about the assumptions made for each service and how it integrates with other services to for a system. Testing of microservices is the first step in making the service reliable for the user. For the internal functional dependency of the microservices, the testing is more important for the service to stay strong. At the same time focus is also to automate the maximu tests so as to achieve consistency and repeatability of features and reduce longer test cycles."),r.a.createElement("br",null))))},O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(u.HashRouter,null,r.a.createElement(d.d,{path:"/",exact:!0,component:k}),r.a.createElement(d.d,{path:"/Micro Services Testing",exact:!0,component:L}))}}]),t}(n.Component);c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.49a1a65e.chunk.js.map