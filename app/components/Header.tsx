import TopBar from "./TopBar";
import MainNavBar from "./MainNavBar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <TopBar />
      <MainNavBar />
    </header>
  );
}
