// src/components/ContactForm.jsx

function ContactForm() {
  return (
    <section style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" required style={{ padding: '10px', marginBottom: '10px' }} />
        <input type="email" placeholder="Email" required style={{ padding: '10px', marginBottom: '10px' }} />
        <input type="text" placeholder="Company" required style={{ padding: '10px', marginBottom: '10px' }} />
        <select required style={{ padding: '10px', marginBottom: '10px' }}>
          <option value="">Select License Type</option>
          <option value="Software">Software</option>
          <option value="Hardware">Hardware</option>
        </select>
        <textarea placeholder="Message" required style={{ padding: '10px', marginBottom: '10px' }}></textarea>
        <button type="submit" style={{ padding: '12px 24px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px' }}>
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;  // This should be here
