var React = require('react');
var createReactClass = require('create-react-class');
var ListItem = require('./listitem.jsx');


var ingredients = [{"id":1, "text":"ham"}, {"id":2, "text":"cheese"}];



var List = createReactClass({
    
    render: function(){
        var listItems = ingredients.map(function(item){
            return <ListItem key={item.id} ingredient={item.text}/>;
        });
        return (<ul>{listItems}</ul>);
    }
});



module.exports = List;