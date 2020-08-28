import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from './Modal';

export default class AddMovie extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     title: '',
     releaseDate: '',
     movieUrl : '',
     genre:'',
     overview: '',
     runtime : ''
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
   console.log("updating " + event.target.name)
   const target = event.target;
   const name = target.name;
   this.setState({[name]: target.value});
 }

 handleSubmit(event) {
   event.preventDefault();
   console.log("Movie added");
 }

 setDate(date){
   this.setState({releaseDate: date});
 }

  render(){
    return(
      <Modal onCloseRequest={this.props.onCloseRequest}>
      <h1>ADD MOVIE</h1>
      <div className="formStyle">
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" placeholder="Movie title here" value={this.state.title} onChange={this.handleChange}/>
        </label>
        <label>
          Release date:
          <DatePicker selected={this.state.releaseDate} placeholder="Select date" onChange={date => this.setDate(date)}/>
        </label>
        <label>
          Movie URL:
          <input type="text" name="movieUrl" placeholder="Movie URL here" value={this.state.movieUrl} onChange={this.handleChange} />
        </label>
        <label>
          Genre:
          <select value={this.state.genre} name="genre" placeholder="Select genre" onChange={this.handleChange}>
            <option value="documentary">DOCUMENTARY</option>
            <option value="comedy">COMEDY</option>
            <option value="horror">HORROR</option>
            <option value="crime">CRIME</option>
          </select>
        </label>
        <label>
          Overview:
          <input type="text" name="overview" placeholder="Overview here" value={this.state.overview} onChange={this.handleChange} />
        </label>
        <label>
          Runtime:
          <input type="text" name="runtime" placeholder="Runtime here" value={this.state.runtime} onChange={this.handleChange} />
        </label>
        <button className="resetButton" type="cancel" value="Reset">RESET</button>
        <button className="submitButton" type="submit" value="Submit">SUBMIT</button>
      </form>
      </div>
      </Modal>
    )
  }
}
