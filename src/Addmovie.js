import { useState } from "react";
import ReactModal from "react-modal";
const AddMovie = ({ addhandler }) => {
  const [modalIsOpen, setModal] = useState(false);
  const [name, setName] = useState("");
  console.log(name, "hellooo");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [season, setSeason] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  const open = () => {
    setModal(true);
  };
  const close = () => {
    setModal(false);
  };
  const add = () => {
    const newmovie = {
      id: Math.random(),
      name,
      rating,
      description,
      date,
      type,
      image,
      season
    };
    addhandler(newmovie);
    close();
  };
  return (
    <div>
      <div className="Add-btn-container">
        <button onClick={open} className="btn-play">
          Add Movie
        </button>
        <ReactModal isOpen={modalIsOpen} className="add-modal">
          <form>
            <label>Movie Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <label>Movie rate</label>
            <input type="number" onChange={(e) => setRating(e.target.value)} />
            <label>Movie type</label>
            <input type="text" onChange={(e) => setType(e.target.value)} />
            <label>Movie date</label>
            <input type="date" onChange={(e) => setDate(e.target.value)} />
            <label>Movie season</label>
            <input type="text" onChange={(e) => setSeason(e.target.value)} />
            <label>Movie image</label>
            <input type="text" onChange={(e) => setImage(e.target.value)} />
            <label>Movie description</label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </form>
          <button className="Modal-btn" onClick={close}>
            close{" "}
          </button>
          <button className="Modal-btn" onClick={add}>
            submit{" "}
          </button>
        </ReactModal>
      </div>
    </div>
  );
};
export default AddMovie;

