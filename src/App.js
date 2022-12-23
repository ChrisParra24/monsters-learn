import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// ************* With this form, we create a functional component
// ************* We do it based on arrow functions

// useState() hook ---> we used this function to update the state our
// functional component, we have to assign useState() like this:
// [value,setValue]

// useEffect() hook ---> we used this function to side effects, I mean
// modify something that it's out of the scope of the function or to re-render the functional component

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  },[]);

  const onSearchChange = (event)=> {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  },[monsters,searchField]);

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className="monsters-search-box" onChangeHandler={onSearchChange} placeholder="Search monsters"></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

// ************* With this form, we create a class component

// class App extends Component {
  
//   constructor(){
//     super();
    
//     this.state = {
//       monsters : [],
//       searchField : ''
//     }
//   }

//   //Este metodo sirve para cuando se crea el componente por primera vez
//   componentDidMount() {
//     fetch('http://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState(() => {
//         return {monsters:users}
//       }));
//   }

//   onSearchChange = (event)=> {
//     const searchField = event.target.value.toLowerCase();
    
//     this.setState(()=>{
//       return {searchField}
//     });
//   }

//   render(){

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox className="monsters-search-box" onChangeHandler={onSearchChange} placeholder="Search monsters"></SearchBox>
//         <CardList monsters={filteredMonsters}></CardList>
//       </div>
//     );
//   }
// }

export default App;
