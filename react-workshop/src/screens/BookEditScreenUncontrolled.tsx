import { FormEvent, useRef } from 'react';

export const BookEditScreen = () => {
  const titleRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const data = new FormData(ev.target as HTMLFormElement);
    const values = Object.fromEntries(data);
    console.log('values', values);

    console.log(titleRef.current?.value);
  };
  return (
    <div className="book-edit-screen">
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input name="title" ref={titleRef} />
        </label>

        <label>
          Subtitle
          <input name="subtitle" />
        </label>

        <label>
          Author
          <input name="author" />
        </label>

        <button type="submit">
          <span>💾</span>save
        </button>
      </form>
    </div>
  );
};
