    const headding = React.createElement(
        "h1", 
        {id:"headding"}, 
        [
             React.createElement(
            "div", 
            {id:"container"},
            React.createElement(
                "h2",
                {id:"innerHeading", key: 0},
                "hello mowa"
            )
        ),
         React.createElement(
            "div", 
            {id:"container1"},
            React.createElement(
                "h2",
                {id:"innerHeading", key: 1},
                "hello mowa"
            )
        )
        ]
    );


    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(headding)