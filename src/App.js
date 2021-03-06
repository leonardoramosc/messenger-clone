import './App.css';
import { useEffect, useState } from 'react';
import { FormControl, Input, IconButton } from '@material-ui/core';
import Message from './components/message/Message.component';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
      })
  }, []);

  useEffect(() => {

    setUsername(prompt('Please enter your username'));
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const sendMessage = e => {

    e.preventDefault();

    console.log(input);

    db.collection('messages').add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
    // setMessages([...messages, {username: username, text: input}]);
  }

  return (
    <div className="App">
      <img alt="messenger-logo" src="https://img.icons8.com/fluent/48/000000/facebook-messenger--v1.png"  />
      <h2>Welcome {username}</h2>

      <form className="App__form" onSubmit={sendMessage}>

        <FormControl className="App__fromControl">
          <Input className="App__formControl--input" placeholder="Enter a message..." value={input} onChange={handleChange} />
          <IconButton
            variant="contained"
            color="primary"
            type="submit"
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </FormControl>

      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} loggedUser={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
