import './App.css';
import Qutions from './q';

function App() {
  return (
    <div className="app">
      <h1>نظام الأختبارات التجريبي</h1>

      <div>
        <Qutions />
      </div>
      <div className="card"></div>
      <p className="read-the-docs">
        © جميع الحقوق محفوظة لدى شركة الفضاء للحلول البرمجية
        <span style={{ margin: 1 }}>{new Date().getFullYear()}</span>
      </p>
    </div>
  );
}

export default App;
