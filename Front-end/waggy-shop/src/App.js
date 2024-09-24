import './App.css';
import { Routes, Route } from 'react-router-dom';
import { publicRouter } from './routes/route';
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRouter.map((route, index) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.component;
          return <Route key={index} path={route.path} element={
            <Layout>
              <Page />
            </Layout>
          }>
          </Route>
        })}
      </Routes>
    </div>
  );
}
export default App;
