import React, { createContext, useState, ReactNode } from 'react';

type Listing = {
    category: string;
    details: string;
};

type ListingsContextType = {
    listings: Listing[];
    addListing: (listing: Listing) => void;
};

export const ListingsContext = createContext<ListingsContextType | undefined>(undefined);

export const ListingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [listings, setListings] = useState<Listing[]>([]);

    const addListing = (listing: Listing) => {
        setListings((prevListings) => [...prevListings, listing]);
    };

    return (
        <ListingsContext.Provider value={{ listings, addListing }}>
            {children}
        </ListingsContext.Provider>
    );
};
