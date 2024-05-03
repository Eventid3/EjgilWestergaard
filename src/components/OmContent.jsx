import React, { useEffect, useRef } from 'react';
import OmHeine from "./OmHeine"
import OmLars from './OmLars';
import OmElof from './OmElof';

function OmContent({selectedCategory}) {

    switch (selectedCategory) {
        case 'heine':
            return <OmHeine/>
        case 'lars':
            return <OmLars/>
        case 'elof':
            return <OmElof/>
    }

    return <OmHeine/>
}

export default OmContent
