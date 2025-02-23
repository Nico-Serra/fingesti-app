import React from "react";
import ExpenseList from "./components/ExpenseList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 container mt-4">
        <h1>Benvenuto nella PWA!</h1>
        <ExpenseList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
