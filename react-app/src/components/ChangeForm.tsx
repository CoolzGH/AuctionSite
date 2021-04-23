import React from 'react';

type Lot = {
    title: string;
    description: string;
};

interface IState { 
    title: string; 
    description: string;
    [key: string]: any;
};

export class ChangeForm extends React.Component <Lot, IState> {
    constructor(props: Lot) {
      super(props);
      this.state = {
        title: this.props.title,
        description: this.props.description
      };
      
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event: any) {
    alert(`Название лота: + ${this.state.title}, Описание лота: ${this.state.description}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Название лота:
          <br/>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
        Описание лота:
          <br/>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleInputChange} />
        </label>
              <input type="submit" value="Отправить"/>
          </form>
      );
    };
}