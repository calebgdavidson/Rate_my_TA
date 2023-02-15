async function handleLoginForm(event) {
    event.preventDefault();
    const userName = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
    if (userName && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
          userName,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        document.location.replace('/dashboard');
        } else {
        alert(response.statusText);
      }
    }
}
  
  
document.querySelector('#login').addEventListener('submit', handleLoginForm )