import React ,{Component } from 'react'

class contactList extends React.Component{
render()
{
  const pepole = [
    {name:'huss'},
    {name:'ahmed'},
    {name:'mohamed'} 
  ]
  return <ol>
    {
      pepole.map(person => 
        (
          <li key={person.name} > {person.name} </li>

        )      
        )

    }
  </ol>
}
}


class App extends Component  {
   render(){
    return (
    <div className="App">
    <contactList/>
    </div>
  );
    }
    }
  


export default App;
