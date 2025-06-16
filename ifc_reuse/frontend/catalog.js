const container = document.getElementById('catalog-container');

fetch('/reusable-components/')
  .then(response => response.json())
  .then(data => {
    data.forEach(component => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${component.name}</h3>
        <p><strong>Global ID:</strong> ${component.global_id}</p>
        <p><strong>Type:</strong> ${component.type}</p>
        <p><strong>Marked on:</strong> ${new Date(component.created_at).toLocaleString()}</p>
      `;
      container.appendChild(card);
    });
  });
