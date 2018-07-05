import React, { Component } from "react";
import Autosuggest from 'react-autosuggest';
import Helper from './Helper';
 
 
 
class AutoSuggest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      table_Data:[],
      course_id:'',
    };
    this.fetchCourses();
  }

  fetchCourses = () => {
    let body={}
    let res = Helper("http://192.168.1.17:3000/v1/courses",'GET',body);

    res.then((res) => {
        this.setState({
            table_Data:res
        });
    })
}


  componentDidMount=()=>{
      console.log(this.state.table_Data);
  }

    getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
   
    return inputLength === 0 ? [] : this.state.table_Data.filter(lang =>
        (lang.course_name === null ? '': lang.course_name.toLowerCase().includes(inputValue) )
    );
  };
    getSuggestionValue = suggestion => suggestion.course_name;

    renderSuggestion = suggestion => (
        <div>
          {suggestion.course_name}
        </div>
      );
 
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  courseIdCheck = (value) => {
    this.state.table_Data.find((element)=>{
         
    })
  }
 
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
 
  render() {
    const { value, suggestions } = this.state;
 
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Enter Course Name',
      value,
      onChange: this.onChange,
    };
 
    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default AutoSuggest;