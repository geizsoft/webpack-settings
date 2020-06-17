import RootDOM from '@/App'
import IndexView from '@/pages/indexView/index'
const routes = [
    {
        component: RootDOM,
        routes: [
            {
                path: '/',
                component: IndexView
            }
        ]
    }
]

export default routes
