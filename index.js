function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Swim 2.4 Miles',
      isCompleted: false,
    },
    {
      text: 'Bike 112 miles',
      isCompleted: false,
    },
    {
      text: 'Run 26.2',
      isCompleted: false,
    },   
    {
      text: 'Fall down',
      isCompleted: false,
    }           
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
