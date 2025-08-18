import AnimationRetargeting from "@/components/portfolio/AnimationRetargeting";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AnimationPage = () => {
  return (
    <div className="min-h-screen portfolio-dark py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Muito Obrigado, pela mensagem</h1>
          <Link to="/">
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
              Voltar para a página inicial
            </Button>
          </Link>
        </div>
        <p className="text-gray-300 mb-8"></p>
        <AnimationRetargeting />
      </div>
    </div>
  );
};

export default AnimationPage;


