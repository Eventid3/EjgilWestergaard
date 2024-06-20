import React, { useEffect, useRef } from 'react';
import OmHeine from "./OmHeine"
import OmLars from './OmLars';
import OmElof from './OmElof';
import OmTak from './OmTak';

function OmContent({selectedCategory}) {

    switch (selectedCategory) {
        case 'heine':
            return <OmHeine/>
        case 'lars':
            return <OmLars/>
        case 'elof':
            return <OmElof/>
        case 'tak':
            return <OmTak/>
    }

    return <OmHeine/>
}

export default OmContent
