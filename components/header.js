class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 1.5rem 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.8rem;
          font-weight: 800;
          color: #4F46E5;
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        .logo span {
          color: #10B981;
          margin-left: 0.5rem;
        }
        .logo-icon {
          margin-right: 0.75rem;
          color: #F59E0B;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          color: #64748B;
          font-size: 0.95rem;
        }
        .contact-info strong {
          color: #1E293B;
          font-weight: 600;
        }
        .header-container {
          background: linear-gradient(90deg, #FFFFFF 0%, #F8FAFC 100%);
          padding: 1rem 2rem;
          border-bottom: 1px solid #E2E8F0;
        }
