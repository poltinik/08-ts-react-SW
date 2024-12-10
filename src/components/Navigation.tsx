import { navItems } from '../utils/constants'
import NavItem from './NavItem'

const Navigation = () => {
    return (
        <nav className="fixed top-2 left-12">
            <div className="flex space-x-4">
                {navItems.map(item => <NavItem key={item.path} item={item} />)}
            </div>
        </nav>
    )
}

export default Navigation