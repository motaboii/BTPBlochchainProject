import {React,useState} from 'react'

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can add logic to toggle dark mode styles or classes in your entire application
    // For now, let's just log the current dark mode state
    console.log('Dark Mode:', darkMode);
    // Add logic to apply the dark mode class to the body
    document.body.classList.toggle('dark-mode', darkMode);
  };

  return (
    <button onClick={toggleDarkMode}>🌙</button>
  )
}

export default DarkMode