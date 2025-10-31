
class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background: white;
          padding: 1rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .logo {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 800;
          color: var(--primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .logo span {
          color: var(--secondary);
        }
        
        .contact-info {
          text-align: center;
          font-size: 0.9rem;
          color: var(--dark);
        }
        
        @media (min-width: 768px) {
          .container {
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-info {
            text-align: right;
          }
        }
