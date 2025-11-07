import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NeighborhoodPage from "./components/NeighborhoodPage";
import SitemapPage from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/:city/:neighborhood" element={<NeighborhoodPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>

            {/* ⬇️ SEU MAPA/RODAPÉ VAI AQUI ⬇️ */}
            {/* Ele está fora das Rotas, por isso aparecerá em todas as páginas */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2988738214967!2d-43.291756024689754!3d-22.902344579258134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997dc6ae4b27b1%3A0x7b121a6cafe9463a!2sAUTORIZADA%20RINNAI!5e0!3m2!1spt-BR!2sbr!4v1762537430442!5m2!1spt-BR!2sbr" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* ⬆️ FIM DO MAPA/RODAPÉ ⬆️ */}

          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
