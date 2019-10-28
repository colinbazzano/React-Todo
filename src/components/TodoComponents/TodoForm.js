import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        // this of this.state as const [newTodo, setNewTodo] = useState('');
        this.state = {
            newTodo: "",
        };
    } // end of constructor

    // change handler
    handleChanges = e => {
        this.setState({
            newTodo: e.target.value
        });
    };

    //submit handler
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: "" });
    };

    render() {
        console.log('rendering the form')
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo">New Todo</label>
                <input
                type="text"
                name="todo"
                id="todo"
                value={this.state.newTodo}
                onChange={this.handleChanges}
                />
                <button type="submit">Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;