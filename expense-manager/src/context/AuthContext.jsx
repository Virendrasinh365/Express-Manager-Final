import React, { createContext, useContext, useState } from 'react';

// 1. Create the Context
// This creates a "store" where we can save our user data.
// It's like a global variable that any component can access.
const AuthContext = createContext(null);

// 2. Create the Provider Component
// This component will wrap our entire app.
// It holds the state (who is logged in) and passes it down to children.
export const AuthProvider = ({ children }) => {
    // efficient management of user state
    const [user, setUser] = useState(null); // null means not logged in

    // Function to handle login
    const login = (role) => {
        // We simulate a user object based on the role
        const userData = {
            id: '1',
            name: role === 'admin' ? 'Super Admin' : 'John Doe',
            email: role === 'admin' ? 'admin@example.com' : 'user@example.com',
            role: role, // 'admin' or 'user'
        };

        console.log("Logging in as:", userData);
        setUser(userData);
    };

    // Function to handle logout
    const logout = () => {
        console.log("Logging out...");
        setUser(null);
    };

    // The value object is what will be accessible to all components
    const value = {
        user,
        isAuthenticated: !!user, // true if user is not null
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// 3. Create a Custom Hook
// This makes it easy for components to us the context.
// Instead of importing useContext and AuthContext every time,
// they just import useAuth().
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
