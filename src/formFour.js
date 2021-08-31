import React, { Component } from 'react';
import FormField from './utils/formField';
import { validate } from './utils/validate';

class FormFour extends Component {
  state = {
    maxAge: 99,
    loading: false,
    formData: {
      name: {
        element: 'input',
        value: '',
        config: {
          name: 'name_input',
          type: 'text',
          placeholder: 'Enter your name',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
      lastname: {
        element: 'input',
        value: '',
        config: {
          name: 'lastname_input',
          type: 'text',
          placeholder: 'Enter your lastname',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
      age: {
        element: 'select',
        value: '',
        config: {
          name: 'age_input',
        },
        validation: {
          required: true,
          minNum: 20,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
      message: {
        element: 'textarea',
        value: '',
        config: {
          name: 'message_input',
          rows: 3,
          placeholder: 'Enter your message',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
    },
  };
  generateOptions = () => {
    const ageArray = [];
    for (let i = 1; i < this.state.maxAge; i++) {
      ageArray.push(i);
    }

    return ageArray.map((value, i) => (
      <option key={i} value={value}>
        {value}
      </option>
    ));
  };
  updateForm = (element) => {
    const newFormData = { ...this.state.formData };
    const newElement = {
      ...newFormData[element.id],
    };
    newElement.value = element.event.target.value;
    //valid
    let validateData = validate(newElement);
    newElement.valid = validateData[0];
    newElement.validationMessage = validateData[1];
    //blur
    if (element.blur) {
      newElement.touched = element.blur;
    }
    newFormData[element.id] = newElement;
    this.setState({
      formData: newFormData,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formData) {
      formIsValid = this.state.formData[key].valid && formIsValid;
    }
    if (formIsValid) {
      this.setState({
        loading: true,
      });
      for (let key in this.state.formData) {
        dataToSubmit[key] = this.state.formData[key].value;
      }
      setTimeout(() => {
        this.setState({ loading: false });
        this.onSuccess();
      }, 2000);
      console.log('Submit form with', dataToSubmit);
    } else {
      alert('Sorry the form is not valid');
    }
  };

  onSuccess = () => {
    let forDataCopy = {
      ...this.state.formData,
    };
    for (let key in this.state.formData) {
      forDataCopy[key].value = '';
      forDataCopy[key].valid = false;
      forDataCopy[key].touched = false;
      forDataCopy[key].validationMessage = '';
    }
    this.setState({
      formData: forDataCopy,
    });
    alert('Thank you we will contact you later... or not');
  };
  render() {
    // console.log(this.state.formData.name);
    return (
      <>
        <div className='container'>
          <form action=''>
            <div className='form-group'>
              <label htmlFor=''>Name</label>
              <FormField
                formData={this.state.formData.name}
                id='name'
                change={(element) => this.updateForm(element)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor=''>Lastname</label>
              <FormField
                formData={this.state.formData.lastname}
                id='lastname'
                change={(element) => this.updateForm(element)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor=''>Age</label>
              <FormField
                formData={this.state.formData.age}
                id='age'
                change={(element) => this.updateForm(element)}
              >
                <option value=''>Select Age</option>
                {this.generateOptions()}
              </FormField>
            </div>
            <div className='form-group'>
              <label htmlFor='message_input'>Message</label>
              <FormField
                formData={this.state.formData.message}
                id='message'
                change={(element) => this.updateForm(element)}
              >
                {' '}
              </FormField>
            </div>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={(e) => this.submitForm(e)}
              disabled={this.state.loading}
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default FormFour;
