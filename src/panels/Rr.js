import { Button,  Avatar, Div, HeaderButton, Cell, List} from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

class Rr extends React.Component{

	render(){
      return(
        <div><List>
				{this.props.rr.map((name,i)=>
					<Cell key={i}
								before={<Avatar src={name.img} size={72} />}
								size="l">{"  "+name.first_name+" "+name.last_name+"  "+name.ball}</Cell>
				)}
				</List></div>

      )
	}
}
export default Rr;
