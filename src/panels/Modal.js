import React from 'react';
import {Panel, Div, Button, Cell, Avatar, ModalRoot, ModalPage, ModalPageHeader, HeaderButton, IS_PLATFORM_IOS, IS_PLATFORM_ANDROID, ModalCard, FixedLayout} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import VKStories from "vk-stories";
import connect from "@vkontakte/vkui-connect-promise";
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import img from '../img/nn.jpg';
VKStories.init(connect);




//компонент модального окна
class Modal extends React.Component {
constructor(props) {
super(props);
}

wrapText=(context, text, marginLeft, marginTop, maxWidth, lineHeight)=>
    {
      context.font = "175px Arial bold";
      context.textAlign = "center"
      context.fillStyle = "#fff"
        var words = text.split(" ");
        var countWords = words.length;
        var line = "";
        for (var n = 0; n < countWords; n++) {
            var testLine = line + words[n] + " ";
            var testWidth = context.measureText(testLine).width;
            console.log(testWidth);
            if (testWidth > maxWidth) {
                context.fillText(line, marginLeft, marginTop);
                line = words[n] + " ";
                marginTop += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        context.fillText(line, marginLeft, marginTop);
    }


generateNamePlace = () => {
const canvas = document.createElement("canvas");
canvas.width = 1080;
canvas.height = 1920;

let value = this.props.selectedPlace.name;
const ctx = canvas.getContext('2d');

this.wrapText(ctx,value,540,1300,canvas.width, 180 )

let img = canvas.toDataURL();

return img;
}


GenerateStory = () => {
  connect.send("VKWebAppShowStoryBox",
  {
      "background_type": "image",
      "url": "https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-pure-red-and-blue-gradient-matte-cool-background-backgroundshiny-background-backgroundscrubtexturebackgroundgradient-image_78857.jpg",
      "stickers": [
        {
          "sticker_type": "renderable",
          "sticker": {
            "content_type": "image",
            "url": "https://questsinpocket.com/img_vk/"+this.props.selectedPlace.id_marker+".jpg",
            "transform": {
              "relation_width": 0.55,
              "gravity": "center",
              "translation_y": -0.25
            }
          }
        },
        {
          "sticker_type": "renderable",
          "sticker": {
            "content_type": "image",
            "blob": this.generateNamePlace() ,
            "transform": {
              "relation_width": 0.55,
              "gravity": "center_bottom",
              "translation_y": -0.25
            }
          }
        }
      ],
      "attachment":{
        "text":'open',
        "type":'url',
        "url":'https://vk.com/app7150376'
      }
    })
}







render() {
return(
<ModalRoot activeModal={'story'}>
<ModalCard
id={'story'}
onClose={() => this.setActiveModal(null)}
icon={<Avatar src={"https://questsinpocket.com/img_vk/"+this.props.selectedPlace.id_marker+".jpg"} size={72} />}
title="Поделиться местом с друзьми"
caption="Пусть друзья узнают, куда вы добрались!!!"
style={{}}
onClose={()=>{this.props.cancelHistory()}}
actions={[{
title: 'Поделиться',
type: 'primary',
action: () => {
this.props.sendHistory();
this.GenerateStory();
}
}
]}
/>
</ModalRoot>

);
}

}

export default Modal;
