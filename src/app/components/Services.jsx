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
          title: "Oil Change",
          href: "/services/oil-change",
          description:
            "Regular oil changes to keep your engine running smoothly and extend its life.",
        },
        {
          title: "Brake Inspection",
          href: "/services/brake-inspection",
          description:
            "Comprehensive brake system checks to ensure your safety on the road.",
        },
        {
          title: "Tire Rotation",
          href: "/services/tire-rotation",
          description:
            "Extend the lifespan of your tires with proper rotation and balancing.",
        },
        {
          title: "Battery Check",
          href: "/services/battery-check",
          description:
            "Ensure your vehicle's battery is in good condition and avoid unexpected breakdowns.",
        },
        {
          title: "Engine Diagnostics",
          href: "/services/engine-diagnostics",
          description:
            "Advanced diagnostics to identify and fix engine issues effectively.",
        },
        {
          title: "AC Service",
          href: "/services/ac-service",
          description:
            "Stay cool with our air conditioning inspection and repair services.",
        },
      ];
      
    return (
      <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
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
  