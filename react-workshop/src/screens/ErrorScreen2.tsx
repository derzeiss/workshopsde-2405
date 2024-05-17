import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorScreen2 = () => {
  const err = useRouteError();

  const errorMessage = isRouteErrorResponse(err)
    ? err.statusText
    : err instanceof Error
    ? err.message
    : 'An unknown error occurred';

  return (
    <div className="">
      <h1>Oops, something went wrong</h1>
      <div>{errorMessage}</div>
    </div>
  );
};
