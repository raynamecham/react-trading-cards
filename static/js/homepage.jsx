"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <h1>Welcome user!</h1>
      <a href="/cards">Link to cards page</a>
      <img href="/static/img/balloonicorn.jpg"/>
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
