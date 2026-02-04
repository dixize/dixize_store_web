const TG_TOKEN = '8013834057:AAFgJAmnPutdMRe1p-EVEfvH4RUxlsfy_jM';
const CHAT_ID = '5415190532';

const DB = [
    // --- ТЕЛЕФОНЫ APPLE (10 штук) ---
    { id: 1, cat: 'Phones', name: 'iPhone 15 Pro Max 256GB', price: 145000, img: 'https://img.gadgetcentral.co.ke/wp-content/uploads/2023/09/iPhone-15-Pro-Max-Natural-Titanium.jpg', size: '159.9 x 76.7 x 8.3 мм', weight: '221 г', cpu: 'A17 Pro' },
    { id: 2, cat: 'Phones', name: 'iPhone 15 Pro 128GB', price: 115000, img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846360609', size: '146.6 x 70.6 x 8.3 мм', weight: '187 г', cpu: 'A17 Pro' },
    { id: 3, cat: 'Phones', name: 'iPhone 15 Plus', price: 98000, img: 'https://istyle.hu/media/catalog/product/i/p/iphone_15_plus_blue_pdp_image_position-1__en-us_1.jpg', size: '160.8 x 78.1 x 7.8 мм', weight: '201 г', cpu: 'A16 Bionic' },
    { id: 4, cat: 'Phones', name: 'iPhone 15 128GB', price: 82000, img: 'https://istyle.hu/media/catalog/product/i/p/iphone_15_pink_pdp_image_position-1__en-us_1.jpg', size: '147.6 x 71.6 x 7.8 мм', weight: '171 г', cpu: 'A16 Bionic' },
    { id: 5, cat: 'Phones', name: 'iPhone 14 Pro Max', price: 110000, img: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/21/530e6605-7284-4061-903b-180901e8880e.png', size: '160.7 x 77.6 x 7.9 мм', weight: '240 г', cpu: 'A16 Bionic' },
    { id: 6, cat: 'Phones', name: 'iPhone 14 128GB', price: 74000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_X_Yy6L5R5D6T-v6tL3P7X-p7_q_X_X_X_X&s', size: '146.7 x 71.5 x 7.8 мм', weight: '172 г', cpu: 'A15 Bionic' },
    { id: 7, cat: 'Phones', name: 'iPhone 13 128GB', price: 64000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_x_X_Yy6L5R5D6T-v6tL3P7X-p7_q_X_X_X_X&s', size: '146.7 x 71.5 x 7.7 мм', weight: '174 г', cpu: 'A15 Bionic' },
    { id: 8, cat: 'Phones', name: 'iPhone 13 Mini', price: 58000, img: 'https://m.media-amazon.com/images/I/61N7p5vI6CL.jpg', size: '131.5 x 64.2 x 7.7 мм', weight: '141 г', cpu: 'A15 Bionic' },
    { id: 9, cat: 'Phones', name: 'iPhone 12 64GB', price: 48000, img: 'https://m.media-amazon.com/images/I/71ZOtNdaZCL.jpg', size: '146.7 x 71.5 x 7.4 мм', weight: '164 г', cpu: 'A14 Bionic' },
    { id: 10, cat: 'Phones', name: 'iPhone 11 64GB', price: 39000, img: 'https://m.media-amazon.com/images/I/71QE00i6WNL._AC_UF1000,1000_QL80_.jpg', size: '150.9 x 75.7 x 8.3 мм', weight: '194 г', cpu: 'A13 Bionic' },

    // --- ТЕЛЕФОНЫ SAMSUNG (10 штук) ---
    { id: 11, cat: 'Phones', name: 'Samsung Galaxy S24 Ultra', price: 119000, img: 'https://m.media-amazon.com/images/I/71WjsZ8n1lL.jpg', size: '162.3 x 79 x 8.6 мм', weight: '232 г', cpu: 'SD 8 Gen 3' },
    { id: 12, cat: 'Phones', name: 'Samsung Galaxy S24+', price: 92000, img: 'https://m.media-amazon.com/images/I/61fS0eS0SFL.jpg', size: '158.5 x 75.9 x 7.7 мм', weight: '196 г', cpu: 'Exynos 2400' },
    { id: 13, cat: 'Phones', name: 'Samsung Galaxy S24', price: 75000, img: 'https://m.media-amazon.com/images/I/716f9f6e-d983-4a6c-9a4f-7e0e7a6e1a6e.jpg', size: '147 x 70.6 x 7.6 мм', weight: '167 г', cpu: 'Exynos 2400' },
    { id: 14, cat: 'Phones', name: 'Samsung Galaxy Z Fold 5', price: 135000, img: 'https://m.media-amazon.com/images/I/716f9f6e-d983-4a6c-9a4f-7e0e7a6e1a6e.jpg', size: '154.9 x 129.9 мм', weight: '253 г', cpu: 'SD 8 Gen 2' },
    { id: 15, cat: 'Phones', name: 'Samsung Galaxy Z Flip 5', price: 82000, img: 'https://m.media-amazon.com/images/I/61S7p5vI6CL.jpg', size: '85.1 x 71.9 мм', weight: '187 г', cpu: 'SD 8 Gen 2' },
    { id: 16, cat: 'Phones', name: 'Samsung Galaxy S23 Ultra', price: 95000, img: 'https://m.media-amazon.com/images/I/716f9f6e-d983-4a6c-9a4f-7e0e7a6e1a6e.jpg', size: '163.4 x 78.1 мм', weight: '234 г', cpu: 'SD 8 Gen 2' },
    { id: 17, cat: 'Phones', name: 'Samsung Galaxy A54 5G', price: 32000, img: 'https://m.media-amazon.com/images/I/61S7p5vI6CL.jpg', size: '158.2 x 76.7 мм', weight: '202 г', cpu: 'Exynos 1380' },
    { id: 18, cat: 'Phones', name: 'Samsung Galaxy A34', price: 26000, img: 'https://m.media-amazon.com/images/I/61S7p5vI6CL.jpg', size: '161.3 x 78.1 мм', weight: '199 г', cpu: 'Dimensity 1080' },
    { id: 19, cat: 'Phones', name: 'Samsung Galaxy S21 FE', price: 38000, img: 'https://m.media-amazon.com/images/I/61S7p5vI6CL.jpg', size: '155.7 x 74.5 мм', weight: '177 г', cpu: 'SD 888' },
    { id: 20, cat: 'Phones', name: 'Samsung Galaxy A24', price: 18000, img: 'https://m.media-amazon.com/images/I/61S7p5vI6CL.jpg', size: '162.1 x 77.6 мм', weight: '195 г', cpu: 'Helio G99' },

    // --- НАУШНИКИ (10 штук) ---
    { id: 21, cat: 'Audio', name: 'Apple AirPods Pro 2 (USB-C)', price: 24000, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg', size: 'Compact', weight: '50 г', cpu: 'H2 Chip' },
    { id: 22, cat: 'Audio', name: 'Apple AirPods 3', price: 18500, img: 'https://m.media-amazon.com/images/I/61N7p5vI6CL.jpg', size: 'Compact', weight: '38 г', cpu: 'H1 Chip' },
    { id: 23, cat: 'Audio', name: 'Apple AirPods Max', price: 59000, img: 'https://m.media-amazon.com/images/I/81ni69Zp26L.jpg', size: 'Over-ear', weight: '384 г', cpu: 'H1 x2' },
    { id: 24, cat: 'Audio', name: 'Samsung Galaxy Buds 2 Pro', price: 15500, img: 'https://m.media-amazon.com/images/I/61fS0eS0SFL.jpg', size: 'In-ear', weight: '43 г', cpu: 'N/A' },
    { id: 25, cat: 'Audio', name: 'Samsung Galaxy Buds FE', price: 8900, img: 'https://m.media-amazon.com/images/I/61fS0eS0SFL.jpg', size: 'In-ear', weight: '40 г', cpu: 'N/A' },
    { id: 26, cat: 'Audio', name: 'Sony WH-1000XM5', price: 39000, img: 'https://m.media-amazon.com/images/I/61+96uM9v8L.jpg', size: 'Over-ear', weight: '250 г', cpu: 'V1' },
    { id: 27, cat: 'Audio', name: 'Sony WF-1000XM5', price: 28000, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg', size: 'In-ear', weight: '39 г', cpu: 'QN2e' },
    { id: 28, cat: 'Audio', name: 'Beats Studio Pro', price: 34000, img: 'https://m.media-amazon.com/images/I/81ni69Zp26L.jpg', size: 'Over-ear', weight: '260 г', cpu: 'Apple W1' },
    { id: 29, cat: 'Audio', name: 'Marshall Major IV', price: 14500, img: 'https://m.media-amazon.com/images/I/81ni69Zp26L.jpg', size: 'On-ear', weight: '165 г', cpu: 'N/A' },
    { id: 30, cat: 'Audio', name: 'JBL Tune 510BT', price: 4500, img: 'https://m.media-amazon.com/images/I/81ni69Zp26L.jpg', size: 'On-ear', weight: '160 г', cpu: 'N/A' },

    // --- ПЛАНШЕТЫ (8 штук) ---
    { id: 31, cat: 'Tablets', name: 'iPad Pro 12.9 M2 256GB', price: 125000, img: 'https://m.media-amazon.com/images/I/81ni69Zp26L.jpg', size: '12.9 дюймов', weight: '682 г', cpu: 'Apple M2' },
    { id: 32, cat: 'Tablets', name: 'iPad Pro 11 M2', price: 95000, img: 'https://m.media-amazon.com/images/I/81c+9uM9v8L.jpg', size: '11 дюймов', weight: '466 г', cpu: 'Apple M2' },
    { id: 33, cat: 'Tablets', name: 'iPad Air 5 M1', price: 68000, img: 'https://m.media-amazon.com/images/I/71ZOtNdaZCL.jpg', size: '10.9 дюймов', weight: '461 г', cpu: 'Apple M1' },
    { id: 34, cat: 'Tablets', name: 'iPad Mini 6 64GB', price: 54000, img: 'https://m.media-amazon.com/images/I/71ZOtNdaZCL.jpg', size: '8.3 дюйма', weight: '293 г', cpu: 'A15' },
    { id: 35, cat: 'Tablets', name: 'iPad 10.9 (2022)', price: 47000, img: 'https://m.media-amazon.com/images/I/71ZOtNdaZCL.jpg', size: '10.9 дюймов', weight: '477 г', cpu: 'A14' },
    { id: 36, cat: 'Tablets', name: 'Samsung Tab S9 Ultra', price: 105000, img: 'https://m.media-amazon.com/images/I/61fS0eS0SFL.jpg', size: '14.6 дюймов', weight: '732 г', cpu: 'SD 8 Gen 2' },
    { id: 37, cat: 'Tablets', name: 'Samsung Tab S9 FE', price: 42000, img: 'https://m.media-amazon.com/images/I/61fS0eS0SFL.jpg', size: '10.9 дюймов', weight: '523 г', cpu: 'Exynos 1380' },
    { id: 38, cat: 'Tablets', name: 'Xiaomi Pad 6', price: 34000, img: 'https://m.media-amazon.com/images/I/61fS0eS0SFL.jpg', size: '11 дюймов', weight: '490 г', cpu: 'SD 870' },

    // --- АКСЕССУАРЫ (Реальные названия, 25 штук) ---
    { id: 41, cat: 'Accessories', name: 'Apple MagSafe Charger', price: 4900, img: 'https://m.media-amazon.com/images/I/61fS0eS0SFL.jpg' },
    { id: 42, cat: 'Accessories', name: 'Silicone Case (iPhone 15)', price: 5400, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 43, cat: 'Accessories', name: 'Блок питания 20W USB-C', price: 2900, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 44, cat: 'Accessories', name: 'Кабель USB-C to USB-C (2m)', price: 3200, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 45, cat: 'Accessories', name: 'Powerbank Anker 737 140W', price: 14500, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 46, cat: 'Accessories', name: 'Стилус Apple Pencil 2', price: 12900, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 47, cat: 'Accessories', name: 'Клавиатура Magic Keyboard', price: 34000, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 48, cat: 'Accessories', name: 'Samsung 25W Wall Charger', price: 2100, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 49, cat: 'Accessories', name: 'Baseus 65W GaN Charger', price: 3800, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 50, cat: 'Accessories', name: 'Leather Case (iPhone 14)', price: 6500, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 51, cat: 'Accessories', name: 'Повербанк Xiaomi 20000mAh', price: 4500, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 52, cat: 'Accessories', name: 'AirTag (1 pack)', price: 3500, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 53, cat: 'Accessories', name: 'AirTag (4 pack)', price: 11900, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 54, cat: 'Accessories', name: 'Belkin Screen Protector', price: 1900, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 55, cat: 'Accessories', name: 'Чехол для AirPods Pro', price: 1500, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 56, cat: 'Accessories', name: 'Logitech MX Master 3S', price: 12000, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 57, cat: 'Accessories', name: 'Logitech K380 Keyboard', price: 5500, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 58, cat: 'Accessories', name: 'USB-C Hub Satechi', price: 8900, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 59, cat: 'Accessories', name: 'SD Card 128GB Sandisk', price: 2800, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 60, cat: 'Accessories', name: 'MagSafe Card Holder', price: 5900, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 61, cat: 'Accessories', name: 'Чехол Pitaka (iPhone 15)', price: 7900, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 62, cat: 'Accessories', name: 'Ugreen 100W Cable', price: 1800, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 63, cat: 'Accessories', name: 'Samsung Galaxy SmartTag', price: 2900, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 64, cat: 'Accessories', name: 'Авто-держатель MagSafe', price: 4200, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' },
    { id: 65, cat: 'Accessories', name: 'Сумка для MacBook 13"', price: 5800, img: 'https://m.media-amazon.com/images/I/61SUj2W5yZL.jpg' }
];

let cart = [];
let discount = 0;

// НАВИГАЦИЯ (Переключение страниц)
function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.add('hidden'));
    const target = document.getElementById('page-' + pageId);
    if(target) target.classList.remove('hidden');
    
    if(pageId === 'catalog') renderProducts('Phones');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ОТРИСОВКА КАТАЛОГА
function renderProducts(category) {
    const list = document.getElementById('products-list');
    document.querySelectorAll('.cat-card').forEach(card => {
        card.classList.remove('active-cat');
        if(card.innerText.includes(category === 'Phones' ? 'ТЕЛЕФОНЫ' : 
                                   category === 'Audio' ? 'НАУШНИКИ' : 
                                   category === 'Tablets' ? 'ПЛАНШЕТЫ' : 'АКСЕССУАРЫ')) {
            card.classList.add('active-cat');
        }
    });

    const filtered = DB.filter(p => p.cat === category);
    list.innerHTML = filtered.map(p => `
        <div class="bg-[#111] rounded-[24px] p-5 border border-white/5 hover:border-indigo-500/50 transition-all group cursor-pointer" onclick="viewProduct(${p.id})">
            <div class="overflow-hidden rounded-xl mb-4 h-40 bg-white flex items-center justify-center">
                <img src="${p.img}" class="h-full w-full object-contain group-hover:scale-110 transition duration-500" onerror="this.src='https://via.placeholder.com/300?text=ULTRA+TECH'">
            </div>
            <h3 class="font-bold text-sm h-10 overflow-hidden line-clamp-2">${p.name}</h3>
            <div class="flex justify-between items-center mt-3">
                <p class="text-indigo-400 font-black text-lg tracking-tighter">${p.price.toLocaleString()} ₽</p>
                <div class="bg-white/5 w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition">
                    <i class="fa-solid fa-plus text-[10px]"></i>
                </div>
            </div>
        </div>
    `).join('');
}

// СТРАНИЦА ТОВАРА
function viewProduct(id) {
    const p = DB.find(x => x.id === id);
    const container = document.getElementById('product-detail-container');
    container.innerHTML = `
        <div class="max-w-4xl mx-auto py-4">
            <button onclick="showPage('catalog')" class="mb-6 text-gray-500 text-xs font-bold uppercase tracking-widest">← Назад в каталог</button>
            <div class="bg-[#111] rounded-[32px] p-6 border border-white/10">
                <div class="bg-white rounded-2xl p-4 mb-8">
                    <img src="${p.img}" class="w-full h-64 object-contain mx-auto" onerror="this.src='https://via.placeholder.com/300?text=ULTRA+TECH'">
                </div>
                <h2 class="text-3xl font-black mb-4 tracking-tighter">${p.name}</h2>
                <div class="space-y-3 mb-8 text-sm">
                    ${p.cpu ? `<div class="flex justify-between border-b border-white/5 pb-2"><span class="text-gray-500">Процессор</span><span class="font-bold">${p.cpu}</span></div>` : ''}
                    ${p.size ? `<div class="flex justify-between border-b border-white/5 pb-2"><span class="text-gray-500">Габариты</span><span class="font-bold">${p.size}</span></div>` : ''}
                    ${p.weight ? `<div class="flex justify-between border-b border-white/5 pb-2"><span class="text-gray-500">Вес</span><span class="font-bold">${p.weight}</span></div>` : ''}
                </div>
                <div class="flex items-center gap-4">
                    <span class="text-2xl font-black italic tracking-tighter">${p.price.toLocaleString()} ₽</span>
                    <button onclick="addToCart(${p.id})" class="flex-grow bg-indigo-600 py-4 rounded-xl font-black hover:bg-indigo-500 transition active:scale-95 uppercase">Добавить</button>
                </div>
            </div>
        </div>
    `;
    showPage('item');
}

// ЛОГИКА КОРЗИНЫ
function addToCart(id) {
    const p = DB.find(x => x.id === id);
    cart.push({...p, cartId: Date.now()});
    updateCartUI();
    const btn = event.target;
    btn.innerText = 'В КОРЗИНЕ';
    btn.style.background = '#22c55e';
    setTimeout(() => { btn.innerText = 'ДОБАВИТЬ'; btn.style.background = ''; }, 1000);
}

function updateCartUI() {
    document.getElementById('cart-count-badge').innerText = cart.length;
    const list = document.getElementById('cart-full-list');
    if(cart.length === 0) {
        list.innerHTML = `<div class="text-center py-16 bg-white/5 rounded-[32px] border border-dashed border-white/10"><p class="text-gray-500 text-sm">Ваша корзина пуста</p></div>`;
    } else {
        list.innerHTML = cart.map((p, idx) => `
            <div class="cart-item-row">
                <img src="${p.img}" class="w-14 h-14 object-contain bg-white rounded-lg p-1">
                <div class="cart-item-info flex-grow">
                    <h4>${p.name}</h4>
                    <div class="cart-item-price">${p.price.toLocaleString()} ₽</div>
                </div>
                <button onclick="removeItem(${idx})" class="text-red-500/50 p-2"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `).join('');
    }
    calculateTotal();
}

function applyPromo() {
    const code = document.getElementById('promo-input').value.trim();
    if(code === 'Sale2026') {
        discount = 0.10;
        document.getElementById('promo-msg').innerText = '🔥 СКИДКА 10% АКТИВИРОВАНА';
        calculateTotal();
    } else {
        discount = 0;
        document.getElementById('promo-msg').innerText = '';
        calculateTotal();
    }
}

function calculateTotal() {
    let base = cart.reduce((s, p) => s + p.price, 0);
    let final = base - (base * discount);
    document.getElementById('final-price').innerText = Math.floor(final).toLocaleString() + ' ₽';
}

function removeItem(idx) {
    cart.splice(idx, 1);
    updateCartUI();
}

// ОТПРАВКА В TELEGRAM
async function checkout() {
    const name = document.getElementById('order-name').value.trim();
    const phone = document.getElementById('order-phone').value.trim();
    const city = document.getElementById('cart-city').value.trim();
    
    if(!name || !phone || !city || cart.length === 0) return alert('Пожалуйста, заполните Имя, Телефон и Город');

    const btn = event.target;
    btn.disabled = true;
    btn.innerText = 'ОТПРАВКА...';

    let list = cart.map(p => `• ${p.name}`).join('%0A');
    let msg = `🚀 **НОВЫЙ ЗАКАЗ — ULTRA TECH**%0A👤 **Имя:** ${name}%0A📞 **Тел:** ${phone}%0A📍 **Город:** ${city}%0A📦 **Товары:**%0A${list}%0A💰 **Сумма:** ${document.getElementById('final-price').innerText}`;

    try {
        await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${msg}&parse_mode=Markdown`);
        alert(`Спасибо, ${name}! Заказ принят. Мы перезвоним вам на номер ${phone}.`);
        cart = [];
        updateCartUI();
        showPage('home');
    } catch(e) {
        alert('Ошибка при отправке');
    } finally {
        btn.disabled = false;
        btn.innerText = 'ОФОРМИТЬ ЗАКАЗ';
    }
}

// ИНИЦИАЛИЗАЦИЯ
document.addEventListener('DOMContentLoaded', () => { 
    showPage('home'); 
    updateCartUI(); 
});
