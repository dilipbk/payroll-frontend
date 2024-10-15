import dashboardsNavigationConfig from './dashboards.navigation.config'
import conceptsNavigationConfig from './concepts.navigation.config'
import authNavigationConfig from './auth.navigation.config'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    ...dashboardsNavigationConfig,
    ...conceptsNavigationConfig,
    ...authNavigationConfig,
]

export default navigationConfig
