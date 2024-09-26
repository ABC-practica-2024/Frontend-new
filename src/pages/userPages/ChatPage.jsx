import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import './ChatPage.css';
import SearchBar from "../../components/UI/SearchBar.jsx";
import shortFormatDate from "../../utils/ShortFormatDate.js";
import UserContext from "../../contexts/UserContext.jsx";

export default function ChatPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');
    const [selectedChat, setSelectedChat] = useState(null);
    const { username } = useContext(UserContext);
    const [chats, setChats] = useState([
        {
            id: 1,
            artifactName: 'The Cea Mai Faina Vaza Rosetta Stone',
            personName: 'Andrei Popescu',
            personUsername: 'mihai.popescu88',
            personRole: 'archeologist',
            lastMessage: 'Hello, how are you?',
            lastMessageTime: '2024-09-04T09:45:00',
            lastMessageSentByYou: false,
            noOfUnreadMessages: 2,
            status: 'waiting_for_approval',
            artifactImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHpdvJUFCTc6QhX4NYapSLLVBJvqoQQhNqA&s',
            personImage: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        },
        {
            id: 2,
            artifactName: 'The Cea Mai Faina Vaza Rosetta Stone',
            personName: 'Mihai Popescu',
            personUsername: 'mihai.popescu88',
            personRole: 'archeologist',
            lastMessage: 'Hello, how are you?',
            lastMessageTime: '2024-09-04T09:45:00',
            lastMessageSentByYou: false,
            noOfUnreadMessages: 2,
            status: 'waiting_for_approval',
            artifactImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHpdvJUFCTc6QhX4NYapSLLVBJvqoQQhNqA&s',
            personImage: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        },
        {
            id: 3,
            artifactName: 'The Cea Mai Faina Vaza Rosetta Stone',
            personName: 'Mihai Alexandru',
            personUsername: 'mihai.popescu88',
            personRole: 'archeologist',
            lastMessage: 'Hello, how are you?',
            lastMessageTime: '2024-09-04T09:45:00',
            lastMessageSentByYou: false,
            noOfUnreadMessages: 2,
            status: 'approved',
            artifactImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHpdvJUFCTc6QhX4NYapSLLVBJvqoQQhNqA&s',
            personImage: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        },
        {
            id: 4,
            artifactName: 'The Cea Mai Faina Vaza Rosetta Stone',
            personName: 'Amalia Popescu',
            personUsername: 'mihai.popescu88',
            personRole: 'archeologist',
            lastMessage: 'Hello, how are you?',
            lastMessageTime: '2024-09-04T09:45:00',
            lastMessageSentByYou: false,
            noOfUnreadMessages: 2,
            status: 'rejected',
            artifactImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHpdvJUFCTc6QhX4NYapSLLVBJvqoQQhNqA&s',
            personImage: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        },
        {
            id: 5,
            artifactName: 'The Cea Mai Faina Vaza Rosetta Stone',
            personName: 'Gloria Popescu',
            personUsername: 'mihai.popescu88',
            personRole: 'archeologist',
            lastMessage: 'Hello, how are you?',
            lastMessageTime: '2024-09-04T09:45:00',
            lastMessageSentByYou: true,
            noOfUnreadMessages: 0,
            status: 'approved',
            artifactImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHpdvJUFCTc6QhX4NYapSLLVBJvqoQQhNqA&s',
            personImage: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        },
    ]);
    const [messages, setMessages] = useState([
        {
            id: 1,
            chatId: 1,
            sender: 'username',
            message: 'Hello, how are you?',
            time: '2024-09-04T09:45:00',
        },
        {
            id: 2,
            chatId: 1,
            sender: 'mihaipoopescu',
            message: 'Hello, how are you?',
            time: '2024-09-04T09:45:00',
        },
    ]);


    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSelectRole = (event) => {
        setRoleFilter(event.target.value);
    }

    const handleSelectChat = (chat) => {
        if (chat.noOfUnreadMessages > 0) {
            const updatedChats = chats.map((c) => {
                if (c.id === chat.id) {
                    return {
                        ...c,
                        noOfUnreadMessages: 0,
                    };
                }
                return c;
            });
            setChats(updatedChats);
        }

        setSelectedChat(chat);
    }

    return (
        <div className="chat-page user-subpage">
            <h1>Chat</h1>
            <div className="user-subpage">
                <div className="row-container">
                    <div className="right-window">
                        <div className="flex flex-row gap-1.5 justify-between">
                            <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
                            <select value={roleFilter} onChange={handleSelectRole}>
                                <option value="all">All</option>
                                <option value="archeologist">Archeologist</option>
                                <option value="analyst">Analyst</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className="chat-list-container">
                            <div className="scroll-container">
                                <div className="chat-list">
                                    {chats
                                        .sort((a, b) => new Date(b.lastMessageTime) - new Date(a.lastMessageTime))
                                        .filter((chat) => {
                                            if (roleFilter === 'all') {
                                                return true;
                                            }
                                            return chat.personRole === roleFilter;
                                        })
                                        .filter((chat) => {
                                            if (searchTerm === '') {
                                                return true;
                                            }
                                            return chat.artifactName.toLowerCase().includes(searchTerm.toLowerCase()) || chat.personName.toLowerCase().includes(searchTerm.toLowerCase());
                                        })
                                        .map((chat) => {
                                            return (
                                                <div key={chat.id}
                                                     className= {`chat-container ${selectedChat && selectedChat.id === chat.id && 'selected'} ${chat.noOfUnreadMessages > 0 ? 'red' : ''}`}
                                                     onClick={() => handleSelectChat(chat)}>
                                                    <div className="chat-images">
                                                        <img className={`${chat.noOfUnreadMessages > 0 ? 'red' : ''}`} src={chat.artifactImage} alt="Artifact"/>
                                                        <img className={`${chat.noOfUnreadMessages > 0 ? 'red' : ''}`} src={chat.personImage} alt="Person"/>
                                                    </div>
                                                    <div className="chat-info">
                                                        <div className="chat-header">
                                                            <div className="flex flex-row justify-between gap-1.5">
                                                                <h4>{chat.artifactName}</h4>
                                                                <p className="text-[#6A6A6A] text-[12px]">{shortFormatDate(chat.lastMessageTime)}</p>
                                                            </div>
                                                            <div className="flex flex-row content-center">
                                                                <p className="material-symbols-rounded text-base small-icon">
                                                                    {chat.personRole === 'archeologist' && 'handyman' ||
                                                                    chat.personRole === 'analyst' && 'biotech' ||
                                                                    chat.personRole === 'admin' && 'shield_person'}
                                                                </p>
                                                                <h4>{chat.personName}</h4>
                                                            </div>
                                                        </div>
                                                        <div className="chat-preview">
                                                            {chat.noOfUnreadMessages >= 2 ? <p className="chat-preview red">{chat.noOfUnreadMessages} unread messages</p> :
                                                            chat.noOfUnreadMessages === 1 ? <p className="chat-preview red">{chat.lastMessage}</p> :
                                                            <p className="chat-preview">{chat.lastMessageSentByYou && "You:"} {chat.lastMessage}</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left-window">
                        {selectedChat ? (
                            <div className="chat-window">
                                <div className="chat-view">
                                    <div className="current-chat-header">
                                        <div className="flex flex-row gap-1.5 items-center">
                                            <h4>{selectedChat.artifactName} • {
                                                selectedChat.status === 'waiting_for_approval' && 'Waiting for approval' ||
                                                selectedChat.status === 'approved' && 'Approved' ||
                                                selectedChat.status === 'rejected' && 'Rejected'
                                            }</h4>
                                            <p className="material-symbols-rounded text-base icon cursor-pointer"> info</p>

                                        </div>
                                        <div className="flex flex-row content-center">
                                            <p className="material-symbols-rounded text-base small-icon">
                                                {selectedChat.personRole === 'archeologist' && 'handyman' ||
                                                    selectedChat.personRole === 'analyst' && 'biotech' ||
                                                    selectedChat.personRole === 'admin' && 'shield_person'}
                                            </p>
                                            <h4>{selectedChat.personName}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-input">
                                    BB
                                </div>
                            </div>
                        ) : (
                            <h4>Choose a chat to start messaging</h4>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}