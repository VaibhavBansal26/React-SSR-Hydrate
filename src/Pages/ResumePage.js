import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';

function ResumePage({theme}) {
    return (
        <MainLayout>
            <Skills theme={theme} />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
