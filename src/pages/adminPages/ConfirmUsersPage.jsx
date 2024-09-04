import * as React from 'react';
import {useEffect, useState} from "react";
import './ConfirmUsersPage.css';
import formatDate from "../../utils/FormatDate.jsx";

export default function ConfirmUsersPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [users, setUsers] = React.useState([
        {
            name: 'Mihai Popescu',
            email: 'mihai.popescu@gmail.com',
            username: 'mihai.popescu88',
            role: 'Archeologist',
            requestTime: '2024-09-04T09:45:00',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHpdvJUFCTc6QhX4NYapSLLVBJvqoQQhNqA&s',
        },
        {
            name: 'Ioana Ionescu',
            email: 'ioana.ionescu@yahoo.com',
            username: 'ioana.ionescu19',
            role: 'Analyst',
            requestTime: '2024-09-03T11:30:00',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHpdvJUFCTc6QhX4NYapSLLVBJvqoQQhNqA&s',
        },
        {
            name: 'Andrei Georgescu',
            email: 'andrei.georgescu@outlook.com',
            username: 'andrei.georgescu45',
            role: 'Archeologist',
            requestTime: '2023-08-14T14:15:00',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHpdvJUFCTc6QhX4NYapSLLVBJvqoQQhNqA&s',
        },
        {
            name: 'Elena Marin',
            email: 'elena.marin@gmail.com',
            username: 'elena.marin92',
            role: 'Analyst',
            requestTime: '2023-08-15T08:30:00',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHpdvJUFCTc6QhX4NYapSLLVBJvqoQQhNqA&s',
        },
        {
            name: 'Elena Marin',
            email: 'elena.marin@gmail.com',
            username: 'elena.marin92',
            role: 'Analyst',
            requestTime: '2023-08-15T08:30:00',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHpdvJUFCTc6QhX4NYapSLLVBJvqoQQhNqA&s',
        },
        {
            name: 'Elena Marin',
            email: 'elena.marin@gmail.com',
            username: 'elena.marin92',
            role: 'Analyst',
            requestTime: '2023-08-15T08:30:00',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHpdvJUFCTc6QhX4NYapSLLVBJvqoQQhNqA&s',
        }
    ]);

    const [roles, setRoles] = React.useState([    ]);

    useEffect(() => {
        // Fetch roles from the server
        const uniqueRoles = [...new Set(users.map(user => user.role))];
        setRoles(uniqueRoles);
    }, []);

    const filteredUsers = users
        .filter(user =>
            (user.name.toLowerCase().includes(searchTerm.toLowerCase())
            || user.email.toLowerCase().includes(searchTerm.toLowerCase())
            || user.username.toLowerCase().includes(searchTerm.toLowerCase()))
            && (roleFilter === '' || user.role === roleFilter)
        )
        .sort((a, b) => {
            if (sortOption === 'name') {
                return a.name.localeCompare(b.name);
            }
            if (sortOption === 'requestTime') {
                return new Date(b.requestTime) - new Date(a.requestTime);
            }
            return 0;
        });

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleRoleFilter = (event) => {
        setRoleFilter(event.target.value);
    };

    const handleSort = (event) => {
        setSortOption(event.target.value);
    };

    const approveUser = (index) => {
        console.log(`Approved user at index: ${index}`);
        setUsers(users => {
            const newUsers = [...users];
            newUsers.splice(index, 1);
            return newUsers;
        })
    };

    const rejectUser = (index) => {
        console.log(`Rejected user at index: ${index}`);
        setUsers(users => {
            const newUsers = [...users];
            newUsers.splice(index, 1);
            return newUsers;
        })
    };



    return (
        <div className="user-approval">
            <h1>Aprobare utilizatori</h1>
            <div className="filters">
                <div className="flex gap-2">
                    <div className="search-container">
                        <span className="material-symbols-rounded text-base icon">search</span>
                        <input
                            type="text"
                            className="search"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <select value={roleFilter} onChange={handleRoleFilter}>
                        <option value="">Requested role</option>
                        {roles.map((role, index) => (
                            <option key={index} value={role}>{role}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <select value={sortOption} onChange={handleSort}>
                        <option value="">Sort by</option>
                        <option value="name">Name</option>
                        <option value="requestTime">Request time</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {filteredUsers.map((user, index) => (
                    <div key={index} className="user-item">
                        <img src={user.image} alt="User" />
                        <div className="user-info">
                            <div className="user-details">
                                <div>
                                    <h4>{user.name}</h4>
                                    <p>{user.email}</p>
                                    <p>{user.username}</p>
                                </div>
                                <p>{user.role}</p>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                                <p className="small">{formatDate(user.requestTime)}</p>
                                <div className="user-actions">
                                    <button onClick={() => rejectUser(index)}>
                                        <span
                                            className="material-symbols-rounded text-base icon">do_not_disturb_on</span>
                                    </button>
                                    <button onClick={() => approveUser(index)}><span
                                        className="material-symbols-rounded text-base icon">check_circle</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};