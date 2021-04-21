import React from 'react';
import MyComponent, { MyItem } from './MyComponent';

class MyList extends React.Component {

  items: MyItem[]  = [
    { title: "Title 1", name: "Name 1" },
    { title: "Title 2", name: "Name 2" },
    { title: "Title 3", name: "Name 3" },
  ]

  render() {
    return (
      <React.Fragment>
        {this.items.map((el) => {
          return (
            <React.Fragment>
              <MyComponent item={el} />
              <br/>
            </React.Fragment>
          )
        })}
      </React.Fragment>
    );
  }
}

export default MyList;