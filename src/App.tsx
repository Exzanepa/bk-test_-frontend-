import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CollectionsPage from './pages/CollectionsPage';
import BookmarksPage from './pages/BookmarksPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collections/:id" element={<BookmarksPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="*" element={<Navigate to="/collections" />} />
      </Routes>
    </BrowserRouter>
  );
}