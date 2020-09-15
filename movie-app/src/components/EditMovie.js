import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from './Modal';

export default class EditMovie extends React.Component{
  constructor(props) {
   super(props);
    this.movie = props.movie
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
   }

componentDidMount(){
  var date = new Date(this.movie.release_date);
  this.setState({release_date: date});
}
  handleChange(event) {
   this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
   event.preventDefault();
   console.log('Movie edited');
  }

  setDate(date){
   this.setState({release_date: date});
  }

  resetForm(){

  }

  render(){
    return (
      <Modal onCloseRequest={this.props.onCloseRequest}>
       <h1>EDIT MOVIE</h1>
       <div className='formStyle'>
         <form onSubmit={this.handleSubmit}>
         <label>
           Movie ID:
           <label className='displayInline'>{this.movie.id}</label>
         </label>
          <label>
            Title:
            <input type='text' name='title' className='formStyleInput' value={this.movie.title} onChange={this.handleChange}/>
          </label>
          <label>
            Release date:
            <DatePicker selected={this.release_date} className='formStyleInput' onChange={date => this.setDate(date)}/>
          </label>
          <label>
            Movie URL:
            <input type='text' name='movieUrl' className='formStyleInput' value={this.movie.poster_path} onChange={this.handleChange} />
          </label>
          <label>
            Genre:
            <select value={this.movie.genre} name='genre' onChange={this.handleChange}>
              <option value='documentary'>DOCUMENTARY</option>
              <option value='comedy'>COMEDY</option>
              <option value='horror'>HORROR</option>
              <option value='crime'>CRIME</option>
            </select>
          </label>
          <label>
            Overview:
            <input type='text' name='overview' className='formStyleInput'value={this.movie.overview} onChange={this.handleChange} />
          </label>
          <label>
            Runtime:
            <input type='text' name='runtime' className='formStyleInput' value={this.movie.runtime} onChange={this.handleChange} />
          </label>
          <input className='resetInput' type='reset' value='Reset' onClick={this.resetForm} />
          <input className='submitInput' type='submit' value='Submit'/>
         </form>
        </div>
      </Modal>
    )
  }
}
