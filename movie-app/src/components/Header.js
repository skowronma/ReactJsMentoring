import React from 'react';
import AddMovie from './AddMovie';

export default class Header extends React.Component{
  constructor(props) {
         super(props);
         this.state = {showAddMovieModal: false};
     }

 addMovie = () =>{
    this.setState({
      showAddMovieModal: true
    });
  }

  closeAddMovie = () =>{
     this.setState({
       showAddMovieModal: false
     });
   }

render() {
  var showAddMovie = this.state.showAddMovieModal
            ? ( <AddMovie pageName={this.props.pageName}
              onCloseRequest={this.closeAddMovie}/>)
            : '';
  return (
    <div className='header'>
      <b className='pageName'>{this.props.pageName}</b>
      <button className='addButton' onClick={this.addMovie}>+ ADD MOVIE</button>
      {showAddMovie}
    </div>
  )}
}
