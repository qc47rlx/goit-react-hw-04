import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchImg = form.elements.searchImg.value;

    if (searchImg.trim() === "") {
      toast("Ooops! You haven't typed anything...", {
        style: {
          color: 'red',   
        },
      });
      return;
    }

    onSearch(searchImg);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchImg"
           autoComplete="off"
          autoFocus
          placeholder="Type something..."
        />
        <button className={css.btn} type="submit">
          Find!
        </button>
        <Toaster />
      </form>
    </header>
  );
}