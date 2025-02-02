import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";

const Home = () => {
  return (
    <>
    <BookOverview {...sampleBooks[0]}/>
    <BookList title={""} books={[]} />
     

    </>
  );
}

export default Home;
