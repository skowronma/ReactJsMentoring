import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Field, Form, ErrorMessage, useField, useFormikContext  } from 'formik';
 import * as Yup from 'yup';
import Modal from './Modal';
import updateMovies from '../actions/actionCreator';
import { connect } from 'react-redux';

export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />
  );
};

class EditMovie extends React.Component{
  constructor(props) {
   super(props);
    this.movie = props.movie
   }

  render(){
    return (
      <Modal onCloseRequest={this.props.onCloseRequest}>
       <h1>EDIT MOVIE</h1>
       <div className='formStyle'>
         <Formik
             enableReinitialize={true}
             initialValues={this.movie}
             validationSchema={Yup.object({
                 title: Yup.string()
                   .required('Title required'),
                 poster_path: Yup.string()
                   .matches(
                       /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                       'Enter correct url!'
                   )
                .required('Movie URL required'),
               genres: Yup.string()
                 .required('Genre required'),
               overview: Yup.string()
                 .required('Overview required'),
               runtime: Yup.string()
                 .matches(/^[0-9]*$/)
                 .required('Runtime required'),
                 id: Yup.string()
                   .required('Title required')
                   })}
               onSubmit={(values, { setSubmitting }) => {
                   alert(JSON.stringify(values, null, 2));
                   this.props.dispatch(updateMovies(values));
                  setSubmitting(false);
               }}
             >
         <Form>
         <label>
           Movie ID:
           <label className='displayInline'>{this.movie.id}</label>
         </label>
          <label>
            Title:
            <Field type='text' name='title' className='formStyleInput' placeholder='Movie title here' />
          </label>
          <ErrorMessage name='title' component='div' className='errorMsg'/>
          <label>
            Release date:
            <DatePickerField name="release_date"  className='formStyleInput'/>
          </label>
          <label>
            Movie URL:
            <Field type='text' name='poster_path' className='formStyleInput' placeholder='Movie URL here' />
          </label>
          <ErrorMessage name='poster_path' component='div' className='errorMsg'/>
          <label>
            Genre:
            <Field type='text' name='genres' className='formStyleInput' placeholder='Select genre'/>
          </label>
          <ErrorMessage name='genres' component='div' className='errorMsg'/>
          <label>
            Overview:
            <Field type='text' name='overview' className='formStyleInput' placeholder='Overview here' />
          </label>
          <ErrorMessage name='overview' component='div' className='errorMsg'/>
          <label>
            Runtime:
            <Field type='text' name='runtime' className='formStyleInput' placeholder='Runtime here' />
          </label>
          <ErrorMessage name='runtime' component='div' className='errorMsg'/>
          <button className='resetInput' type='reset'>RESET</button>
          <button className='submitInput' type='submit'>Submit</button>
         </Form>
         </Formik>
        </div>
      </Modal>
    )
  }
}

export default connect()(EditMovie);
