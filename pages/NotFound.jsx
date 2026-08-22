import image404 from "../src/assets/404.jpg";

function NotFound() {
  const notFound = {
    image: image404,
  };

  return (
    <div>
      <img
        src={notFound.image}
        alt="Page not found"
        className=" min-h-screen h-max mx-auto mb-4 object-cover"
      />
    </div>
  );
}

export default NotFound;