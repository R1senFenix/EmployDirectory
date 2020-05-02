import React from 'react';
import './App.css';
import Table from "./components/Table";

const persons = [
  {
    id: 1,
    name: "Milk",
    lastName: "test",
    email: "hello@world.com",
    showing: true
  },
  {
    id: 2,
    name: "Eggs",
    lastName: "test",
    email: "hello@world.com",
    showing: true
  },
  {
    id: 3,
    firstName: "Cheese",
    lastName: "test",
    email: "hello@world.com",
    showing: false
  },
  {
    id: 4,
    name: "Cake Mix",
    lastName: "test",
    email: "hello@world.com",
    showing: false
  },
  {
    id: 5,
    name: "Carrots",
    lastName: "test",
    email: "hello@world.com",
    showing: false
  },
  {
    id: 6,
    name: "Juice",
    lastName: "test",
    email: "hello@world.com",
    showing: true
  }
];

function App() {
  return <Table persons={persons} />;
}

export default App;
