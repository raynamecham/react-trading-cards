"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <h1>Welcome user!</h1>
      <p><a href="/cards">Link to cards page</a></p>
      <p><a href="/about">Link to about page</a></p>
      <img src="/static/img/balloonicorn.jpg" />
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
