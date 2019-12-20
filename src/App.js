
import React from 'react';
import { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';

import connect from '@vkontakte/vkui-connect';
import {  View, Tooltip, ScreenSpinner, Epic, Button,PanelHeader, Panel, Tabbar, TabbarItem, Avatar,Alert, Div, HeaderButton, Cell, Snackbar, Gallery, Group, Tabs, TabsItem, FixedLayout} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Profile from './panels/Profile';
import Modal from './panels/Modal';
import Achievment from './panels/Achievment';
import MapContainer from './panels/MapContainer';
import End from './panels/End'
import Poll from './panels/Poll';
import Begin from './panels/Begin'
import SlideGallery from "./SlideGallery.js";
import Questions from './panels/Questions';
import Rr from './panels/Rr';
import i1 from './img/lJnehNUPwRE.jpg';
import i2 from './img/logo.png';
import i3 from "./img/GN8yUxICiFU.jpg";
import i4 from"./img/eB4uk2vSIio.jpg";
import i5 from "./img/3zQ-wEsQbgg.jpg";

import Icon28MoreHorizontal from '@vkontakte/icons/dist/28/more_horizontal';
import Icon28Place from '@vkontakte/icons/dist/28/place';
import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Replay from '@vkontakte/icons/dist/24/replay';
import Icon28RecentOutline from '@vkontakte/icons/dist/28/recent_outline';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon24Share from '@vkontakte/icons/dist/24/share';

var sha256 = require('js-sha256');
var axios = require('axios');

const imgStyle={
  maxWidth:"90%",
  maxHeight:'60vh',

  };
  const sForHeader={
  textAlign:'center',
  }
  const styleForSlide={textAlign:"center",position:'relative' };
  const img_containerStyle={
  width:"99%",
  };
  const sForHi={marginBlockStart:0,marginTop:'2vh'};
  const text={
  width:"90%",

  fontWeight:"600",

  }

const orangeBackground = {
  backgroundImage: 'linear-gradient(135deg, #ffb73d, #ffa000)'
};

const blueBackground = {
  backgroundColor: 'var(--accent)'
};
 const api = new VKMiniAppAPI();


   var secret;
   var a;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.num = 0;

    this.state = {
      window:null,
      slideIndex:0,
      activeStory: 'load',
      activePanelLoad:'load',
      activePanelMap: "map",
      activeTab:'questions',
      header: true,
      snackbar:null,
      tabbar:false,
      popout: null,
      modal:null,
      selectedPlace:null,
      fetchedUser: {},
      id:null,
      ball:0,
      tooltip:true,
      patency:true,
      rr:null,
      place:null,
      quest:null,
      a:null,
      questList:null,
      access_token: null,
      geoData: null,
      marker:[],
      errorGeo:null,
      Poll:null,
      PollEnd:null,
      showEnd:false


    };
  }
    componentDidMount(e){
    api.initApp();
    this.setState({popout:<ScreenSpinner />});
    api.getUserInfo().then(userInfo =>{

    this.setState({fetchedUser:userInfo,id:userInfo.id});
    axios.post("https://www.questsinpocket.com/vk/index.php?type=create&id_vk="+
                userInfo.id+"&ball=0&first_name="+userInfo.first_name+"&last_name="+
                userInfo.last_name+"&img="+userInfo.photo_200+"&token="+this.createToken()).then(data=>{

      if(data.data === 2){

        axios.post("https://www.questsinpocket.com/vk/index.php?type=get&id_vk="+userInfo.id+"&token="+this.createToken()).then(data=>{
          this.setState({ball:data.data});

          axios.post("https://www.questsinpocket.com/vk/index.php?type=get_a&id_vk="+userInfo.id+"&token="+this.createToken()).then(data=>{

          this.setState({popout:null, activeStory:'profile',tabbar:true,a:data.data});
        })
        })
      }else if(data.data === 1){

          axios.post("https://www.questsinpocket.com/vk/index.php?type=set_a&id_vk="+userInfo.id+"&a="+data.data+"&token="+this.createToken()).then(data=>{

            axios.post("https://www.questsinpocket.com/vk/index.php?type=get_a&id_vk="+userInfo.id+"&token="+this.createToken()).then(data=>{
          this.setState({popout:null,a:data.data,activePanelLoad:'tutorial'});

  })
})

      }
    })

    })


    }

    createToken(){
      const session_id = Math.floor(Math.random() * Math.floor(1000));
      secret = sha256(session_id+'1');
      return secret+"&session_id="+session_id;
    }

    setErorr=(e)=>{
      this.setState({errorGeo:null})
    }

    onClickMap=(e)=>{

      axios.get("https://www.questsinpocket.com/vk/index.php?type=get_all_points"+"&token="+this.createToken())
      .then(data=>{

        this.setState({marker:data.data})});
      this.setState({popout:<ScreenSpinner />})
      api.getGeodata().then(dataGeo=>{
        console.log(dataGeo);
        this.setState({geoData: dataGeo})
        setTimeout(()=>{this.setState({ activeStory:'map', popout:null})},500);
        console.log(dataGeo);
      });

    }

    onClickOther=(e)=>{
      this.setState({ popout:<ScreenSpinner /> });

      axios.get("https://www.questsinpocket.com/vk/index.php?type=getPlaceRr&id="+this.state.fetchedUser.id+"&token="+this.createToken()).then(data=>{this.setState({place:data.data})});

      axios.get("https://www.questsinpocket.com/vk/index.php?type=get_all_rr"+"&token="+this.createToken()).then(data=>{this.setState({rr:data.data})});

      axios.get("https://www.questsinpocket.com/vk/index.php?type=get_all_quest&id_vk="+this.state.fetchedUser.id+"&token="+this.createToken()).then(data=>{
        this.setState({questList:data.data, activeStory:'other', popout:null})});
      }



    updateGeodata=(e)=>{
      this.setState({activeStory:'load',popout:<ScreenSpinner />});
      api.getGeodata().then(dataGeo=>{
      setTimeout(()=>{this.setState({geoData: dataGeo,activeStory:'map',popout:null})},1500);

      })
    }

    getPoll(e){

      axios.get("https://www.questsinpocket.com/vk/index.php?type=get&vk_id=0&id="+this.state.selectedPlace.id_marker+"&token="+this.createToken()).then(data=>{
        this.setState({Poll: data.data});
      })

    }

    checkGeo=(a, e)=>{

      this.setState({popout: <ScreenSpinner /> });
      api.getGeodata().then(dataGeo=>{this.setState({geoData:dataGeo})});
      const p1 = (this.state.geoData.lat).toFixed(this.num);
      const m1 = (+a.position.lat).toFixed(this.num);
      const p2 = (this.state.geoData.long).toFixed(this.num);
      const m2 = (+a.position.lng).toFixed(this.num);
      if(p1 === m1 && p2 === m2) {

        axios.get("https://www.questsinpocket.com/vk/index.php?type=check_quest&id_vk="+this.state.fetchedUser.id+"&id_marker="+a.id_marker+"&token="+this.createToken()).then(data=>{
          if(data.data == 10){
            this.setState({patency:false});
          }else {
            this.setState({patency:true});
          }

        axios.get("https://www.questsinpocket.com/vk/index.php?type=get_poll&id_marker="+a.id_marker+"&token="+this.createToken()).then(data=>{
          if(data.data === ""){
            this.setState({snackbar:
              <Snackbar
        onClose={() => this.setState({ snackbar: null })}
        action={<Icon24Share />}
        onActionClick={() => this.setState({ snackbar: null })}
        before={<Avatar size={16} style={orangeBackground}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
      >
      +50
      </Snackbar>, Poll:[{option:a.answer_1,votes:0},{option:a.answer_2,votes:0},{option:a.answer_3, votes:0}],ball:this.state.ball+50});
          }else{
            if(this.state.patency == true){
              this.setState({snackbar:
                <Snackbar
          onClose={() => this.setState({ snackbar: null })}
          action={<Icon24Share />}
          onActionClick={() => this.setState({ snackbar: null })}
          before={<Avatar size={16} style={orangeBackground}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
        >
        +10
        </Snackbar>,Poll:data.data,ball:this.state.ball+10});
            }else{this.setState({Poll:data.data})}
            }
        });
        setTimeout(()=>{
          this.setState({activePanelMap:'quest', selectedPlace:a, popout:null})},550);
    })}
    else{
      this.setState({errorGeo:<p style={{"color":"red"}}>Вы уверены, что вы на месте?!</p> , popout:null})

    }}

    setPoll=(a, e)=>{this.setState({PollEnd:a})}

     setShowEnd=(e)=>{
       this.setState({showEnd:true});
     }

     competionQuest=(e)=>{
       if(this.state.patency == true){

       axios.post("https://www.questsinpocket.com/vk/index.php?type=set_poll&id_marker="+this.state.selectedPlace.id_marker+"&poll="+this.state.PollEnd+"&token="+this.createToken());

       axios.post("https://www.questsinpocket.com/vk/index.php?type=set&id_vk="+this.state.fetchedUser.id+"&ball="+this.state.ball+"&id_marker="+this.state.selectedPlace.id_marker);

       axios.post("https://www.questsinpocket.com/vk/index.php?type=set_quest&id_vk="+this.state.fetchedUser.id+"&id_marker="+this.state.selectedPlace.id_marker+"&token="+this.createToken());
     }

       this.setState({modal:<Modal selectedPlace={this.state.selectedPlace} sendHistory={this.sendHistory} cancelHistory={this.cancelHistory} />});
       this.setState({activePanelMap:'map'});
     }
    cancelHistory=(e)=>{
     this.setState({modal:null});
    }
    sendHistory=(e)=>{
      this.setState({modal:null});
    }

    backMap=(e)=>{ this.setState({activePanelMap:'map'})}

    openDefault(e) {
    this.setState({ popout:
      <Alert
        actions={[{
          title: 'Отмена',
          autoclose: true,
          style: 'cancel'
        }, {
          title: 'Ок',
          autoclose: true,
        }]}
        onClose={this.closePopout}
      >

        <p>Для стабильной работы включите геолокацию</p>
      </Alert>
    });
  }

  closePopout=(e)=> {this.setState({ popout: null})}

  openMap=(e)=>{this.setState({ activeStory: 'map'})}

  missTutorial=(e)=>{
    this.setState({tabbar:true, activeStory:'profile', activePanelLoad:'load'})}

  onStoryChange =(e)=> {
    this.setState({ activeStory: e.currentTarget.dataset.story });
  }

  onToChange =(e)=> {
     this.setState({ activePanel: e.currentTarget.dataset.to});

  }

  render(){
    return (
      <Epic activeStory={this.state.activeStory} tabbar={this.state.tabbar === true ?
        <Tabbar>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'profile'}
            data-story="profile"
          ><Icon28User /></TabbarItem>
          <TabbarItem
            onClick={this.onClickMap}
            selected={this.state.activeStory === 'map'}
            data-story="map"

          ><Icon28Place/></TabbarItem>
          <TabbarItem
            onClick={this.onClickOther}
            selected={this.state.activeStory === 'other'}
            data-story="other"
          ><Icon28MoreHorizontal /></TabbarItem>
        </Tabbar>:null}>

      <View id={'profile'} popout={this.state.popout} activePanel={'profile'}>
        <Panel id={"profile"}>
        <PanelHeader>
         Профиль
        </PanelHeader>
          <Profile fetchedUser={this.state.fetchedUser} ball={this.state.ball} a={this.state.a} />
            {this.state.snackbar}
        </Panel>
      </View>
      <View id={'load'} popout={this.state.popout} header={false} activePanel={this.state.activePanelLoad}>
        <Panel id={"load"}>
          {this.state.snackbar}
        </Panel>

        <Panel id="tutorial">

            <Gallery
             bullets="dark"
              slideWidth="100%"
              align="center"
              style={{ height: '100vh'}}
              slideIndex={this.state.slideIndex}
              onChange={slideIndex => this.setState({slideIndex})}
            >
             <div style={styleForSlide}>
<p style={sForHi}>Привет, {this.state.fetchedUser.first_name}</p>
<div style={img_containerStyle}><img src={i2} style={imgStyle} /></div>
<Div > Сейчас мы объясним тебе, что и как.
Quests in Pocket - интерактивный гид-квест по улицам твоего города.
Твоя цель - проходить по гео-точкам, отмеченным на карте, и правильно отвечать на интересные вопросы, чтобы заработать очки.</Div>
<Button style={{position:'absolute',bottom:"2vh",right:5}} level="commerce" onClick={()=>{this.missTutorial()}}>Пропустить</Button>
</div>
<SlideGallery imgName={i1} name="Профиль" information="Располагается в первой вкладке, которая при входе открывается автоматически
Здесь отображается вся информация о пользователе (очки, достижения, иконка профиля)"
/>
<SlideGallery imgName={i3} name="Карта" information="Располагается во второй вкладке.
Красным отмечены геоточки, которые доступны к прохождению(чтобы узнать дошел ты или нет щелкни по точке и нажми “Я на месте”).
Синим отмечено твое месторасположение. Ты можешь нажать “Обновить” в левом верхнем углу, чтобы обновить местоположение."
/>
<SlideGallery imgName={i4} name="Карточка вопроса" information="Так будут выглядеть все вопросы. Тут написана интересная информация об этом месте, и сам вопрос. Чтобы ответить,
нужно подумать и нажать на выбранный вариант ответа. После этого вам даётся правильный ответ и чуть – чуть информации."
/>
<SlideGallery imgName={i5} name="Разное" miss={true} missTutorial={this.missTutorial} information="
В третьей вкладке вы можете узнать свой рейтинг и посмотреть на свои успехи - пройденные задания
Вот и все! Если что-то пропустил, ты всегда можешь запустить обучение во вкладке “Профиль”
Удачи, Ваши Quests in Pocket"
/>

            </Gallery>


        </Panel>
      </View>
      <View id={'map'} header={true} modal={this.state.modal} popout={this.state.popout} activePanel={this.state.activePanelMap}>
        <Panel id={'map'}>
        <PanelHeader
            left={<Tooltip
                text="Нажмите, чтобы обновить местоположение"
                isShown={this.state.tooltip}
                onClose={() => this.setState({ tooltip: false })}
                offsetX={10}
              >
                <HeaderButton onClick={() => this.updateGeodata()} ><Icon24Replay /></HeaderButton>
              </Tooltip>}
               addon={<HeaderButton onClick={() => this.updateGeodata()}>Обновить</HeaderButton>}>
            Карта
          </PanelHeader>
          <MapContainer geoData={this.state.geoData} updateGeodata={this.updateGeodata} errorGeo={this.state.errorGeo}  setErorr={this.setErorr} checkGeo={this.checkGeo} marker={this.state.marker} fetchedUser={this.state.fetchedUser}/>
        </Panel>
        <Panel id={'quest'}>
          <Begin selectedPlace={this.state.selectedPlace} backMap={this.backMap}/>
          <Poll selectedPlace={this.state.selectedPlace} Poll={this.state.Poll} setPoll={this.setPoll} setShowEnd={this.setShowEnd} />
          <End selectedPlace={this.state.selectedPlace} theEnd={this.competionQuest} showEnd={this.state.showEnd} />
          {this.state.snackbar}
        </Panel>
      </View>

      <View id={'other'} popout={this.state.popout} activePanel={'other'}>
        <Panel id={'other'}>
        <PanelHeader>
         Разное
        </PanelHeader>
          <Questions rr={this.state.rr} quest={this.state.questList} fetchedUser={this.state.fetchedUser} ball={this.state.ball} place={this.state.place} openMap={this.onClickMap}/>
            {this.state.snackbar}
        </Panel>

      </View>
      </Epic>)
  }
}

export default App;
