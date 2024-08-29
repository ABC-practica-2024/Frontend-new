const API_BASE_URL = '/api/v1';

// GET /api/v1/users
export async function getUsers() {
    const response = await fetch(`${API_BASE_URL}/users`);
    return response.json();
}

// PUT /api/v1/users
export async function updateUser(user) {
    const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    return response.json();
}

// PUT /api/v1/users/password
export async function updatePassword(passwordData) {
    const response = await fetch(`${API_BASE_URL}/users/password`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(passwordData),
    });
    return response.json();
}

// PUT /api/v1/admin/users/role
export async function updateUserRole(roleData) {
    const response = await fetch(`${API_BASE_URL}/admin/users/role`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(roleData),
    });
    return response.json();
}

// PUT /api/v1/admin/users/enable
export async function toggleUserEnablement(enablementData) {
    const response = await fetch(`${API_BASE_URL}/admin/users/enable`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enablementData),
    });
    return response.json();
}

// GET /api/v1/admin/users
export async function getAllUsers() {
    const response = await fetch(`${API_BASE_URL}/admin/users`);
    return response.json();
}

// GET /api/v1/admin/users/{id}
export async function getUserById(userId) {
    const response = await fetch(`${API_BASE_URL}/admin/users/${userId}`);
    return response.json();
}
