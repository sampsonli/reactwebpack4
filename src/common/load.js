import React, {Suspense, lazy} from 'react';

export default (comp, fallback = () => <div />) => {
    const Comp = lazy(comp);
    return () => <Suspense fallback={fallback()}><Comp /></Suspense>;
};
