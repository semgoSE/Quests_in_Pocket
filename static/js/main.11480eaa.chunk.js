(window.webpackJsonpQuestsinPocket=window.webpackJsonpQuestsinPocket||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/one_1.230919a1.jpg"},103:function(e,t,a){e.exports=a.p+"static/media/one_colum.5e049246.jpg"},104:function(e,t,a){e.exports=a.p+"static/media/map.e0ba97a3.png"},155:function(e,t,a){e.exports=a(253)},237:function(e,t,a){e.exports=a.p+"static/media/Design-story.2ea10a94.png"},250:function(e,t,a){e.exports=a.p+"static/media/forest.cc873e2d.png"},253:function(e,t,a){"use strict";a.r(t);a(156),a(182),a(184),a(185),a(187),a(188),a(189),a(190),a(191),a(192),a(193),a(194),a(196),a(197),a(198),a(199),a(200),a(201),a(202),a(203),a(204),a(205),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224);var n=a(0),l=a.n(n),s=a(23),o=a.n(s),r=a(44),c=a.n(r),i=a(17),u=a(18),d=a(20),p=a(19),m=a(43),h=a(21),f=a(28),b=a.n(f),g=a(3),E=(a(38),a(99)),v=a.n(E),k=function(e){function t(e){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(g.d,{before:l.a.createElement("div",{style:{"margin-left":"1px"}},l.a.createElement(g.b,{src:v.a,size:100})),indicator:this.props.lvlNum+" lvl"},l.a.createElement(g.h,null,this.props.title))}}]),t}(l.a.Component),y={fontSize:"150%",fontWeight:"bold"},j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={fetchedUser:a.props.fetchedUser},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(g.e,{id:"profile-container",align:"center"},l.a.createElement(g.e,{id:"avatar-container"},l.a.createElement(g.b,{src:this.state.fetchedUser.photo_200,style:{border:"solid 3px #BF24FE"},size:150})),l.a.createElement(g.e,{id:"name-container"},l.a.createElement(g.d,{id:"name"},l.a.createElement("p",{style:y},this.state.fetchedUser.first_name+" "+this.state.fetchedUser.last_name))),l.a.createElement(g.g,{title:"\u0412\u0430\u0448\u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f",id:"achievements-container"},l.a.createElement(k,{lvlNum:"1",title:"\u041f\u0435\u0440\u0432\u043e\u043f\u0440\u043e\u0445\u043e\u0434\u0435\u0446"})))}}]),t}(l.a.Component),w=a(55),S=a(100);w.a.init(S.a);var O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).ReturnMap=function(){n.props.theStory()},n.GenerateStory=function(){w.a.generateStoryFromTemplate(a(237),[{font:"45px Arial",align:"center",color:"#FFFFFF",value:"\u042f \u0431\u044b\u043b: "+n.props.selectedPlace.name,x:540,y:1133}]).then((function(e){w.a.shareStory(7150376,e,{add_to_news:!0}),n.ReturnMap()}))},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(g.e,{align:"center"},l.a.createElement(g.b,{src:this.props.fetchedUser.photo_200,size:150}),l.a.createElement(g.d,{id:"name"},this.props.fetchedUser.first_name+" "+this.props.fetchedUser.last_name),l.a.createElement(g.e,{style:{display:"flex"}},l.a.createElement(g.c,{level:"commerce",onClick:this.GenerateStory},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"),l.a.createElement(g.c,{level:"destructive",onClick:this.ReturnMap},"\u041e\u0442\u043c\u0435\u043d\u0430")))}}]),t}(l.a.Component),C=a(39),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).infoWindowRef=l.a.createRef(),a.contentElement=document.createElement("div"),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&(o.a.render(l.a.Children.only(this.props.children),this.contentElement),this.infoWindowRef.current.infowindow.setContent(this.contentElement))}},{key:"render",value:function(){return l.a.createElement(C.InfoWindow,Object.assign({ref:this.infoWindowRef},this.props))}}]),t}(l.a.Component),_=(a(250),a(101)),A=a.n(_),W=a(102),q=a.n(W),x=a(103),G=a.n(x),I=a(54),M=a.n(I),U=a(104),F=a.n(U),K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onMarkerClick=function(e,t,n){switch(t.id_marker){case"one_2":case"one_3":case"I":case"one_1":a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0});break;default:console.log("\u043e\u0448\u0438\u0431\u043e\u0447\u043a\u0430")}},a.submit=function(e){console.log(a.state.selectedPlace),a.props.checkGeo(a.state.selectedPlace)},a.onMapClicked=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.state={nameButton:"\u042f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435",showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(C.Map,{google:this.props.google,style:{width:"100%",height:"100%",marginLeft:"auto",marginRight:"auto"},zoom:16,initialCenter:{lat:this.props.geo.lat,lng:this.props.geo.long},gestureHandling:"greedy",streetViewControl:!1,mapTypeControl:!1,zoomControl:!1,onClick:this.onMapClicked},l.a.createElement("div",null,l.a.createElement(g.c,{size:"x1",level:"commerce"},l.a.createElement(q.a,null))),l.a.createElement(C.Marker,{onClick:this.onMarkerClick,position:{lat:59.934777,lng:30.302896},name:"\u041a\u043e\u043b\u043e\u043d\u043d\u044b \u0441\u043b\u0430\u0432\u044b",img:A.a,img_1:G.a,pretitle:"\u041a\u043e\u043b\u043e\u043d\u043d\u044b \u0441\u043e \u0441\u0442\u0430\u0442\u0443\u044f\u043c\u0438 \u0421\u043b\u0430\u0432\u044b \u0432 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435. \u041f\u0430\u043c\u044f\u0442\u043d\u0438\u043a \u0432 \u0447\u0435\u0441\u0442\u044c \u043f\u043e\u0431\u0435\u0434 \u041b\u0435\u0439\u0431-\u0433\u0432\u0430\u0440\u0434\u0438\u0438 \u041a\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u043a\u0430 \u0432 \u041e\u0442\u0435\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0432\u043e\u0439\u043d\u0435 1812 \u0433\u043e\u0434\u0430 \u0431\u044b\u043b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043d\u0430 \u041a\u043e\u043d\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u043e\u043c \u0431\u0443\u043b\u044c\u0432\u0430\u0440\u0435 \u0432 1845-1846 \u0433\u043e\u0434\u0430\u0445. \u0410\u0432\u0442\u043e\u0440 \u0441\u0442\u0430\u0442\u0443\u0439 \u2014 \u0425. \u0414. \u0420\u0430\u0443\u0445, \u0430\u0432\u0442\u043e\u0440 \u043a\u043e\u043b\u043e\u043d\u043d \u2014 \u041a. \u0418. \u0420\u043e\u0441\u0441\u0438.",id_marker:"one_1",text:l.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},l.a.createElement("p",{align:"center"},"\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435\u0441\u044c, \u0441\u0435\u0439\u0447\u0430\u0441 \u0432\u044b \u0443\u0437\u043d\u0430\u0442\u0435 3 \u0441\u0430\u043c\u044b\u0445 \u0432\u0430\u0436\u043d\u044b\u0445 \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0445 \u0444\u0430\u043a\u0442\u043e\u0432 \u043e\u0431 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u0442\u0435. \u0418 \u043c\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u043c!:))"),l.a.createElement("p",null,"\u041a\u043e\u043b\u043e\u043d\u043d\u044b \u0421\u043b\u0430\u0432\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0432 \u0438\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u043e\u0440\u0434\u0435\u0440\u0435 \u0438\u0437 \u0441\u0435\u0440\u043e\u0433\u043e \u0441\u0435\u0440\u0434\u043e\u0431\u043e\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0433\u0440\u0430\u043d\u0438\u0442\u0430.",l.a.createElement("br",null),"\u041b\u0435\u0442\u044f\u0449\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0438 \u0431\u043e\u0433\u0438\u043d\u0438 \u041d\u0438\u043a\u0438 \u0441 \u043b\u0430\u0432\u0440\u043e\u0432\u044b\u043c\u0438 \u0432\u0435\u043d\u043a\u0430\u043c\u0438 \u0432 \u0440\u0443\u043a\u0430\u0445,\u043d\u0430\u0432\u0435\u0440\u0445\u0443, \u0431\u044b\u043b\u0438 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u044b \u0432 \u0411\u0435\u0440\u043b\u0438\u043d\u0435 \u043f\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443 \u0441\u043a\u0443\u043b\u044c\u043f\u0442\u043e\u0440\u0430 \u0425. \u0414. \u0420\u0430\u0443\u0445\u0430 \u0438 \u043f\u043e\u0434\u0430\u0440\u0435\u043d\u044b \u0438\u043c\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0443 \u041d\u0438\u043a\u043e\u043b\u0430\u044e I \u043a\u043e\u0440\u043e\u043b\u0435\u043c \u0424\u0440\u0438\u0434\u0440\u0438\u0445\u043e\u043c \u0412\u0438\u043b\u044c\u0433\u0435\u043b\u044c\u043c\u043e\u043c IV \u0432 1845 \u0433\u043e\u0434\u0443 \u0432 \u0437\u043d\u0430\u043a \u043e\u0442\u0432\u0435\u0442\u043d\u043e\u0439 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430 \u043a\u043e\u043f\u0438\u0438 \u0441\u043a\u0443\u043b\u044c\u043f\u0442\u0443\u0440\u043d\u044b\u0445 \u0433\u0440\u0443\u043f\u043f \xab\u0423\u043a\u0440\u043e\u0449\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u044f\xbb \u041f. \u041a. \u041a\u043b\u043e\u0434\u0442\u0430 (\u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0410\u043d\u0438\u0447\u043a\u043e\u0432\u043e\u043c \u043c\u043e\u0441\u0442\u0443).")," "),end:l.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},l.a.createElement("p",null,"\u0422\u0440\u0435\u0442\u0438\u0439 \u0444\u0430\u043a\u0442: \u0412\u044b\u0441\u043e\u0442\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u043e\u043b\u043e\u043d\u043d\u044b \u2014 12 \u043c\u0435\u0442\u0440\u043e\u0432, \u0432\u044b\u0441\u043e\u0442\u0430 \u0441\u0442\u0430\u0442\u0443\u0438 \u2014 2,5 \u043c\u0435\u0442\u0440\u0430.")),pollQuestions:"\u041a\u0430\u043a \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u043a\u0430\u043a\u043e\u0439 \u0432\u044b\u0441\u043e\u0442\u044b \u044d\u0442\u0438 \u043a\u043e\u043b\u043e\u043d\u043d\u044b?",answer_1:"12 \u043c\u0435\u0442\u0440\u043e\u0432",answer_2:"13 \u043c\u0435\u0442\u0440\u043e\u0432",answer_3:"15 \u043c\u0435\u0442\u0440\u043e\u0432",but:l.a.createElement(g.c,{level:"commerce",onClick:this.submit},this.state.nameButton)}),l.a.createElement(C.Marker,{onClick:this.onMarkerClick,pretitle:"\u0417\u0434\u0430\u043d\u0438\u0435 \u041a\u043e\u043d\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u043e\u0433\u043e \u043c\u0430\u043d\u0435\u0436\u0430 \u0432 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435. \u0418\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0434\u0430\u043d\u0438\u0435 \u0432 \u0441\u0442\u0438\u043b\u0435 \u043a\u043b\u0430\u0441\u0441\u0438\u0446\u0438\u0437\u043c\u0430, \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0435 \u0432 1804-1807 \u0433\u043e\u0434\u0430\u0445 \u043f\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443 \u0414\u0436\u0430\u043a\u043e\u043c\u043e \u041a\u0432\u0430\u0440\u0435\u043d\u0433\u0438 \u0434\u043b\u044f \u0432\u044b\u0443\u0447\u043a\u0438 \u0438 \u043f\u0430\u0440\u0430\u0434\u043d\u044b\u0445 \u0432\u044b\u0435\u0437\u0434\u043e\u0432 \u041b\u0435\u0439\u0431-\u0433\u0432\u0430\u0440\u0434\u0438\u0438 \u041a\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u043a\u0430. \u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0437\u0434\u0435\u0441\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0441\u0442\u0430\u0432\u043e\u0447\u043d\u044b\u0439 \u0437\u0430\u043b \xab\u041c\u0430\u043d\u0435\u0436\xbb.",img:M.a,img_1:M.a,name:"\u041a\u043e\u043d\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u0438\u0439 \u043c\u0430\u043d\u0435\u0436",end:l.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},l.a.createElement("p",null,"\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0414\u0438\u043e\u0441\u043a\u0443\u0440\u044b \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442 \u043e\u0431\u043d\u0430\u0436\u0435\u043d\u043d\u044b\u0445 \u044f\u0437\u044b\u0447\u0435\u0441\u043a\u0438\u0445 \u0431\u043e\u0433\u043e\u0432 \u2014 \u0434\u0435\u0442\u0435\u0439 \u0417\u0435\u0432\u0441\u0430, \u043f\u043e\u0441\u043b\u0435 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0418\u0441\u0430\u0430\u043a\u0438\u0435\u0432\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0431\u043e\u0440\u0430 \u043f\u043e \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044e \u043f\u0440\u0430\u0432\u043e\u0441\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u0434\u0443\u0445\u043e\u0432\u0435\u043d\u0441\u0442\u0432\u0430 \u0438\u0445 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u043b\u0438 \u043d\u0430 \u0437\u0430\u0434\u043d\u0438\u0439 \u0444\u0430\u0441\u0430\u0434 \u041a\u043e\u043d\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u043e\u0433\u043e \u043c\u0430\u043d\u0435\u0436\u0430, \u0438 \u0442\u0430\u043c \u043e\u043d\u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u044f\u043b\u0438 \u0432\u043f\u043b\u043e\u0442\u044c \u0434\u043e 1954 \u0433\u043e\u0434\u0430.")),text:l.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},l.a.createElement("p",{align:"center"},"\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435\u0441\u044c, \u0441\u0435\u0439\u0447\u0430\u0441 \u0432\u044b \u0443\u0437\u043d\u0430\u0442\u0435 3 \u0441\u0430\u043c\u044b\u0445 \u0432\u0430\u0436\u043d\u044b\u0445 \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0445 \u0444\u0430\u043a\u0442\u043e\u0432 \u043e\u0431 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u0442\u0435. \u0418 \u043c\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u043c!:))"),l.a.createElement("p",null,"\u041a\u0430\u0437\u0430\u0440\u043c\u044b \u041b\u0435\u0439\u0431-\u0433\u0432\u0430\u0440\u0434\u0438\u0438 \u041a\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u043a\u0430, \u043e\u0441\u043e\u0431\u043e \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0435\u043d\u043d\u043e\u0433\u043e \u043a \u0438\u043c\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0441\u043a\u043e\u043c\u0443 \u0434\u0432\u043e\u0440\u0443 \u0432\u043e\u0439\u0441\u043a\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f, \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u043b\u0438\u0441\u044c \u043d\u0430 \u0431\u0435\u0440\u0435\u0433\u0443 \u043a\u0430\u043d\u0430\u043b\u0430, \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0432\u0448\u0435\u0433\u043e \u0410\u0434\u043c\u0438\u0440\u0430\u043b\u0442\u0435\u0439\u0441\u0442\u0432\u043e \u0441 \u041d\u043e\u0432\u043e\u0439 \u0413\u043e\u043b\u043b\u0430\u043d\u0434\u0438\u0435\u0439, \u043d\u043e \u043f\u043e\u0437\u0436\u0435 \u0437\u0430\u0441\u044b\u043f\u0430\u043d\u043d\u043e\u0433\u043e. \u0418\u043c\u0435\u043d\u043d\u043e \u043d\u0430 \u043c\u0435\u0441\u0442\u0435 \u0431\u044b\u0432\u0448\u0435\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0430 \u0438 \u0431\u044b\u043b \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d \u043c\u0430\u043d\u0435\u0436 \u0434\u043b\u044f \u0437\u0438\u043c\u043d\u0435\u0439 \u0438 \u043b\u0435\u0442\u043d\u0435\u0439 \u0432\u044b\u0443\u0447\u043a\u0438, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0430\u0440\u0430\u0434\u043d\u044b\u0445 \u043a\u043e\u043d\u043d\u044b\u0445 \u0432\u044b\u0435\u0437\u0434\u043e\u043a \u044d\u0442\u043e\u0433\u043e \u043f\u043e\u043b\u043a\u0430. \u041e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u043b \u0441\u0442\u0430\u0442\u044c \u0443\u043a\u0440\u0430\u0448\u0435\u043d\u0438\u0435\u043c \u0418\u0441\u0430\u0430\u043a\u0438\u0435\u0432\u0441\u043a\u043e\u0439 \u043f\u043b\u043e\u0449\u0430\u0434\u0438, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0443 \u0438 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044e \u043c\u0430\u043d\u0435\u0436\u0430 \u043f\u043e\u0434\u043e\u0448\u043b\u0438 \u0441\u043e \u0432\u0441\u0435\u0439 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0439 \u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e\u0441\u0442\u044c\u044e \u0438 \u043c\u043e\u043d\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e.",l.a.createElement("br",null),"\u0414\u043e\u043b\u0433\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0430 \u043b\u0435\u0433\u0435\u043d\u0434\u0430, \u0447\u0442\u043e \u043c\u0435\u0436\u0434\u0443 \u0417\u0438\u043c\u043d\u0438\u043c \u0434\u0432\u043e\u0440\u0446\u043e\u043c \u0438 \u041a\u043e\u043d\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u0438\u043c \u043c\u0430\u043d\u0435\u0436\u0435\u043c \u0431\u044b\u043b \u043f\u0440\u043e\u0440\u044b\u0442 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u0442\u0443\u043d\u043d\u0435\u043b\u044c, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043f\u0440\u043e\u0435\u0445\u0430\u0442\u044c \u0432\u0435\u0440\u0445\u043e\u043c \u043d\u0430 \u043b\u043e\u0448\u0430\u0434\u0438..")," "),pollQuestions:"\u041a\u0430\u043a \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u043a\u0442\u043e \u0442\u0430\u043a\u0438\u0435 \u0434\u0438\u043e\u0441\u043a\u0443\u0440\u044b?",answer_1:"\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u0443\u043a\u0440\u0430\u0448\u0435\u043d\u0438\u044f \u0444\u0430\u0441\u0430\u0434\u0430 \u0437\u0434\u0430\u043d\u0438\u044f",answer_2:"\u0411\u0440\u0430\u0442\u044c\u044f \u0431\u043b\u0438\u0437\u043d\u0435\u0446\u044b \u0432 \u0434\u0440\u0435\u0432\u043d\u0435\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u043e\u0439 \u043c\u0438\u0444\u043e\u043b\u043e\u0433\u0438\u0438, \u0434\u0435\u0442\u0438 \u0417\u0435\u0432\u0441\u0430",answer_3:"\u0412 \u0434\u0440\u0435\u0432\u043d\u0435\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u043e\u0439 \u043c\u0438\u0444\u043e\u043b\u043e\u0433\u0438\u0438 \u0437\u043b\u044b\u0435 \u0444\u0443\u0440\u0438\u0438",id_marker:"one_3",but:l.a.createElement(g.c,{level:"commerce",onClick:this.submit},this.state.nameButton),position:{lat:59.934304,lng:30.303386}}),l.a.createElement(C.Marker,{onClick:this.onMarkerClick,position:{lat:this.props.geo.lat,lng:this.props.geo.long},id_marker:"I",icon:{url:F.a,anchor:new this.props.google.maps.Point(32,32),scaledSize:new this.props.google.maps.Size(32,51)},name:"\u042d\u0442\u043e \u0432\u044b"}),l.a.createElement(P,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow},l.a.createElement(g.e,{align:"center"},l.a.createElement("img",{src:this.state.selectedPlace.img,style:{width:"90%",height:"90%"}}),l.a.createElement("h1",null,this.state.selectedPlace.name),l.a.createElement("p",null,this.state.selectedPlace.pretitle),this.props.errorGeo,this.state.selectedPlace.but)))}}]),t}(l.a.Component),V=Object(C.GoogleApiWrapper)({apiKey:"AIzaSyCL0U2diIKJtBb5gmgyUsRvpSIIKIfKCv0"})(K),z=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(g.e,{align:"center"},this.props.selectedPlace.end,l.a.createElement(g.c,{size:"xl",level:"commerce",onClick:this.props.theEnd},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"))}}]),t}(l.a.Component),T=(a(251),function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(g.e,null,l.a.createElement(g.d,null,l.a.createElement("h1",null,this.props.selectedPlace.pollQuestions)),l.a.createElement("div",{onClick:this.props.getAns,style:{backround:"#BF24FE",width:"100%","border-radius":"20px",height:"20%"}},this.props.selectedPlace.answer_1),l.a.createElement("div",{onClick:this.props.getAns,style:{backround:"#BF24FE",width:"100%","border-radius":"20px",height:"20%"}},this.props.selectedPlace.answer_2),l.a.createElement("div",{onClick:this.props.getAns,style:{backround:"#BF24FE",width:"100%","border-radius":"20px",height:"20%"}},this.props.selectedPlace.answer_3))}}]),t}(l.a.Component)),D=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(g.e,{align:"center"},l.a.createElement(g.b,{src:this.props.selectedPlace.img_1,size:200}),this.props.selectedPlace.text)}}]),t}(l.a.Component),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={activeTab:"pr"},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(g.e,null,l.a.createElement(g.p,{theme:"light"},l.a.createElement(g.q,{onClick:function(){return e.setState({activeTab4:"pr"})},selected:"pr"===this.state.activeTab},"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"),l.a.createElement(g.q,{onClick:function(){return e.setState({activeTab:"di"})},selected:"di"===this.state.activeTab4},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433")),l.a.createElement(g.e,null,l.a.createElement(g.i,null,"object Object"===this.props.quests[0].toString()?this.props.quests.map((function(t,a){return l.a.createElement(g.d,{before:l.a.createElement(g.b,{src:e.props.quests[a].value.img}),key:a,style:{background:"linear-gradient(to right, #8B04A8, #E9003A)"}},l.a.createElement(g.h,{title:e.props.quests[a].value.name}," ",l.a.createElement(g.l,{value:e.props.quests[a].value.num,style:{color:"green"}})))})):this.props.quests.map((function(t,a){return l.a.createElement(g.d,{before:l.a.createElement(g.b,{src:JSON.parse(e.props.quests[a].value).img}),key:a,style:{background:"linear-gradient(to right, #8B04A8, #E9003A)"}},l.a.createElement(g.h,{title:JSON.parse(e.props.quests[a].value).name}," ",l.a.createElement(g.l,{value:JSON.parse(e.props.quests[a].value).num,style:{color:"green"}})))})))))}}]),t}(l.a.Component),B=a(105),Q=a.n(B),J=a(106),N=a.n(J),L=a(107),H=a.n(L),X=(a(252),a(53),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onClick=function(e){b.a.send("VKWebAppGetGeodata",{}),a.setState({popout:l.a.createElement(g.m,null)}),setTimeout((function(){a.setState({popout:null})}),2e3),setTimeout((function(){a.setState({activeStory:"map"})}),1500)},a.theStory=function(e){a.setState({activePanel:"map"})},a.theEnd=function(e){var t={name:a.state.selectedPlace.name,img:a.state.selectedPlace.img,num:100};console.log(t),b.a.send("VKWebAppCallAPIMethod",{method:"storage.set",request_id:"theEnd",params:{key:a.state.selectedPlace.id_marker,value:t,user_id:a.state.fetchedUser.id,v:"5.101",access_token:"1391f8d11391f8d11391f8d11e13fce3f9113911391f8d14e1ecdb0e32793de2eeffe66"}}),a.setState({activePanel:"modal"})},a.getAns=function(e){console.log("qwwwwwwwwwwwwwwwwwww"),a.setState({showEnd:!0})},a.GetVar=function(e){a.setState({popout:l.a.createElement(g.m,null)}),b.a.send("VKWebAppCallAPIMethod",{method:"storage.getKeys",request_id:"getAllQuests",params:{user_id:a.state.fetchedUser.id,v:"5.101",access_token:"1391f8d11391f8d11391f8d11e13fce3f9113911391f8d14e1ecdb0e32793de2eeffe66"}})},a.checkGeo=function(e,t){if(console.log("lf"),a.setState({popout:l.a.createElement(g.m,null)}),b.a.send("VKWebAppGetGeodata",{}),a.state.geoData.lat.toFixed(a.num)===e.position.lat.toFixed(a.num)&&a.state.geoData.long.toFixed(a.num)===e.position.lng.toFixed(a.num)){a.setState({errorGeo:null});var n={name:e.name,img:e.img,num:50};b.a.send("VKWebAppCallAPIMethod",{method:"storage.set",request_id:"setQuests",params:{key:e.id_marker,value:n,user_id:a.state.fetchedUser.id,v:"5.101",access_token:"1391f8d11391f8d11391f8d11e13fce3f9113911391f8d14e1ecdb0e32793de2eeffe66"}}),a.setState({activePanel:"questions",popout:null}),a.setState({selectedPlace:e})}else a.setState({errorGeo:a.so,popout:null})},a.onToChange=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.render=function(){return l.a.createElement(g.f,{activeStory:a.state.activeStory,tabbar:l.a.createElement(g.n,null,l.a.createElement(g.o,{onClick:a.onStoryChange,selected:"profile"===a.state.activeStory,"data-story":"profile"},l.a.createElement(g.r,{text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},l.a.createElement(H.a,null))),l.a.createElement(g.o,{onClick:a.onClick,selected:"map"===a.state.activeStory,"data-story":"map"},l.a.createElement(g.r,{text:"\u041a\u0430\u0440\u0442\u0430 \u0441 \u043f\u043e\u0438\u043d\u0442\u0430\u043c\u0438(\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u043c\u0438 \u043c\u0435\u0441\u0442\u0430\u043c\u0438)"},l.a.createElement(N.a,null))),l.a.createElement(g.o,{onClick:a.GetVar,selected:"questions"===a.state.activeStory,"data-story":"questions"},l.a.createElement(Q.a,null)))},l.a.createElement(g.s,{id:"profile",popout:a.state.popout,activePanel:"profile"},l.a.createElement(g.j,{id:"profile"},l.a.createElement(g.k,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),l.a.createElement(j,{fetchedUser:a.state.fetchedUser}))),l.a.createElement(g.s,{id:"map",popout:a.state.popout,header:!1,activePanel:a.state.activePanel},l.a.createElement(g.j,{id:"map"},null===a.state.geoData?l.a.createElement("p",null,"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e \u0438 \u043f\u0435\u0437\u0435\u0437\u0430\u0439\u0442\u0438."):l.a.createElement(V,{geo:a.state.geoData,checkGeo:a.checkGeo,errorGeo:a.state.errorGeo})),l.a.createElement(g.j,{id:"questions"},l.a.createElement(D,{selectedPlace:a.state.selectedPlace}),l.a.createElement(T,{selectedPlace:a.state.selectedPlace,getAns:a.getAns}),l.a.createElement(g.e,null,a.state.showEnd&&l.a.createElement(z,{theEnd:a.theEnd,selectedPlace:a.state.selectedPlace}))),l.a.createElement(g.j,{id:"modal"},l.a.createElement(O,{selectedPlace:a.state.selectedPlace,fetchedUser:a.state.fetchedUser,theStory:a.theStory}))),l.a.createElement(g.s,{id:"questions",popout:a.state.popout,activePanel:"quest"},l.a.createElement(g.j,{id:"quest"},l.a.createElement(g.k,null,"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"),l.a.createElement(R,{quests:a.state.quests}))))},a.so=l.a.createElement("p",{style:{color:"red"}},"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"),a.num=2,a.state={activeStory:null,activePanel:"map",quests:null,header:!0,snackbar:null,popout:null,selectedPlace:null,fetchedUser:null,access_token:null,geoData:null,errorGeo:null,Poll:null,showEnd:!1},a.onStoryChange=a.onStoryChange.bind(Object(m.a)(a)),a.onToChange=a.onToChange.bind(Object(m.a)(a)),a.openDefault=a.openDefault.bind(Object(m.a)(a)),a.closePopout=a.closePopout.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),e.setState({activeStory:"profile"}),console.log(t.detail.data.id);break;case"VKWebAppGeodataResult":console.log(t.detail.data.available),!0===t.detail.data.available?e.setState({geoData:t.detail.data}):e.setState({geoData:null});break;case"VKWebAppGeodataFailed":e.openDefault();break;case"VKWebAppAccessTokenReceived":e.setState({access_token:t.detail.data.access_token});break;case"client_error":break;case"VKWebAppCallAPIMethodResult":switch(t.detail.data.request_id){case"getAll":console.log(t.detail.data.response[0].value.toString()),e.setState({quests:t.detail.data.response}),e.setState({activeStory:"questions",popout:null});break;case"getAllQuests":b.a.send("VKWebAppCallAPIMethod",{method:"storage.get",request_id:"getAll",params:{keys:t.detail.data.response.join(","),user_id:e.state.fetchedUser.id,v:"5.101",access_token:"1391f8d11391f8d11391f8d11e13fce3f9113911391f8d14e1ecdb0e32793de2eeffe66"}}),console.log(t.detail.data.response);break;case"g":console.log(t.detail.data)}break;default:e.openDefault(),console.log(t.detail)}})),b.a.send("VKWebAppGetUserInfo",{}),b.a.send("VKWebAppGetAuthToken",{app_id:7150376,scope:"friends"}),b.a.send("VKWebAppGetGeodata",{})}},{key:"openDefault",value:function(){this.setState({popout:l.a.createElement(g.a,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,style:"cancel"},{title:"\u041e\u043a",autoclose:!0}],onClose:this.closePopout},l.a.createElement("p",null,"\u0414\u043b\u044f \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e"))})}},{key:"closePopout",value:function(){this.setState({popout:null,activeStory:"profile"})}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}}]),t}(l.a.Component));c.a.send("VKWebAppInit"),o.a.render(l.a.createElement(X,null),document.getElementById("root"))},54:function(e,t,a){e.exports=a.p+"static/media/man.f3b16325.jpg"},99:function(e,t,a){e.exports=a.p+"static/media/achiev-1.05917b64.png"}},[[155,1,2]]]);
//# sourceMappingURL=main.11480eaa.chunk.js.map