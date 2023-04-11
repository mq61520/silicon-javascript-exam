import { Fragment } from 'react';
import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom';
import { publicPages } from './routes/index.js';
import DefaultLayout from './layouts/Default';
import './App.css'

function App() {

  return (
    <div className="App">
      <BRouter>
         <Routes>
            {publicPages.map((page, index) => {
               const Page = page.component;

               let Layout = DefaultLayout;

               if (page.layout) {
                  Layout = page.layout;
               } else if (page.layout === null) {
                  Layout = Fragment;
               }

               return (
                  <Route
                     key={index}
                     path={page.path}
                     element={
                        <Layout>
                           <Page />
                        </Layout>
                     }
                  />
               );
            })}
         </Routes>
      </BRouter>
    </div>
  )
}

export default App
