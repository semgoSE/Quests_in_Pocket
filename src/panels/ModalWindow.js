import React from 'react';
import {Panel} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Profile from './Profile';

//компонент модального окна
class Modal extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return(
       <Panel>
          <Profile fetchedUser={this.state.fetchedUser} />
       </Panel>
    );
  }

}

export default Modal;