// src/components/Testimonials.jsx

function Testimonials() {
  return (
    <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>What Our Customers Are Saying</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
        <div style={{ maxWidth: '300px' }}>
          <p style={{ fontStyle: 'italic' }}>
            "SoftSell helped us liquidate our unused software licenses quickly and easily!"
          </p>
          <p>- Akanshka, CEO, TechCorp</p>
        </div>
        <div style={{ maxWidth: '300px' }}>
          <p style={{ fontStyle: 'italic' }}>
            "I got paid instantly after agreeing to the offer. A great platform!"
          </p>
          <p>- Aditi, CTO, SoftWareCo</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;  // Ensure this is here
