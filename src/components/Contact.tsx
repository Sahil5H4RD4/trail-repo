import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="title-underline"></div>
      
      <p className="contact-text">
        Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <a href="mailto:hello@example.com" className="btn contact-btn">Say Hello</a>
    </div>
  )
}
