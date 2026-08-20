import image404 from "../src/assets/404.webp";

function NotFound() {
  const notFound = {
    image: image404,
  };

  return (
    <div>
      <img
        src={notFound.image}
        alt="Page not found"
        className="w-36 h-36 mx-auto mb-4 object-cover"
      />
    </div>
  );
}

export default NotFound;