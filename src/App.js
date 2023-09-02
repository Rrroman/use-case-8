import Container from './components/Layout/Container/Container';
import MessageForm from './features/MessageForm/MessageForm';

function App() {
  return (
    <Container>
      <h1>Welcome to Message App!</h1>
      <MessageForm />
    </Container>
  );
}

export default App;
