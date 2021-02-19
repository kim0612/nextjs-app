import { useState } from 'react';
import { Menu } from 'semantic-ui-react'
import { useRouter } from "next/router"

export default function Gnb() {
  const router = useRouter();
  const activeItem = router.asPath;

  function goLink(e, data) {
    if (data.name === "home"){
      router.push("/");
    }
    else if (data.name === "about"){
      router.push("/about");
    }
    else if (data.name === "asdf"){
      router.push("/asdf");
    }
    else{
      router.push("/");
    }
  }

  return (
    <div>
      <Menu inverted>
        <Menu.Item
          name='home'
          active={activeItem === '/'}
          onClick={goLink}
        />
        <Menu.Item
          name='about'
          active={activeItem === '/about'}
          onClick={goLink}
        />
        <Menu.Item
          name='asdf'
          active={activeItem === '/asdf'}
          onClick={goLink}
        />
      </Menu>
    </div>
  );
}