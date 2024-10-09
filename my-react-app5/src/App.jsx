import './App.css'

const currentHour = 18;

function App() {

  const greeting = 
  (currentHour >= 6 && currentHour) < 12 ? 'Good Morning' :
  (currentHour >= 12 && currentHour) < 18 ? 'Good Afternoon' :
  (currentHour >= 18 && currentHour) <= 24 ? 'Good Evening' :
  'Good Night';

  const greetingStyle = {
    color: 
      (currentHour >= 6 && currentHour < 12) ? 'orange' :
      (currentHour >= 12 && currentHour < 18) ? 'blue' :
      (currentHour >= 18 && currentHour <= 24) ? 'purple' :
      'darkblue'
  };


  return (
    <div>
      <h1 style={greetingStyle}>{greeting}.</h1>
    </div>
  );
  
}

export default App;