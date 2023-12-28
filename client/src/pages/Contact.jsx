import { useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",

  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact((prev) => ({
      ...prev,
      [name] : value,
    }))
  };

  //handling the form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact)
  };
  return (
    <div>
      <section>
        <main>
          <div>
            <div>
              <div>
                <img
                  src="/images/support.png"
                  alt="contact-image"
                  width="500"
                  height="500"
                />
              </div>
              <div>
                <h1>Contact Us</h1>
                <br />
                <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  id="username"
                  value={contact.username}
                  onChange={handleInput}
                  required
                  
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  id="email"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  type="message"
                  name="message"
                  cols="30"
                  rows="10"
                  id="message"
                  value={contact.message}
                  onChange={handleInput}
                  required
                />
              </div>
              <br />
              <button type="submit">Submit</button>
            </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export default Contact