import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "짱민1",
    content: "하이 1",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "짱민2",
    content: "하이 2",
    emotion: 4,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: "짱민3",
    content: "하이 3",
    emotion: 3,
    created_date: new Date().getTime()
  },

]

function App() {
  return (
    <div className = "App">
      <DiaryEditor />
      <DiaryList diaryList = {dummyList}/>
    </div>
  );
}

export default App;
