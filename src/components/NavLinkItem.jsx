import { NavLink } from "react-router-dom";
const NavLinkItem = () =>{
    const listNavLink = [{id:0,title:'Home',href:'/'},{id:1,title:'Projects',href:'/project'},{id:2,title:'Resume',href:'/resume'}]
    return(
        <>
        <ul className='nav nav-pills py-2 gap-3 mb-3 border-bottom'>
            {
                listNavLink.map(item=>(
                    <li 
                    key={item.id}
                    class="nav-item position-relative" 
                    role="presentation">
                        <NavLink 
                        to={item.href}
                        end
                        className='text-fs_l text-link_decoration text-color_subscription'                
                        // isActive={({ isActive }) => (isActive ? "active" : "")}
                        >{item.title}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
        </>
    )
}
export default NavLinkItem;