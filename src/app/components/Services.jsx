import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import React from 'react'
  import { cn } from "@/lib/utils";
  const Services = () => {
    const services = [
        {
          title: "Car Repair",
          href: "/services/car-repair",
          description:
            "Our mechanical repairs cover everything from engine diagnostics to transmission repair, brake servicing, and suspension repairs. Whether it's a small fix or a major overhaul, we ensure quality workmanship and reliable results.",
        },
        {
          title: "Car Electrical Works",
          href: "/services/car-electrical-works",
          description:
            "We specialize in auto electrical repair services, including battery checks, alternator repair, wiring issues, and more. Our experienced electricians use advanced tools to quickly diagnose and repair electrical problems, ensuring your car’s electrical system is in perfect working order.",
        },
        {
          title: "Denting & Painting Works",
          href: "/services/denting-and-painting-works",
          description:
            "If your car has been involved in an accident or you just need a cosmetic upgrade, our dent removal and car painting services will restore your car’s appearance. We match the original colour perfectly and use the latest techniques for a flawless finish.",
        },
        {
          title: "Insurance Claims",
          href: "/services/insurance-claims",
          description:
            "At TopNotch Autocare, we help you navigate the insurance claims process efficiently. Our team works directly with your insurance provider to manage all the paperwork and ensure a hassle-free repair process for your car.",
        },
        {
          title: "Detailing Works",
          href: "/services/detailing-works",
          description:
            "Our car detailing services will give your vehicle a showroom shine. From interior detailing to exterior waxing, Teflon Coating, Paint protection films and ceramic coating, we ensure your car looks spotless inside and out.",
        },
      ];
      
    return (
      <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] font-sans font-extralight">
                {services.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  
    )
  }
  const ListItem = React.forwardRef(function ListItem(
    { className, title, children, ...props },
    ref
  ) {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  
  export default Services
  