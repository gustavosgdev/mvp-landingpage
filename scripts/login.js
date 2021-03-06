
var inputLogin = document.getElementById('login');
var inputPassword = document.getElementById('password');

async function loginUser(){
  let login = inputLogin.value;
  let senha = inputPassword.value;
  try{
    const response = await fetch(`http://localhost:3000/auth/authenticate`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: login, password: senha})
    });
    const data = await response.json();
    let token = data.token
    document.cookie = `token=${token}`;
    if(data.token != null){
      window.open('/app', '_self');
    }
  }
  catch (error){
    console.error(error);
  }
}