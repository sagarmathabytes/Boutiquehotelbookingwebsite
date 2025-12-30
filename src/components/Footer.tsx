import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-forest text-stone py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h5 className="text-stone mb-4">Nepal Boutique</h5>
            <p className="text-stone/80 text-sm leading-relaxed">
              A curated collection of verified boutique hotels across Nepal. 
              We visit every property. We check every claim. We ensure every stay meets our standards.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="text-stone mb-4">Explore</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/search" className="text-stone/80 hover:text-stone text-sm transition-colors">
                  Browse Hotels
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone/80 hover:text-stone text-sm transition-colors">
                  Our Standards
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-stone/80 hover:text-stone text-sm transition-colors">
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h5 className="text-stone mb-4">Get in Touch</h5>
            <p className="text-stone/80 text-sm leading-relaxed">
              Questions about a property?<br />
              Considering joining our collection?<br />
              <span className="text-stone">hello@nepalboutique.com</span>
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-stone/20 text-center">
          <p className="text-stone/60 text-sm">
            © 2025 Nepal Boutique. Thoughtfully curated.
          </p>
        </div>
      </div>
    </footer>
  );
}
