const Footer = () => {
  return (
    <footer className="w-full bg-primary py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary mb-4 md:mb-0">
            © {new Date().getFullYear()} Portfolio. Tüm hakları saklıdır.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer; 