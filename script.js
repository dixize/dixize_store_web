const TG_TOKEN = '8013834057:AAFgJAmnPutdMRe1p-EVEfvH4RUxlsfy_jM';
const CHAT_ID = '5415190532';

const DB = [
    // APPLE
    { id: 1, cat: 'Phones', name: 'iPhone 15 Pro Max', price: 135000, img: 'https://re-store.ru/upload/iblock/588/588741093123864117b9b1f7d995c64b.jpg', size: '159.9 x 76.7 x 8.3 мм', weight: '221 г', cpu: 'A17 Pro' },
    { id: 2, cat: 'Phones', name: 'iPhone 15 Pro', price: 110000, img: 'https://re-store.ru/upload/iblock/938/938927891783492.jpg', size: '146.6 x 70.6 x 8.3 мм', weight: '187 г', cpu: 'A17 Pro' },
    { id: 3, cat: 'Phones', name: 'iPhone 15 Plus', price: 95000, img: 'https://re-store.ru/upload/iblock/284/28491823749812.jpg', size: '160.8 x 78.1 x 7.8 мм', weight: '201 г', cpu: 'A16 Bionic' },
    { id: 4, cat: 'Phones', name: 'iPhone 15', price: 85000, img: 'https://re-store.ru/upload/iblock/123/123918234.jpg', size: '147.6 x 71.6 x 7.8 мм', weight: '171 г', cpu: 'A16 Bionic' },
    { id: 5, cat: 'Phones', name: 'iPhone 14 Pro Max', price: 115000, img: 'https://re-store.ru/upload/iblock/122/122.jpg', size: '160.7 x 77.6 x 7.9 мм', weight: '240 г', cpu: 'A16 Bionic' },
    { id: 6, cat: 'Phones', name: 'iPhone 14', price: 72000, img: 'https://re-store.ru/upload/iblock/333/333.jpg', size: '146.7 x 71.5 x 7.8 мм', weight: '172 г', cpu: 'A15 Bionic' },
    { id: 7, cat: 'Phones', name: 'iPhone 13', price: 62000, img: 'https://re-store.ru/upload/iblock/444/444.jpg', size: '146.7 x 71.5 x 7.7 мм', weight: '174 г', cpu: 'A15 Bionic' },
    { id: 8, cat: 'Phones', name: 'iPhone 13 Mini', price: 55000, img: 'https://re-store.ru/upload/iblock/555/555.jpg', size: '131.5 x 64.2 x 7.7 мм', weight: '141 г', cpu: 'A15 Bionic' },
    { id: 9, cat: 'Phones', name: 'iPhone 12', price: 50000, img: 'https://re-store.ru/upload/iblock/666/666.jpg', size: '146.7 x 71.5 x 7.4 мм', weight: '164 г', cpu: 'A14 Bionic' },
    { id: 10, cat: 'Phones', name: 'iPhone 11', price: 38000, img: 'https://re-store.ru/upload/iblock/777/777.jpg', size: '150.9 x 75.7 x 8.3 мм', weight: '194 г', cpu: 'A13 Bionic' },

    // SAMSUNG
    { id: 11, cat: 'Phones', name: 'Samsung Galaxy S24 Ultra', price: 125000, img: 'https://img.samsung.com/ru/s24-ultra.jpg', size: '162.3 x 79 мм', weight: '232 г', cpu: 'SD 8 Gen 3' },
    { id: 12, cat: 'Phones', name: 'Samsung Galaxy S24+', price: 95000, img: 'https://img.samsung.com/ru/s24-plus.jpg', size: '158.5 x 75.9 мм', weight: '196 г', cpu: 'Exynos 2400' },
    { id: 13, cat: 'Phones', name: 'Samsung Galaxy S23 Ultra', price: 98000, img: 'https://img.samsung.com/ru/s23-u.jpg', size: '163.4 x 78.1 мм', weight: '234 г', cpu: 'SD 8 Gen 2' },
    { id: 14, cat: 'Phones', name: 'Samsung Galaxy Z Fold 5', price: 145000, img: 'https://img.samsung.com/ru/fold5.jpg', size: 'Складной', weight: '253 г', cpu: 'SD 8 Gen 2' },
    { id: 15, cat: 'Phones', name: 'Samsung Galaxy Z Flip 5', price: 85000, img: 'https://img.samsung.com/ru/flip5.jpg', size: 'Складной', weight: '187 г', cpu: 'SD 8 Gen 2' },
    { id: 16, cat: 'Phones', name: 'Samsung Galaxy A54', price: 35000, img: 'https://img.samsung.com/ru/a54.jpg', size: '158.2 x 76.7 мм', weight: '202 г', cpu: 'Exynos 1380' },
    { id: 17, cat: 'Phones', name: 'Samsung Galaxy A34', price: 28000, img: 'https://img.samsung.com/ru/a34.jpg', size: '161.3 x 78.1 мм', weight: '199 г', cpu: 'Dimensity 1080' },
    { id: 18, cat: 'Phones', name: 'Samsung Galaxy S21 FE', price: 42000, img: 'https://img.samsung.com/ru/s21-fe.jpg', size: '155.7 x 74.5 мм', weight: '177 г', cpu: 'SD 888' },
    { id: 19, cat: 'Phones', name: 'Samsung Galaxy S22', price: 58000, img: 'https://img.samsung.com/ru/s22.jpg', size: '146 x 70.6 мм', weight: '167 г', cpu: 'Exynos 2200' },
    { id: 20, cat: 'Phones', name: 'Samsung Galaxy A24', price: 19000, img: 'https://img.samsung.com/ru/a24.jpg', size: '162.1 x 77.6 мм', weight: '195 г', cpu: 'Helio G99' },

    // AUDIO (5 Apple + 5 Samsung)
    { id: 21, cat: 'Audio', name: 'AirPods Pro 2', price: 23500, img: 'https://re-store.ru/upload/iblock/audio1.jpg', size: '45x60 мм', weight: '50 г', cpu: 'H2 Chip' },
    { id: 22, cat: 'Audio', name: 'AirPods 3', price: 18000, img: 'https://re-store.ru/upload/iblock/audio2.jpg', size: '30x18 мм', weight: '38 г', cpu: 'H1 Chip' },
    { id: 23, cat: 'Audio', name: 'AirPods Max', price: 58000, img: 'https://re-store.ru/upload/iblock/audio3.jpg', size: 'Over-ear', weight: '384 г', cpu: 'H1 x2' },
    { id: 24, cat: 'Audio', name: 'AirPods 2', price: 12000, img: 'https://re-store.ru/upload/iblock/audio4.jpg', size: 'Classic', weight: '38 г', cpu: 'H1' },
    { id: 25, cat: 'Audio', name: 'Beats Studio Pro', price: 32000, img: 'https://re-store.ru/upload/iblock/beats.jpg', size: 'Over-ear', weight: '260 г', cpu: 'Apple W1' },
    { id: 26, cat: 'Audio', name: 'Galaxy Buds 2 Pro', price: 16000, img: 'https://img.samsung.com/buds2pro.jpg', size: 'In-ear', weight: '43 г', cpu: 'N/A' },
    { id: 27, cat: 'Audio', name: 'Galaxy Buds FE', price: 8500, img: 'https://img.samsung.com/budsfe.jpg', size: 'In-ear', weight: '40 г', cpu: 'N/A' },
    { id: 28, cat: 'Audio', name: 'Galaxy Buds Live', price: 11000, img: 'https://img.samsung.com/live.jpg', size: 'Bean', weight: '42 г', cpu: 'N/A' },
    { id: 29, cat: 'Audio', name: 'Sony WH-1000XM5', price: 38000, img: 'https://sony.ru/xm5.jpg', size: 'Over-ear', weight: '250 г', cpu: 'V1' },
    { id: 30, cat: 'Audio', name: 'JBL Quantum 800', price: 15000, img: 'https://jbl.ru/q800.jpg', size: 'Gaming', weight: '410 г', cpu: 'N/A' },

    // TABLETS (8 шт)
    { id: 31, cat: 'Tablets', name: 'iPad Pro 12.9 M2', price: 120000, img: 'https://re-store.ru/upload/iblock/ipad1.jpg', size: '12.9"', weight: '682 г', cpu: 'M2' },
    { id: 32, cat: 'Tablets', name: 'iPad Pro 11 M2', price: 92000, img: 'https://re-store.ru/upload/iblock/ipad2.jpg', size: '11"', weight: '466 г', cpu: 'M2' },
    { id: 33, cat: 'Tablets', name: 'iPad Air 5', price: 65000, img: 'https://re-store.ru/upload/iblock/ipad3.jpg', size: '10.9"', weight: '461 г', cpu: 'M1' },
    { id: 34, cat: 'Tablets', name: 'iPad Mini 6', price: 52000, img: 'https://re-store.ru/upload/iblock/ipad4.jpg', size: '8.3"', weight: '293 г', cpu: 'A15' },
    { id: 35, cat: 'Tablets', name: 'iPad 10.9 (2022)', price: 45000, img: 'https://re-store.ru/upload/iblock/ipad5.jpg', size: '10.9"', weight: '477 г', cpu: 'A14' },
    { id: 36, cat: 'Tablets', name: 'Samsung Tab S9 Ultra', price: 115000, img: 'https://img.samsung.com/ru/tabs9u.jpg', size: '14.6"', weight: '732 г', cpu: 'SD 8 Gen 2' },
    { id: 37, cat: 'Tablets', name: 'Samsung Tab S9 FE', price: 48000, img: 'https://img.samsung.com/ru/tabs9fe.jpg', size: '10.9"', weight: '523 г', cpu: 'Exynos 1380' },
    { id: 38, cat: 'Tablets', name: 'Xiaomi Pad 6', price: 32000, img: 'https://xiaomi.ru/pad6.jpg', size: '11"', weight: '490 г', cpu: 'SD 870' }
];

// Генерируем 25 аксессуаров
for(let i=1; i<=25; i++) {
    DB.push({
        id: 200 + i,
        cat: 'Accessories',
        name: i === 1 ? 'MagSafe Charger' : i === 2 ? 'Silicone Case iPhone 15' : `Premium Accessory #${i}`,
        price: Math.floor(Math.random() * 8000) + 1500,
        img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400'
    });
}

let cart = [];
let discount = 0;

function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.add('hidden'));
    document.getElementById('page-' + pageId).classList.remove('hidden');
    if(pageId === 'catalog') renderProducts('Phones');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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
            <div class="overflow-hidden rounded-xl mb-4 h-40 bg-black flex items-center justify-center">
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

function viewProduct(id) {
    const p = DB.find(x => x.id === id);
    const container = document.getElementById('product-detail-container');
    container.innerHTML = `
        <div class="max-w-4xl mx-auto py-4">
            <button onclick="showPage('catalog')" class="mb-6 text-gray-500 text-xs font-bold uppercase tracking-widest">← Назад</button>
            <div class="bg-[#111] rounded-[32px] p-6 border border-white/10">
                <div class="bg-black rounded-2xl p-4 mb-8">
                    <img src="${p.img}" class="w-full h-64 object-contain mx-auto" onerror="this.src='https://via.placeholder.com/300?text=ULTRA+TECH'">
                </div>
                <h2 class="text-3xl font-black mb-4 tracking-tighter">${p.name}</h2>
                <div class="space-y-3 mb-8 text-sm">
                    ${p.cpu ? `<div class="flex justify-between border-b border-white/5 pb-2"><span class="text-gray-500">Процессор</span><span>${p.cpu}</span></div>` : ''}
                    ${p.size ? `<div class="flex justify-between border-b border-white/5 pb-2"><span class="text-gray-500">Габариты</span><span>${p.size}</span></div>` : ''}
                    ${p.weight ? `<div class="flex justify-between border-b border-white/5 pb-2"><span class="text-gray-500">Вес</span><span>${p.weight}</span></div>` : ''}
                </div>
                <div class="flex items-center gap-4">
                    <span class="text-2xl font-black italic tracking-tighter">${p.price.toLocaleString()} ₽</span>
                    <button onclick="addToCart(${p.id})" class="flex-grow bg-indigo-600 py-4 rounded-xl font-black hover:bg-indigo-500 transition active:scale-95 uppercase">В корзину</button>
                </div>
            </div>
        </div>
    `;
    showPage('item');
}

function addToCart(id) {
    const p = DB.find(x => x.id === id);
    cart.push({...p, cartId: Date.now()});
    updateCartUI();
    const btn = event.target;
    btn.innerText = 'ДОБАВЛЕНО';
    btn.style.background = '#22c55e';
    setTimeout(() => { btn.innerText = 'В КОРЗИНУ'; btn.style.background = ''; }, 1000);
}

function updateCartUI() {
    document.getElementById('cart-count-badge').innerText = cart.length;
    const list = document.getElementById('cart-full-list');
    if(cart.length === 0) {
        list.innerHTML = `<div class="text-center py-16 bg-white/5 rounded-[32px] border border-dashed border-white/10"><p class="text-gray-500 text-sm">Корзина пуста</p></div>`;
    } else {
        list.innerHTML = cart.map((p, idx) => `
            <div class="cart-item-row">
                <img src="${p.img}" class="w-14 h-14 object-contain bg-black rounded-lg p-1">
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
    const code = document.getElementById('promo-input').value;
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

async function checkout() {
    const name = document.getElementById('order-name').value.trim();
    const phone = document.getElementById('order-phone').value.trim();
    const city = document.getElementById('cart-city').value.trim();
    
    if(!name || !phone || !city || cart.length === 0) return alert('Заполните все данные');

    const btn = event.target;
    btn.disabled = true;
    btn.innerText = 'ОТПРАВКА...';

    let list = cart.map(p => `• ${p.name}`).join('%0A');
    let msg = `🚀 **НОВЫЙ ЗАКАЗ**%0A👤 Имя: ${name}%0A📞 Тел: ${phone}%0A📍 Город: ${city}%0A📦 Товары:%0A${list}%0A💰 Сумма: ${document.getElementById('final-price').innerText}`;

    try {
        await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${msg}&parse_mode=Markdown`);
        alert(`Спасибо, ${name}! Заказ принят.`);
        cart = [];
        updateCartUI();
        showPage('home');
    } catch(e) {
        alert('Ошибка связи');
    } finally {
        btn.disabled = false;
        btn.innerText = 'ОФОРМИТЬ ЗАКАЗ';
    }
}

document.addEventListener('DOMContentLoaded', () => { showPage('home'); updateCartUI(); });
