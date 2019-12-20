//immport lib
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Div, Button , Avatar} from '@vkontakte/vkui';
import React from 'react';
import Icon16Verified from '@vkontakte/icons/dist/16/verified';
import Icon16Fire from '@vkontakte/icons/dist/16/fire';
import InfoWindowEx from './InfoWindowEx'
import connect from '@vkontakte/vkui-connect';

//import icon
import Icon24Replay from '@vkontakte/icons/dist/36/replay';
import MyIcon from '../img/map.png'

const blueBackground = {
  backgroundColor: 'var(--accent)'
};

    const style = {
      width: '100%',
      height: '100%',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }


export class MapContainer extends React.Component {


  constructor(props) {
    super(props);
   this.state = {
    errorGeo:this.props.errorGeo,
    lat:this.props.geoData.lat,
    lng:this.props.geoData.long,
    nameButton: "Я на месте",
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

  };
 }

  onMarkerClick = (props, marker, e) =>{
    this.props.setErorr();
    console.log(props);
this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true});
}
   submit = (e) => {
  this.props.checkGeo(this.state.selectedPlace);
   }



  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };


  render=(e)=> {

    return (
      <Map google={this.props.google}
      style={style}
      zoom={16}
       initialCenter={{
            lat: this.props.geoData.lat,
            lng: this.props.geoData.long
        }}
		gestureHandling={'greedy'}
    streetViewControl={false}
    mapTypeControl={false}
    fullscreenControl={false}
    zoomControl={false}
          onClick={this.onMapClicked}>

          <Marker onClick={this.onMarkerClick}
            position={{ lat: this.state.lat , lng:  this.state.lng }}
            id_marker={"I"}
            img={this.props.fetchedUser.photo_200}
            icon={{
              url:MyIcon,
              anchor: new this.props.google.maps.Point(32,32),
              scaledSize: new this.props.google.maps.Size(32,51)
                 }}
            name={'Это вы'} />


             {this.props.marker.map((name,i) =>
               <Marker onClick={this.onMarkerClick}

                       id_marker={name.id_marker}
                       position={{ lat: name.lat, lng: name.lng }}
                       img_story={name.img_story}
                       name_m={<div>{name.verify == 1 ?<div>{name.name} <Icon16Verified /></div>:<p>{name.name}</p>}</div>}
                       name={name.name}
                       img={"https://questsinpocket.com/img_vk/"+name.id_marker+".jpg"}
                       pretext={name.pretext}
                       text={name.text}
                       text_end={name.text_end}
                       pollQuestions={name.pollQuestions}
                       answer_1={name.answer_1}
                       answer_2={name.answer_2}
                       answer_3={name.answer_3}
                       but={<Button level="commerce" onClick={this.submit}>Я на месте</Button>}  />)
             }






        <InfoWindowEx
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <Div align="center">
            <Avatar src={this.state.selectedPlace.img} size={150}/>
            <h1>{this.state.selectedPlace.name_m}</h1>
              <p>{this.state.selectedPlace.pretext}</p>
              {this.props.errorGeo}
               {this.state.selectedPlace.but}
              </Div>

        </InfoWindowEx>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCL0U2diIKJtBb5gmgyUsRvpSIIKIfKCv0')
})(MapContainer)
