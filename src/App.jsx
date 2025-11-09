import { useState, useEffect } from 'react';
import './App.css';

const FALLBACK_CONTACTS = [
  { id: 1, name: "Sarah Johnson", phone: "(555) 123-4567", email: "sarah.j@gmail.com", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" },
  { id: 2, name: "Michael Smith", phone: "(555) 234-5678", email: "m.smith@gmail.com", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" },
  { id: 3, name: "Emily Rodriguez", phone: "(555) 345-6789", email: "emily.r@gmail.com", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face" },
  { id: 4, name: "David Muir", phone: "(323) 456-7890", email: "david.muir@gmail.com", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face" },
  { id: 5, name: "Jessica Williams", phone: "(918) 567-8901", email: "j.williams@gmail.com", photo: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=150&h=150&fit=crop&crop=face" }
];

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [showForm, setShowForm] = useState(false);

  // Fetch contacts on mount
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/contacts.json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        
        const data = await response.json();
        setContacts(data);
        setFilteredContacts(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching contacts:', err);
        setError(err.message);
        setContacts(FALLBACK_CONTACTS);
        setFilteredContacts(FALLBACK_CONTACTS);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredContacts(contacts);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = contacts.filter(contact => 
      contact.name.toLowerCase().includes(query) ||
      contact.phone.toLowerCase().includes(query)
    );
    setFilteredContacts(filtered);
  }, [searchQuery, contacts]);

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    }

    if (!formData.email.includes('@')) {
      errors.email = 'Email must include @';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const newContact = {
      id: Date.now(),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      photo: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop&crop=face"
    };

    setContacts(prev => [newContact, ...prev]);
    setFormData({ name: '', phone: '', email: '' });
    setFormErrors({});
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading">Loading contacts...</div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>FASHION CONTACTS</h1>
        <p className="subtitle">Elite Directory</p>
      </header>

      <main className="app-main">
        {error && (
          <div className="error-banner">
            ⚠️ Could not load contacts from server. Using fallback data.
          </div>
        )}

        <section className="contacts-section">
          <div className="section-header">
            <h2>DIRECTORY</h2>
            <button 
              className="add-contact-btn"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? '✕ Cancel' : '+ Add Contact'}
            </button>
          </div>

          {showForm && (
            <div className="contact-form">
              <h3>Add New Contact</h3>
              
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={formErrors.phone ? 'error' : ''}
                />
                {formErrors.phone && (
                  <span className="error-message">{formErrors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && (
                  <span className="error-message">{formErrors.email}</span>
                )}
              </div>

              <button 
                type="button"
                className="submit-btn"
                onClick={handleSubmit}
              >
                Add Contact
              </button>
            </div>
          )}

          <div className="search-container">
            <label htmlFor="search" className="search-label">SEARCH</label>
            <input
              type="search"
              id="search"
              placeholder="Search by name or phone..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {filteredContacts.length === 0 ? (
            <p className="no-results">No contacts found matching "{searchQuery}"</p>
          ) : (
            <ul className="contact-list">
              {filteredContacts.map((contact) => (
                <li key={contact.id} className="contact-card">
                  <div className="contact-header">
                    <img
                      src={contact.photo}
                      alt={`Profile photo of ${contact.name}`}
                      className="contact-photo"
                    />
                    <h3 className="contact-name">{contact.name}</h3>
                  </div>
                  <div className="contact-details">
                    <p>
                      <span className="contact-label">PHONE</span>
                      <span className="contact-value">{contact.phone}</span>
                    </p>
                    <p>
                      <span className="contact-label">EMAIL</span>
                      <span className="contact-value">{contact.email}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 FASHION CONTACTS</p>
      </footer>
    </div>
  );
}