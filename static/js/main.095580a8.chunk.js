(this.webpackJsonpnew_qip=this.webpackJsonpnew_qip||[]).push([[0],{106:function(e,t,a){e.exports=a(148)},116:function(e,t,a){e.exports=a.p+"static/media/Design-story.2ea10a94.png"},148:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(21),r=a.n(l),c=a(25),i=a.n(c),s=a(12),p=a(16),u=a(14),m=a(13),d=a(15),h=a(44),f=(a(29),a(4)),k=(a(23),a(53)),g=a.n(k),b=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(f.d,{before:o.a.createElement("div",{style:{"margin-left":"1px"}},o.a.createElement(f.b,{src:g.a,size:100})),indicator:this.props.lvlNum+" lvl"},o.a.createElement(f.i,null,this.props.title))}}]),t}(o.a.Component),v={fontSize:"150%",fontWeight:"bold"},E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={fetchedUser:a.props.fetchedUser},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(f.e,{id:"profile-container",align:"center"},o.a.createElement(f.e,{id:"avatar-container"},o.a.createElement(f.b,{src:this.state.fetchedUser.photo_200,style:{border:"solid 3px #BF24FE"},size:150})),o.a.createElement("p",null,this.props.ball),o.a.createElement(f.e,{id:"name-container"},o.a.createElement(f.d,{id:"name"},o.a.createElement("p",{style:v},o.a.createElement("strong",null,this.state.fetchedUser.first_name+" "+this.state.fetchedUser.last_name)))),o.a.createElement(f.g,{title:"\u0412\u0430\u0448\u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f",id:"achievements-container"},o.a.createElement(b,{lvlNum:"1",title:"\u041f\u0435\u0440\u0432\u043e\u043f\u0440\u043e\u0445\u043e\u0434\u0435\u0446"})))}}]),t}(o.a.Component),w=a(30),y=a(54);w.a.init(y.a);o.a.Component;var _=a(24),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).infoWindowRef=o.a.createRef(),a.contentElement=document.createElement("div"),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&(r.a.render(o.a.Children.only(this.props.children),this.contentElement),this.infoWindowRef.current.infowindow.setContent(this.contentElement))}},{key:"render",value:function(){return o.a.createElement(_.InfoWindow,Object.assign({ref:this.infoWindowRef},this.props))}}]),t}(o.a.Component),C=a(34),O=a.n(C),j=a(55),P=a.n(j),x={width:"100%",height:"100%",marginLeft:"auto",marginRight:"auto"},q=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onMarkerClick=function(e,t,n){a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.submit=function(e){a.props.checkGeo(a.state.selectedPlace)},a.onMapClicked=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.render=function(e){return o.a.createElement(_.Map,{google:a.props.google,style:x,zoom:16,initialCenter:{lat:a.props.geoData.lat,lng:a.props.geoData.long},gestureHandling:"greedy",streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1,zoomControl:!1,onClick:a.onMapClicked},o.a.createElement("div",null,o.a.createElement(f.c,{size:"xl",onClick:a.props.updateGeodata,level:"commerce"},o.a.createElement("p",{align:"center"},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"))),a.props.marker.map((function(e,t){return o.a.createElement(_.Marker,{onClick:a.onMarkerClick,id_marker:e.id_marker,position:{lat:e.lat,lng:e.lng},name:e.name,img:e.img,img_1:e.img_1,pretext:e.pretext,text:e.text,text_end:e.text_end,pollQuestions:e.pollQuestions,answer_1:e.answer_1,answer_2:e.answer_2,answer_3:e.answer_3,but:o.a.createElement(f.c,{level:"commerce",onClick:a.submit},"\u042f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435")})})),o.a.createElement(_.Marker,{onClick:a.onMarkerClick,position:{lat:a.props.geoData.lat,lng:a.props.geoData.long},id_marker:"I",icon:{url:P.a,anchor:new a.props.google.maps.Point(32,32),scaledSize:new a.props.google.maps.Size(32,51)},name:"\u042d\u0442\u043e \u0432\u044b"}),o.a.createElement(S,{marker:a.state.activeMarker,visible:a.state.showingInfoWindow},o.a.createElement(f.e,{align:"center"},o.a.createElement("img",{src:a.state.selectedPlace.img,style:{width:"90%",height:"90%"}}),o.a.createElement("h1",null,a.state.selectedPlace.name),o.a.createElement("p",null,a.state.selectedPlace.pretext),a.props.errorGeo,a.state.selectedPlace.but)))};a.props.geoData;return a.state={nameButton:"\u042f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435",showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a}return Object(d.a)(t,e),t}(o.a.Component),M=Object(_.GoogleApiWrapper)({apiKey:"AIzaSyCL0U2diIKJtBb5gmgyUsRvpSIIKIfKCv0"})(q),G=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(f.e,{align:"center"},this.props.selectedPlace.text_end,o.a.createElement(f.c,{size:"xl",level:"commerce",onClick:this.props.theEnd},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"))}}]),t}(o.a.Component),D=a(56),I=a(32),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleVote=function(e){var t=a.state.pollAnswers.map((function(t){return t.option===e&&t.votes++,t})),n=JSON.stringify(t);I.post("https://www.questsinpocket.com/vk/index.php?type=set_poll&id_marker="+a.state.selectedPlace.id_marker+"&poll="+n),a.setState({pollAnswers:t})},a.state={selectedPlace:a.props.selectedPlace,pollAnswers:a.props.Poll,pollQuestion:a.props.selectedPlace.pollQuestions},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(D.a,{question:this.state.pollQuestion,answers:this.state.pollAnswers,onVote:this.handleVote}))}}]),t}(o.a.Component),z=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(f.e,{align:"center"},o.a.createElement(f.b,{src:this.props.selectedPlace.img_1,size:200}),this.props.selectedPlace.text)}}]),t}(o.a.Component),L=a(32),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).render=function(e){return o.a.createElement(f.e,null,o.a.createElement(f.q,{theme:"light"},o.a.createElement(f.r,{onClick:function(){return a.setState({activeTab:"questions"})},selected:"questions"===a.state.activeTab},"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"),o.a.createElement(f.r,{onClick:function(){return a.setState({activeTab:"rr"})},selected:"rr"===a.state.activeTab},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433")),"questions"===a.state.activeTab?o.a.createElement(f.e,null,o.a.createElement("p",null,"KLLLLLLLLLLLL"),o.a.createElement("button",{onClick:a.connect},"bg")):o.a.createElement(f.j,null,a.props.rr.map((function(e,t){return o.a.createElement(f.d,{key:t,before:o.a.createElement(f.b,{src:e.img,size:72}),size:"l"},"  "+e.first_name+" "+e.last_name+"  "+e.ball)}))))},a.state={activeTab:"questions"},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"connect",value:function(){L.get("http://localhost/index.php?type=get_all").then((function(e){console.log(e)}))}}]),t}(o.a.Component),W=(o.a.Component,a(57)),A=a.n(W),K=a(58),Q=a.n(K),F=a(59),R=a.n(F),V=(a(146),a(147),a(27)),B=a.n(V),J=a(32),N={backgroundColor:"var(--accent)"},H=new h.VKMiniAppAPI,X=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onClickMap=function(e){J.get("https://www.questsinpocket.com/vk/index.php?type=get_all_points").then((function(e){a.setState({marker:e.data})})),a.setState({popout:o.a.createElement(f.m,null)}),H.getGeodata().then((function(e){a.setState({geoData:e}),setTimeout((function(){a.setState({activeStory:"map",popout:null})}),500),console.log(e)}))},a.onClickOther=function(e){J.get("https://www.questsinpocket.com/vk/index.php?type=get_all_rr").then((function(e){a.setState({rr:e.data})})),setTimeout((function(){a.setState({activeStory:"other"})}),500)},a.updateGeodata=function(e){H.getGeodata().then((function(e){a.setState({geoData:e}),console.log(e)}))},a.checkGeo=function(e,t){a.setState({popout:o.a.createElement(f.m,null)}),H.getGeodata().then((function(e){a.setState({geoData:e})}));var n=a.state.geoData.lat.toFixed(a.num),l=(+e.position.lat).toFixed(a.num),r=a.state.geoData.long.toFixed(a.num),c=(+e.position.lng).toFixed(a.num);n===l&&r===c?J.get("https://www.questsinpocket.com/vk/index.php?type=check_quest&id_vk="+a.state.fetchedUser.id+"&id_marker="+e.id_marker).then((function(t){10==t.data?a.setState({patency:!1}):a.setState({patency:!0}),J.get("https://www.questsinpocket.com/vk/index.php?type=get_poll&id_marker="+e.id_marker).then((function(t){""===t.data?a.setState({snackbar:o.a.createElement(f.n,{layout:"vertical",onClose:function(){return a.setState({snackbar:null})},before:o.a.createElement(f.b,{size:24,style:N},o.a.createElement(B.a,{fill:"#fff",width:14,height:14}))},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435"),Poll:[{option:e.answer_1,votes:0},{option:e.answer_2,votes:0},{option:e.answer_3,votes:0}],ball:a.state.ball+50}):1==a.state.patency?a.setState({Poll:t.data,ball:a.state.ball+10}):a.setState({Poll:t.data})})),setTimeout((function(){a.setState({activePanelMap:"quest",selectedPlace:e,popout:null})}),550)})):a.setState({errorGeo:o.a.createElement("p",{style:{color:"red"}},"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"),popout:null})},a.competionQuest=function(e){1==a.state.patency&&(J.post("https://www.questsinpocket.com/vk/index.php?type=set&id_vk="+a.state.fetchedUser.id+"&ball="+a.state.ball),J.post("https://www.questsinpocket.com/vk/index.php?type=set_quest&id_vk="+a.state.fetchedUser.id+"&id_marker="+a.state.selectedPlace.id_marker)),a.setState({activePanelMap:"map"})},a.closePopout=function(e){a.setState({popout:null})},a.onStoryChange=function(e){a.setState({activeStory:e.currentTarget.dataset.story})},a.onToChange=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.num=0,a.state={activeStory:"other",activePanelMap:"map",activeTab:"questions",header:!0,snackbar:null,popout:null,selectedPlace:null,fetchedUser:null,ball:0,tooltip:!0,patency:!0,rr:null,quest:null,access_token:null,geoData:null,marker:null,errorGeo:null,Poll:null,showEnd:!1},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(e){var t=this;H.initApp(),this.setState({popout:o.a.createElement(f.m,null)}),H.getUserInfo().then((function(e){t.setState({fetchedUser:e}),J.post("https://www.questsinpocket.com/vk/index.php?type=create&id_vk="+e.id+"&ball=0&first_name="+e.first_name+"&last_name="+e.last_name+"&img="+e.photo_200).then((function(a){console.log(a.data),2===a.data?J.post("https://www.questsinpocket.com/vk/index.php?type=get&id_vk="+e.id).then((function(e){t.setState({ball:+e.data,popout:null,activeStory:"profile"})})):t.setState({popout:null,activeStory:"profile"})})),console.log(e.id)}))}},{key:"getPoll",value:function(e){var t=this;J.get("https://www.questsinpocket.com/vk/index.php?type=get&vk_id=0&id="+this.state.selectedPlace.id_marker).then((function(e){t.setState({Poll:e.data})}))}},{key:"openDefault",value:function(e){this.setState({popout:o.a.createElement(f.a,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,style:"cancel"},{title:"\u041e\u043a",autoclose:!0}],onClose:this.closePopout},o.a.createElement("p",null,"\u0414\u043b\u044f \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e"))})}},{key:"render",value:function(){var e=this;return o.a.createElement(f.f,{activeStory:this.state.activeStory,tabbar:o.a.createElement(f.o,null,o.a.createElement(f.p,{onClick:this.onStoryChange,selected:"profile"===this.state.activeStory,"data-story":"profile"},o.a.createElement(R.a,null)),o.a.createElement(f.p,{onClick:this.onClickMap,selected:"map"===this.state.activeStory,"data-story":"map"},o.a.createElement(Q.a,null)),o.a.createElement(f.p,{onClick:this.onClickOther,selected:"other"===this.state.activeStory,"data-story":"other"},o.a.createElement(A.a,null)))},o.a.createElement(f.t,{id:"profile",popout:this.state.popout,activePanel:"profile"},o.a.createElement(f.k,{id:"profile"},o.a.createElement(E,{fetchedUser:this.state.fetchedUser,ball:this.state.ball}))),o.a.createElement(f.t,{id:"map",header:!0,popout:this.state.popout,activePanel:this.state.activePanelMap},o.a.createElement(f.k,{id:"map"},o.a.createElement(f.l,{theme:"light",left:o.a.createElement(f.s,{text:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435",isShown:this.state.tooltip,onClose:function(){return e.setState({tooltip:!1})},offsetX:10},o.a.createElement(f.h,{onClick:function(){return e.updateGeodata}},o.a.createElement(O.a,null)))},"\u041a\u0430\u0440\u0442\u0430"),o.a.createElement(M,{geoData:this.state.geoData,updateGeodata:this.updateGeodata,errorGeo:this.state.errorGeo,checkGeo:this.checkGeo,marker:this.state.marker})),o.a.createElement(f.k,{id:"quest"},o.a.createElement(z,{selectedPlace:this.state.selectedPlace}),o.a.createElement(U,{selectedPlace:this.state.selectedPlace,Poll:this.state.Poll}),o.a.createElement(G,{selectedPlace:this.state.selectedPlace,theEnd:this.competionQuest}),this.state.snackbar)),o.a.createElement(f.t,{id:"other",popout:this.state.popout,activePanel:"other"},o.a.createElement(f.k,{id:"other"},o.a.createElement(f.l,null,"\u0420\u0430\u0437\u043d\u043e\u0435"),o.a.createElement(T,{rr:this.state.rr}))))}}]),t}(o.a.Component);i.a.send("VKWebAppInit"),r.a.render(o.a.createElement(X,null),document.getElementById("root"))},53:function(e,t,a){e.exports=a.p+"static/media/achiev-1.05917b64.png"},55:function(e,t,a){e.exports=a.p+"static/media/map.e0ba97a3.png"}},[[106,1,2]]]);
//# sourceMappingURL=main.095580a8.chunk.js.map