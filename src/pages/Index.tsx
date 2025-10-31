import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const accounts = [
  {
    id: 1,
    title: 'PRO Аккаунт',
    level: 85,
    items: 47,
    robux: 5000,
    price: 2499,
    image: 'https://cdn.poehali.dev/projects/159c6133-3445-43e3-aeff-1bc353f2a632/files/ae2473fa-88b6-4742-bb60-bc4208610ea4.jpg',
    badge: 'Популярный'
  },
  {
    id: 2,
    title: 'MEGA Аккаунт',
    level: 120,
    items: 93,
    robux: 15000,
    price: 5999,
    image: 'https://cdn.poehali.dev/projects/159c6133-3445-43e3-aeff-1bc353f2a632/files/72c7a0a4-8a22-4ace-9135-bb4322507cb4.jpg',
    badge: 'VIP'
  },
  {
    id: 3,
    title: 'ELITE Аккаунт',
    level: 150,
    items: 127,
    robux: 25000,
    price: 8999,
    image: 'https://cdn.poehali.dev/projects/159c6133-3445-43e3-aeff-1bc353f2a632/files/1e0d9533-810b-4767-b802-165df88ecc38.jpg',
    badge: 'Premium'
  },
  {
    id: 4,
    title: 'STARTER Аккаунт',
    level: 45,
    items: 23,
    robux: 1500,
    price: 999,
    image: 'https://cdn.poehali.dev/projects/159c6133-3445-43e3-aeff-1bc353f2a632/files/ae2473fa-88b6-4742-bb60-bc4208610ea4.jpg',
    badge: 'Новинка'
  },
  {
    id: 5,
    title: 'ADVANCED Аккаунт',
    level: 95,
    items: 64,
    robux: 8000,
    price: 3499,
    image: 'https://cdn.poehali.dev/projects/159c6133-3445-43e3-aeff-1bc353f2a632/files/72c7a0a4-8a22-4ace-9135-bb4322507cb4.jpg',
    badge: 'Хит'
  },
  {
    id: 6,
    title: 'ULTIMATE Аккаунт',
    level: 200,
    items: 180,
    robux: 50000,
    price: 14999,
    image: 'https://cdn.poehali.dev/projects/159c6133-3445-43e3-aeff-1bc353f2a632/files/1e0d9533-810b-4767-b802-165df88ecc38.jpg',
    badge: 'Эксклюзив'
  }
];

const reviews = [
  { id: 1, name: 'Максим К.', rating: 5, text: 'Отличный аккаунт! Всё как описано, передача прошла быстро' },
  { id: 2, name: 'Анна Л.', rating: 5, text: 'Супер! Куча редких предметов, очень довольна покупкой' },
  { id: 3, name: 'Дмитрий П.', rating: 5, text: 'Всё честно, продавец помог с настройкой. Рекомендую!' }
];

const faqs = [
  { question: 'Как происходит передача аккаунта?', answer: 'После оплаты вы получаете логин и пароль от аккаунта на вашу почту в течение 5 минут. Мы помогаем с переносом данных и настройкой безопасности.' },
  { question: 'Безопасна ли покупка?', answer: 'Да, все аккаунты проверены, не имеют нарушений и привязаны к почте. После передачи вы сможете сменить все данные доступа.' },
  { question: 'Можно ли вернуть аккаунт?', answer: 'Возврат возможен в течение 24 часов, если аккаунт не соответствует описанию. Подробности в разделе "Оплата и доставка".' },
  { question: 'Есть ли гарантия?', answer: 'Да, на все аккаунты предоставляется гарантия 30 дней от блокировки и 7 дней на возврат.' }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('catalog');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAccounts = accounts.filter(acc =>
    acc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#221F3B] to-[#1A1F2C]">
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="GamepadIcon" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                ROBLOX SHOP
              </h1>
            </div>
            <nav className="hidden md:flex gap-6">
              {['Каталог', 'Оплата и доставка', 'Отзывы', 'FAQ', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase().replace(/\s/g, ''))}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase().replace(/\s/g, '')
                      ? 'text-primary'
                      : 'text-white/70'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {activeSection === 'catalog' && (
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Готовые аккаунты Roblox
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Прокачанные аккаунты с редкими предметами и Robux
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <Input
                placeholder="Поиск аккаунтов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAccounts.map((account, index) => (
              <Card
                key={account.id}
                className="bg-gradient-to-br from-card/80 to-card/40 border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={account.image}
                    alt={account.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 right-3 bg-gradient-to-r from-primary to-accent border-0">
                    {account.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">{account.title}</h3>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-primary font-bold text-lg">{account.level}</div>
                      <div className="text-xs text-white/60">Уровень</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-accent font-bold text-lg">{account.items}</div>
                      <div className="text-xs text-white/60">Предметы</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-secondary font-bold text-lg">{account.robux.toLocaleString()}</div>
                      <div className="text-xs text-white/60">Robux</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-white">{account.price} ₽</div>
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 border-0">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'оплатаидоставка' && (
        <section className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Оплата и доставка
            </h2>
            
            <Card className="bg-card/80 border-white/10 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="CreditCard" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Способы оплаты</h3>
                    <p className="text-white/70">Банковские карты (Visa, MasterCard, МИР), ЮMoney, QIWI, криптовалюта</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="Zap" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Моментальная доставка</h3>
                    <p className="text-white/70">Получите данные аккаунта на email в течение 5 минут после оплаты</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="Shield" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Гарантии</h3>
                    <p className="text-white/70">30 дней гарантии от блокировки, 7 дней на возврат средств</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'отзывы' && (
        <section className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Отзывы покупателей
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="bg-card/80 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-white/80 mb-4">{review.text}</p>
                    <p className="text-white/60 text-sm font-medium">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'faq' && (
        <section className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Вопросы и ответы
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card/80 border-white/10 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-white hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {activeSection === 'контакты' && (
        <section className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Контакты
            </h2>
            
            <Card className="bg-card/80 border-white/10">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">Email</div>
                      <div className="text-white font-medium">support@robloxshop.ru</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon name="MessageCircle" size={24} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">Telegram</div>
                      <div className="text-white font-medium">@robloxshop_support</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Icon name="Clock" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">Режим работы</div>
                      <div className="text-white font-medium">Ежедневно, 24/7</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="GamepadIcon" size={18} />
              </div>
              <span className="font-bold text-white">ROBLOX SHOP</span>
            </div>
            <p className="text-white/60 text-sm">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
