import React,{Component} from 'react'
import MusicListItem from '../components/musiclistitem'

class MusicList extends React.Component{
  constructor(){
    super();
  }
  render(){
    let Items = this.props.musicList.map((item) => {
       return (
         <MusicListItem
           key={item.id}
           data={item}
          focus={this.props.currentMusitItem === item}
         ></MusicListItem>
       );
     });
   return (
       <ul>
           { Items }
       </ul>
   );
  }
}
export default MusicList;
