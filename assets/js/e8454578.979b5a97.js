"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[62197],{29782:(e,a,i)=>{i.r(a),i.d(a,{default:()=>f});var t=i(96540),o=i(15161),n=i(20162);function r({children:e,fallback:a}){return(0,n.A)()?t.createElement(t.Fragment,null,null==e?void 0:e()):null!=a?a:null}var s=i(20053),l=i(2775);const m="featureCol_Z6OD",g="card_button_FvBj",c="card_dCkv",u="selected_tDsF",d="featureBody_xxE9",p="card_image_teGS",h=t.forwardRef((({company:e,isSelected:a},i)=>t.createElement("div",{className:(0,s.A)("col col--4",m),id:e.slug,ref:i},t.createElement("div",{className:(0,s.A)("card",c,{[u]:a})},t.createElement("div",{className:p},t.createElement("img",{src:`/img/adoption-stories/adoption-stories-${e.slug}.png`,alt:e.name})),t.createElement("div",{className:(0,s.A)("card__body",d)},t.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})),t.createElement("div",{className:g},t.createElement(l.A,{className:"button button--secondary button--md",href:e.link,target:"_blank"},"Discover ",e.name,"'s Story")))))),b={filterBar:"filterBar_wKxm"};var y=i(32169);function v(){const e=((null==y?void 0:y.companies)||[]).filter((e=>e.link)),[a,i]=(0,t.useState)([]),n=(0,t.useRef)(null),r=a.length?e.filter((e=>a.includes(e.category))):e;return(0,t.useEffect)((()=>{window.location.hash.substring(1);n.current&&n.current.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}),[n]),t.createElement(o.A,null,t.createElement("header",{className:"hero"},t.createElement("div",{className:"container"},t.createElement("div",{className:"hero__content"},t.createElement("div",null,t.createElement("h1",{className:"hero__title"},"DataHub Adoption Stories"),t.createElement("p",{className:"hero__subtitle"},"Learn how the best data and AI teams are using DataHub",t.createElement("br",null),"Check out more stories on the ",t.createElement("a",{href:"https://www.youtube.com/playlist?list=PLdCtLs64vZvGCKMQC2dJEZ6cUqWsREbFi",style:{color:"black"}},"DataHub Youtube"),"."))),t.createElement("div",{className:b.filterBar},t.createElement("strong",null,"For: "),["B2B & B2C","E-Commerce","Financial & Fintech","And More"].map((e=>t.createElement("button",{key:e,className:"button button--secondary "+(a.includes(e)?"button--active":""),onClick:()=>(e=>{a.includes(e)?i(a.filter((a=>a!==e))):i([...new Set([...a,e])])})(e)},e)))))),t.createElement("div",{className:"container"},t.createElement("div",{className:"row"},r.map((e=>t.createElement(h,{key:e.name,company:e,isSelected:e.slug===window.location.hash.substring(1),ref:e.slug===window.location.hash.substring(1)?n:null}))))))}function f(){return t.createElement(r,null,(()=>t.createElement(v,null)))}},32169:e=>{e.exports=JSON.parse('{"companies":[{"name":"Netflix","slug":"netflix","imageUrl":"/img/logos/companies/netflix.png","imageSize":"large","link":"https://blog.datahubproject.io/how-netflix-is-collaborating-with-datahub-to-enhance-its-extensibility-a34d33f45947","linkType":"blog","tagline":"How Netflix is collaborating with DataHub to enhance its extensibility","category":"B2B & B2C","description":"<i>\\"DataHub gave us the extensibility features we needed to define new entity types easily and augment existing ones. DataHub performed exceptionally well in managing our traffic load and data volume. It offers <b>a great developer experience, a well-documented taxonomy, and \u2014 very importantly \u2014 solid community support.</b>\\"<br /><br /><div style=\'color: gray;\'>\u2014 Ajoy Majumdar, Software Architect at Netflix</div></i><br />"},{"name":"Visa","slug":"visa","imageUrl":"/img/logos/companies/visa.png","imageSize":"large","link":"https://blog.datahubproject.io/how-visa-uses-datahub-to-scale-data-governance-cace052d61c5","linkType":"blog","tagline":"How Visa uses DataHub to scale data governance","category":"Financial & Fintech","description":"<i>\\"We found DataHub to provide excellent coverage for our needs. What we appreciate most about DataHub is <b>its powerful API platform.</b>\\"<br /><br /><div style=\'color: gray;\'>\u2014 Jean-Pierre Dijcks, Sr. Dir. Product Management at VISA</div></i><br />"},{"name":"Optum","slug":"optum","imageUrl":"/img/logos/companies/optum.jpg","imageSize":"medium","link":"https://opensource.optum.com/blog/2022/03/23/data-mesh-via-datahub","linkType":"blog","tagline":"Data Mesh via DataHub","category":"And More","description":"<i>\u201cDataHub\u2019s event driven architecture provides us a mechanism to act on any metadata changes in real time. This allows us to perform various actions like provisioning access to a data product, notifying consumers on any schema changes that may affect their application or triggering data movement jobs to move data from source to sink platforms.\u201d</i>"},{"name":"Pinterest","slug":"pinterest","imageUrl":"/img/logos/companies/pinterest.png","imageSize":"small","link":"https://www.youtube.com/watch?v=YoxTg8tQSwg&feature=youtu.be","linkType":"blog","tagline":"DataHub Project at Pinterest","category":"B2B & B2C","description":"Pinterest adopted a DataHub project to enhance metadata management for its big data query platform, facilitating better data navigation and understanding."},{"name":"Airtel","slug":"airtel","imageUrl":"/img/logos/companies/airtel.png","imageSize":"large","link":"https://www.youtube.com/watch?v=yr24mM91BN4","linkType":"video","tagline":"A transformative journey to Airtel\'s data mesh architecture with DataHub","category":"B2B & B2C","description":"Airtel is a leading global telecommunication provider. DataHub is the bedrock of Data Mesh at Airtel by providing the requisite governance and metadata management functionality to <b>ensure their Data Products are discoverable, addressable, trustworthy, self-describing, and secure.</b><br /><br />Get a closer look at how the Airtel team has successfully integrated DataHub to take their data mesh implementation to the next level."},{"name":"Coursera","slug":"coursera","imageUrl":"/img/logos/companies/coursera.svg","imageSize":"small","link":"https://www.youtube.com/watch?v=bd5v4fn4d4s","linkType":"video","tagline":"Coursera\'s DataHub Journey","category":"B2B & B2C","description":"<i>\u201cDataHub aligns with our needs [for] data documentation, a unified search experience, lineage information, and additional metadata. We are also very impressed with the vibrant and supportive community.\u201d</i>"},{"name":"Zynga","slug":"zynga","imageUrl":"/img/logos/companies/zynga.png","imageSize":"default","link":"https://www.youtube.com/watch?v=VCU3-Hd_glI","linkType":"video","tagline":"Zynga\'s DataHub Implementation","category":"B2B & B2C","description":"<i>\u201cWe looked around for data catalog tool, and DataHub was a clear winner.\u201d</i> <br /> <br /> Zynga levels up data management using DataHub, highlighting its role in enhancing data management, tracing data lineage, and ensuring data quality."},{"name":"Chime","slug":"chime","imageUrl":"/img/logos/companies/chime.png","imageSize":"default","link":"https://www.youtube.com/watch?v=GktS-XJhK30","linkType":"video","tagline":"A Story of schema, contracts, and data discovery","category":"Financial & Fintech","description":"<i>\u201cAt Chime, DataHub serves as our guide for navigating the complexities of data cataloging and discovery.\u201d</i> <br /> <br /> Chime uses Datahub (DataHub Cloud) for ingesting metadata from diverse infrastructure components like Snowflake, Looker, Terraform, and so many others."},{"name":"Checkout.com","slug":"checkout-com","imageUrl":"/img/logos/companies/checkout-com.svg","imageSize":"small","link":"https://www.youtube.com/watch?v=emkpKO0bTkI","linkType":"video","tagline":"Self-Serve Data Governance with DataHub Action Framework","category":"Financial & Fintech","description":"Discover how Checkout leverage DataHub for advanced data management and compliance, especially in managing sensitive data types."},{"name":"MediaMarkt Saturn","slug":"mediamarkt-saturn","imageUrl":"/img/logos/companies/mediamarkt-saturn.png","imageSize":"large","link":"https://www.youtube.com/watch?v=wsCFnElN_Wo","linkType":"video","tagline":"DataHub + MediaMarktSaturn Access Management Journey","category":"B2B & B2C","description":"Europe\u2019s #1 consumer electronics retailer implemented DataHub for three reasons:<br /><br />1. DataHub provides an extremely <b>flexible and customizable metadata platform at scale</b>.<br />2. Open-source means lower cost to implement and removes the headache of license management.<br />3. Community-driven project which continually evolves with industry trends and best practices."},{"name":"Adevinta","slug":"adevinta","imageUrl":"/img/logos/companies/adevinta.png","imageSize":"medium","link":"https://medium.com/@adevinta/building-the-data-catalogue-the-beginning-of-a-journey-d64e828f955c","linkType":"blog","tagline":"Building the data catalogue","category":"E-Commerce","description":"<i>\u201cDataHub allows us to solve the data discovery problem, which was a big challenge in our organization, and now we are solving it.\u201d</i>"},{"name":"Wolt","slug":"wolt","imageUrl":"/img/logos/companies/wolt.png","imageSize":"default","link":"https://blog.datahubproject.io/humans-of-datahub-fredrik-sannholm-d673b1877f2b","linkType":"blog","tagline":"Wolt\'s DataHub Integration","category":"E-Commerce","description":"<i>\u201c[DataHub] has made our legal team very happy with being able to keep track of our sensitive data [to answer questions like] Where\u2019s it going? How\u2019s it being processed? Where\u2019s it ending up? Which third party tool or API\u2019s are we sending it to and why? Who is responsible for this integration?\u201d</i>"},{"name":"Geotab","slug":"geotab","imageUrl":"/img/logos/companies/geotab.jpg","imageSize":"small","link":"https://www.youtube.com/watch?v=boyjT2OrlU4","linkType":"video","tagline":"Geotab\'s Experience with DataHub","category":"B2B & B2C","description":"<i>\u201cThe key evaluation metric for selecting DataHub was the approachability and technical capabilities of its leading development team.\u201d<i><br /> <br /> Geotab\u2019s data adoption journey explores challenges in data management, governance, and the decision to utilize DataHub for improved productivity and collaboration."},{"name":"Hurb","slug":"hurb","imageUrl":"/img/logos/companies/hurb.png","imageSize":"medium","link":"https://blog.datahubproject.io/humans-of-datahub-patrick-franco-braz-b02b55a4c5384","linkType":"blog","tagline":"Hurb\'s DataHub Journey","category":"B2B & B2C","description":"<i>\u201cThe main points that drove our decision to implement DataHub were its user-friendly interface, active and receptive community, contribution opportunities, and built-in ingestion sources for our primary services.\u201d</i><br /><br /> Hurb implemented DataHub to enhance data governance, streamline data access, and improve decision-making through a structured integration process."},{"name":"Grofers","slug":"grofers","imageUrl":"/img/logos/companies/grofers.png","imageSize":"medium","link":"https://www.youtube.com/watch?v=m9kUYAuezFI","linkType":"video","tagline":"Grofers\' Success with DataHub","category":"E-Commerce","description":"Grofers provides a closer look into how their team has leveraged DataHub as the source of truth for data governance."},{"name":"Viasat","slug":"viasat","imageUrl":"/img/logos/companies/viasat.png","imageSize":"medium","link":"https://www.youtube.com/watch?v=2SrDAJnzkjE","linkType":"video","tagline":"Viasat\'s DataHub Implementation","category":"And More","description":"Viasat highlights why they chose DataHub over other open source and commercial technologies and their plans with it."},{"name":"LinkedIn","slug":"linkedin","imageUrl":"/img/logos/companies/linkedin.svg","imageSize":"medium","category":"B2B & B2C"},{"name":"Udemy","slug":"udemy","imageUrl":"/img/logos/companies/udemy.png","imageSize":"medium","category":"B2B & B2C"},{"name":"ThoughtWorks","slug":"thoughtworks","imageUrl":"/img/logos/companies/thoughtworks.png","imageSize":"medium","category":"B2B & B2C"},{"name":"Expedia Group","slug":"expedia-group","imageUrl":"/img/logos/companies/expedia.svg","imageSize":"medium","category":"B2B & B2C"},{"name":"Typeform","slug":"typeform","imageUrl":"/img/logos/companies/typeform.svg","imageSize":"medium","category":"B2B & B2C"},{"name":"Peloton","slug":"peloton","imageUrl":"/img/logos/companies/peloton.png","imageSize":"default","category":"B2B & B2C"},{"name":"Razer","slug":"razer","imageUrl":"/img/logos/companies/razer.jpeg","imageSize":"large","category":"B2B & B2C"},{"name":"ClassDojo","slug":"classdojo","imageUrl":"/img/logos/companies/classdojo.png","imageSize":"medium","category":"B2B & B2C"},{"name":"Klarna","slug":"klarna","imageUrl":"/img/logos/companies/klarna.svg","imageSize":"medium","category":"Financial & Fintech"},{"name":"N26","slug":"n26","imageUrl":"/img/logos/companies/n26.svg","imageSize":"medium","category":"Financial & Fintech"},{"name":"BankSalad","slug":"banksalad","imageUrl":"/img/logos/companies/banksalad.png","imageSize":"default","category":"Financial & Fintech"},{"name":"Uphold","slug":"uphold","imageUrl":"/img/logos/companies/uphold.png","imageSize":"default","category":"Financial & Fintech"},{"name":"Stash","slug":"stash","imageUrl":"/img/logos/companies/stash.svg","imageSize":"medium","category":"Financial & Fintech"},{"name":"SumUp","slug":"sumup","imageUrl":"/img/logos/companies/sumup.png","imageSize":"medium","category":"Financial & Fintech"},{"name":"VanMoof","slug":"vanmoof","imageUrl":"/img/logos/companies/vanmoof.png","imageSize":"small","category":"E-Commerce"},{"name":"SpotHero","slug":"spothero","imageUrl":"/img/logos/companies/spothero.png","imageSize":"default","category":"E-Commerce"},{"name":"hipages","slug":"hipages","imageUrl":"/img/logos/companies/hipages.png","imageSize":"medium","category":"E-Commerce"},{"name":"Showroomprive.com","slug":"showroomprive-com","imageUrl":"/img/logos/companies/showroomprive.png","imageSize":"small","category":"E-Commerce"},{"name":"Wikimedia Foundation","slug":"wikimedia-foundation","imageUrl":"/img/logos/companies/wikimedia-foundation.png","imageSize":"medium","category":"And More"},{"name":"Cabify","slug":"cabify","imageUrl":"/img/logos/companies/cabify.png","imageSize":"medium","category":"And More"},{"name":"Digital Turbine","slug":"digital-turbine","imageUrl":"/img/logos/companies/digitalturbine.svg","imageSize":"medium","category":"And More"},{"name":"DFDS","slug":"dfds","imageUrl":"/img/logos/companies/dfds.png","imageSize":"medium","category":"And More"},{"name":"Moloco","slug":"moloco","imageUrl":"/img/logos/companies/moloco.png","imageSize":"medium","category":"And More"}]}')}}]);