(window.webpackJsonpQuestsinPocket=window.webpackJsonpQuestsinPocket||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/one_colum.5e049246.jpg"},101:function(e,t,a){e.exports=a.p+"static/media/map.e0ba97a3.png"},158:function(e,t,a){e.exports=a(253)},240:function(e,t,a){},253:function(e,t,a){"use strict";a.r(t);a(159),a(185),a(187),a(188),a(190),a(191),a(192),a(193),a(194),a(195),a(196),a(197),a(199),a(200),a(201),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227);var n=a(0),l=a.n(n),s=a(29),o=a.n(s),c=a(44),r=a.n(c),i=a(17),d=a(18),p=a(21),u=a(19),m=a(48),h=a(20),f=a(22),b=a.n(f),g=a(4),E=(a(43),a(240),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={fetchedUser:a.props.fetchedUser},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(g.d,{id:"profile-container",align:"center"},l.a.createElement(g.d,{id:"avatar-container"},l.a.createElement(g.a,{src:this.state.fetchedUser.photo_200,size:200})),l.a.createElement(g.d,{id:"name-container"},l.a.createElement(g.c,{id:"name"},this.state.fetchedUser.first_name+" "+this.state.fetchedUser.last_name)),l.a.createElement(g.d,{id:"score"},l.a.createElement(g.c,{id:"score-text"},l.a.createElement(g.h,null,"\u041e\u0447\u043a\u0438: 0"))),l.a.createElement(g.f,{title:"\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f",id:"achievements-container"},l.a.createElement(g.c,{indicator:"1 lvl"},l.a.createElement(g.h,null,"\u041f\u0435\u0440\u0432\u043e\u043f\u0440\u043e\u0445\u043e\u0434\u0435\u0446")),l.a.createElement(g.l,{style:{margin:"12px 0"}}),l.a.createElement(g.c,{indicator:"1 lvl"},l.a.createElement(g.h,null,"\u041c\u0430\u0441\u0442\u0435\u0440 \u043a\u0432\u0435\u0441\u0442\u043e\u0432"))))}}]),t}(l.a.Component)),k=a(39),v=a(38),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).infoWindowRef=l.a.createRef(),a.contentElement=document.createElement("div"),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&(o.a.render(l.a.Children.only(this.props.children),this.contentElement),this.infoWindowRef.current.infowindow.setContent(this.contentElement))}},{key:"render",value:function(){return l.a.createElement(v.InfoWindow,Object.assign({ref:this.infoWindowRef},this.props))}}]),t}(l.a.Component),j=a(98),y=a.n(j),O=a(99),C=a.n(O),_=a(100),w=a.n(_),S=a(101),A=a.n(S),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).onMarkerClick=function(e,t,n){switch(t.id_marker){case"one_2":case"I":case"one_1":a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0});break;default:console.log("\u043e\u0448\u0438\u0431\u043e\u0447\u043a\u0430")}},a.submit=function(e){console.log(a.state.selectedPlace),a.props.checkGeo(a.state.selectedPlace)},a.onMapClicked=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.state={nameButton:"\u042f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435",showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e;return l.a.createElement(v.Map,{google:this.props.google,style:{width:"100%",height:"100%",marginLeft:"auto",marginRight:"auto"},zoom:16,initialCenter:{lat:this.props.geo.lat,lng:this.props.geo.long},gestureHandling:"greedy",streetViewControl:!1,mapTypeControl:!1,zoomControl:!1,onClick:this.onMapClicked},l.a.createElement("div",{align:"center",style:{marginTop:"100%"}}),l.a.createElement(v.Marker,{onClick:this.onMarkerClick,position:{lat:59.934777,lng:30.302896},name:"\u041a\u043e\u043b\u043e\u043d\u043d\u044b \u0441\u043b\u0430\u0432\u044b",img:C.a,img_1:w.a,pretitle:"\u041a\u043e\u043b\u043e\u043d\u043d\u044b \u0441\u043e \u0441\u0442\u0430\u0442\u0443\u044f\u043c\u0438 \u0421\u043b\u0430\u0432\u044b \u0432 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435. \u041f\u0430\u043c\u044f\u0442\u043d\u0438\u043a \u0432 \u0447\u0435\u0441\u0442\u044c \u043f\u043e\u0431\u0435\u0434 \u041b\u0435\u0439\u0431-\u0433\u0432\u0430\u0440\u0434\u0438\u0438 \u041a\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u043a\u0430 \u0432 \u041e\u0442\u0435\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0432\u043e\u0439\u043d\u0435 1812 \u0433\u043e\u0434\u0430 \u0431\u044b\u043b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043d\u0430 \u041a\u043e\u043d\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u043e\u043c \u0431\u0443\u043b\u044c\u0432\u0430\u0440\u0435 \u0432 1845-1846 \u0433\u043e\u0434\u0430\u0445. \u0410\u0432\u0442\u043e\u0440 \u0441\u0442\u0430\u0442\u0443\u0439 \u2014 \u0425. \u0414. \u0420\u0430\u0443\u0445, \u0430\u0432\u0442\u043e\u0440 \u043a\u043e\u043b\u043e\u043d\u043d \u2014 \u041a. \u0418. \u0420\u043e\u0441\u0441\u0438.",id_marker:"one_1",text:l.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},l.a.createElement("p",{align:"center"},"\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435\u0441\u044c, \u0441\u0435\u0439\u0447\u0430\u0441 \u0432\u044b \u0443\u0437\u043d\u0430\u0442\u0435 3 \u0441\u0430\u043c\u044b\u0445 \u0432\u0430\u0436\u043d\u044b\u0445 \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0445 \u0444\u0430\u043a\u0442\u043e\u0432 \u043e\u0431 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u0442\u0435. \u0418 \u043c\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u043c!:))"),l.a.createElement("p",null,"\u041a\u043e\u043b\u043e\u043d\u043d\u044b \u0421\u043b\u0430\u0432\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0432 \u0438\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u043e\u0440\u0434\u0435\u0440\u0435 \u0438\u0437 \u0441\u0435\u0440\u043e\u0433\u043e \u0441\u0435\u0440\u0434\u043e\u0431\u043e\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0433\u0440\u0430\u043d\u0438\u0442\u0430.",l.a.createElement("br",null),"\u041b\u0435\u0442\u044f\u0449\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0438 \u0431\u043e\u0433\u0438\u043d\u0438 \u041d\u0438\u043a\u0438 \u0441 \u043b\u0430\u0432\u0440\u043e\u0432\u044b\u043c\u0438 \u0432\u0435\u043d\u043a\u0430\u043c\u0438 \u0432 \u0440\u0443\u043a\u0430\u0445,\u043d\u0430\u0432\u0435\u0440\u0445\u0443, \u0431\u044b\u043b\u0438 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u044b \u0432 \u0411\u0435\u0440\u043b\u0438\u043d\u0435 \u043f\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443 \u0441\u043a\u0443\u043b\u044c\u043f\u0442\u043e\u0440\u0430 \u0425. \u0414. \u0420\u0430\u0443\u0445\u0430 \u0438 \u043f\u043e\u0434\u0430\u0440\u0435\u043d\u044b \u0438\u043c\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0443 \u041d\u0438\u043a\u043e\u043b\u0430\u044e I \u043a\u043e\u0440\u043e\u043b\u0435\u043c \u0424\u0440\u0438\u0434\u0440\u0438\u0445\u043e\u043c \u0412\u0438\u043b\u044c\u0433\u0435\u043b\u044c\u043c\u043e\u043c IV \u0432 1845 \u0433\u043e\u0434\u0443 \u0432 \u0437\u043d\u0430\u043a \u043e\u0442\u0432\u0435\u0442\u043d\u043e\u0439 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430 \u043a\u043e\u043f\u0438\u0438 \u0441\u043a\u0443\u043b\u044c\u043f\u0442\u0443\u0440\u043d\u044b\u0445 \u0433\u0440\u0443\u043f\u043f \xab\u0423\u043a\u0440\u043e\u0449\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u044f\xbb \u041f. \u041a. \u041a\u043b\u043e\u0434\u0442\u0430 (\u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0410\u043d\u0438\u0447\u043a\u043e\u0432\u043e\u043c \u043c\u043e\u0441\u0442\u0443).")," "),end:l.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},l.a.createElement("p",null,"\u0422\u0440\u0435\u0442\u0438\u0439 \u0444\u0430\u043a\u0442: \u0412\u044b\u0441\u043e\u0442\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u043e\u043b\u043e\u043d\u043d\u044b \u2014 12 \u043c\u0435\u0442\u0440\u043e\u0432, \u0432\u044b\u0441\u043e\u0442\u0430 \u0441\u0442\u0430\u0442\u0443\u0438 \u2014 2,5 \u043c\u0435\u0442\u0440\u0430.")),pollQuestions:"\u041a\u0430\u043a \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u043a\u0430\u043a\u043e\u0439 \u0432\u044b\u0441\u043e\u0442\u044b \u044d\u0442\u0438 \u043a\u043e\u043b\u043e\u043d\u043d\u044b?",answer_1:"12 \u043c\u0435\u0442\u0440\u043e\u0432",answer_2:"13 \u043c\u0435\u0442\u0440\u043e\u0432",answer_3:"15 \u043c\u0435\u0442\u0440\u043e\u0432",but:l.a.createElement(g.b,{level:"commerce",onClick:this.submit},this.state.nameButton)}),l.a.createElement(v.Marker,(e={onClick:this.onMarkerClick,pretitle:"\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e \u0447\u0442\u043e... \u041f\u0440\u0438\u0434\u0438\u0442\u0435 \u0438 \u0443\u0437\u043d\u0430\u0439\u0442\u0435",img:y.a,name:"\u041f\u0435\u0440\u0432\u0430\u044f",end:l.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},l.a.createElement("p",null,"\u0422\u0440\u0435\u0442\u0438\u0439 \u0444\u0430\u043a\u0442: \u0412\u044b\u0441\u043e\u0442\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u043e\u043b\u043e\u043d\u043d\u044b \u2014 12 \u043c\u0435\u0442\u0440\u043e\u0432, \u0432\u044b\u0441\u043e\u0442\u0430 \u0441\u0442\u0430\u0442\u0443\u0438 \u2014 2,5 \u043c\u0435\u0442\u0440\u0430.")),pollQuestions:"\u041a\u0430\u043a \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u043a\u0430\u043a\u043e\u0439 \u0432\u044b\u0441\u043e\u0442\u044b \u044d\u0442\u0438 \u043a\u043e\u043b\u043e\u043d\u043d\u044b?",text:l.a.createElement("div",{style:{fontWeight:"bold",fontSize:"120%"}},l.a.createElement("p",{align:"center"},"\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435\u0441\u044c, \u0441\u0435\u0439\u0447\u0430\u0441 \u0432\u044b \u0443\u0437\u043d\u0430\u0442\u0435 3 \u0441\u0430\u043c\u044b\u0445 \u0432\u0430\u0436\u043d\u044b\u0445 \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0445 \u0444\u0430\u043a\u0442\u043e\u0432 \u043e\u0431 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u0442\u0435. \u0418 \u043c\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u043c!:))"),l.a.createElement("p",null,"\u041a\u043e\u043b\u043e\u043d\u043d\u044b \u0421\u043b\u0430\u0432\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0432 \u0438\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u043e\u0440\u0434\u0435\u0440\u0435 \u0438\u0437 \u0441\u0435\u0440\u043e\u0433\u043e \u0441\u0435\u0440\u0434\u043e\u0431\u043e\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0433\u0440\u0430\u043d\u0438\u0442\u0430.",l.a.createElement("br",null),"\u041b\u0435\u0442\u044f\u0449\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0438 \u0431\u043e\u0433\u0438\u043d\u0438 \u041d\u0438\u043a\u0438 \u0441 \u043b\u0430\u0432\u0440\u043e\u0432\u044b\u043c\u0438 \u0432\u0435\u043d\u043a\u0430\u043c\u0438 \u0432 \u0440\u0443\u043a\u0430\u0445,\u043d\u0430\u0432\u0435\u0440\u0445\u0443, \u0431\u044b\u043b\u0438 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u044b \u0432 \u0411\u0435\u0440\u043b\u0438\u043d\u0435 \u043f\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443 \u0441\u043a\u0443\u043b\u044c\u043f\u0442\u043e\u0440\u0430 \u0425. \u0414. \u0420\u0430\u0443\u0445\u0430 \u0438 \u043f\u043e\u0434\u0430\u0440\u0435\u043d\u044b \u0438\u043c\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0443 \u041d\u0438\u043a\u043e\u043b\u0430\u044e I \u043a\u043e\u0440\u043e\u043b\u0435\u043c \u0424\u0440\u0438\u0434\u0440\u0438\u0445\u043e\u043c \u0412\u0438\u043b\u044c\u0433\u0435\u043b\u044c\u043c\u043e\u043c IV \u0432 1845 \u0433\u043e\u0434\u0443 \u0432 \u0437\u043d\u0430\u043a \u043e\u0442\u0432\u0435\u0442\u043d\u043e\u0439 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430 \u043a\u043e\u043f\u0438\u0438 \u0441\u043a\u0443\u043b\u044c\u043f\u0442\u0443\u0440\u043d\u044b\u0445 \u0433\u0440\u0443\u043f\u043f \xab\u0423\u043a\u0440\u043e\u0449\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u044f\xbb \u041f. \u041a. \u041a\u043b\u043e\u0434\u0442\u0430 (\u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0410\u043d\u0438\u0447\u043a\u043e\u0432\u043e\u043c \u043c\u043e\u0441\u0442\u0443).")," ")},Object(k.a)(e,"pollQuestions","\u041a\u0430\u043a \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u043f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0430 \u043f\u0435\u0440\u0432\u0430\u044f?"),Object(k.a)(e,"answer_1","\u0417\u0434\u0435\u0441\u044c\u044f \u043a\u0442\u043e-\u0442\u043e \u0436\u0438\u0432\u0435\u0442"),Object(k.a)(e,"answer_2","\u0415\u0451 \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u043f\u0435\u0440\u0432\u043e\u0439"),Object(k.a)(e,"answer_3","\u041f\u0435\u0440\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u0433\u043e\u0440\u043e\u0434\u0435"),Object(k.a)(e,"id_marker","one_2"),Object(k.a)(e,"but",l.a.createElement(g.b,{level:"commerce",onClick:this.submit},this.state.nameButton)),Object(k.a)(e,"position",{lat:59.934239,lng:30.303854}),e)),l.a.createElement(v.Marker,{onClick:this.onMarkerClick,position:{lat:this.props.geo.lat,lng:this.props.geo.long},id_marker:"I",icon:{url:A.a,anchor:new this.props.google.maps.Point(32,32),scaledSize:new this.props.google.maps.Size(32,51)},name:"\u042d\u0442\u043e \u0432\u044b"}),l.a.createElement(P,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow},l.a.createElement(g.d,{align:"center"},l.a.createElement("img",{src:this.state.selectedPlace.img,style:{width:"90%",height:"90%"}}),l.a.createElement("h1",null,this.state.selectedPlace.name),l.a.createElement("p",null,this.state.selectedPlace.pretitle),this.props.errorGeo,this.state.selectedPlace.but)))}}]),t}(l.a.Component),I=Object(v.GoogleApiWrapper)({apiKey:"AIzaSyCL0U2diIKJtBb5gmgyUsRvpSIIKIfKCv0"})(W),V=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(g.d,{align:"center"},this.props.selectedPlace.end,l.a.createElement(g.b,{size:"xl",level:"commerce",onClick:this.props.theEnd},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"))}}]),t}(l.a.Component),G=a(102),M=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).handleVote=function(e){var t=a.state.pollAnswers.map((function(t){return t.option===e&&t.votes++,t}));a.setState({pollAnswers:t});var n=JSON.stringify(t);a.props.setPoll(n),a.props.setEnd(!0)};var n=a.props.Poll,l=a.props.selectedPlace.pollQuestions,s=[{option:""===n?a.props.selectedPlace.answer_1:a.props.Poll[0].option,votes:""===n?0:a.props.Poll[0].votes},{option:""===n?a.props.selectedPlace.answer_2:a.props.Poll[1].option,votes:""===n?0:a.props.Poll[1].votes},{option:""===n?a.props.selectedPlace.answer_3:a.props.Poll[2].option,votes:""===n?0:a.props.Poll[2].votes}];return a.state={pollAnswers:[].concat(s),pollQuestion:l,selectedPlace:a.props.selectedPlace},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){this.state.pollAnswers.pollAnswers;return l.a.createElement(g.d,null,l.a.createElement(G.a,{theme:"purple",question:this.state.pollQuestion,answers:this.state.pollAnswers,onVote:this.handleVote}))}}]),t}(l.a.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(g.d,{align:"center"},l.a.createElement(g.a,{src:this.props.selectedPlace.img_1,size:400}),this.props.selectedPlace.text)}}]),t}(l.a.Component),K=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(g.d,{style:{background:"linear-gradient(to right, #F6EFD2, #CEAD78)"}})}}]),t}(l.a.Component),x=a(103),U=a.n(x),z=a(104),Q=a.n(z),T=a(105),R=a.n(T),D=a(106),F=a.n(D),J=(a(54),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).onClick=function(e){b.a.send("VKWebAppGetGeodata",{}),a.setState({popout:l.a.createElement(g.k,null)}),a.setState({activeStory:"map"}),setTimeout((function(){a.setState({popout:null})}),2e3)},a.setPoll=function(e,t){b.a.send("VKWebAppCallAPIMethod",{method:"storage.set",request_id:"setPoll",params:{key:a.state.selectedPlace.id_marker+"Poll",value:e,v:"5.101",access_token:a.state.access_token}})},a.theEnd=function(e){var t={name:a.state.selectedPlace.name,img:a.state.selectedPlace.img,num:100};b.a.send("VKWebAppCallAPIMethod",{method:"storage.set",request_id:"theEnd",params:{key:a.state.selectedPlace.id_marker,value:t,user_id:a.state.fetchedUser.id,v:"5.101",access_token:"24712b3f24712b3f24712b3f9e241c30172247124712b3f79ff04100cce4d49eb8df420"}}),a.setState({activePanel:"map"})},a.setEnd=function(e,t){a.setState({showEnd:e})},a.GetVar=function(e){b.a.send("VKWebAppCallAPIMethod",{method:"storage.getKeys",request_id:"getAllQuests",params:{user_id:a.state.fetchedUser.id,v:"5.101",access_token:"24712b3f24712b3f24712b3f9e241c30172247124712b3f79ff04100cce4d49eb8df420"}})},a.checkGeo=function(e,t){if(b.a.send("VKWebAppGetGeodata",{}),a.setState({popout:l.a.createElement(g.k,null)}),a.state.geoData.lat.toFixed(a.num)===e.position.lat.toFixed(a.num)&&a.state.geoData.long.toFixed(a.num)===e.position.lng.toFixed(a.num)){a.setState({errorGeo:null});var n={name:e.name,img:e.img,num:50};b.a.send("VKWebAppCallAPIMethod",{method:"storage.set",request_id:"setQuests",params:{key:e.id_marker,value:n,user_id:a.state.fetchedUser.id,v:"5.101",access_token:"24712b3f24712b3f24712b3f9e241c30172247124712b3f79ff04100cce4d49eb8df420"}}),b.a.send("VKWebAppCallAPIMethod",{method:"storage.get",request_id:"getPoll",params:{key:e.id_marker+"Poll",v:"5.101",access_token:a.state.access_token}}),a.setState({selectedPlace:e})}else a.setState({errorGeo:a.so,popout:null})},a.onToChange=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.render=function(){return l.a.createElement(g.e,{activeStory:a.state.activeStory,tabbar:l.a.createElement(g.m,null,l.a.createElement(g.n,{onClick:a.onStoryChange,selected:"profile"===a.state.activeStory,"data-story":"profile",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},l.a.createElement(U.a,null)),l.a.createElement(g.n,{onClick:a.onClick,selected:"map"===a.state.activeStory,"data-story":"map",text:"\u041a\u0430\u0440\u0442\u0430"},l.a.createElement(R.a,null)),l.a.createElement(g.n,{onClick:a.GetVar,selected:"questions"===a.state.activeStory,"data-story":"questions",label:"5",text:"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"},l.a.createElement(Q.a,null)))},l.a.createElement(g.o,{id:"profile",activePanel:"profile"},l.a.createElement(g.i,{id:"profile"},l.a.createElement(g.j,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),l.a.createElement(E,{fetchedUser:a.state.fetchedUser}))),l.a.createElement(g.o,{id:"map",popout:a.state.popout,activePanel:a.state.activePanel},l.a.createElement(g.i,{id:"map"},l.a.createElement(g.j,null,"\u041a\u0430\u0440\u0442\u0430"),l.a.createElement(I,{geo:a.state.geoData,checkGeo:a.checkGeo,errorGeo:a.state.errorGeo})),l.a.createElement(g.i,{id:"questions"},a.state.selectedPlace&&l.a.createElement(g.j,{left:l.a.createElement(g.g,{onClick:a.onToChange,"data-to":"map"},l.a.createElement(F.a,null))},a.state.selectedPlace.name),l.a.createElement(q,{selectedPlace:a.state.selectedPlace}),l.a.createElement(M,{selectedPlace:a.state.selectedPlace,setPoll:a.setPoll,Poll:a.state.Poll,setEnd:a.setEnd}),l.a.createElement(g.d,null,a.state.showEnd&&l.a.createElement(V,{theEnd:a.theEnd,selectedPlace:a.state.selectedPlace})))),l.a.createElement(g.o,{id:"questions",activePanel:"quest"},l.a.createElement(g.i,{id:"quest"},l.a.createElement(g.j,null,"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"),l.a.createElement(K,{quests:a.state.quests}))))},a.so=l.a.createElement("p",{style:{color:"red"}},"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"),a.num=0,a.state={activeStory:null,activePanel:"map",quests:[],header:!0,snackbar:null,popout:null,selectedPlace:null,fetchedUser:null,access_token:null,geoData:null,errorGeo:null,Poll:null,showEnd:!1},a.onStoryChange=a.onStoryChange.bind(Object(m.a)(a)),a.onToChange=a.onToChange.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),e.setState({activeStory:"profile"}),console.log(t.detail.data.id);break;case"VKWebAppGeodataResult":!0===t.detail.data.available?e.setState({geoData:t.detail.data}):console.log("\u0432\u0441\u0435 \u043f\u043b\u043e\u0445\u043e");break;case"VKWebAppAccessTokenReceived":e.setState({access_token:t.detail.data.access_token});break;case"VKWebAppCallAPIMethodResult":switch(t.detail.data.request_id){case"getAll":e.setState({quests:t.detail.data.response}),console.log(JSON.parse(t.detail.data.response[1].value)),e.setState({activeStory:"questions"});break;case"getAllQuests":b.a.send("VKWebAppCallAPIMethod",{method:"storage.get",request_id:"getAll",params:{keys:t.detail.data.response,user_id:e.state.fetchedUser.id,v:"5.101",access_token:"24712b3f24712b3f24712b3f9e241c30172247124712b3f79ff04100cce4d49eb8df420"}}),console.log(t.detail.data.response);break;case"getPoll":if(console.log(t.detail),""===t.detail.data.response)e.setState({Poll:""}),e.setState({activePanel:"questions",popout:null});else{var a=JSON.parse(t.detail.data.response);e.setState({Poll:a}),e.setState({activePanel:"questions",popout:null}),console.log(a)}break;case"setPoll":console.log(t.detail.data.response)}break;default:console.log(t.detail.data)}})),b.a.send("VKWebAppGetUserInfo",{}),b.a.send("VKWebAppGetAuthToken",{app_id:7150376,scope:"friends"}),b.a.send("VKWebAppGetGeodata",{})}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}}]),t}(l.a.Component));r.a.send("VKWebAppInit"),o.a.render(l.a.createElement(J,null),document.getElementById("root"))},98:function(e,t,a){e.exports=a.p+"static/media/forest.cc873e2d.png"},99:function(e,t,a){e.exports=a.p+"static/media/one_1.230919a1.jpg"}},[[158,1,2]]]);
//# sourceMappingURL=main.23c068fd.chunk.js.map