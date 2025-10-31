import { useState } from 'react';
import './App.css';

export default function App() {
  const contacts = [
    { id: 1, name: "Sarah Johnson", phone: "(555) 123-4567", email: "sarah.j@gmail.com", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" },
    { id: 2, name: "Michael Smith", phone: "(555) 234-5678", email: "m.smith@gmail.com", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" },
    { id: 3, name: "Emily Rodriguez", phone: "(555) 345-6789", email: "emily.r@gmail.com", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face" },
    { id: 4, name: "David Muir", phone: "(323) 456-7890", email: "david.muir@gmail.com", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face" },
    { id: 5, name: "Jessica Williams", phone: "(918) 567-8901", email: "j.williams@gmail.com", photo: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=150&h=150&fit=crop&crop=face" },
    { id: 6, name: "Robert Cohen", phone: "(555) 678-9012", email: "r.cohen@gmail.com", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
    { id: 7, name: "Joseph Lee", phone: "(313) 789-0123", email: "joseph.l@gmail.com", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    { id: 8, name: "Christopher Stern", phone: "(777) 890-1234", email: "chris.stern@gmail.com", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face" },
    { id: 9, name: "Nicole Martinez", phone: "(917) 901-2345", email: "nicole.m@gmail.com", photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face" },
    { id: 10, name: "Daniel Brown", phone: "(929) 012-3456", email: "d.brown@gmail.com", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" }
  ];

  const [page, setPage] = useState(0);
  const contact = contacts[page];

  return (
    <div className="app">
      <header className="app-header">
        <h1>FASHION CONTACTS</h1>
        <p className="subtitle">Elite Directory</p>
      </header>

      <main className="app-main">
        <div className="pagination-info">
          Contact {page + 1} of {contacts.length}
        </div>

        <div className="contact-card-large">
          <img src={contact.photo} alt={contact.name} className="contact-photo-large" />
          <h2>{contact.name}</h2>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <p><strong>Email:</strong> {contact.email}</p>
        </div>

        <nav className="pagination-nav">
          <button 
            onClick={() => setPage(page - 1)} 
            disabled={page === 0}
            aria-label="Previous contact"
          >
            ← Previous
          </button>
          
          <span>{page + 1} / {contacts.length}</span>
          
          <button 
            onClick={() => setPage(page + 1)} 
            disabled={page === contacts.length - 1}
            aria-label="Next contact"
          >
            Next →
          </button>
        </nav>

        <div className="page-numbers">
          {contacts.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={page === i ? 'active' : ''}
              aria-label={`Go to contact ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2025 FASHION CONTACTS</p>
      </footer>
    </div>
  );
}