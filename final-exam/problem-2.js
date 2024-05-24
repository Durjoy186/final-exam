document.addEventListener("DOMContentLoaded", function() {
            fetch('api_endpoint_here')
                .then(response => response.json())
                .then(data => {
                    const tB = document.getElementById('table-body');
                    data.forEach(item => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${item.id}</td>
                            <td>${item.full_name}</td>
                            <td>${item.mobile}</td>
                            <td>${item.email}</td>
                        `;
                        tB.appendChild(row);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        });