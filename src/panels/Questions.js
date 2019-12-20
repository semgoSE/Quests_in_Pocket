import React from 'react';
import {  PanelHeader,  Avatar, Div,Button, HeaderButton, List, Cell, Snackbar, Group, InfoRow, Progress, Tabs, TabsItem, FixedLayout, Placeholder} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import money from './l.png';
import Icon56WriteOutline from '@vkontakte/icons/dist/56/write_outline';
var axios = require('axios');



class Questions extends React.Component {
constructor(props){
super(props)

this.state ={
activeTab:'questions'

}
}
    renderTabs(a){
			console.log(a.length);
			if(a.length == 0){
				return (	<Placeholder
				 icon={<Icon56WriteOutline />}
				 title="Задания"
				 action={<Button size="l" onClick={this.props.openMap}>Открыть карту</Button>}
			 >
				 Здесь будут отображатся задания, которые вы прошли.
			 </Placeholder>)
		 }else{
			 return (this.props.quest.map((name,i)=>
 					 <Cell key={i}
 								 before={<Avatar src={"https://questsinpocket.com/img_vk/"+name.id_marker+"_1.jpg"} size={72} />}>{"  "+name.name+" "}</Cell>))
 		}}





	render=(e)=>{
		return(
			<Div>
			<div>
			<FixedLayout vertical="top">
			     <Tabs theme="light">
                <TabsItem
                 onClick={() => this.setState({ activeTab: 'questions' })}
                  selected={this.state.activeTab === 'questions'}
                >
                  Задания
                </TabsItem>
                <TabsItem
                     onClick={() => this.setState({ activeTab: 'rr' })}
                  selected={this.state.activeTab === 'rr'}

                >
                  Рейтинг
                </TabsItem>
          </Tabs>
        </FixedLayout>
				</div>
				<div  align={'center'} style={{ paddingTop: 32, paddingBottom: 32}}>
          {this.state.activeTab === "questions" ?
				    <List>
            {this.renderTabs(this.props.quest)}
              </List>:<div><List  style={{ paddingBottom: 40}}>
              {this.props.rr.map((name,i)=>
											 <Cell key={i}
											       before={i+1}
														 description={<div><span style={{fontWeight: 600,color:'#525453'}}>{name.ball}</span><div style={{display:'inlineBlock'}}><Avatar  src={money} size={24}/></div></div>}
														 indicator={<Avatar src={name.img} />}>
														 {name.first_name+" "+name.last_name}</Cell>

              )}
              </List>
							<FixedLayout vertical="bottom">
							<Cell
							    style={{background:'#D2F4FF'}}
									before={<p>~{this.props.place}</p>}
									indicator={<Avatar src={this.props.fetchedUser.photo_200} />}
									description={<div>{this.props.ball}<Avatar  src={money} size={24}/></div>}> {this.props.fetchedUser.first_name+" "+this.props.fetchedUser.last_name}</Cell>
							</FixedLayout>
							</div>}

            </div>


              </Div>
			);
	}
}
export default Questions;
