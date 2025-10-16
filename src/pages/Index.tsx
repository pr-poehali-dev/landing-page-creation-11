import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [callbackForm, setCallbackForm] = useState({
    name: "",
    phone: "",
    time: "morning"
  });

  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Callback form submitted:", callbackForm);
    toast({
      title: "Заявка на звонок принята!",
      description: "Мы перезвоним вам в указанное время.",
    });
    setIsCallbackOpen(false);
    setCallbackForm({ name: "", phone: "", time: "morning" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-creative flex items-center justify-center">
              <Icon name="Palette" className="text-white" size={20} />
            </div>
            <span className="font-bold text-xl">Djanett-art</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="story-link text-sm font-medium">Главная</a>
            <a href="#benefits" className="story-link text-sm font-medium">Преимущества</a>
            <a href="#services" className="story-link text-sm font-medium">Направления</a>
            <a href="#gallery" className="story-link text-sm font-medium">Галерея</a>
            <a href="#teachers" className="story-link text-sm font-medium">Преподаватели</a>
            <a href="#pricing" className="story-link text-sm font-medium">Расписание</a>
            <a href="#reviews" className="story-link text-sm font-medium">Отзывы</a>
            <a href="#contacts" className="story-link text-sm font-medium">Контакты</a>
          </div>
          <div className="flex items-center gap-3">
            <Dialog open={isCallbackOpen} onOpenChange={setIsCallbackOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  Обратный звонок
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="text-primary" size={24} />
                    Заказать обратный звонок
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCallbackSubmit} className="space-y-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                    <Input 
                      placeholder="Как к вам обращаться?"
                      value={callbackForm.name}
                      onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={callbackForm.phone}
                      onChange={(e) => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Удобное время для звонка</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: "morning", label: "Утро", icon: "Sunrise" },
                        { value: "day", label: "День", icon: "Sun" },
                        { value: "evening", label: "Вечер", icon: "Sunset" }
                      ].map((time) => (
                        <button
                          key={time.value}
                          type="button"
                          onClick={() => setCallbackForm({ ...callbackForm, time: time.value })}
                          className={`p-3 rounded-lg border-2 transition-all flex flex-col items-center gap-1 ${
                            callbackForm.time === time.value 
                              ? 'border-primary bg-primary/10' 
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <Icon name={time.icon} size={20} />
                          <span className="text-xs font-medium">{time.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Заказать звонок
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Мы перезвоним вам в течение 15 минут
                  </p>
                </form>
              </DialogContent>
            </Dialog>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <button 
        onClick={() => setIsCallbackOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 animate-float"
      >
        <Icon name="Phone" size={24} />
      </button>

      <section id="home" className="pt-20 pb-0 relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/0ff6b702-2b64-46bb-9716-9e78d29f7aad/files/1da708a5-6914-4feb-92a8-52e33ed5590d.jpg"
            alt="Арт студия"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40"></div>
        </div>

        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float z-[1]"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float z-[1]" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-block mb-6 px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full">
                <span className="text-sm font-semibold text-foreground">🎨 Раскройте творческий потенциал</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Школа Искусств
                <br />
                <span className="text-foreground">для детей и взрослых</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Обучаем рисунку, живописи, скульптуре и дизайну. 
                Развиваем творческое мышление и художественный вкус в любом возрасте
              </p>
              <div className="flex gap-4 animate-fade-in flex-wrap" style={{ animationDelay: '0.3s' }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                  Записаться на пробное занятие
                </Button>
                <Button size="lg" variant="outline" className="border-2 bg-background/80 backdrop-blur-sm">
                  Узнать о программах
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-center p-4 bg-card/80 backdrop-blur-sm rounded-xl border-2">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center p-4 bg-card/80 backdrop-blur-sm rounded-xl border-2">
                  <div className="text-3xl font-bold text-secondary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">учеников</div>
                </div>
                <div className="text-center p-4 bg-card/80 backdrop-blur-sm rounded-xl border-2">
                  <div className="text-3xl font-bold text-accent mb-1">12</div>
                  <div className="text-sm text-muted-foreground">направлений</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Почему мы</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Наши преимущества</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Создаём комфортную среду для развития творческих способностей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Users",
                title: "Опытные преподаватели",
                description: "Дипломированные художники и педагоги с 10+ летним стажем"
              },
              {
                icon: "Sparkles",
                title: "Индивидуальный подход",
                description: "Программы адаптируются под уровень и цели каждого ученика"
              },
              {
                icon: "Home",
                title: "Уютная студия",
                description: "Современное пространство с профессиональным оборудованием"
              },
              {
                icon: "Award",
                title: "Сертификаты и выставки",
                description: "Возможность участия в конкурсах и персональных выставках"
              },
              {
                icon: "Calendar",
                title: "Гибкое расписание",
                description: "Утренние, дневные и вечерние группы на выбор"
              },
              {
                icon: "TrendingUp",
                title: "Видимый прогресс",
                description: "Результаты уже после первого месяца обучения"
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
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Наши программы</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Направления обучения</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите программу, которая откроет мир искусства для вас или вашего ребёнка
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "Paintbrush",
                title: "Живопись и рисунок",
                description: "Основы композиции, перспективы, работа с цветом",
                features: ["Акварель", "Масло", "Графика"],
                color: "primary"
              },
              {
                icon: "Box",
                title: "Скульптура и лепка",
                description: "Работа с объёмом, формой и пластикой материалов",
                features: ["Глина", "Гипс", "Пластилин"],
                color: "secondary"
              },
              {
                icon: "Laptop",
                title: "Цифровой дизайн",
                description: "Современные инструменты для digital-художников",
                features: ["Photoshop", "Illustrator", "Procreate"],
                color: "accent"
              },
              {
                icon: "Palette",
                title: "Детская студия",
                description: "Программы для детей от 5 лет с игровыми элементами",
                features: ["Рисование", "Поделки", "Творчество"],
                color: "primary"
              }
            ].map((service, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-2 hover:shadow-xl transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-${service.color}/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon} className={`text-${service.color}`} size={24} />
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
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white">
                  Подробнее о курсе
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-3xl mx-auto p-8 bg-gradient-creative text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Icon name="Gift" size={48} className="text-white flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Первое занятие бесплатно!</h3>
                  <p className="text-white/90">
                    Приходите на пробный урок, познакомьтесь с преподавателем и атмосферой студии
                  </p>
                </div>
                <Button size="lg" variant="outline" className="bg-white text-foreground hover:bg-white/90 whitespace-nowrap">
                  Записаться
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Портфолио</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Работы наших учеников</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Вдохновитесь творчеством студентов школы — от первых шагов до профессиональных работ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                image: "https://cdn.poehali.dev/projects/0ff6b702-2b64-46bb-9716-9e78d29f7aad/files/154d831c-20af-42de-805c-44d446adecfb.jpg",
                title: "Акварельные цветы",
                author: "Мария, 2 месяца обучения",
                category: "Живопись"
              },
              {
                image: "https://cdn.poehali.dev/projects/0ff6b702-2b64-46bb-9716-9e78d29f7aad/files/7fb061db-011a-4c46-b57f-eb622aaaeab3.jpg",
                title: "Портрет маслом",
                author: "Алексей, 6 месяцев обучения",
                category: "Живопись"
              },
              {
                image: "https://cdn.poehali.dev/projects/0ff6b702-2b64-46bb-9716-9e78d29f7aad/files/98e39157-18c7-42b1-9f27-a956963c62b4.jpg",
                title: "Абстрактная композиция",
                author: "Елена, 4 месяца обучения",
                category: "Современное искусство"
              }
            ].map((work, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover-scale animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-semibold">{work.category}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{work.title}</h3>
                  <p className="text-sm text-muted-foreground">{work.author}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-2">
              Посмотреть всю галерею
            </Button>
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Наша команда</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Познакомьтесь с преподавателями</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Профессиональные художники и педагоги с многолетним опытом работы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Елена Волкова",
                role: "Преподаватель живописи",
                image: "https://cdn.poehali.dev/projects/0ff6b702-2b64-46bb-9716-9e78d29f7aad/files/c09a3f25-2721-4ccd-a601-34cd72c74596.jpg",
                experience: "15 лет опыта",
                education: "МГХПА им. Строганова",
                specialization: "Акварель, масло, акрил",
                achievements: "Участник более 20 выставок, лауреат конкурса «Молодые художники России»"
              },
              {
                name: "Дмитрий Соколов",
                role: "Преподаватель рисунка и композиции",
                image: "https://cdn.poehali.dev/projects/0ff6b702-2b64-46bb-9716-9e78d29f7aad/files/86ca733f-59c6-464f-a1fc-d536e41af825.jpg",
                experience: "12 лет опыта",
                education: "МАРХИ",
                specialization: "Академический рисунок, перспектива",
                achievements: "Член Союза художников России, персональные выставки в Москве и Санкт-Петербурге"
              },
              {
                name: "Анна Морозова",
                role: "Преподаватель цифрового дизайна",
                image: "https://cdn.poehali.dev/projects/0ff6b702-2b64-46bb-9716-9e78d29f7aad/files/ce2beb06-293c-47f0-a6ef-5eeccfe9b336.jpg",
                experience: "8 лет опыта",
                education: "British Higher School of Art and Design",
                specialization: "Digital art, иллюстрация",
                achievements: "Работы опубликованы в международных изданиях, сотрудничество с Adobe"
              }
            ].map((teacher, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover-scale animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{teacher.name}</h3>
                    <p className="text-white/90 text-sm">{teacher.role}</p>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Briefcase" className="text-primary" size={16} />
                    <span className="text-muted-foreground">{teacher.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="GraduationCap" className="text-secondary" size={16} />
                    <span className="text-muted-foreground">{teacher.education}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Icon name="Palette" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-muted-foreground">{teacher.specialization}</span>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm text-muted-foreground italic">
                      {teacher.achievements}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Присоединяйтесь к нашей команде</h3>
                  <p className="text-muted-foreground">
                    Мы ищем талантливых художников и педагогов. Если вы любите искусство и готовы делиться знаниями — напишите нам!
                  </p>
                </div>
                <Button variant="outline" className="whitespace-nowrap">
                  Отправить резюме
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Расписание и цены</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Выберите удобный формат</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Гибкие программы обучения для разных целей и возможностей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Групповые занятия",
                price: "3 500",
                period: "за 4 занятия",
                features: [
                  "Группы до 8 человек",
                  "2 раза в неделю",
                  "Длительность 2 часа",
                  "Все материалы включены",
                  "Доступ к студии"
                ],
                popular: false
              },
              {
                name: "Индивидуальные",
                price: "2 500",
                period: "за занятие",
                features: [
                  "Персональный подход",
                  "Гибкий график",
                  "Длительность 1.5 часа",
                  "Программа под ваши цели",
                  "Быстрый прогресс"
                ],
                popular: true
              },
              {
                name: "Детская студия",
                price: "2 800",
                period: "за 4 занятия",
                features: [
                  "Группы до 6 детей",
                  "2 раза в неделю",
                  "Длительность 1.5 часа",
                  "Игровой формат",
                  "Материалы включены"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 relative animate-scale-in ${plan.popular ? 'border-2 border-primary shadow-xl scale-105' : 'border-2'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярное
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Записаться
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="p-8 bg-accent/10 border-accent">
              <div className="flex items-start gap-4">
                <Icon name="Clock" className="text-accent flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="font-bold text-xl mb-3">Расписание занятий</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="font-semibold mb-2">Групповые занятия:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Понедельник, Среда: 18:00 - 20:00</li>
                        <li>• Вторник, Четверг: 19:00 - 21:00</li>
                        <li>• Суббота: 11:00 - 13:00, 14:00 - 16:00</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Детская студия:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Понедельник, Среда: 16:00 - 17:30</li>
                        <li>• Суббота: 10:00 - 11:30</li>
                        <li>• Воскресенье: 11:00 - 12:30</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    * Индивидуальные занятия — по согласованию
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Отзывы</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Что говорят наши ученики</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Елена Михайлова",
                role: "Мама ученицы",
                text: "Дочка ходит на занятия уже полгода и просто влюблена в рисование! Преподаватели находят подход к каждому ребёнку.",
                rating: 5
              },
              {
                name: "Алексей Соколов",
                role: "Студент курса дизайна",
                text: "Отличная программа для начинающих! За 3 месяца научился работать в Photoshop и создал портфолио.",
                rating: 5
              },
              {
                name: "Ирина Волкова",
                role: "Курс живописи",
                text: "Всегда мечтала научиться рисовать. Здесь это стало реальностью! Атмосфера творчества и поддержки.",
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
                  <div className="w-12 h-12 rounded-full bg-gradient-creative flex items-center justify-center">
                    <Icon name="User" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-3xl mx-auto p-8 bg-gradient-accent">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Icon name="MessageCircle" size={48} className="text-white flex-shrink-0" />
                <div className="text-left flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">Свяжитесь с нами в Telegram</h3>
                  <p className="text-white/90">
                    Задайте вопросы, узнайте о скидках и акциях, запишитесь на занятие — всё в одном месте
                  </p>
                </div>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white text-foreground hover:bg-white/90 whitespace-nowrap"
                  onClick={() => window.open('https://t.me/artstudio_bot', '_blank')}
                >
                  <Icon name="Send" className="mr-2" size={18} />
                  Открыть Telegram
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Свяжитесь с нами</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Запишитесь на пробное занятие</h2>
            <p className="text-muted-foreground">
              Заполните форму, и мы свяжемся с вами для подбора удобного времени
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>
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
                <label className="block text-sm font-medium mb-2">Какое направление вас интересует?</label>
                <Textarea 
                  placeholder="Например: живопись для начинающих, детская студия для ребёнка 7 лет..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[120px]"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                Отправить заявку
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </Card>

          <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <Icon name="Mail" className="mx-auto mb-3 text-primary" size={32} />
              <p className="font-semibold mb-1">Email</p>
              <a href="mailto:info@artstudio.ru" className="text-muted-foreground hover:text-primary transition-colors">
                info@artstudio.ru
              </a>
            </div>
            <div className="p-6">
              <Icon name="Phone" className="mx-auto mb-3 text-secondary" size={32} />
              <p className="font-semibold mb-1">Телефон</p>
              <a href="tel:+74951234567" className="text-muted-foreground hover:text-secondary transition-colors">+7 (978) 234-00-14</a>
            </div>
            <div className="p-6">
              <Icon name="Send" className="mx-auto mb-3 text-[#0088cc]" size={32} />
              <p className="font-semibold mb-1">Telegram</p>
              <button 
                onClick={() => window.open('https://t.me/artstudio_bot', '_blank')}
                className="text-muted-foreground hover:text-[#0088cc] transition-colors"
              >
                @artstudio_bot
              </button>
            </div>
            <div className="p-6">
              <Icon name="MapPin" className="mx-auto mb-3 text-accent" size={32} />
              <p className="font-semibold mb-1">Адрес</p>
              <p className="text-muted-foreground">Москва, ул. Арбат, 10</p>
            </div>
          </div>

          <div className="mt-8">
            <Card className="p-6 bg-muted/50">
              <p className="text-center text-sm text-muted-foreground mb-4">
                Выберите удобный способ связи:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => window.open('https://t.me/artstudio_bot', '_blank')}
                >
                  <Icon name="Send" size={18} />
                  Telegram
                </Button>
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => window.open('https://wa.me/79782340014', '_blank')}
                >
                  <Icon name="MessageCircle" size={18} />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => window.open('tel:+79782340014', '_blank')}
                >
                  <Icon name="Phone" size={18} />
                  +7 (978) 234-00-14
                </Button>
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => setIsCallbackOpen(true)}
                >
                  <Icon name="Phone" size={18} />
                  Обратный звонок
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-creative flex items-center justify-center">
                <Icon name="Palette" className="text-white" size={16} />
              </div>
              <span className="font-bold text-lg">Djanett-art</span>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <a href="tel:+79782340014" className="text-white font-semibold text-lg hover:text-white/80 transition-colors">
                +7 (978) 234-00-14
              </a>
              <p className="text-white/70 text-sm">© 2024 Школа Искусств Djanett-art. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10"
                onClick={() => window.open('https://instagram.com/artstudio', '_blank')}
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10"
                onClick={() => window.open('https://youtube.com/@artstudio', '_blank')}
              >
                <Icon name="Youtube" size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10"
                onClick={() => window.open('https://t.me/artstudio_bot', '_blank')}
              >
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;