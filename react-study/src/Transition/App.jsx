import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { TransitionGroup } from 'react-transition-group'
import "./style.css"
export class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            books: [
                { id: 111, name: "你不知道JS", price: 99 },
                { id: 222, name: "JS高级程序设计", price: 88 },
                { id: 333, name: "Vuejs高级设计", price: 77 },
            ]
        }
    }
    add() {
        const books = [...this.state.books];
        books.push({ id: new Date().getTime(), name: "React高级程序设计", price: 99 })
        this.setState({ books })
    }
    removeBook(index) {
        const books = [...this.state.books]
        books.splice(index, 1)
        this.setState({ books })
    }
    render() {
        return (
            <div>
                <TransitionGroup component="ul">
                    {
                        this.state.books.map((item, index) => {
                            return (
                                <CSSTransition key={item.id} classNames="books" timeout={1000}>
                                    <li>
                                        <span>{item.name}--{item.price}</span>
                                        <button onClick={e => this.removeBook(index)}>删除</button>
                                    </li>
                                </CSSTransition>
                            )

                        })
                    }
                    <button onClick={e => this.add()}>添加</button>
                </TransitionGroup>

            </div>
        )
    }
}

export default App