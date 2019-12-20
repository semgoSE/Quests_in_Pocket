import React from 'react';
import connect from '@vkontakte/vkui-connect';
import {  PanelHeader, Avatar, Div, HeaderButton, Cell} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Back from '@vkontakte/icons/dist/24/back';
const sForBeginImg={
maxWidth:"90vw",
maxHeight:"40vh",
borderRadius:"2vw",
}
const sForDivBeginImg={
	padding:"1vw",
}
const text={
	margin:"1.5vw",
	fontSize:"1.5rem",
}
class Begin extends React.Component{

render(){
	return(
 <Div align="center" style={text}>
 <PanelHeader left={<HeaderButton onClick={() =>this.props.backMap() }><Icon24Back /></HeaderButton>}>
{this.props.selectedPlace.name}
 </PanelHeader>
<div style={sForDivBeginImg}><img style={sForBeginImg} src={"https://questsinpocket.com/img_vk/"+this.props.selectedPlace.id_marker+"_1.jpg"}/></div>
{this.props.selectedPlace.text}
</Div>
	);}

}
export default Begin;
//<Avatar src={"https://questsinpocket.com/img_vk/"+this.props.selectedPlace.id_marker+"_1.jpg"} size={200}/>
