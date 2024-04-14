import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "../ui/navigation-menu";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to="/">Home</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/">Teste1</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/">Teste2</Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default Nav;
