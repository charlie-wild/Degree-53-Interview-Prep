import React, { Fragment } from 'react';
import Collapsible from 'react-collapsible';
import './results.css';


const Results = (props) => {
  const { results } = props;
  return (
    <div className="results">
      {results.length
        ? (
          <Fragment>
          {results.map((result) => 
            <h3 className="title is-3 is-centered">{result.name}</h3>
            <p className="title is-5">
              {results.description}
            </p>
            <p>
              Click
              <a href={result.html_url}> here </a>
              to visit the repo, or detailed info to view more information.
            </p>
            <Collapsible trigger="Detailed Info">
              <p>
                Number of open issues:
                {result.open_issues}
              </p>
              <p>
                Forks:
                {result.forks}
              </p>
            </Collapsible>
          )}
          </Fragment>
        )
        : <p>No Result Found</p>}
    </div>
  );
}


export default Results;
