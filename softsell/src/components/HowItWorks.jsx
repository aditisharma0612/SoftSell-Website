// src/components/HowItWorks.jsx
function HowItWorks() {
  return (
    <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#fff' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>How It Works</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
        <div style={{ maxWidth: '200px' }}>
          <div style={{ fontSize: '40px', color: '#007bff' }}>📤</div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Upload License</h3>
          <p style={{ fontSize: '16px' }}>Submit your unused software licenses to our platform.</p>
        </div>
        <div style={{ maxWidth: '200px' }}>
          <div style={{ fontSize: '40px', color: '#007bff' }}>💸</div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Get Valuation</h3>
          <p style={{ fontSize: '16px' }}>Our system will analyze and provide a valuation of your license.</p>
        </div>
        <div style={{ maxWidth: '200px' }}>
          <div style={{ fontSize: '40px', color: '#007bff' }}>🏦</div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Get Paid</h3>
          <p style={{ fontSize: '16px' }}>Once you accept the offer, receive instant payment.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;  // This must be here
