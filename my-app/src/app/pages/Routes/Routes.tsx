import {
  createRoutesFromElements,
  createHashRouter,
  Route,
} from 'react-router-dom';
import { HomePage } from '../HomePage';
import { PostsPage } from '../PostsPage';
import { ProfilePage } from '../ProfilePage';
import { ErrorPage } from '../ErrorPage';
import { App } from '../App';

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<App />}
        errorElement={<ErrorPage />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="/posts"
          element={<PostsPage />}
        />
        <Route
          path="/profile"
          element={<ProfilePage />}
        />
      </Route>
    </>,
  ),
);
