const App =() =>{

  const handleChange=(e) =>{
    console.log(e.target.value);

  }
  return(
    <div>
      <h1>React App</h1>
      <input
      type="text"
      onchange={handleChange}
      />

    </div>
  )
}

export default App;