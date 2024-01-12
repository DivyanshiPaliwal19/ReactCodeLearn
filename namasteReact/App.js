// const parent = React.createElement("div",{id:"parent"},

// [React.createElement("div",{id:"child"},

// [React.createElement("h1",{},"hey i am h1 tage"),React.createElement("h3",{},"hey i am h3 tage")]),React.createElement("div",{id:"child2"},

// [React.createElement("h1",{},"hey i am h1 tage"),React.createElement("h3",{},"hey i am h3 tage")])]);
//above code is so complex for nested div and siblings . to make it simple jsx is used

const heading = React.createElement("h1",{id:"heading"},"hello from react");
 //what if mko nested components bnane ho div k andr div n all yto sirf h1 ka hi h
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent);
root.render(heading);