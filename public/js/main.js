document.addEventListener('DOMContentLoaded', function() {
  try {
    let app = firebase.app();
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          document.getElementById('user-container').innerHTML = user.displayName;
          document.getElementById('user-container').innerHTML += ' <a href="#" onClick="firebase.auth().signOut()">Cierrate sesamo</a>';
        } else {
          showLogin();
        }
    });
  } catch (e) {
    console.error(e);
  }
});