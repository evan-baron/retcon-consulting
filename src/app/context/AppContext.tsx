'use client';

// Libraries
import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react';

// Hooks imports
import { useMediaQuery } from '@mui/material';

// Define the context value type
interface AppContextType {
	isTouchDevice: boolean | undefined;
	isMobile: boolean | undefined;
	isMobileWidth: boolean | undefined;
}

// Create Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the provider props type
interface ContextProviderProps {
	children: ReactNode;
}

// Create the context provider component
export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [isTouchDevice, setIsTouchDevice] = useState<boolean | undefined>(
		undefined
	);

	// Determine if touch device or not
	useEffect(() => {
		const mq = window.matchMedia('(pointer: coarse)');
		setIsTouchDevice(mq.matches);

		const handler = (e: MediaQueryListEvent) => setIsTouchDevice(e.matches);
		mq.addEventListener('change', handler);

		return () => mq.removeEventListener('change', handler);
	}, []);

	// Screen Dimensions + is it Mobile or not
	const isMobileWidth = useMediaQuery(
		'(max-width: 550px) and (orientation: portrait)'
	);
	const isMobileHeight = useMediaQuery(
		'(max-height: 550px) and (orientation: landscape)'
	);

	const isMobile = isMobileWidth || isMobileHeight;

	return (
		<AppContext.Provider
			value={{
				isTouchDevice,
				isMobile,
				isMobileWidth,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// Custom hook to access context
export const useAppContext = (): AppContextType => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within a ContextProvider');
	}
	return context;
};
