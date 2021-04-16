"use strict";

function About() {
    return (
        <React.Fragment>
            <h1>About the Author</h1>
            <p>Some stuff about the author!</p>
        </React.Fragment>
    );
}

ReactDOM.render(<About />, document.getElementById('about'));