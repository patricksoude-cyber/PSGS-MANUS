import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Star, Menu, X, ArrowRight, Users, Clock, Shield, Award } from 'lucide-react';
import './App.css';

// Import des images
import heroImage from './assets/JVKkUgSFHGA9.jpg';
import exteriorReno from './assets/QjNLY87HMRd2.jpg';
import kitchenReno from './assets/WIYBeIsV0tsX.jpg';
import kitchenBefore from './assets/xvJMAPE8RwpT.jpg';
import modernKitchen from './assets/bMgSjEDNJ8o1.jpg';
import cleanSite from './assets/3msFT3HwOPgO.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    projet: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique d'envoi du formulaire
    alert('Merci pour votre demande ! Nous vous contacterons sous peu.');
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      projet: '',
      message: ''
    });
  };

  const services = [
    {
      title: "Rénovation de cuisine",
      description: "Transformation complète de votre cuisine avec des matériaux de qualité et un design moderne.",
      icon: "🏠"
    },
    {
      title: "Rénovation de salle de bain",
      description: "Création d'espaces fonctionnels et élégants adaptés à vos besoins quotidiens.",
      icon: "🚿"
    },
    {
      title: "Peinture intérieure/extérieure",
      description: "Application professionnelle de peinture pour rafraîchir et protéger vos espaces.",
      icon: "🎨"
    },
    {
      title: "Travaux de finition",
      description: "Attention aux détails pour parfaire chaque aspect de votre projet de rénovation.",
      icon: "✨"
    },
    {
      title: "Projets institutionnels",
      description: "Expertise en rénovation pour OBNL, municipalités et coopératives d'habitation.",
      icon: "🏢"
    },
    {
      title: "Petits travaux généraux",
      description: "Solutions rapides et efficaces pour tous vos besoins de maintenance et réparation.",
      icon: "🔧"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      project: "Rénovation cuisine",
      text: "PSGS a transformé notre cuisine au-delà de nos attentes. Travail impeccable et respect des délais !",
      rating: 5
    },
    {
      name: "Jean Tremblay",
      project: "Salle de bain",
      text: "Équipe professionnelle et à l'écoute. Notre nouvelle salle de bain est magnifique.",
      rating: 5
    },
    {
      name: "Coopérative Habitat Plus",
      project: "Rénovation institutionnelle",
      text: "Partenaire de confiance pour nos projets de logements sociaux. Excellent rapport qualité-prix.",
      rating: 5
    }
  ];

  const advantages = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Travail soigné",
      description: "Attention méticuleuse aux détails pour un résultat impeccable"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Respect des délais",
      description: "Planification rigoureuse et livraison dans les temps convenus"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Transparence",
      description: "Communication claire et devis détaillés sans surprises"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Adaptabilité",
      description: "Solutions sur mesure pour chaque projet et budget"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-blue-900">PSGS</h1>
              <span className="ml-2 text-sm text-gray-600 hidden sm:block">Construction & Rénovation</span>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
              <a href="#apropos" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#realisations" className="text-gray-700 hover:text-blue-600 transition-colors">Réalisations</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-1" />
                <span>(514) 555-0123</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-1" />
                <span>info@psgs.ca</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Soumission gratuite
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#accueil" className="text-gray-700 hover:text-blue-600">Accueil</a>
                <a href="#apropos" className="text-gray-700 hover:text-blue-600">À propos</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
                <a href="#realisations" className="text-gray-700 hover:text-blue-600">Réalisations</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
                <div className="pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>(514) 555-0123</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>info@psgs.ca</span>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="relative bg-cover bg-center min-h-screen flex items-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Votre partenaire en rénovation résidentielle
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Spécialistes en rénovation de cuisine, salle de bain et projets institutionnels au Québec. 
                Qualité, transparence et respect des délais garantis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Demandez une soumission gratuite
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Voir nos réalisations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">À propos de PSGS</h2>
              <p className="text-lg text-gray-700 mb-6">
                Entrepreneur général établi au Québec, PSGS se spécialise dans la rénovation résidentielle 
                de haute qualité. Notre expertise couvre les cuisines, salles de bain, peinture et travaux 
                de finition intérieure.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nous étendons également nos services au secteur public, travaillant avec des OBNL, 
                municipalités et coopératives d'habitation pour des projets de logements sociaux et 
                bâtiments institutionnels.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Projets réalisés</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={exteriorReno} 
                alt="Rénovation extérieure moderne" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la rénovation résidentielle aux projets institutionnels, nous offrons une gamme 
              complète de services adaptés à vos besoins.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos réalisations</h2>
            <p className="text-xl text-gray-600">
              Découvrez quelques-uns de nos projets récents
            </p>
          </div>

          {/* Galerie photos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src={kitchenReno} 
                alt="Cuisine rénovée moderne" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Cuisine moderne</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src={modernKitchen} 
                alt="Cuisine contemporaine" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Cuisine contemporaine</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src={kitchenBefore} 
                alt="Transformation cuisine" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Avant/Après</span>
              </div>
            </div>
          </div>

          {/* Témoignages */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir PSGS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir PSGS ?</h2>
            <p className="text-xl text-gray-600">
              Notre engagement envers l'excellence se reflète dans chaque projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Contactez-nous</h2>
              <p className="text-xl text-blue-100 mb-8">
                Prêt à démarrer votre projet ? Demandez une soumission gratuite dès aujourd'hui.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-blue-300" />
                  <span className="text-lg">(514) 555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-blue-300" />
                  <span className="text-lg">info@psgs.ca</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-blue-300" />
                  <span className="text-lg">Montréal, Québec</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Demande de soumission</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de projet</label>
                  <select
                    name="projet"
                    value={formData.projet}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  >
                    <option value="">Sélectionnez un type de projet</option>
                    <option value="cuisine">Rénovation de cuisine</option>
                    <option value="salle-bain">Rénovation de salle de bain</option>
                    <option value="peinture">Peinture intérieure/extérieure</option>
                    <option value="finition">Travaux de finition</option>
                    <option value="institutionnel">Projet institutionnel</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description du projet</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Décrivez votre projet en quelques mots..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Envoyer la demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">PSGS</h3>
              <p className="text-gray-400 mb-4">
                Votre partenaire de confiance pour tous vos projets de rénovation résidentielle 
                et institutionnelle au Québec.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Rénovation de cuisine</li>
                <li>Rénovation de salle de bain</li>
                <li>Peinture intérieure/extérieure</li>
                <li>Travaux de finition</li>
                <li>Projets institutionnels</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(514) 555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@psgs.ca</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Montréal, Québec</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PSGS. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

