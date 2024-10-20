import { Menu } from "lucide-react";
import OverlayMenu from "../sections/overlay-menu";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="w-full wp h-16 flex justify-between items-center"
      role="banner"
    >
      <div>
        <h1 className="text-xl font-bold uppercase">
          <a href="/" aria-label="Artistry Atelier Home">
            Artistry Atelier
          </a>
        </h1>
      </div>
      <nav>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center"
          aria-expanded="false"
          aria-controls="main-menu"
          aria-label="Toggle main menu"
        >
          <Menu className="size-6 mr-1" aria-hidden="true" />
          <span className="text-xl font-bold">Menu</span>
        </button>
      </nav>
      <OverlayMenu open={open} setOpen={setOpen} />
    </header>
  );
}

export default Header;
