// Initialize Firebase and wire the contact form to Realtime Database
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8xOJk81aAJRbIJTszonJK1BC-K3vcqp4",
  authDomain: "mobile-programming-f044f.firebaseapp.com",
  databaseURL: "https://mobile-programming-f044f-default-rtdb.firebaseio.com",
  projectId: "mobile-programming-f044f",
  storageBucket: "mobile-programming-f044f.firebasestorage.app",
  messagingSenderId: "9768168880",
  appId: "1:9768168880:web:24f7e544d18d92429aba75",
  measurementId: "G-RLZ1765110"
};

firebase.initializeApp(firebaseConfig);
const contactsRef = firebase.database().ref('contacts');

const $ = id => document.getElementById(id);
const form = $('contactForm');
const status = $('status');

function setStatus(msg, cls){
  status.textContent = msg;
  status.className = 'status ' + (cls||'');
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const payload = {
    name: $('name').value.trim(),
    phone: $('phone').value.trim(),
    email: $('email').value.trim(),
    model: $('model').value.trim(),
    service: $('service').value,
    datetime: $('datetime').value,
    message: $('message').value.trim(),
    createdAt: Date.now()
  };

  if(!payload.name || !payload.phone){
    setStatus('Please enter name and phone.', 'error');
    return;
  }

  setStatus('Sending...');
  contactsRef.push(payload)
    .then(() => {
      setStatus('Request sent — we will contact you shortly.', 'success');
      form.reset();
    })
    .catch(err => {
      console.error('Firebase write failed', err);
      setStatus('Error sending request. Please try again.', 'error');
    });
});