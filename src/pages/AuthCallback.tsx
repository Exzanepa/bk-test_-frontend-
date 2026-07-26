import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function AuthCallbackPage() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/collections');
    }
  }, [isLoading, isAuthenticated, navigate]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <p className="text-sm text-gray-600">Loading...</p>
    </div>
  );
}