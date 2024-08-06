'use client';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#ff6600' }}>ติดต่อเรา</h1>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          เราคือร้านพิซซ่าที่มุ่งมั่นในการให้บริการพิซซ่าที่อร่อยและมีคุณภาพสูงสุด เพื่อตอบสนองความต้องการของลูกค้าทุกท่าน หากท่านมีข้อสงสัยหรือความคิดเห็นใด ๆ กรุณาติดต่อเราผ่านฟอร์มด้านล่างนี้
        </p>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '.5rem' }}>ชื่อ:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem' }}>อีเมล:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '.5rem' }}>ข้อความ:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{ width: '100%', padding: '.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          <button
            type="submit"
            style={{ backgroundColor: '#ff6600', color: '#fff', padding: '.75rem 1.5rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            ส่งข้อความ
          </button>
        </form>
      </div>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p>ที่อยู่: 123 ถนนพิซซ่า, เมืองพิซซ่า, ประเทศพิซซ่า</p>
        <p>โทรศัพท์: 012-345-6789</p>
        <p>อีเมล: info@pizzaexample.com</p>
      </div>
    </div>
  );
}
