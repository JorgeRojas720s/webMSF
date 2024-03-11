import React from "react";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully");
  };

  return (
    <div className="container mt-5">
      <h2>Municipality Form</h2>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-3"></div>{" "}
          <div className="col-md-6 mb-3">
            <label htmlFor="identificationNumber" className="form-label">
              Official Identification Number
            </label>
            <input
              type="text"
              className="form-control"
              id="identificationNumber"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="birthdate">Birth Date</label>
            <input
              type="date"
              className="form-control"
              id="birthDate"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input type="tel" className="form-control" id="phone" required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="province" className="form-label">
              Select Province
            </label>
            <select className="form-select" required>
              <option value="">...</option>
              <option value="1">San José</option>
              <option value="2">Alajuela</option>
              <option value="3">Cartago</option>
              <option value="4">Heredia</option>
              <option value="5">Guanacaste</option>
              <option value="6">Puntarenas</option>
              <option value="7">Limón</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="address" className="form-label">
              Full Address
            </label>
            <input type="text" className="form-control" id="address" required />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck2"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck2">
            Agree to <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">terms and conditions</a>
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
