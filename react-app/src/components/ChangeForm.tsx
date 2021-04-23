import React from 'react';

type Lot = {
    title: string;
    description: string;
};

interface IState { 
    title: string; 
    description: string;
};

export class ChangeForm extends React.Component <Lot, IState> {
    constructor(props: Lot) {
      debugger;
      super(props);
      this.state = {title: this.props.title, description: this.props.description};
      

      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange(e: any) {
      var val = e.target.value;
      this.setState({title: val, description: val});
  }
 
    handleSubmit(e: any) {
      e.preventDefault();
      alert("Название лота: " + this.state.title + ", " + "Описание лота: " + this.state.description);
    }
 
    render() {
      return (
          <form onSubmit={this.handleSubmit}>
              <p>
                  <label>Название:</label><br/>
                  <textarea value={this.state.title} onChange={this.onChange}/>
              </p>
              <p>
                  <label>Описание:</label><br />
                  <textarea value={this.state.description} onChange={this.onChange}/>
              </p>
              <input type="submit" value="Отправить"/>
          </form>
      );
    };
}