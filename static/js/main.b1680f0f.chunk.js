(this.webpackJsonpnew_qip=this.webpackJsonpnew_qip||[]).push([[0],{118:function(e,t,a){e.exports=a(169)},135:function(e,t,a){e.exports=a.p+"static/media/nn.cee975b7.jpg"},169:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),l=a.n(r),i=a(24),s=a.n(i),c=a(12),p=a(20),u=a(14),m=a(13),d=a(15),h=a(49),f=(a(30),a(4)),g=(a(23),a(29)),k=a.n(g),b=a(60),E=a.n(b),v=(o.a.Component,{fontSize:"1.5rem",fontWeight:"bold"}),y={},w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={fetchedUser:a.props.fetchedUser},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(f.e,{id:"profile-container",align:"center"},o.a.createElement(f.e,{id:"avatar-container"},o.a.createElement(f.b,{src:this.state.fetchedUser.photo_200,style:{border:"solid 3px #BF24FE"},size:150})),o.a.createElement(f.e,{id:"name-container"},o.a.createElement(f.d,{id:"name"},o.a.createElement("p",{style:v},o.a.createElement("strong",null,this.state.fetchedUser.first_name+" "+this.state.fetchedUser.last_name))),o.a.createElement("p",{style:y},this.props.ball)),o.a.createElement(f.i,{title:"\u0412\u0430\u0448\u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f",id:"achievements-container"},o.a.createElement(f.m,{style:{paddingBottom:15}},this.props.a.map((function(e,t){return o.a.createElement(f.d,{before:o.a.createElement("div",{style:{"margin-left":"1px"}},o.a.createElement(f.b,{src:e.img,size:72})),size:"l",description:e.description,asideContent:o.a.createElement(k.a,null)},e.name)})))))}}]),t}(o.a.Component),_=a(36),S=a(61),P=a(37);a(34),a(134),a(135);S.a.init(P.a);var x,j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).generateNamePlace=function(){var e=document.createElement("canvas");e.width=1080,e.height=1920;var t=a.props.selectedPlace.name,n=e.getContext("2d");return n.font="175px Arial bold",n.textAlign="center",n.fillStyle="#fff",n.fillText(t,340,1200),e.toDataURL()},a.GenerateStory=function(){P.a.send("VKWebAppShowStoryBox",{background_type:"image",url:"https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-pure-red-and-blue-gradient-matte-cool-background-backgroundshiny-background-backgroundscrubtexturebackgroundgradient-image_78857.jpg",stickers:[{sticker_type:"renderable",sticker:{content_type:"image",url:"https://questsinpocket.com/img_vk/"+a.props.selectedPlace.id_marker+".jpg",transform:{relation_width:.55,gravity:"center",translation_y:-.25}}},{sticker_type:"renderable",sticker:{content_type:"image",blob:a.generateNamePlace(),transform:{relation_width:.55,gravity:"center_bottom",translation_y:-.25}}}],attachment:{text:"open",type:"url",url:"https://vk.com/app7150376"}})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t=this;return o.a.createElement(f.o,{activeModal:"story"},o.a.createElement(f.n,(e={id:"story",onClose:function(){return t.setActiveModal(null)},icon:o.a.createElement(f.b,{src:this.props.selectedPlace.img_story,size:72}),title:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043c\u0435\u0441\u0442\u043e\u043c \u0441 \u0434\u0440\u0443\u0437\u044c\u043c\u0438",caption:"\u041f\u0443\u0441\u0442\u044c \u0434\u0440\u0443\u0437\u044c\u044f \u0443\u0437\u043d\u0430\u044e\u0442, \u043a\u0443\u0434\u0430 \u0432\u044b \u0434\u043e\u0431\u0440\u0430\u043b\u0438\u0441\u044c!!!",style:{}},Object(_.a)(e,"onClose",(function(){t.props.cancelHistory()})),Object(_.a)(e,"actions",[{title:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f",type:"primary",action:function(){t.props.sendHistory(),t.GenerateStory()}}]),e)))}}]),t}(o.a.Component),C=a(25),O=a(62),q=a.n(O),M=(a(148),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).infoWindowRef=o.a.createRef(),a.contentElement=document.createElement("div"),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&(l.a.render(o.a.Children.only(this.props.children),this.contentElement),this.infoWindowRef.current.infowindow.setContent(this.contentElement))}},{key:"render",value:function(){return o.a.createElement(C.InfoWindow,Object.assign({ref:this.infoWindowRef},this.props))}}]),t}(o.a.Component)),U=(a(149),a(63)),G=a.n(U),T={width:"100%",height:"100%",marginLeft:"auto",marginRight:"auto"},I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onMarkerClick=function(e,t,n){a.props.setErorr(),a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.submit=function(e){a.props.checkGeo(a.state.selectedPlace)},a.onMapClicked=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.render=function(e){return o.a.createElement(C.Map,{google:a.props.google,style:T,zoom:16,initialCenter:{lat:a.props.geoData.lat,lng:a.props.geoData.long},gestureHandling:"greedy",streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1,zoomControl:!1,onClick:a.onMapClicked},o.a.createElement(C.Marker,{onClick:a.onMarkerClick,position:{lat:a.state.lat,lng:a.state.lng},id_marker:"I",icon:{url:G.a,anchor:new a.props.google.maps.Point(32,32),scaledSize:new a.props.google.maps.Size(32,51)},name:"\u042d\u0442\u043e \u0432\u044b"}),a.props.marker.map((function(e,t){return o.a.createElement(C.Marker,{onClick:a.onMarkerClick,id_marker:e.id_marker,position:{lat:e.lat,lng:e.lng},img_story:e.img_story,name_m:o.a.createElement("div",null,1==e.verify?o.a.createElement("div",null,e.name," ",o.a.createElement(q.a,null)):o.a.createElement("p",null,e.name)),name:e.name,pretext:e.pretext,text:e.text,text_end:e.text_end,pollQuestions:e.pollQuestions,answer_1:e.answer_1,answer_2:e.answer_2,answer_3:e.answer_3,but:o.a.createElement(f.c,{level:"commerce",onClick:a.submit},"\u042f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435")})})),o.a.createElement(M,{marker:a.state.activeMarker,visible:a.state.showingInfoWindow},o.a.createElement(f.e,{align:"center"},o.a.createElement("img",{src:"https://questsinpocket.com/img_vk/"+a.state.selectedPlace.id_marker+".jpg",style:{width:"90%",height:"90%"}}),o.a.createElement("h1",null,a.state.selectedPlace.name_m),o.a.createElement("p",null,a.state.selectedPlace.pretext),a.props.errorGeo,a.state.selectedPlace.but)))},a.state={errorGeo:a.props.errorGeo,lat:a.props.geoData.lat,lng:a.props.geoData.long,nameButton:"\u042f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435",showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a}return Object(d.a)(t,e),t}(o.a.Component),z=Object(C.GoogleApiWrapper)({apiKey:"AIzaSyCL0U2diIKJtBb5gmgyUsRvpSIIKIfKCv0"})(I),A=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(f.e,{align:"center"},0==this.props.showEnd?null:o.a.createElement("div",null,o.a.createElement("p",null,this.props.selectedPlace.text_end),o.a.createElement(f.c,{size:"xl",level:"commerce",onClick:this.props.theEnd},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c")))}}]),t}(o.a.Component),D=a(64),W=(a(32),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleVote=function(e){var t=a.state.pollAnswers.map((function(t){return t.option===e&&t.votes++,t}));a.props.setShowEnd();var n=JSON.stringify(t);a.props.setPoll(n),a.setState({pollAnswers:t})},a.state={selectedPlace:a.props.selectedPlace,pollAnswers:a.props.Poll,pollQuestion:a.props.selectedPlace.pollQuestions},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(D.a,{question:this.state.pollQuestion,answers:this.state.pollAnswers,onVote:this.handleVote}))}}]),t}(o.a.Component)),B=a(35),H=a.n(B),Q={maxWidth:"90vw",maxHeight:"40vh",borderRadius:"2vw"},R={padding:"1vw"},F=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(f.e,{align:"center"},o.a.createElement(f.q,{left:o.a.createElement(f.k,{onClick:function(){return e.props.backMap()}},o.a.createElement(H.a,null))},this.props.selectedPlace.name),o.a.createElement("div",{style:R},o.a.createElement("img",{style:Q,src:"https://questsinpocket.com/img_vk/"+this.props.selectedPlace.id_marker+"_1.jpg"})),this.props.selectedPlace.text)}}]),t}(o.a.Component),L={maxWidth:"90%",maxHeight:"65vh",border:"1px black solid",borderRadius:"1%"},N={textAlign:"center",position:"relative"},K={width:"99%",paddingBottom:"0.7vh"},V=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:N},o.a.createElement(f.j,null," ",this.props.name," "),o.a.createElement("div",{style:K},o.a.createElement("img",{src:this.props.imgName,style:L})),this.props.information,1==this.props.miss?o.a.createElement(f.c,{style:{position:"absolute",bottom:5,right:5},onClick:function(){e.props.missTutorial()},level:"commerce"},"\u041e\u043a"):null)}}]),t}(o.a.Component),J=a(38),X=a.n(J),Y=a(65),Z=a.n(Y),$=(a(32),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).render=function(e){return o.a.createElement(f.e,null,o.a.createElement("div",null,o.a.createElement(f.g,{vertical:"top"},o.a.createElement(f.w,{theme:"light"},o.a.createElement(f.x,{onClick:function(){return a.setState({activeTab:"questions"})},selected:"questions"===a.state.activeTab},"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"),o.a.createElement(f.x,{onClick:function(){return a.setState({activeTab:"rr"})},selected:"rr"===a.state.activeTab},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433")))),o.a.createElement("div",{align:"center",style:{paddingTop:32,paddingBottom:32}},"questions"===a.state.activeTab?o.a.createElement(f.m,null,a.renderTabs(a.props.quest)):o.a.createElement("div",null,o.a.createElement(f.m,{style:{paddingBottom:40}},a.props.rr.map((function(e,t){return o.a.createElement(f.d,{key:t,before:t+1,description:o.a.createElement("div",null,o.a.createElement("span",{style:{fontWeight:600,color:"#525453"}},e.ball),o.a.createElement("div",{style:{display:"inlineBlock"}},o.a.createElement(f.b,{src:X.a,size:24}))),indicator:o.a.createElement(f.b,{src:e.img})},e.first_name+" "+e.last_name)}))),o.a.createElement(f.g,{vertical:"bottom"},o.a.createElement(f.d,{style:{background:"#D2F4FF"},before:o.a.createElement("p",null,"~",a.props.place),indicator:o.a.createElement(f.b,{src:a.props.fetchedUser.photo_200}),description:o.a.createElement("div",null,a.props.ball,o.a.createElement(f.b,{src:X.a,size:24}))}," ",a.props.fetchedUser.first_name+" "+a.props.fetchedUser.last_name)))))},a.state={activeTab:"questions"},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"renderTabs",value:function(e){return console.log(e.length),0==e.length?o.a.createElement(f.r,{stretched:!0,icon:o.a.createElement(Z.a,null),title:"\u0417\u0430\u0434\u0430\u043d\u0438\u044f",action:o.a.createElement(f.c,{size:"l",onClick:this.props.openMap},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u0440\u0442\u0443")},"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u0441\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u043f\u0440\u043e\u0448\u043b\u0438."):this.props.quest.map((function(e,t){return o.a.createElement(f.d,{key:t,before:o.a.createElement(f.b,{src:"https://questsinpocket.com/img_vk/"+e.id_marker+"_1.jpg",size:72})},"  "+e.name+" ")}))}}]),t}(o.a.Component)),ee=(o.a.Component,a(66)),te=a.n(ee),ae=a(67),ne=a.n(ae),oe=a(68),re=a.n(oe),le=a(69),ie=a.n(le),se=a(70),ce=a.n(se),pe=a(71),ue=a.n(pe),me=a(72),de=a.n(me),he=a(73),fe=a.n(he),ge=a(74),ke=a.n(ge),be=(a(166),a(26)),Ee=a.n(be),ve=a(167),ye=a(32),we={maxWidth:"90%",maxHeight:"60vh"},_e={textAlign:"center",position:"relative"},Se={width:"99%"},Pe={marginBlockStart:0,marginTop:"2vh"},xe={backgroundImage:"linear-gradient(135deg, #ffb73d, #ffa000)"},je=new h.VKMiniAppAPI,Ce=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).setErorr=function(e){a.setState({errorGeo:null})},a.onClickMap=function(e){ye.get("https://www.questsinpocket.com/vk/index.php?type=get_all_points").then((function(e){a.setState({marker:e.data})})),a.setState({popout:o.a.createElement(f.s,null)}),je.getGeodata().then((function(e){a.setState({geoData:e}),setTimeout((function(){a.setState({activeStory:"map",popout:null})}),500),console.log(e)}))},a.onClickOther=function(e){a.setState({popout:o.a.createElement(f.s,null)}),ye.get("https://www.questsinpocket.com/vk/index.php?type=getPlaceRr&id="+a.state.fetchedUser.id).then((function(e){a.setState({place:e.data})})),ye.get("https://www.questsinpocket.com/vk/index.php?type=get_all_rr").then((function(e){a.setState({rr:e.data})})),ye.get("https://www.questsinpocket.com/vk/index.php?type=get_all_quest&id_vk="+a.state.fetchedUser.id).then((function(e){a.setState({questList:e.data,activeStory:"other",popout:null})}))},a.updateGeodata=function(e){a.setState({activeStory:"load",popout:o.a.createElement(f.s,null)}),je.getGeodata().then((function(e){setTimeout((function(){a.setState({geoData:e,activeStory:"map",popout:null})}),1500)}))},a.checkGeo=function(e,t){a.setState({popout:o.a.createElement(f.s,null)}),je.getGeodata().then((function(e){a.setState({geoData:e})}));var n=a.state.geoData.lat.toFixed(a.num),r=(+e.position.lat).toFixed(a.num),l=a.state.geoData.long.toFixed(a.num),i=(+e.position.lng).toFixed(a.num);n===r&&l===i?ye.get("https://www.questsinpocket.com/vk/index.php?type=check_quest&id_vk="+a.state.fetchedUser.id+"&id_marker="+e.id_marker).then((function(t){10==t.data?a.setState({patency:!1}):a.setState({patency:!0}),ye.get("https://www.questsinpocket.com/vk/index.php?type=get_poll&id_marker="+e.id_marker).then((function(t){""===t.data?a.setState({snackbar:o.a.createElement(f.t,{onClose:function(){return a.setState({snackbar:null})},action:o.a.createElement(k.a,null),onActionClick:function(){return a.setState({snackbar:null})},before:o.a.createElement(f.b,{size:16,style:xe},o.a.createElement(Ee.a,{fill:"#fff",width:14,height:14}))},"+50"),Poll:[{option:e.answer_1,votes:0},{option:e.answer_2,votes:0},{option:e.answer_3,votes:0}],ball:a.state.ball+50}):1==a.state.patency?a.setState({snackbar:o.a.createElement(f.t,{onClose:function(){return a.setState({snackbar:null})},action:o.a.createElement(k.a,null),onActionClick:function(){return a.setState({snackbar:null})},before:o.a.createElement(f.b,{size:16,style:xe},o.a.createElement(Ee.a,{fill:"#fff",width:14,height:14}))},"+10"),Poll:t.data,ball:a.state.ball+10}):a.setState({Poll:t.data})})),setTimeout((function(){a.setState({activePanelMap:"quest",selectedPlace:e,popout:null})}),550)})):a.setState({errorGeo:o.a.createElement("p",{style:{color:"red"}},"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"),popout:null})},a.setPoll=function(e,t){a.setState({PollEnd:e})},a.setShowEnd=function(e){a.setState({showEnd:!0})},a.competionQuest=function(e){1==a.state.patency&&(ye.post("https://www.questsinpocket.com/vk/index.php?type=set_poll&id_marker="+a.state.selectedPlace.id_marker+"&poll="+a.state.PollEnd),ye.post("https://www.questsinpocket.com/vk/index.php?type=set&id_vk="+a.state.fetchedUser.id+"&ball="+a.state.ball),ye.post("https://www.questsinpocket.com/vk/index.php?type=set_quest&id_vk="+a.state.fetchedUser.id+"&id_marker="+a.state.selectedPlace.id_marker)),a.setState({modal:o.a.createElement(j,{selectedPlace:a.state.selectedPlace,sendHistory:a.sendHistory,cancelHistory:a.cancelHistory})}),a.setState({activePanelMap:"map"})},a.cancelHistory=function(e){a.setState({modal:null})},a.sendHistory=function(e){a.setState({modal:null})},a.backMap=function(e){a.setState({activePanelMap:"map"})},a.closePopout=function(e){a.setState({popout:null})},a.openMap=function(e){a.setState({activeStory:"map"})},a.missTutorial=function(e){a.setState({tabbar:!0,activeStory:"profile",activePanelLoad:"load"})},a.onStoryChange=function(e){a.setState({activeStory:e.currentTarget.dataset.story})},a.onToChange=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.num=2,a.state={window:null,slideIndex:0,activeStory:"load",activePanelLoad:"load",activePanelMap:"map",activeTab:"questions",header:!0,snackbar:null,tabbar:!1,popout:null,modal:null,selectedPlace:null,fetchedUser:{},id:null,ball:0,tooltip:!0,patency:!0,rr:null,place:null,quest:null,a:null,questList:null,access_token:null,geoData:null,marker:[],errorGeo:null,Poll:null,PollEnd:null,showEnd:!1},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(e){var t=this;je.initApp(),this.setState({popout:o.a.createElement(f.s,null)}),je.getUserInfo().then((function(e){new Date(864e5);x=ve("qip"),console.log(x),t.setState({fetchedUser:e,id:e.id}),ye.post("https://www.questsinpocket.com/vk/index.php?type=create&id_vk="+e.id+"&ball=0&first_name="+e.first_name+"&last_name="+e.last_name+"&img="+e.photo_200+"&token="+x).then((function(a){console.log(a),2===a.data?ye.post("https://www.questsinpocket.com/vk/index.php?type=get&id_vk="+e.id+"&token="+x).then((function(a){t.setState({ball:a.data}),ye.post("https://www.questsinpocket.com/vk/index.php?type=get_a&id_vk="+e.id+"&token="+x).then((function(e){t.setState({popout:null,activeStory:"profile",tabbar:!0,a:e.data})}))})):1===a.data&&ye.post("https://www.questsinpocket.com/vk/index.php?type=set_a&id_vk="+e.id+"&a="+a.data).then((function(a){ye.post("https://www.questsinpocket.com/vk/index.php?type=get_a&id_vk="+e.id).then((function(e){t.setState({popout:null,a:e.data,activePanelLoad:"tutorial"})}))}))}))}))}},{key:"getPoll",value:function(e){var t=this;ye.get("https://www.questsinpocket.com/vk/index.php?type=get&vk_id=0&id="+this.state.selectedPlace.id_marker).then((function(e){t.setState({Poll:e.data})}))}},{key:"openDefault",value:function(e){this.setState({popout:o.a.createElement(f.a,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,style:"cancel"},{title:"\u041e\u043a",autoclose:!0}],onClose:this.closePopout},o.a.createElement("p",null,"\u0414\u043b\u044f \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e"))})}},{key:"render",value:function(){var e=this;return o.a.createElement(f.f,{activeStory:this.state.activeStory,tabbar:!0===this.state.tabbar?o.a.createElement(f.u,null,o.a.createElement(f.v,{onClick:this.onStoryChange,selected:"profile"===this.state.activeStory,"data-story":"profile"},o.a.createElement(fe.a,null)),o.a.createElement(f.v,{onClick:this.onClickMap,selected:"map"===this.state.activeStory,"data-story":"map"},o.a.createElement(de.a,null)),o.a.createElement(f.v,{onClick:this.onClickOther,selected:"other"===this.state.activeStory,"data-story":"other"},o.a.createElement(ue.a,null))):null},o.a.createElement(f.z,{id:"profile",popout:this.state.popout,activePanel:"profile"},o.a.createElement(f.p,{id:"profile"},o.a.createElement(f.q,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),o.a.createElement(w,{fetchedUser:this.state.fetchedUser,ball:this.state.ball,a:this.state.a}),this.state.snackbar)),o.a.createElement(f.z,{id:"load",popout:this.state.popout,header:!1,activePanel:this.state.activePanelLoad},o.a.createElement(f.p,{id:"load"},this.state.snackbar),o.a.createElement(f.p,{id:"tutorial"},o.a.createElement(f.h,{bullets:"dark",slideWidth:"100%",align:"center",style:{height:"100vh"},slideIndex:this.state.slideIndex,onChange:function(t){return e.setState({slideIndex:t})}},o.a.createElement("div",{style:_e},o.a.createElement("p",{style:Pe},"\u041f\u0440\u0438\u0432\u0435\u0442, ",this.state.fetchedUser.first_name),o.a.createElement("div",{style:Se},o.a.createElement("img",{src:ne.a,style:we})),o.a.createElement(f.e,null," \u0421\u0435\u0439\u0447\u0430\u0441 \u043c\u044b \u043e\u0431\u044a\u044f\u0441\u043d\u0438\u043c \u0442\u0435\u0431\u0435, \u0447\u0442\u043e \u0438 \u043a\u0430\u043a. Quests in Pocket - \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0433\u0438\u0434-\u043a\u0432\u0435\u0441\u0442 \u043f\u043e \u0443\u043b\u0438\u0446\u0430\u043c \u0442\u0432\u043e\u0435\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430. \u0422\u0432\u043e\u044f \u0446\u0435\u043b\u044c - \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c \u043f\u043e \u0433\u0435\u043e-\u0442\u043e\u0447\u043a\u0430\u043c, \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u043c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435, \u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043e\u0447\u043a\u0438."),o.a.createElement(f.c,{style:{position:"absolute",bottom:"2vh",right:5},level:"commerce",onClick:function(){e.missTutorial()}},"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c")),o.a.createElement(V,{imgName:te.a,name:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",information:"\u0420\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0435\u0440\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\r\n\u0417\u0434\u0435\u0441\u044c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0432\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435 (\u043e\u0447\u043a\u0438, \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f, \u0438\u043a\u043e\u043d\u043a\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044f)"}),o.a.createElement(V,{imgName:re.a,name:"\u041a\u0430\u0440\u0442\u0430",information:"\u0420\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0432\u043e \u0432\u0442\u043e\u0440\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435.\r\n\u041a\u0440\u0430\u0441\u043d\u044b\u043c \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u044b \u0433\u0435\u043e\u0442\u043e\u0447\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043a \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044e(\u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0434\u043e\u0448\u0435\u043b \u0442\u044b \u0438\u043b\u0438 \u043d\u0435\u0442 \u0449\u0435\u043b\u043a\u043d\u0438 \u043f\u043e \u0442\u043e\u0447\u043a\u0435 \u0438 \u043d\u0430\u0436\u043c\u0438 \u201c\u042f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435\u201d).\r\n\u0421\u0438\u043d\u0438\u043c \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043e \u0442\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435. \u0422\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u043d\u0430\u0436\u0430\u0442\u044c \u201c\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c\u201d \u0432 \u043b\u0435\u0432\u043e\u043c \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0443\u0433\u043b\u0443, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435."}),o.a.createElement(V,{imgName:ie.a,name:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u0430",information:"\u0422\u0430\u043a \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b. \u0422\u0443\u0442 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0431 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u0442\u0435, \u0438 \u0441\u0430\u043c \u0432\u043e\u043f\u0440\u043e\u0441. \u0427\u0442\u043e\u0431\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c,\r\n\u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0434\u0443\u043c\u0430\u0442\u044c \u0438 \u043d\u0430\u0436\u0430\u0442\u044c \u043d\u0430 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u043e\u0442\u0432\u0435\u0442\u0430. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0432\u0430\u043c \u0434\u0430\u0451\u0442\u0441\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 \u0438 \u0447\u0443\u0442\u044c \u2013 \u0447\u0443\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438."}),o.a.createElement(V,{imgName:ce.a,name:"\u0420\u0430\u0437\u043d\u043e\u0435",miss:!0,missTutorial:this.missTutorial,information:"\r\n\u0412 \u0442\u0440\u0435\u0442\u044c\u0435\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0437\u043d\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u0438 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u0441\u0432\u043e\u0438 \u0443\u0441\u043f\u0435\u0445\u0438 - \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f\r\n\u0412\u043e\u0442 \u0438 \u0432\u0441\u0435! \u0415\u0441\u043b\u0438 \u0447\u0442\u043e-\u0442\u043e \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b, \u0442\u044b \u0432\u0441\u0435\u0433\u0434\u0430 \u043c\u043e\u0436\u0435\u0448\u044c \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0432\u043e \u0432\u043a\u043b\u0430\u0434\u043a\u0435 \u201c\u041f\u0440\u043e\u0444\u0438\u043b\u044c\u201d\r\n\u0423\u0434\u0430\u0447\u0438, \u0412\u0430\u0448\u0438 Quests in Pocket"})))),o.a.createElement(f.z,{id:"map",header:!0,modal:this.state.modal,popout:this.state.popout,activePanel:this.state.activePanelMap},o.a.createElement(f.p,{id:"map"},o.a.createElement(f.q,{left:o.a.createElement(f.y,{text:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435",isShown:this.state.tooltip,onClose:function(){return e.setState({tooltip:!1})},offsetX:10},o.a.createElement(f.k,{onClick:function(){return e.updateGeodata()}},o.a.createElement(ke.a,null))),addon:o.a.createElement(f.k,{onClick:function(){return e.updateGeodata()}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c")},"\u041a\u0430\u0440\u0442\u0430"),o.a.createElement(z,{geoData:this.state.geoData,updateGeodata:this.updateGeodata,errorGeo:this.state.errorGeo,setErorr:this.setErorr,checkGeo:this.checkGeo,marker:this.state.marker})),o.a.createElement(f.p,{id:"quest"},o.a.createElement(F,{selectedPlace:this.state.selectedPlace,backMap:this.backMap}),o.a.createElement(W,{selectedPlace:this.state.selectedPlace,Poll:this.state.Poll,setPoll:this.setPoll,setShowEnd:this.setShowEnd}),o.a.createElement(A,{selectedPlace:this.state.selectedPlace,theEnd:this.competionQuest,showEnd:this.state.showEnd}),this.state.snackbar)),o.a.createElement(f.z,{id:"other",popout:this.state.popout,activePanel:"other"},o.a.createElement(f.p,{id:"other"},o.a.createElement(f.q,null,"\u0420\u0430\u0437\u043d\u043e\u0435"),o.a.createElement($,{rr:this.state.rr,quest:this.state.questList,fetchedUser:this.state.fetchedUser,ball:this.state.ball,place:this.state.place,openMap:this.openMap}),this.state.snackbar)))}}]),t}(o.a.Component);s.a.send("VKWebAppInit"),l.a.render(o.a.createElement(Ce,null),document.getElementById("root"))},38:function(e,t,a){e.exports=a.p+"static/media/l.5aef6ad1.png"},60:function(e,t,a){e.exports=a.p+"static/media/achiev-1.05917b64.png"},63:function(e,t,a){e.exports=a.p+"static/media/map.e0ba97a3.png"},66:function(e,t,a){e.exports=a.p+"static/media/lJnehNUPwRE.c6f3f82d.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/logo.12a761a4.png"},68:function(e,t,a){e.exports=a.p+"static/media/GN8yUxICiFU.777d2630.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/eB4uk2vSIio.f7f747ad.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/3zQ-wEsQbgg.4464c352.jpg"}},[[118,1,2]]]);
//# sourceMappingURL=main.b1680f0f.chunk.js.map