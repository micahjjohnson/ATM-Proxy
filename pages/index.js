import React from 'react';
import Layout from '../components/MyLayout';
import PinEntry from "../components/screens/PinEntry";


export default function Index() {
    return (
        <div>
            <Layout>
                <PinEntry/>
            </Layout>
        </div>
    );
}