import './App.css';
import Menu from './Menu';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(null);
  const [menu, setMenu] = useState(['짜장면', '치킨', '탕수육', '치즈불닭', '마라탕', '불고기', '간장게장', '스시', '덮밥', '아무거나']);

  function chooseHandle() {
    let rand = Math.floor(Math.random() * 10);
    console.log(menu[rand]);
    setNum(menu[rand]);


  }
  return (
    <div className="App">
      <h1>오늘의 점심 메뉴 추천</h1>
      <p>메뉴를 고르기 어려워 하는 당신을 위해 메뉴를 골라드립니다!</p>
      <br></br>
      <button onClick={chooseHandle}>메뉴추천</button>
      <h3>오점추: {num}</h3>
      <Menu />
    </div>
  );
}

export default App;
