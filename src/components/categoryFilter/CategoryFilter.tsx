import React from 'react';

import AppliedFilters from './AppliedFilters';
import CategoryDrawer from './CategoryDrawer';
import CategoryItem from './CategoryItem';

const categoryFilter = () => {
    return (
        <CategoryDrawer>
            <div className="mt-4">
                <AppliedFilters />
                <CategoryItem />
                <CategoryItem />
            </div>
        </CategoryDrawer>
    );
};

export default categoryFilter;
