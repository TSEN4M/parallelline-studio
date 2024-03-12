
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import List from  './components/List.jsx'
import Gallery from './components/Gallery.jsx';


/* data for the cards component */



function App() {

  /* data for the list components */
const fruits =[{id : 1, name : "Apple", calories : 95},
              {id : 2, name: "Oranges", calories : 45},
              {id : 3, name: "Banana", calories : 105},
              {id : 4, name: "Pineapple", calories : 60},
              {id : 5, name: "Mango", calories : 120}];

const vegetables =[{id : 6, name : "Potatoe", calories : 110},
                  {id : 7, name: "Carrot", calories : 15},
                  {id : 8, name: "Onion", calories : 35},
                  {id : 9, name: "Peas", calories : 40},
                  {id : 10, name: "Brocoli", calories : 25}];



  return (
    <>
    <Header/>
    <Gallery/>
    <Footer/>
    {fruits.length > 0 ? <List items={fruits} category="Fruit"/> : null }
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/> }
    </>
  )
}

export default App
