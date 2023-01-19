import { FunctionComponent, useMemo } from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { LayoutGroup } from "framer-motion";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";
import { links } from "./links";

export const Navbar: FunctionComponent = () => {
  const [isDesktopScreen] = useMediaQuery("(min-width: 576px)");
  const [isMobileScreen] = useMediaQuery("(max-width: 576px)");

  const localizedLinks = useMemo(() => {
    const localizedLinks = links.map((link) => ({
      ...link,
    }));
    return localizedLinks;
  }, []);

  return (
    <LayoutGroup id="navbar">
      <Flex as="nav">
        {isDesktopScreen && <NavbarDesktop links={localizedLinks} />}
        {isMobileScreen && <NavbarMobile links={localizedLinks} />}
      </Flex>
    </LayoutGroup>
  );
};
