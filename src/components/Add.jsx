import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';
const Add = () => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(1)
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")
// edit rating
const handleRating=(x)=>setRating(x)
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');


  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
        <button onClick={openModal}>Add</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form >
            <label >Movie Name</label>
            <input type="text" value={name}  onChange={e=>setName(e.target.value)}/>
            <label >Movie Poster</label>
            <input type="text"  value={image}  onChange={e=>setImage(e.target.value)}/>
            <StarRating rating={rating} handleRating={handleRating} />
            <label >Movie Date</label>
            <input type="date"  value={date}  onChange={e=>setDate(e.target.value)}/>
            <div>
                <button className='btn'>Add</button>
                <button className='btn'>Cancel</button>
            </div>


        </form>
      </Modal>
    </div>
  )
}

export default Add