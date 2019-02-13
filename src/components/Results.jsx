import React, { Component, Fragment } from 'react';
import Collapsible from 'react-collapsible';

class Results extends Component {
  render() {
    const { results } = this.props;
     return (
      <div>
       {results.length ?
       <Fragment>
             <h3>{results[0].name}</h3>
             <p>Click <a href={results[0].html_url}>here </a>to visit the repo.</p>
             <p>{results[0].description}</p>
             <Collapsible trigger='Detailed Info'>
               <p>Placeholder</p>
             </Collapsible>            
           
       </Fragment>
       
     : <p>No Result Found</p>}
      </div>
    );
  }


}

export default Results;