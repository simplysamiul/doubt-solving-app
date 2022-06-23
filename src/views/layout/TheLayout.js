import React from 'react';
import Body from '../body/Body';
import Menubar from '../shared/Menubar';

const TheLayout = () => {
    return (
        <>
            <div className="menubar-section">
                <Menubar />
            </div>
            <div className="body-section">
                <Body />
            </div>

            {/* There will be footer */}
        </>
    );
};

export default TheLayout;