import React, { Component, Fragment } from 'react';

class Results extends Component {
  render() {
    const { results } = this.props;
     return (
      <div>
       {results.length ?
       <Fragment>
             <h3>{results[0].name}</h3>
             <p>{results[0].description}</p>
       </Fragment>
       
     : <p>No Result Found</p>}
      </div>
    );
  }


}

export default Results;