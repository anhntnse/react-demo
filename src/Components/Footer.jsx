const Footer = () => {
    return <> 
    {/* Booking Form */}
    <h1 className="footer-content">Book Your Table</h1>
      <div className="booking-form container">
        <form>
          <div className="form-row row">
            <input type="text" placeholder="Your Name *" required />
            <input type="email" placeholder="Your Email *" required />
            <select required>
              <option value="" disabled selected>Select a Service</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
          </div>
          <textarea
            className="form-row row"
            placeholder="Please write your comment"
            required
          ></textarea>
          <button className="row send-message" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </>
}

export default Footer;