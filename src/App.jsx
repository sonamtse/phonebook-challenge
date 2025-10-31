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

  const [currentPage, setCurrentPage] = useState(0);
  const currentContact = contacts[currentPage];
  const totalPages = contacts.length;

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleJumpToPage = (pageIndex) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
    }
  };

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  return (
    <div className="app">
      <header className="app-header">
        <h1>FASHION CONTACTS</h1>
        <p className="subtitle">Elite Directory - One Contact Per Page</p>
      </header>
      <main className="app-main">
        <section className="contacts-section">
          <h2>CONTACT DETAILS</h2>
          <div className="pagination-info">
            <p>Viewing contact {currentPage + 1} of {totalPages}</p>
          </div>
          <div className="single-contact-view">
            <article className="contact-card-large">
              <img src={currentContact.photo} alt={`Profile photo of ${currentContact.name}`} className="contact-photo-large" />
              <h3 className="contact-name-large">{currentContact.name}</h3>
              <div className="contact-details-large">
                <div className="detail-row">
                  <span className="detail-label">PHONE</span>
                  <span className="detail-value">{currentContact.phone}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">EMAIL</span>
                  <span className="detail-value">{currentContact.email}</span>
                </div>
              </div>
            </article>
          </div>
          <nav className="pagination-nav" aria-label="Contact pagination">
            <button onClick={handlePrevious} disabled={isFirstPage} className="btn-nav btn-prev" aria-label="Go to previous contact">← Previous</button>
            <span className="page-indicator" aria-live="polite">{currentPage + 1} / {totalPages}</span>
            <button onClick={handleNext} disabled={isLastPage} className="btn-nav btn-next" aria-label="Go to next contact">Next →</button>
          </nav>
          <div className="page-numbers">
            {contacts.map((_, index) => (
              <button key={index} onClick={() => handleJumpToPage(index)} className={`page-num-btn ${currentPage === index ? 'active' : ''}`} aria-label={`Go to contact ${index + 1}`} aria-current={currentPage === index ? 'page' : undefined}>
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      </main>
      <footer className="app-footer">
        <p>© 2025 FASHION CONTACTS</p>
      </footer>
    </div>
  );
}