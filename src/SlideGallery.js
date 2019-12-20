import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { Tooltip, Epic, Button,PanelHeader, Panel, Tabbar, TabbarItem, Avatar,Alert, Div, HeaderButton, Cell, Snackbar, Gallery, Group, Tabs, TabsItem, FixedLayout, Header, withInsets} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
const imgStyle={
	maxWidth:"90%",
	maxHeight:'65vh',
	border:"1px black solid",
	borderRadius:"1%",

};

const sForHeader={
	textAlign:'center',
}
const styleForSlide={textAlign:"center",position:'relative' };
const img_containerStyle={
	width:"99%",

	paddingBottom:"0.7vh",
};
const sForHi={marginBlockStart:0,marginTop:'2vh'};
const text={
	width:"90%",

	fontWeight:"600",

}
class SlideGallery extends React.Component{
constructor(props){
    super(props);

}

render(){
    return (<div style={styleForSlide}>
<Header > {this.props.name} </Header>
<div style={img_containerStyle}><img src={this.props.imgName} style={imgStyle} /></div>
{this.props.information}
{this.props.miss==true?
<Button style={{position:'absolute',bottom:5,right:5}} onClick={()=>{this.props.missTutorial()}} level="commerce">Ок</Button>:null}
</div>)
}


}
export default SlideGallery;
