import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div>
      <header>
        <h1>Phonebook</h1>
      </header>
      <section>
        <Form />
      </section>
      <section>
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </section>
    </div>
  );
};
