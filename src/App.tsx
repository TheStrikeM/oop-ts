import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Interface } from 'readline';

class Pisyn {
  constructor(public sizePisyn: number, public namePisyn: string) {}
}

class Jopa extends Pisyn {
  constructor(public sizePisyn: number, public namePisyn: string, public sizeJopa: number, public nameJopa: string) {
    super(sizePisyn, namePisyn)
  }
}

interface IList<T> {
  elements: T[],
  add(element: T): void
}

class List implements IList<string> {
  elements: string[] = []
  add(element: string) {
    this.elements.push(element)
  }
} 
class People extends Jopa {
  constructor(
    public sizePisyn: number, 
    public namePisyn: string, 
    public sizeJopa: number, 
    public nameJopa: string,
    public name: string,
    public otch: string,
    public age: number,
    public isLgbt: boolean
    ) {
    super(sizePisyn, namePisyn, sizeJopa, nameJopa)
  }

  hasGay(): string {
    if (this.isLgbt === true) return 'гей'
    else return 'натурал'
  }

  getInfo(): void {
    const isGay: string = this.hasGay()
    const text: string = `${this.name} ${this.otch}, живет ${this.age} лет, он ${isGay}, писюн ${this.sizePisyn} см. (${this.namePisyn}), жопа ${this.sizeJopa} см. ширины (${this.nameJopa})`
    console.log(text)
  }
}

function App() {

  const konstantin = new People(10, "маленький", 20, "жирный", "Константин", "Хасадбарубекович", 10, true)
  konstantin.getInfo()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
