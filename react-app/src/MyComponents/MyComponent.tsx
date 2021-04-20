import React from 'react';
import MyList from './MyList';

export interface IProps {
  item: MyItem;
}

export interface MyItem {
  title: string;
  name: string;
}

class MyComponent extends React.Component<IProps, any> {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.item.title}</h1>
        <h1>{this.props.item.name}</h1>
      </React.Fragment>
    );
  }
}

export default MyComponent;