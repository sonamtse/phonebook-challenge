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

  return (
    <div className="app">
      <header className="app-header">
        <h1>FASHION CONTACTS</h1>
        <p className="subtitle">Elite Directory</p>
      </header>
      <main className="app-main">
        <section className="contacts-section">
          <h2>DIRECTORY</h2>
          <div className="search-container">
            <label htmlFor="search" className="search-label">SEARCH</label>
            <input type="search" id="search" placeholder="Search contacts..." className="search-input" />
          </div>
          <ul className="contact-list">
            {contacts.map((contact) => (
              <li key={contact.id} className="contact-card">
                <div className="contact-header">
                  <img src={contact.photo} alt={`Profile of ${contact.name}`} className="contact-photo" />
                  <h3 className="contact-name">{contact.name}</h3>
                </div>
                <div className="contact-details">
                  <p><span className="contact-label">PHONE</span><span className="contact-value">{contact.phone}</span></p>
                  <p><span className="contact-label">EMAIL</span><span className="contact-value">{contact.email}</span></p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="app-footer">
        <p> 2025 FASHION CONTACTS</p>
      </footer>
    </div>
  );
}
