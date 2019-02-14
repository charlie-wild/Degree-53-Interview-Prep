import React, { Fragment } from 'react';
import Collapsible from 'react-collapsible';
import Loader from 'react-loader-spinner';
import './results.css';


const Results = (props) => {
  const { results, loading } = props;
  return (
    <div className="results">
      {results.length
        ? (
          <Fragment>
            <h3 className="title is-3 is-centered">{results[0].name}</h3>
            <p className="title is-5">
              {results[0].description}
            </p>
            <p>
              Click
              <a href={results[0].html_url}> here </a>
              to visit the repo, or detailed info to view more information.
            </p>
            <Collapsible trigger="Detailed Info">
              <p>
                Number of open issues:
                {results[0].open_issues}
              </p>
              <p>
                Forks:
                {results[0].forks}
              </p>
            </Collapsible>
          </Fragment>
        )
        : !loading ? <p>No Result Found</p> : <Loader
          type="Puff"
          color="#00BFFF"
          height="100"
          width="100"
        />}
    </div>
  );
}


export default Results;

