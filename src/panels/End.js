import React from 'react';
import { Button, Div} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
const text={
	margin:"1.5vw",
		fontSize:"1.5rem",
}

class End extends React.Component {


	render(){
		return(
               <Div align="center" style={text}>
            {this.props.showEnd == false ? null:<div><p>{this.props.selectedPlace.text_end}</p>
							<Button size="xl" level="commerce" onClick={this.props.theEnd}>Завершить</Button></div>}

              </Div>
			);
	}
}
export default End;
