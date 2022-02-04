export const ROUTER = {
    HOME: {
        PATH: '/',
        NAME: 'home',
    },
    SHOW_DETAIL: {
        PATH: '/show/:id',
        NAME: 'show',
    },
    SEARCH_RESULT: {
        PATH: '/search-results/:searchText',
        NAME: 'search',
    },
    NOT_FOUND: {
        PATH: '/:pathMatch(.*)*',
        NAME: 'NotFound',
    }
}