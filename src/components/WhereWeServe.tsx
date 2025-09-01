import { BAIRROS_DATA } from "../data/neighborhoods";
import { Link } from "react-router-dom";
import { MapPin, Clock, Shield } from "lucide-react";

const WhereWeServe = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gas-dark mb-6">
            Onde Atendemos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Atendimento técnico especializado em aquecedores a gás em toda região metropolitana
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gas-orange" />
              <span>Atendimento 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-gas-orange" />
              <span>Técnicos Certificados</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gas-orange" />
              <span>Cobertura Total</span>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {Object.entries(BAIRROS_DATA).map(([cityKey, cityData]) => (
            <div key={cityKey} className="space-y-8">
              {/* City Header */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gas-dark mb-2">
                  {cityData.name}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-gas-orange to-gas-orange/60 mx-auto rounded-full"></div>
              </div>

              {/* Zones Grid */}
              <div className="grid gap-6">
                {Object.entries(cityData.zones).map(([zoneName, neighborhoods]) => (
                  <div key={zoneName} className="group">
                    {/* Zone Card */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                      {/* Zone Header */}
                      <div className="bg-gradient-to-r from-gas-orange to-gas-orange/80 px-6 py-4">
                        <h4 className="text-xl font-bold text-white flex items-center gap-2">
                          <MapPin className="h-5 w-5" />
                          {zoneName}
                        </h4>
                        <p className="text-white/90 text-sm mt-1">
                          {neighborhoods.length} bairros atendidos
                        </p>
                      </div>

                      {/* Neighborhoods Grid */}
                      <div className="p-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {neighborhoods.map((neighborhood, index) => (
                            <Link
                              key={neighborhood.slug}
                              to={`/${cityData.slug}/${neighborhood.slug}`}
                              className="group/item relative"
                              style={{
                                animationDelay: `${index * 50}ms`
                              }}
                            >
                              <div className="bg-gray-50 hover:bg-gas-orange hover:text-white rounded-lg px-4 py-3 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-md border border-transparent hover:border-gas-orange/20">
                                <span className="text-sm font-medium text-gray-700 group-hover/item:text-white transition-colors duration-300">
                                  {neighborhood.name}
                                </span>
                                <div className="absolute inset-0 bg-gas-orange opacity-0 group-hover/item:opacity-10 rounded-lg transition-opacity duration-300"></div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gas-dark mb-4">
              Não encontrou seu bairro?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco! Atendemos toda a região metropolitana do Rio de Janeiro
            </p>
            <a
              href="https://wa.me/5521970128342"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gas-orange to-gas-orange/80 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeServe;