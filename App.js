const heading = React.createElement('h1', {id:'header'}, 'Hello World from React'); //This will return JS object of type h1 with props & children
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading); //Takes object, converts to h1 & puts in root element in DOM

//Create a nested structure - siblings can be created by passing array of create elements

const headerChild = React.createElement('div',{id: 'header2'}, [React.createElement('p',{id: 'p1'},'Hello Hello'),
React.createElement('p',{id: 'p2'},'Hello2 Hello2')],'New div');
const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(headerChild);