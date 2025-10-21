//use client side means that it is render from the client side??
'use client';
import React from 'react'
import Link  from 'next/link'
import {usePathname} from "next/navigation";
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
const navItems = [{label:'Home', href:'/'},
                    {label:'Companions', href:'/companions'},
                    {label:'My Journey', href:'/my-journey'}
]
const NavItems = () => {
    // use pathname hook from next
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-4">
  
        {navItems.map(({label, href}) =>(
            // cn is a lets us add logic to the class name for tailwind/css values?
            <Link href={href} key={label} 
            className={cn(pathname === href && 'text-primary font-semibold')}>
                {label}
            </Link>
        ))}
        </nav>
    )
}

export default NavItems
