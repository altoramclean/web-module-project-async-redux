import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { getJoke } from'../actions/index';


const Joke = ( {joke, isFetching, error, dispatch}) =>{

useEffect(()=> {
    dispatch(getJoke());
  }, []);

  if (error) {
    return <h2>There Seems to be an console.error();: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Getting a Joke for you!</h2>;
  }

  const handleClick = () => {
    dispatch(getJoke());
  }

    return (
        <> 
        <div>
            <h2> Here is a Joke: </h2> <p>{joke.setup}</p>
            <p>{joke.delivery}</p>

            <button onClick = {handleClick}>Next</button>
        </div>
        </>
    )
}

const mapStateToProps = state => {
return {
    joke:state.joke,
    isFetching: state.isFetching,
    error: state.error
    }
};
export default connect(mapStateToProps)(Joke);