import './App.css'
import InstrumentPage from '@features/cart/page/InstrumentPage.jsx'

const INSTRUMENTOS = [
    {
      "_id":1,
      "name": "Guitarra",
      "price": 150,
      "img": "https://picsum.photos/200/300",
    },
    {
      "_id":2,
      "name": "Piano",
      "price": 1200,
      "img": "https://picsum.photos/200/300",
    },
    {
      "_id":3,
      "name": "Violín",
      "price": 700,
      "img": "https://picsum.photos/200/300",
    },
    {
      "_id":4,
      "name": "Batería",
      "price": 900,
      "img": "https://picsum.photos/200/300",
    },
    {
      "_id":5,
      "name": "Flauta",
      "price": 100,
      "img": "https://picsum.photos/200/300",
    },
    {
      "_id":6,
      "name": "Trompeta",
      "price": 450,
      "img": "https://picsum.photos/200/300",
    },
    {
      "_id":7,
      "name": "Saxofón",
      "price": 600,
      "img": "https://picsum.photos/200/300",

    },
    {
      "_id":8,
      "name": "Teclado",
      "price": 300,
      "img": "https://picsum.photos/200/300",
    },
    {
      "_id":9,
      "name": "Bajo",
      "price": 500,
      "img": "https://picsum.photos/200/300",

    },
    {
      "_id":10,
      "name": "Acordeón",
      "price": 450,
      "img": "https://picsum.photos/200/300",
    },
    {
      "_id":11,
      "name": "Ukelele",
      "price": 90,
      "img": "https://picsum.photos/200/300",
    },
    {
      "_id":12,
      "name": "Clarinete",
      "price": 350,
      "img": "https://picsum.photos/200/300",
    },
    {
      "_id":13,
      "name": "Contrabajo",
      "price": 800,
      "img": "https://picsum.photos/200/300",
    },
    {
      "_id":14,
      "name": "Flauta",
      "price": 100,
      "img": "https://picsum.photos/200/300",
    }
]

function App() {
  return (
    <>
      <InstrumentPage collection = {INSTRUMENTOS} />
    </>
  )
}

export default App
