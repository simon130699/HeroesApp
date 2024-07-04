import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../../hooks/useForm';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const { formState, onInputChange, onResetForm } = useForm({ username: '' });
  const { username } = formState;

  const onLogin = (e) => {
    e.preventDefault();

    const lastPath = localStorage.getItem('lastPath') || '/';
    login(username);

    navigate(lastPath, {
      replace: true
    });

    onResetForm();
  }

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f4',
      fontFamily: 'Arial, sans-serif',
    },
    card: {
      width: '100%',
      maxWidth: '400px',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '4px',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>
        <hr />
        <form onSubmit={onLogin}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onInputChange}
            placeholder="Enter your name"
            style={styles.input}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
