import { FetchCount } from './components/FetchCount'
import { useState } from 'react'
import classes  from './App.module.css'
import ProductList from './components/ProductList'
import { InputField } from './components/InputField'

function App() {
  const [count, setCount] = useState('')
  

  return (
    <div className={classes.App}>
        <FetchCount/>   
        <InputField/>   
        <ProductList />
    </div>
  );
}

export default App;
