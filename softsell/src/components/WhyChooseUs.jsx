// src/components/WhyChooseUs.jsx

function WhyChooseUs() {
  return (
    <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f4f4f4' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Why Choose Us</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
        <div style={{ maxWidth: '250px' }}>
          <div style={{ fontSize: '40px', color: '#007bff' }}>💼</div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Trusted Platform</h3>
          <p style={{ fontSize: '16px' }}>We are a reliable platform for reselling unused software licenses.</p>
        </div>
        <div style={{ maxWidth: '250px' }}>
          <div style={{ fontSize: '40px', color: '#007bff' }}>⚡</div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Fast Payments</h3>
          <p style={{ fontSize: '16px' }}>Get instant payments after selling your licenses through our system.</p>
        </div>
        <div style={{ maxWidth: '250px' }}>
          <div style={{ fontSize: '40px', color: '#007bff' }}>🔒</div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Secure & Confidential</h3>
          <p style={{ fontSize: '16px' }}>We ensure the security and confidentiality of your transactions.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;  // This must be here
