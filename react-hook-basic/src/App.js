import querySting from 'query-string'
import './App.scss';
import ColorBox from './components/ColorBox';
import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import PostFilterForm from './components/PostFilterForm';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';
import MagicBox from './components/MagicBox';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'coding' },
    { id: 2, title: 'sleep' },
    { id: 3, title: 'play' },
  ])

  const [postList, setPostList] = useState()
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    totalRows: 1,
  })
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
    title_like: '',
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        //_limit=10&_page=1
        const paramsString = querySting.stringify(filter)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`
        const respone = await fetch(requestUrl)
        const responeJSON = await respone.json()
        console.log({ responeJSON })

        const { data, pagination } = responeJSON
        setPostList(data)
        setPagination(pagination)
      } catch (error) {
        console.log('fail to posts list: ', error.message)
      }
    }

    fetchPostList()
  }, [filter])



  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0) return

    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList]
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  }

  function handlePageChange(newPage) {
    console.log(newPage)
    setFilter({
      ...filter,
      _page: newPage,
    })
  }

  function handleFilterChange(newFilter) {
    console.log(newFilter)
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.searchTerm
    })
  }

  const [showClock, setShowClock] = useState(true)

  return (
    <div className="App">
      {/* <h1>React Hook - TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}

      {/* <h1>React Hook - PostList - useEffect</h1>
      <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}

      <h1>React Hooks - Clock - useEffect</h1>
      {showClock && <Clock />}
      <BetterClock />
      <button onClick={() => setShowClock(false)}>Hide Clock</button>

      <MagicBox />
    </div>
  );
}

export default App;
