import { useState, useEffect } from 'react';

export default function MoviesSearchForm({ onSubmitForm, searchParams }) {
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    setSearchValue(searchParams);
  }, []);
  const handleChangeForm = event => {
    setSearchValue(event.target.value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    if (searchValue !== '') {
      onSubmitForm(searchValue);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" value={searchValue} onChange={handleChangeForm} />
      <button disabled={searchValue === ''}>Search</button>
    </form>
  );
}
