import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View, ScreenSpinner, Epic, PanelHeader, Panel, Tabbar, TabbarItem, Avatar, Div, HeaderButton, List, Cell, Snackbar, Button} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import vk from 'vk-openapi';
import Polls from 'react-polls';
var axios = require('axios');


class Poll extends React.Component {

constructor(props){
super(props);

this.state = {
  selectedPlace:this.props.selectedPlace,
  pollAnswers:this.props.Poll,
  pollQuestion:this.props.selectedPlace.pollQuestions
}
}

  componentDidMount(e){
    vk.init({apiId: 7230323, onlyWidgets: true});
    vk.Widgets.Poll("vk_poll", {}, "356488687_89f50c8a70fbec4586");
  }
  // Handling user vote
  // Increments the votes count of answer when the user votes
  handleVote = voteAnswer => {
     const newPollAnswers = this.state.pollAnswers.map(answer => {
       if (answer.option === voteAnswer) answer.votes++
       return answer
     })
     this.props.setShowEnd();
     const rt = JSON.stringify(newPollAnswers);
     this.props.setPoll(rt);
     this.setState({
       pollAnswers: newPollAnswers
     })
   }



  render(){


   return(
    <div>
      <div id="vk_poll"></div>
     </div>

	 	);
	}
}

export default Poll;
