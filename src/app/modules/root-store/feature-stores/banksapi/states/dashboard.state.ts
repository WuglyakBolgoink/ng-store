import { HttpErrorResponse } from '@angular/common/http';
import { Status } from '@app/modules/root-store/root-state';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface IDashboard {
    id: string;
    // bankAccess: BankAccess;
}

export interface IDashboardState extends EntityState<IDashboard> {
    // additional entity state properties
    status: Status;
    error: HttpErrorResponse | null;
}

export type State = IDashboardState;

/*
    - selectId: A method for selecting the primary id for the collection.
    - sortComparer: A compare function used to sort the collection.
    The comparer function is only needed if the collection needs to be sorted before being displayed.
    Set to false to leave the collection unsorted, which is more performant during CRUD operations.
*/
const options = {
    selectId: (model) => {
        console.log(`[Dashboard][selectId] model[${ model.id }]`, model);
        return model.id;
    },
    sortComparer: (a: IDashboard, b: IDashboard): number => {
        console.log('[Dashboard][sortComparer] a:', a, 'b:', b, `RESULT: [${ a.id.localeCompare(b.id) }]`);
        return a.id.localeCompare(b.id);
    }
};

export const dashboardFeatureAdapter: EntityAdapter<IDashboard> = createEntityAdapter<IDashboard>(options);

export const initialState: State = dashboardFeatureAdapter.getInitialState(
    {
        status: Status.LOADED,
        error: null
    }
);

// =========
// TODO: FIX LOGIC!!!
// TODO: FIX LOGIC!!!
// TODO: FIX LOGIC!!!
// TODO: FIX LOGIC!!!
// TODO: FIX LOGIC!!!
// TODO: FIX LOGIC!!!
// =========
