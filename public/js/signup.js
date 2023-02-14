// $(document).ready( function() {
//   var templateSource = $("#details-template").html();
//   var template = Handlebars.compile(templateSource);
//   $('#submitButton').click(function(){
//     $("#detailsBox").html(template({"nameValue":$('#nameInput').val(), "emailLogin":$('#emailInput').val()}));
//   });
// });


async function handleSignupForm(event) {
  event.preventDefault();
  const userName = document.querySelector('#signupUsername').value.trim();
  const password = document.querySelector('#signupPassword').value.trim();
  if (userName && password) {
    const response = await fetch('/api/users', {
      method: 'post',
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


document.querySelector('#signup').addEventListener('submit', handleSignupForm )
    