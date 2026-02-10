import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import song from '../assets/song.png'
import '../styles/songs.css'

function Songs() {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("/songs")
//       .then((res) => {
//         if (!res.ok) throw new Error("Backend not reachable");
//         return res.json();
//       })
//       .then((data) => {
//         console.log("API RESPONSE:", data);
//         setSongs(data.songs);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError(err.message);
//       });
//   }, []);

//   if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
//   if (!songs.length) return <p>Loading songs...</p>;

  return (
    <div className="allCards">
      {/* <h2>Songs</h2>
      {songs.map((song) => (
        <div key={song._id}>
          <p>{song.title}</p>
        </div>
      ))} */}
      <Card className="card" >
        <Card.Img variant="top" src={song} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Img variant="top" src={song} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Img variant="top" src={song} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Img variant="top" src={song} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Img variant="top" src={song} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Img variant="top" src={song} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Img variant="top" src={song} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Img variant="top" src={song} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    </div>
  );
}

export default Songs;
