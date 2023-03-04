import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import auth from './firebase/firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './features/auth/authSlice';
import { Toaster } from 'react-hot-toast';

// console.log(process.env);

function App() {
  const dispatch = useDispatch();
  // const {} = useSelector((state) => state.auth);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
      }
    });
  }, []);
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
