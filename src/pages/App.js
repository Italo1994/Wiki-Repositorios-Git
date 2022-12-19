import { useState } from 'react';

import gitLogo from '../assets/git-logo.svg';
import { Container } from './styles';

import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import {api} from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
      const {data} = await api.get('repos/${currentRepo}')

      if(data.id) {
        setRepos(prev => [...prev, data]);
      }
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo.e.target.value } />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo />) }
    </Container>
  );
}

export default App;
