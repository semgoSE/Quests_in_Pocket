import React from 'react';
import {InfoRow, Cell, Separator, Div, Avatar} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import achiev_1 from '../img/achiev-1.png';


//компонент достижения
class Achievment extends React.Component {
	constructor(props) {
      super(props);
	}
  render() {
  	return(
       <Cell before={<div style={{"margin-left": "1px"}}><Avatar src={achiev_1} size={100}/></div>} indicator={this.props.lvlNum + ' lvl'}>
          <InfoRow>
          {this.props.title}
          </InfoRow>
       </Cell>
       
    );
  }

}

export default Achievment;