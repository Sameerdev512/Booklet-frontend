import { useSelector } from "react-redux";
const Home = () => {
  const books = useSelector((state) => state.books.list);
  console.log(books);

  return (
    <div className="bg-dark text-white">
      Home page
      {books.map((b, i) => (
        <li key={i}>
          {b.title} by {b.author} with {b.pages}
        </li>
      ))}
    </div>
  );
};

export default Home;
