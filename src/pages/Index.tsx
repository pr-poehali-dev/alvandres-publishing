import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const services = [
    {
      icon: "BookOpen",
      title: "Издание книг",
      description: "Полный цикл создания книги: редактура, вёрстка, печать",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "Sparkles",
      title: "Манга",
      description: "Перевод, адаптация и издание японской манги",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: "Store",
      title: "Стенды на заказ",
      description: "Разработка и производство рекламных конструкций",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: "Megaphone",
      title: "Реклама",
      description: "Продвижение изданий через наши каналы",
      color: "from-cyan-600 to-blue-700"
    }
  ];

  const editors = [
    {
      name: "Анна Михайлова",
      role: "Главный редактор",
      specialization: "Художественная литература",
      achievements: ["15+ лет опыта", "150+ книг", "Лауреат премии «Лучший редактор 2023»"],
      image: "https://cdn.poehali.dev/projects/6cb25dde-a2bc-408c-a5e7-d580f4ab67df/files/36ffea9f-9d95-4e70-8b7a-fa681941d113.jpg"
    },
    {
      name: "Дмитрий Соколов",
      role: "Редактор манги",
      specialization: "Японская культура, комиксы",
      achievements: ["8 лет в индустрии", "80+ томов манги", "Эксперт по адаптации"],
      image: "https://cdn.poehali.dev/projects/6cb25dde-a2bc-408c-a5e7-d580f4ab67df/files/36ffea9f-9d95-4e70-8b7a-fa681941d113.jpg"
    },
    {
      name: "Елена Краснова",
      role: "Литературный редактор",
      specialization: "Нон-фикшн, биографии",
      achievements: ["12 лет опыта", "100+ книг", "Работа с бестселлерами"],
      image: "https://cdn.poehali.dev/projects/6cb25dde-a2bc-408c-a5e7-d580f4ab67df/files/36ffea9f-9d95-4e70-8b7a-fa681941d113.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="BookText" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-gray-900">Альвандрес</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
            <a href="#editors" className="text-gray-700 hover:text-primary transition-colors">Редакторы</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Издательство полного цикла
              </Badge>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Воплощаем идеи в{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  книги
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Профессиональное издательство с командой опытных редакторов. 
                Книги, манга, стенды на заказ и эффективная реклама ваших проектов.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Send" className="mr-2" size={20} />
                  Начать проект
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-100">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Консультация
                </Button>
              </div>
            </div>
            <div className="animate-scale-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-cyan-200/50 blur-3xl rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/6cb25dde-a2bc-408c-a5e7-d580f4ab67df/files/2fd015fa-dbd6-4809-9bd5-165ce5241fcc.jpg" 
                  alt="Издательство"
                  className="relative rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-700">Всё для создания вашего издания</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-white/80 backdrop-blur border-gray-200 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group animate-fade-in shadow-sm hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform`}>
                    <Icon name={service.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="editors" className="py-20 px-6 bg-gray-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Наши редакторы</h2>
            <p className="text-xl text-gray-700">Профессионалы своего дела</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {editors.map((editor, index) => (
              <Card 
                key={index} 
                className="bg-white/80 backdrop-blur border-gray-200 hover:border-primary/50 transition-all duration-300 overflow-hidden group animate-slide-in-left shadow-sm hover:shadow-lg"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={editor.image} 
                    alt={editor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 to-transparent"></div>
                </div>
                <CardContent className="p-6 -mt-16 relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{editor.name}</h3>
                  <p className="text-primary font-medium mb-2">{editor.role}</p>
                  <p className="text-gray-700 mb-4">{editor.specialization}</p>
                  <div className="space-y-2">
                    {editor.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Icon name="Award" className="text-secondary mt-1" size={16} />
                        <span className="text-sm text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">О издательстве</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Альвандрес</strong> — современное издательство полного цикла, 
                специализирующееся на выпуске художественной литературы, манги и производстве рекламных материалов.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Наша команда состоит из опытных редакторов, корректоров и дизайнеров, 
                которые помогут воплотить вашу идею в жизнь — от рукописи до готовой книги на полке.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">300+</div>
                  <div className="text-gray-700">Изданий</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">15</div>
                  <div className="text-gray-700">Редакторов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">12</div>
                  <div className="text-gray-700">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-up">
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 backdrop-blur border-gray-200 p-8 shadow-sm">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Профессиональная команда</h3>
                      <p className="text-gray-700">Редакторы с многолетним опытом работы</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Быстрые сроки</h3>
                      <p className="text-gray-700">Работаем оперативно без потери качества</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Shield" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Гарантия качества</h3>
                      <p className="text-gray-700">Полное сопровождение на всех этапах</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-50/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-700">Готовы обсудить ваш проект</p>
          </div>
          <Card className="bg-white/80 backdrop-blur border-gray-200 animate-scale-up shadow-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Email</div>
                      <div className="text-gray-900 font-medium">info@alvandres.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                      <Icon name="Phone" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Телефон</div>
                      <div className="text-gray-900 font-medium">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Адрес</div>
                      <div className="text-gray-900 font-medium">Москва, ул. Литературная, 10</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                  <Button variant="outline" className="w-full border-gray-300 text-gray-900 hover:bg-gray-100" size="lg">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Написать в Telegram
                  </Button>
                  <Button variant="outline" className="w-full border-gray-300 text-gray-900 hover:bg-gray-100" size="lg">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Заказать звонок
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="container mx-auto text-center text-gray-400">
          <p className="text-gray-700">© 2024 Издательство Альвандрес. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;