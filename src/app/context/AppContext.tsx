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
	errorMessage: string | null;
	isTouchDevice: boolean | undefined;
	isMobile: boolean | undefined;
	isMobileWidth: boolean | undefined;
	isSmallTablet: boolean | undefined;
	isTablet: boolean | undefined;
	isTabletWidth: boolean | undefined;
	loading: boolean | undefined;
	setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the provider props type
interface ContextProviderProps {
	children: ReactNode;
}

// Create the context provider component
export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [isTouchDevice, setIsTouchDevice] = useState<boolean | undefined>(
		undefined
	);
	const [loading, setLoading] = useState(false);

	// Determine if touch device or not
	useEffect(() => {
		const mq = window.matchMedia('(pointer: coarse)');
		setIsTouchDevice(mq.matches);

		const handler = (e: MediaQueryListEvent) => setIsTouchDevice(e.matches);
		mq.addEventListener('change', handler);

		return () => mq.removeEventListener('change', handler);
	}, []);

	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		setHydrated(true);
	}, []);

	// Screen Dimensions + is it Mobile, Tablet, or not
	const rawMobileWidth = useMediaQuery(
		'(max-width: 550px) and (orientation: portrait)'
	);
	const rawMobileHeight = useMediaQuery(
		'(max-height: 550px) and (orientation: landscape)'
	);
	const rawTabletWidth = useMediaQuery(
		'(max-width: 950px) and (orientation: portrait)'
	);
	const rawTabletHeight = useMediaQuery(
		'(max-height: 850px) and (orientation: landscape)'
	);

	const rawSmallTablet = useMediaQuery(
		'(max-height: 850px) and (max-width: 850px)'
	);

	const isMobileWidth = hydrated ? rawMobileWidth : undefined;
	const isMobileHeight = hydrated ? rawMobileHeight : undefined;
	const isTabletWidth = hydrated ? rawTabletWidth : undefined;
	const isTabletHeight = hydrated ? rawTabletHeight : undefined;

	const isMobile = isMobileWidth || isMobileHeight;
	const isSmallTablet = hydrated ? rawSmallTablet : undefined;
	const isTablet = isTabletWidth || isTabletHeight;

	return (
		<AppContext.Provider
			value={{
				errorMessage,
				isTouchDevice,
				isMobile,
				isMobileWidth,
				isTablet,
				isTabletWidth,
				isSmallTablet,
				loading,
				setErrorMessage,
				setLoading,
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
