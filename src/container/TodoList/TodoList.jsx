import { Component } from 'react';
import Input from './../../components/Input/Input';
import Button from './../../components/Button/Button';
import List from './../../components/List/List';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            list: []
        };
    };

    inputChangeHandler = (event) => {
        const value = event.target.value;
        // Updating the state is async by nature.
        this.setState({
            inputVal: value
        });
    };

    inputKeyUpHandler = (event) => {
        if(event.key === "Enter"){
            this.buttonClickHandler();
        }
    };

    buttonClickHandler = () => {
        if(this.state.inputVal.trim()){
            const todoList = [...this.state.list];
            todoList.push(this.state.inputVal);
            this.setState({
                inputVal: '',
                list:todoList
            });
        } else {
           this.setState({
               inputVal: ''
           });
        }
    };

    componentDidMount(){
        let todoList = localStorage.getItem('todoList');
        if(todoList) {
            todoList = JSON.parse(todoList);
            this.setState({
                list:todoList
            });
        } 
        console.log('componentDidMount called====>>');
    };

    componentDidUpdate() {
        const todoList = JSON.stringify(this.state.list);
        localStorage.setItem('todoList',todoList);
        console.log('component is updating !!!! ');
    };


    render() {

        console.log('TodoList Component =======>>');
        // This is way you can used the props in class component to get the value. 
        //this.props.attr

        return (
            <>
                <Input 
                    value={this.state.inputVal}
                    onChangeHandler={this.inputChangeHandler}
                    onKeyUpHandler={this.inputKeyUpHandler}/>
                <Button 
                    onClickHandler={this.buttonClickHandler}
                    btnText="Add to the List"/>
                <List 
                    value={this.state.list}/>
            </>
        );
    };

};

export default TodoList;