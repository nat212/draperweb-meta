import { useEffect, useState } from 'react';
import './App.css';
import { useAccount, User } from '@/hooks/appwrite';
import Layout from '@/components/layout/Layout';
import { Outlet } from 'react-router-dom';

function App() {
    const [, setUser] = useState<User>();
    const account = useAccount();

    useEffect(() => {
        account
            .get()
            .then(user => {
                console.table(user);
                setUser(user);
            })
            .catch(error => {
                console.trace(error);
            });
    }, []);

    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

export default App;
