import Link from "next/link";

function Navbar() {
  return ( 
    <>
    <h2>This is some text</h2>
    <Link href="/"> Home </Link>
    <Link href="/resources"> Reresource pagsources</Link>
    </>
  );
}

export default Navbar;
