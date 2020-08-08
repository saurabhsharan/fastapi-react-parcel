import React from 'react';

function App() {
  let [message, setMessage] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/hello').then(r => r.json()).then(response => {
      setMessage(response.message);
    });
  });

  if (!message) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {message}
    </div>
  );
}

export default App;