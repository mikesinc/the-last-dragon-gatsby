export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, 
                isAuthorised: action.payload[0],
                user: action.payload[1],
            }
        default:
            throw Error('reducer error');
    }
}