import React, {Suspense, lazy} from 'react';

export default (comp, fallback = () => <div />) => {
    const Comp = lazy(comp);
    // eslint-disable-next-line react/jsx-props-no-spreading
    return (params) => <Suspense fallback={fallback()}><Comp {...params} /></Suspense>;
};
