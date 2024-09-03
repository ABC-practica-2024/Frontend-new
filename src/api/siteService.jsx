const API_BASE_URL = '/api/v1';

// GET /api/v1/site
export async function getSites() {
    const response = await fetch(`${API_BASE_URL}/site`);
    return response.json();
}

// GET /api/v1/site/{id}
export async function getSiteById(siteId) {
    const response = await fetch(`${API_BASE_URL}/site/${siteId}`);
    return response.json();
}

// POST /api/v1/site
export async function createSite(site) {
    const response = await fetch(`${API_BASE_URL}/site`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(site),
    });
    return response.json();
}

// PUT /api/v1/site
export async function updateSite(site) {
    const response = await fetch(`${API_BASE_URL}/site`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(site),
    });
    return response.json();
}

// DELETE /api/v1/site/{id}
export async function deleteSite(siteId) {
    const response = await fetch(`${API_BASE_URL}/site/${siteId}`, {
        method: 'DELETE',
    });
    return response.json();
}

