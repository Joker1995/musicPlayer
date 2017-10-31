import React,{Component} from 'react'
import MusicListItem from '../components/musiclistitem'

class MusicList extends React.Component{
  constructor(){
    super();
  }
  render(){
     let listEle = null;
     listELe = this.props.musicList.map((item)=>{
      console.log(item.title+"--"+item.artist);
      return (
        <MusicListItem
          focus={item===this.props.currentMusitItem}
          key={item.id}
          musicItem={item}
        >
          {item.title}
        </MusicListItem>
      );
    });
    return (
      <ul>
        { listEle }
      </ul>
    );
  }
}
export default MusicList;
