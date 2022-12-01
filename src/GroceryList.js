import { Component } from "react";
import bag from './bag.png';

export class GroceryList extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            groceryList: []
        }
    }

    onChangeEvent(e) {
        this.setState({ userInput: e })
    }

    addItem(input) {
        if ( input === '') {
            alert('Please enter an item')
        } else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({ groceryList: listArray, userInput: '' });
        }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({ groceryList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={ this.onFormSubmit }>
                <div className="container">
                    <input type='text'
                    placeholder="What to you want to buy"
                    onChange={ (e) => { this.onChangeEvent(e.target.value)} }
                    value={ this.state.userInput }/>
                </div>
                <div className="container">
                    <button className="btn btn-add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
                </div>
                <div className="itemContainer">
                    <ul>
                        { this.state.groceryList.map((item, index) => (
                            <li onClick={ this.crossedWord } key={ index }>
                                <img src={ bag } alt='shopping bag' width='40px'/>
                                { item }
                            </li>
                        ))}
                    </ul>
                    </div>
                    <div className="container">
                        <button className="btn btn-delete" onClick={() => this.deleteItem()}>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}