import ActivityDashboard from 'features/activities/dashboard/ActivityDashboard';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from 'features/home/HomePage';
import ActivityForm from 'features/activities/form/ActivityForm';
import ActivityDetails from 'features/activities/details/ActivityDetails';
import { ToastContainer } from 'react-toastify';

import AppLayout from './AppLayout';
import TestErrors from 'features/errors/TestError';
import NotFound from 'features/errors/NotFound';
import ServerError from 'features/errors/ServerError';




function App() {
  const location = useLocation();

  const renderMultiRoutes = ({ element: Element, paths, ...rest }: any) =>
    paths.map((path: string) => <Route key={location.key} path={path} {...rest} element={Element} />);

  return (

    <div className="App">
      <ToastContainer position='bottom-right' hideProgressBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<AppLayout />}>

          <Route path='/activities' element={<ActivityDashboard />} />
          <Route path='/activities/:id' element={<ActivityDetails />} />
          {renderMultiRoutes({
            paths: ['/createActivity', '/manage/:id'],
            element: <ActivityForm />
          })}
          <Route path='/errors' element={<TestErrors />} />
          <Route path='/server-error' element={<ServerError />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>


    </div >
  );
}

export default App;
