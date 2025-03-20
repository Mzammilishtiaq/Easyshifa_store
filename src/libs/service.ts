// Create fetch instance with default config
const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Helper function to handle responses
const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    if (response.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// Helper function to get headers
const getHeaders = () => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  const token = localStorage.getItem('token');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

// Generic GET request
export const getData = async <T>(
  url: string,
  config?: RequestInit
): Promise<T> => {
  const response = await fetch(`${baseURL}${url}`, {
    method: 'GET',
    headers: getHeaders(),
    ...config,
  });
  return handleResponse<T>(response);
};

// Generic POST request
export const postData = async <T>(
  url: string,
  data?: any,
  config?: RequestInit
): Promise<T> => {
  const response = await fetch(`${baseURL}${url}`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
    ...config,
  });
  return handleResponse<T>(response);
};

// Generic PUT request
export const putData = async <T>(
  url: string,
  data?: any,
  config?: RequestInit
): Promise<T> => {
  const response = await fetch(`${baseURL}${url}`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data),
    ...config,
  });
  return handleResponse<T>(response);
};

// Generic DELETE request
export const deleteData = async <T>(
  url: string,
  config?: RequestInit
): Promise<T> => {
  const response = await fetch(`${baseURL}${url}`, {
    method: 'DELETE',
    headers: getHeaders(),
    ...config,
  });
  return handleResponse<T>(response);
};

// Example usage:
/*
interface User {
  id: number;
  name: string;
  email: string;
}

// GET request
const getUser = async (id: number) => {
  return getData<User>(`/users/${id}`);
};

// POST request
const createUser = async (userData: Omit<User, 'id'>) => {
  return postData<User>('/users', userData);
};

// PUT request
const updateUser = async (id: number, userData: Partial<User>) => {
  return putData<User>(`/users/${id}`, userData);
};

// DELETE request
const deleteUser = async (id: number) => {
  return deleteData<void>(`/users/${id}`);
};
*/
