import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center justify-center gap-5 h-screen">
      <h1 className="text-3xl text-center font-bold ">Oops!</h1>
      <p className="text-xl  text-gray-400">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}