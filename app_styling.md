/* Clean white background, fancy serif headings, black and orange accents */
:root {
  --bg-color: #ffffff;
  --text-main: #111111;
  --text-muted: #555555;
  --accent-orange: #ff6b00;
  --accent-orange-hover: #e05e00;
  --border-color: #e0e0e0;
  --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-color);
  color: var(--text-main);
  font-family: "Georgia", "Times New Roman", serif;
  line-height: 1.6;
  padding: 1.5rem;
}

.app-header {
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--text-main);
  padding-bottom: 1rem;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.app-header h1 {
  font-size: 2.2rem;
  letter-spacing: 0.5px;
  color: var(--text-main);
}

.subtitle {
  color: var(--accent-orange);
  font-style: italic;
  font-size: 1rem;
}

.container {
  max-width: 720px;
  margin: 0 auto;
}

.card {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: var(--card-shadow);
}

.hidden {
  display: none;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

label {
  font-weight: bold;
  font-size: 0.95rem;
}

input[type="text"] {
  padding: 0.75rem;
  border: 1px solid var(--text-main);
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

.btn {
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  width: 100%;
}

.btn-primary {
  background-color: var(--text-main);
  color: #ffffff;
  border: 1px solid var(--text-main);
}

.btn-primary:hover {
  background-color: var(--accent-orange);
  border-color: var(--accent-orange);
}

.btn-secondary {
  background-color: #ffffff;
  color: var(--text-main);
  border: 2px solid var(--text-main);
}

.btn-secondary:hover {
  background-color: var(--text-main);
  color: #ffffff;
}

.divider {
  text-align: center;
  margin: 1.25rem 0;
  position: relative;
}

.divider span {
  background: #ffffff;
  padding: 0 0.75rem;
  color: var(--text-muted);
  font-style: italic;
}

.view-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.badge {
  background-color: var(--accent-orange);
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
}

.style-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.style-card {
  background: #ffffff;
  border: 1px solid var(--text-main);
  border-radius: 6px;
  padding: 1.25rem;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  transition: border-color 0.2s ease, transform 0.1s ease;
}

.style-card:hover {
  border-color: var(--accent-orange);
  border-width: 2px;
  transform: translateY(-2px);
}

.style-card.selected {
  border-color: var(--accent-orange);
  border-width: 2px;
  background-color: #fff8f2;
}

.style-card h3 {
  color: var(--text-main);
  font-size: 1.15rem;
  margin-bottom: 0.35rem;
}

.style-card p {
  margin-bottom: 0;
  font-size: 0.9rem;
}

.status-message {
  margin-top: 1.25rem;
  font-weight: bold;
  color: var(--accent-orange);
  text-align: center;
}