import { HttpErrorResponse } from '@angular/common/http';
import { Status } from '@app/modules/root-store/root-state';
import { BankAccess } from '@models/BANKSapi/BankAccess/BankAccess';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface IBankAccessState {
    id: string;
    bankAccess: BankAccess;
}

export interface IBankAccessesState extends EntityState<IBankAccessState> {
    // additional entity state properties
    status: Status;
    error: HttpErrorResponse | null;
}

export type State = IBankAccessesState;

/*
    - selectId: A method for selecting the primary id for the collection.
    - sortComparer: A compare function used to sort the collection.
    The comparer function is only needed if the collection needs to be sorted before being displayed.
    Set to false to leave the collection unsorted, which is more performant during CRUD operations.
*/
const options = {
    selectId: (model) => {
        console.log(`[BankAccess][selectId] model[${ model.id }]`, model);
        return model.id;
    },
    sortComparer: (a: IBankAccessState, b: IBankAccessState): number => {
        console.log('[BankAccess][sortComparer] a:', a, 'b:', b, `RESULT: [${ a.id.localeCompare(b.id) }]`);
        return a.id.localeCompare(b.id);
    }
};

export const bankAccessFeatureAdapter: EntityAdapter<IBankAccessState> = createEntityAdapter<IBankAccessState>(options);

export const initialState: State = bankAccessFeatureAdapter.getInitialState(
    {
        status: Status.LOADED,
        error: null
    }
);
