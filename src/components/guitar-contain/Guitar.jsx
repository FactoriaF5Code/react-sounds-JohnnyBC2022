import './Guitar.css';
import {String} from './String'

export function Guitar() {
  return (<div className='fretboard'>
    <String />
    <String />
    <String />
    <String />
    <String />
    <String />
  </div> );
}