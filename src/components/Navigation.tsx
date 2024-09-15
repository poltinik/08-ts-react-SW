import NavItem from './NavItem'
import { navItems } from '../utils/constants'

const Navigation = () => {
    return (
        <nav className="fixed top-2 left-12">
            <ul className="flex space-x-4">
                {navItems.map((item: string) => <NavItem key={item} itemTitle={item} />)}
            </ul>
        </nav>
    )
}

export default Navigation