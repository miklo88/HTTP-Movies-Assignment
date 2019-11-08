import React, { Component } from "react"
// import api from ""

export default class UpdateMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            
                    <label>
              Director:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            
                    <label>
              Metascore:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            
                    <label>
              Actors:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
