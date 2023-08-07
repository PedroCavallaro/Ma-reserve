enum FETCH_STATES {
    "FETCH_START",
    "FETCH_SUCCES",
    "FETCH_ERROR",
    "FETCH_END",
}

export const FETCH_INIT_STATE = {
    none: true,
    loading: false,
    succes: false,
    error: false,
};

type fetchActions = {
    type: FETCH_STATES;
};

export const fetchReducer = (
    state: typeof FETCH_INIT_STATE,
    action: fetchActions
): typeof FETCH_INIT_STATE => {
    switch (action.type) {
        case FETCH_STATES.FETCH_START:
            return { ...FETCH_INIT_STATE, none: false, loading: true };
        case FETCH_STATES.FETCH_SUCCES:
            return { ...FETCH_INIT_STATE, none: false, succes: true };
        case FETCH_STATES.FETCH_ERROR:
            return { ...FETCH_INIT_STATE, none: false, error: true };
        case FETCH_STATES.FETCH_END:
            return { ...FETCH_INIT_STATE };
    }
};
