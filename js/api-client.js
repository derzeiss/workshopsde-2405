const URL_API = "http://localhost:4730";

// private helpers

const getJsonInit = (init) => {
  if (!init) return null;
  return {
    ...init,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...init?.headers,
    },
  };
};

const fetchJson = (url, init) => {
  return fetch(url, getJsonInit(init)).then((res) =>
    res.ok ? res.json() : Promise.reject(res)
  );
};

const printJson = (obj) => console.log(JSON.stringify(obj, null, 2));

// api client

export const getBooks = () => fetchJson(`${URL_API}/books`);
export const getBook = (id) => fetchJson(`${URL_API}/books/${id}`);
export const editBook = (book) =>
  fetchJson(`${URL_API}/books/${book.id}`, {
    method: "put",
    body: JSON.stringify(book),
  });
export const addBook = (book) =>
  fetchJson(`${URL_API}/books`, {
    method: "post",
    body: JSON.stringify(book),
  });
export const removeBook = (id) =>
  fetchJson(`${URL_API}/books/${id}`, {
    method: "delete",
  });

// test the client

const book = await getBooks().then((books) => books[0]);
const editedBook = await editBook({
  ...book,
  title: book.title + "_edited",
});
const bookAgain = await getBook(book.id);

printJson(book);
printJson(editedBook);
printJson(bookAgain);

///////////////////////////////////////////

const _resetBookTitle = async () => {
  await editBook({
    ...book,
    title: "Java Web Scraping Handbook",
  });
};
