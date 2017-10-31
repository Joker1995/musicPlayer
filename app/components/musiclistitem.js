import React,{Component} from 'react'
import './musiclistitem.less'
class MusicListItem extends React.Component{
  render(){
    let musicItem= this.props.musicItem;
    return (
        <li className={`components-musiclistitem row ${this.props.focus ?'focus':''}`}>
          <p><strong>{musicItem.title}-{musicItem.artist}</strong></p>
          <p className="-col-auto delete"></p>
        </li>
    );
  }
}
export default MusicListItem;
