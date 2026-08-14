import { create } from 'zustand';
import { io } from 'socket.io-client';

const SOCKET_URL = "http://localhost:5001";

export const useSocketStore = create((set, get) => ({
    socket: null,
    onlineUsers: [],

    connectSocket: (userId) => {
        const { socket } = get();
        // don't connect if already connected
        if (socket?.connected) return;

        const newSocket = io(SOCKET_URL, {
            query: { userId },
        });

        newSocket.on("getOnlineUsers", (userIds) => {
            set({ onlineUsers: userIds });
        });

        set({ socket: newSocket });
    },

    disconnectSocket: () => {
        const { socket } = get();
        if (socket?.connected) socket.disconnect();
        set({ socket: null, onlineUsers: [] });
    },
}));
