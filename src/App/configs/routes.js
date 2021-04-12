export const routes = {
    home: {
        index: '/'
    },
    schedule: {
        index: '/schedule/',
        mask: '/schedule/:group',
        create: (group) => `/schedule/${group}`
    }
};