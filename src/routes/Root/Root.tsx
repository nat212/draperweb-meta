import Layout from '@/components/layout/Layout';
import { Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}
