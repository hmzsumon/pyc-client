import { SocketUser } from '@/types';
import { useUser } from '@clerk/nextjs';
import { createContext, useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface iSocketContextType {}

export const SocketContext = createContext<iSocketContextType | null>(null);

export const SocketContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const { user } = useUser();
	const [socket, setSocket] = useState<Socket | null>(null);
	const [isSocketConnected, setIsSocketConnected] = useState(false);
	const [onlineUsers, setOnlineUsers] = useState<SocketUser[] | null>(null);

	console.log('isSocketConnected>>', onlineUsers);

	// initialize socket
	useEffect(() => {
		if (!user) return;
		const newSocket = io();
		setSocket(newSocket);

		return () => {
			newSocket.disconnect();
		};
	}, [user]);

	// set socket connection status
	useEffect(() => {
		if (!socket) return;

		if (socket.connected) {
			onConnect();
		}

		function onConnect() {
			setIsSocketConnected(true);
		}

		function onDisconnect() {
			setIsSocketConnected(false);
		}

		socket.on('connect', onConnect);
		socket.on('disconnect', onDisconnect);

		return () => {
			socket.off('connect', onConnect);
			socket.off('disconnect', onDisconnect);
		};
	}, [socket]);

	//set online users
	useEffect(() => {
		if (!socket || !isSocketConnected) return;
		socket.emit('addNewUser', user);
		socket.on('getUsers', (res) => {
			setOnlineUsers(res);
		});

		return () => {
			socket.off('getUsers', (res) => {
				setOnlineUsers(res);
			});
		};
	}, [socket, isSocketConnected, user]);

	return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>;
};

export const useSocket = () => {
	const context = useContext(SocketContext);
	if (context === undefined) {
		throw new Error('useSocket must be used within a SocketProvider');
	}
	return context;
};
