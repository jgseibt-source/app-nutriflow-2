"use client"

import { Check, Download, Users, Clock, Star, ChevronDown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                Mais de 50.000 pessoas transformadas
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              NutriFlow: Sua Dieta<br />Personalizada em Minutos!
            </h1>
            
            <p className="text-xl sm:text-2xl font-semibold text-emerald-100 max-w-3xl mx-auto">
              Perdi 5 kg em apenas 30 dias! Com NutriFlow, isso é possível!
            </p>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Você está cansado de tentar dietas genéricas que não funcionam para você? 
              Conheça o NutriFlow! Um aplicativo revolucionário que cria uma dieta sob medida, 
              baseada nas suas respostas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6 rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
              <p className="text-sm text-white/80">✓ Garantia de 7 dias</p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Como Funciona */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Três passos simples para transformar sua alimentação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-emerald-500">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Descubra Seus Objetivos
            </h3>
            <p className="text-gray-600">
              Responda a um quiz rápido com perguntas sobre seu corpo, estilo de vida e quanto deseja emagrecer.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-emerald-500">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Receba Sua Dieta Personalizada
            </h3>
            <p className="text-gray-600">
              Ao final do quiz, baixe um plano alimentar que se adapta exatamente às suas necessidades.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-emerald-500">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Resultados Visíveis e Sustentáveis
            </h3>
            <p className="text-gray-600">
              Siga o plano e veja resultados notáveis na sua saúde e forma física.
            </p>
          </Card>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Benefícios Únicos do NutriFlow
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Planos Personalizados
                </h3>
                <p className="text-gray-600">
                  Cada dieta é elaborada com base nas suas preferências e objetivos, garantindo que você siga algo que realmente funcione.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Facilidade e Praticidade
                </h3>
                <p className="text-gray-600">
                  Em minutos, você obtém uma solução nutricional que se encaixa na sua rotina, sem complicações.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Suporte Constante
                </h3>
                <p className="text-gray-600">
                  Controle seu progresso e faça ajustes conforme necessário, tudo pelo seu smartphone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Você Vai Receber */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O Que Você Vai Receber
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Quiz Personalizado",
              description: "Perguntas que realçam suas necessidades nutricionais."
            },
            {
              title: "Dieta Sob Medida",
              description: "Um plano equilibrado feito especialmente para você."
            },
            {
              title: "Receitas Rápidas",
              description: "Sugestões deliciosas que você pode preparar em menos de 30 minutos."
            }
          ].map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Planos de Preços */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Escolha Seu Plano
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Invista na sua saúde com planos acessíveis e flexíveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plano Mensal */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Plano Mensal
                </h3>
                <p className="text-gray-600 mb-6">
                  Flexibilidade total para começar
                </p>
                
                <div className="mb-8">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-emerald-600">R$ 29,90</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Acesso completo ao app</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dieta personalizada ilimitada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">E-book de receitas saudáveis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Acesso à comunidade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cancele quando quiser</span>
                  </li>
                </ul>

                <Button 
                  size="lg" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-6 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Começar Agora
                </Button>
              </div>
            </Card>

            {/* Plano Trimestral */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden border-4 border-amber-400">
              <div className="absolute top-0 right-0 bg-gradient-to-br from-amber-400 to-orange-500 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm flex items-center gap-1">
                <Zap className="w-4 h-4" />
                MAIS POPULAR
              </div>
              
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Plano Trimestral
                </h3>
                <p className="text-gray-600 mb-6">
                  Melhor custo-benefício
                </p>
                
                <div className="mb-8">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl font-bold text-emerald-600">R$ 19,90</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                  <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold">
                    Economize 33% • R$ 59,70 a cada 3 meses
                  </div>
                </div>

                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Acesso completo ao app</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dieta personalizada ilimitada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">E-book de receitas saudáveis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Acesso à comunidade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-bold">Economia de R$ 30 em 3 meses</span>
                  </li>
                </ul>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-lg py-6 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Aproveitar Oferta
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-white/90 text-lg">
              ✓ Garantia de 30 dias • ✓ Cancele quando quiser • ✓ Sem taxas ocultas
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Depoimentos de Clientes Satisfeitos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                "NutriFlow mudou minha vida! Perdi 8 kg em 6 semanas e nunca me senti tão bem!"
              </p>
              <p className="font-bold text-gray-900">— Ana, 32 anos</p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                "As receitas são maravilhosas! Nunca pensei que seguir uma dieta poderia ser tão saboroso."
              </p>
              <p className="font-bold text-gray-900">— Carlos, 28 anos</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Garantia Incrível
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Experimente o NutriFlow por 7 dias. Se não ficar satisfeito, devolvemos seu dinheiro!
            </p>
            <p className="text-xl font-bold text-amber-700">
              Sem perguntas, sem risco.
            </p>
          </div>
        </Card>
      </section>

      {/* Bônus */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Bônus Especial
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-emerald-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    E-book de Receitas Saudáveis
                  </h3>
                  <p className="text-gray-600">
                    Diversifique suas refeições com 50 receitas exclusivas.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-emerald-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Acesso à Comunidade
                  </h3>
                  <p className="text-gray-600">
                    Troque dicas e experiências com outros usuários.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-6">
          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Posso usar NutriFlow se tiver restrições alimentares?
            </h3>
            <p className="text-gray-600">
              Sim! O aplicativo permite personalizar sua dieta de acordo com suas necessidades, incluindo opções vegetarianas e veganas.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              É necessário consultar um nutricionista?
            </h3>
            <p className="text-gray-600">
              Não, o NutriFlow oferece todas as ferramentas que você precisa para emagrecer de forma saudável e eficaz.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            A Hora é Agora!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Não deixe para amanhã o que pode transformar sua vida hoje. Baixe o NutriFlow e comece sua jornada rumo à saúde e bem-estar!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-12 py-7 rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Download className="w-6 h-6 mr-2" />
            Começar Minha Transformação Agora
          </Button>
          <p className="text-2xl font-bold text-white mt-8">
            Transforme sua alimentação. Transforme sua vida.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 NutriFlow. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
