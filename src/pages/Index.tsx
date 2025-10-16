import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-creative"></div>
            <span className="font-bold text-xl">Creative</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="story-link text-sm font-medium">Главная</a>
            <a href="#benefits" className="story-link text-sm font-medium">Преимущества</a>
            <a href="#services" className="story-link text-sm font-medium">Услуги</a>
            <a href="#reviews" className="story-link text-sm font-medium">Отзывы</a>
            <a href="#contacts" className="story-link text-sm font-medium">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-accent/20 rounded-full">
              <span className="text-sm font-semibold text-foreground">🚀 Креативные решения</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              CREATIVE
              <br />
              <span className="bg-gradient-creative bg-clip-text text-transparent">extidinal</span>
              <br />
              LANDING
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Необычные креативные решения для вашего бизнеса. 
              Создаём то, что выделяет вас среди конкурентов
            </p>
            <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Почему мы</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Наши преимущества</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              То, что делает нас особенными и помогает достигать результатов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Sparkles",
                title: "Креативный подход",
                description: "Нестандартные решения для каждого проекта"
              },
              {
                icon: "Zap",
                title: "Быстрая реализация",
                description: "Эффективные процессы и четкие дедлайны"
              },
              {
                icon: "Target",
                title: "Точность в деталях",
                description: "Внимание к каждому элементу вашего проекта"
              },
              {
                icon: "Award",
                title: "Высокое качество",
                description: "Проверенные стандарты и лучшие практики"
              },
              {
                icon: "Users",
                title: "Команда экспертов",
                description: "Профессионалы с многолетним опытом"
              },
              {
                icon: "TrendingUp",
                title: "Рост результатов",
                description: "Измеримые показатели успеха проектов"
              }
            ].map((benefit, index) => (
              <Card 
                key={index}
                className="p-8 hover-scale bg-card border-2 hover:border-primary/50 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-creative flex items-center justify-center mb-6">
                  <Icon name={benefit.icon} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Что мы делаем</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный спектр креативных услуг для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Веб-дизайн",
                description: "Создание уникальных и современных веб-интерфейсов",
                features: ["UX/UI дизайн", "Адаптивная верстка", "Анимации"]
              },
              {
                title: "Брендинг",
                description: "Разработка фирменного стиля и айдентики",
                features: ["Логотип", "Гайдлайны", "Фирменный стиль"]
              },
              {
                title: "Разработка",
                description: "Техническая реализация проектов любой сложности",
                features: ["Frontend", "Backend", "Мобильные приложения"]
              },
              {
                title: "Маркетинг",
                description: "Стратегии продвижения и роста бизнеса",
                features: ["SMM", "Контент", "Аналитика"]
              }
            ].map((service, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-2 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Box" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap mt-6">
                  {service.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Отзывы</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Что говорят клиенты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Анна Петрова",
                role: "CEO, TechStart",
                text: "Команда превзошла все ожидания! Креативный подход и профессионализм на высшем уровне.",
                rating: 5
              },
              {
                name: "Дмитрий Иванов",
                role: "Основатель, DesignHub",
                text: "Отличная работа! Проект был выполнен точно в срок с вниманием к каждой детали.",
                rating: 5
              },
              {
                name: "Мария Сидорова",
                role: "Маркетолог, BrandWorks",
                text: "Результат превзошёл наши ожидания. Рекомендую всем, кто ищет качество и креатив!",
                rating: 5
              }
            ].map((review, index) => (
              <Card 
                key={index}
                className="p-6 bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-creative"></div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Свяжитесь с нами</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Начнём работу вместе</h2>
            <p className="text-muted-foreground">
              Расскажите о вашем проекте, и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input 
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                Отправить сообщение
              </Button>
            </form>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <Icon name="Mail" className="mx-auto mb-3 text-primary" size={32} />
              <p className="font-semibold mb-1">Email</p>
              <p className="text-muted-foreground">hello@creative.com</p>
            </div>
            <div className="p-6">
              <Icon name="Phone" className="mx-auto mb-3 text-secondary" size={32} />
              <p className="font-semibold mb-1">Телефон</p>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div className="p-6">
              <Icon name="MapPin" className="mx-auto mb-3 text-accent" size={32} />
              <p className="font-semibold mb-1">Адрес</p>
              <p className="text-muted-foreground">Москва, Россия</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-creative"></div>
              <span className="font-bold text-lg">Creative</span>
            </div>
            <p className="text-white/70">© 2024 Creative. Все права защищены.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
