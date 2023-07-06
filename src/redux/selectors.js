export const getContacts = state => {
  return {
    items: state.contacts.contacts.items,
    isLoading: state.contacts.contacts.isLoading,
    error: state.contacts.contacts.error,
  };
};
