import Container from './components/Layout/Container/Container';
import Table from './components/UI/Table/Table';
import MessageForm from './features/MessageForm/MessageForm';

function App() {
  return (
    <Container>
      <h1>Welcome to Message App!</h1>
      <MessageForm />
      <Table />
    </Container>
  );
}

export default App;
