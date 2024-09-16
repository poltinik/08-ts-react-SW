import { navItems } from '../utils/constants'
import NavItem from './NavItem'

const Navigation = () => {
    return (
        <nav className="fixed top-2 left-12">
            <ul className="flex space-x-4">
                {navItems.map(item => <NavItem key={item} itemTitle={item} />)}
            </ul>
        </nav>
    )
}

export default Navigation