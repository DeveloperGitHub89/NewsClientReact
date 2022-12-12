import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllNews } from './components/AllNews';
import { Home } from './components/Home';
import { NavigationBar } from './components/NavigationBar';
import { TopHeadlines } from './components/TopHeadlines';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/all-news' element={<AllNews></AllNews>}></Route>
          <Route path='/top-headlines' element={<TopHeadlines></TopHeadlines>}></Route>
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
