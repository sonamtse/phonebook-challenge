export default function PhonebookApp() {
    const contacts = [
      {
        id: 1,
        name: "Sarah Johnson",
        phone: "(555) 123-4567",
        email: "sarah.j@gmail.com",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
      },
      {
        id: 2,
        name: "Michael Smith",
        phone: "(555) 234-5678",
        email: "m.smith@gmail.com",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        phone: "(555) 345-6789",
        email: "emily.r@gmail.com",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
      },
      {
        id: 4,
        name: "David Muir",
        phone: "(323) 456-7890",
        email: "david.muir@gmail.com",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
      },
      {
        id: 5,
        name: "Jessica Williams",
        phone: "(918) 567-8901",
        email: "j.williams@gmail.com",
        photo: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=150&h=150&fit=crop&crop=face"
      },
      {
        id: 6,
        name: "Robert Cohen",
        phone: "(555) 678-9012",
        email: "r.cohen@gmail.com",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      {
        id: 7,
        name: "Joseph Lee",
        phone: "(313) 789-0123",
        email: "joseph.l@gmail.com",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      {
        id: 8,
        name: "Christopher Stern",
        phone: "(777) 890-1234",
        email: "chris.stern@gmail.com",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
      },
      {
        id: 9,
        name: "Nicole Martinez",
        phone: "(917) 901-2345",
        email: "nicole.m@gmail.com",
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
      },
      {
        id: 10,
        name: "Daniel Brown",
        phone: "(929) 012-3456",
        email: "d.brown@gmail.com",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      }
    ];
  
    return (
        <div style={{minHeight: '100vh', backgroundColor: '#fce7f3'}}>
          <header style={{backgroundColor: 'white', borderBottom: '2px solid black', padding: '30px 20px'}}>
            <h1 style={{fontSize: '36px', fontWeight: '300', margin: 0}}>FASHION CONTACTS</h1>
            <p style={{color: '#4a5568', marginTop: '8px', fontSize: '18px'}}>Elite Directory</p>
          </header>
    
          <main style={{maxWidth: '1200px', margin: '0 auto', padding: '40px 20px'}}>
            <section>
              <h2 style={{fontSize: '28px', fontWeight: '300', marginBottom: '25px'}}>DIRECTORY</h2>
              
              {/* search box */}
              <div style={{marginBottom: '30px'}}>
                <label htmlFor="search" style={{display: 'block', marginBottom: '8px', color: '#4a5568'}}>
                  SEARCH
                </label>
                <input
                  type="search"
                  id="search"
                  placeholder="Search contacts..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid black',
                    backgroundColor: 'white',
                    fontSize: '16px'
                  }}
                />
              </div>
    
              {/* contact cards */}
              <ul style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {contacts.map((contact) => (
                  <li key={contact.id} style={{
                    backgroundColor: 'white',
                    border: '2px solid black',
                    padding: '24px'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
                      <img
                        src={contact.photo}
                        alt={contact.name}
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          marginRight: '15px',
                          objectFit: 'cover',
                          border: '2px solid black'
                        }}
                      />
                      <h3 style={{fontSize: '20px', fontWeight: '300', margin: 0}}>{contact.name}</h3>
                    </div>
                    
                    <div>
                      <p style={{marginBottom: '10px'}}>
                        <span style={{color: '#6b7280', fontSize: '14px'}}>PHONE</span>
                        <br />
                        <span style={{fontSize: '16px'}}>{contact.phone}</span>
                      </p>
                      <p style={{marginBottom: 0}}>
                        <span style={{color: '#6b7280', fontSize: '14px'}}>EMAIL</span>
                        <br/>
                        <span style={{fontSize: '16px'}}>{contact.email}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </main>
    
          <footer style={{
            backgroundColor: 'white',
            borderTop: '2px solid black',
            marginTop: '60px',
            padding: '24px',
            textAlign: 'center'
          }}>
            <p style={{color: '#4a5568', margin: 0}}>© 2025 FASHION CONTACTS</p>
          </footer>
        </div>
      );
    }