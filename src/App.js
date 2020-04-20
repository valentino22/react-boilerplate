import React, {Component} from 'react'
import {hot} from 'react-hot-loader'

class App extends Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    decrement = () => {
        this.setState(state => ({
            count: state.count - 1
        }))
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h1>Hello World!</h1>
                <h2
                    className={count > 2
                    ? 'warning'
                    : null}>
                    Count: {count}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

const hotFunction = hot(module); // adding hot reloading to the App
export default hotFunction(App);
// it's the same as: export default hot(module)(App);