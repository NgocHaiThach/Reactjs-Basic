// import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
// import { render } from '@testing-library/react';
import { Component } from 'react';
import TrafficLights from './components/TrafficLights';
import downImg from './img/down.svg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
      { title: 'đi ăn cưới', isComplete: true, }, 
      { title: 'đi ăn hỏi', isComplete: true, }, 
      { title: 'đi nhậu', isComplete: false,  },
    ]}

    this.onKeyUp = this.onKeyUp.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete
      const { todoItems } = this.state
      const index = todoItems.indexOf(item)
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  onKeyUp(event) {
   
    if (event.keyCode === 13) {
      let text = event.target.value
      text = text.trim()
      if (!text) {
        return
      }
      this.setState({
        newItem: '',
        todoItems: [
          {title: text, isComplete: false},
          ...this.state.todoItems
        ]
      })
    }
  }

  onChange(event) {
    this.setState({
       newItem: event.target.value
    })
  }

  render() {
   
    const {todoItems, newItem} = this.state
    if(todoItems.length) {
      return (
        <div className="App">
          <div className="Header">
            <img src={downImg} width={32} height={32} />
            <input 
            type="text" 
            placeholder="Thêm ghi chú"
            value={newItem}
            onChange={this.onChange} 
            onKeyUp={this.onKeyUp}/>
          </div>
          {
            todoItems.length && todoItems.map((item, index) => 
            <TodoItem 
            key={index} 
            item={item} 
            onClick={this.onItemClicked(item)} />
          )}
          {/* <TrafficLights /> */}
        </div>
      );
    }
    else{
      return <div className="App">Nothing here</div> ;
    }
  }

}

export default App;
