function Footer() {
  const currYear = new Date().getFullYear().toString();
  return (
    <footer
      className="flex flex-col right-0 bottom-0 items-center mt-32 p-4 w-full 
    bg-sky-600 "
    >
      <p className="text-2xl font-bold text-white ml-6">ggalushko</p>
      <p className="text-2xl font-bold text-white ml-6">©{currYear}</p>
    </footer>
  );
}

export default Footer;
