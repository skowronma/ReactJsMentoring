import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from './Modal';

export default class AddMovie extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     title: '',
     releaseDate: '',
     movieUrl : '',
     genre: '',
     duration: '',
     runtime : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
   }

  handleChange(event) {
   const target = event.target;
   const name = target.name;
   this.setState({[name]: target.value});
  }

  handleSubmit(event) {
   event.preventDefault();
   console.log('Movie added');
  }

  setDate(date){
   this.setState({releaseDate: date});
  }

  resetForm(){
     this.setState({ title: ''});
     this.setState({ releaseDate: ''});
     this.setState({ movieUrl: ''});
     this.setState({ genre: ''});
     this.setState({ duration: ''});
     this.setState({ runtime: ''});
  }

  render(){
    return (
      <Modal onCloseRequest={this.props.onCloseRequest}>
       <h1>ADD MOVIE</h1>
       <div className='formStyle'>
         <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type='text' name='title' className='formStyleInput' placeholder='Movie title here' value={this.state.title} onChange={this.handleChange}/>
          </label>
          <label>
            Release date:
            <DatePicker selected={this.state.releaseDate} className='formStyleInput' placeholder='Select date' onChange={date => this.setDate(date)}/>
          </label>
          <label>
            Movie URL:
            <input type='text' name='movieUrl' className='formStyleInput' placeholder='Movie URL here' value={this.state.movieUrl} onChange={this.handleChange} />
          </label>
          <label>
            Genre:
            <select value={this.state.genre} name='genre' placeholder='Select genre' onChange={this.handleChange}>
              <option value='documentary'>DOCUMENTARY</option>
              <option value='comedy'>COMEDY</option>
              <option value='horror'>HORROR</option>
              <option value='crime'>CRIME</option>
            </select>
          </label>
          <label>
            duration:
            <input type='text' name='duration' className='formStyleInput' placeholder='duration here' value={this.state.duration} onChange={this.handleChange} />
          </label>
          <label>
            Runtime:
            <input type='text' name='runtime' className='formStyleInput' placeholder='Runtime here' value={this.state.runtime} onChange={this.handleChange} />
          </label>
          <input className='resetInput' type='reset' value='Reset' onClick={this.resetForm} />
          <input className='submitInput' type='submit' value='Submit'/>
         </form>
        </div>
      </Modal>
    )
  }
}
