import React from 'react';
import {  View, ScreenSpinner, Panel, Epic, Button, PanelHeader, Panar, Avatar, Div, HeaderButton, Cell, Snackbar, Gallery, Group, List, InfoRow, Separator} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Share from '@vkontakte/icons/dist/24/share';
import Achievment from './Achievment';

const StyleName = {
  fontSize : '1.5rem',
  fontWeight : 'bold'
}
const StyleBall = {
fontSize:"1.5rem",
}
// Компонент профиля
class Profile extends React.Component {
	constructor(props) {
       super(props);

       this.state = {
          fetchedUser : this.props.fetchedUser,
          showGroup: true
     }
  }

	  render() {
		        return(
                <Div id="profile-container" align="center">
                  <Div id="avatar-container">
                     <Avatar src={this.state.fetchedUser.photo_200} style={{"border":"solid 3px #BF24FE"}} size={150}/>
                  </Div>

                  <Div id="name-container">
                    <Cell id="name"><p style={StyleName}><strong>{this.state.fetchedUser.first_name+" "+this.state.fetchedUser.last_name}</strong></p></Cell>
                    <p style={StyleBall}>{this.props.ball}</p>
                  </Div>



                  <Group title="Ваши достижения" id="achievements-container">
                  <List style={{ paddingBottom: 15}}>

                  {this.props.a.map((name, i)=>
                  <Cell before={<div style={{"margin-left": "1px"}}><Avatar src={name.img}
                        size={72}/></div>}
                        size='l'
                        description={name.description}
                        asideContent={<Icon24Share />}>
                    {name.name}
                  </Cell>)}
              
                  </List>
                  </Group>
               </Div>
		        );
	  }
}

export default Profile;
