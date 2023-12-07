import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './Pages/RootLayout'
import HomePage from './Pages/HomePage'
import ErrorPage from './Pages/ErrorPage'
import Bookmark from './Pages/Bookmark'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/bookmarks', element: <Bookmark /> },
    ],
    errorElement: <ErrorPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
