import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
//------------------------------------------------------------------------------
import { Container } from './styles'
import api from '~/services/api';
import Contact from '~/components/Contacts/Contact'
import Searchbar from '~/components/Searchbar';
//------------------------------------------------------------------------------
export default function DashboardFollowing({
  handleContactSelect,
  setListState
}) {
  const user_id = useSelector(state => state.user.profile.id);

  const [ contacts, setContacts ] = useState([]);
  const [defaultContacts, setDefaultContacts] = useState([]);
  const [inputState, setInputState] = useState('');
  const [selectedContactId, setSelectedContactedId] = useState();

  useEffect(() => {
    loadWorkers('');
  },[]);

  const handleUpdateInput = async (input) => {
    const filteredList = defaultContacts.filter(c => {
      let workerName = c.worker_name + c.first_name + c.last_name
      return workerName.toLowerCase().includes(input.toLowerCase())
    })
    setContacts(filteredList)
    setInputState(input)
  }

  async function loadWorkers(input) {
    const response = await api.get(`users/${user_id}/following`, {
    })

    setContacts(response.data);
    setDefaultContacts(response.data);
  }
  //----------------------------------------------------------------------------
  return (
    <Container>
      <header className='contact-header'>
        <div className="sub-tasks-buttons-div">
          <label className="title-label">Following</label>
          <button
            className="task-button grey"
            onClick={() => setListState(0)}
          >Back</button>
        </div>

        <div className='list-header-div'>
          <Searchbar
            className="header-input"
            input={inputState}
            onChange={handleUpdateInput}
            placeholder="Search Contact"
          />
        </div>
      </header>

      {/* contacts */}
      <ul className='contact-list'>
        { contacts.map((c) =>
          <Contact
            key={c.id}
            contact={c}
            handleContactSelect={handleContactSelect}
            selectedContactId={selectedContactId}
          />
        )}
      </ul>

    </Container>
  )
}
