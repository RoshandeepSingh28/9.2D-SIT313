// src/App.js
import { Route, Routes } from 'react-router-dom';
import NavBar from './routes/NavBar';
import Post from './routes/Post';
import {FindQuestion} from './routes/FindQuestion';
import Plans from './routes/Plans';
import Payment from './routes/Payment';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route path='post' element={<Post />} />
        <Route path='find-question' element={<FindQuestion />} />
        <Route path='plans' element={<Plans />} />
        <Route path='payment' element={<Payment />} />
      </Route>
    </Routes>
  );
}
