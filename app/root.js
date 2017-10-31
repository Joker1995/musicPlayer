import React,{Component} from 'react'
import Header from './components/header'
import {MUSIC_LIST} from './config/musiclist'
import Player from './page/player'
import MusicList from './page/musiclist'

class Root extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      musicList:MUSIC_LIST,
      currentMusitItem: MUSIC_LIST[0],
      repeatType: 'cycle'
    };
  }

  componentDidMount(){
    $('#player').jPlayer({
      ready:function(){
        $(this).jPlayer('setMedia',{
          mp3:'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
        }).jPlayer('play');
      },
      supplied:'mp3',
      wmode:'window'
    });
  }

  render(){
    return(
        <div>
          <Header/>
          <MusicList
            currentMusitItem={this.state.currentMusitItem}
            musicList={this.state.musicList}
          ></MusicList>
        </div>
    );
  }
};

export default Root;
