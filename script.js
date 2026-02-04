const TG_TOKEN = '8013834057:AAFgJAmnPutdMRe1p-EVEfvH4RUxlsfy_jM';
const CHAT_ID = '5415190532';

// БАЗА ДАННЫХ С ИКОНКАМИ
const DB = [
    // --- APPLE ---
    { id: 1, cat: 'Phones', name: 'iPhone 15 Pro Max', price: 145000, icon: 'fa-mobile-screen-button', grad: 'from-slate-900 to-indigo-950', cpu: 'A17 Pro' },
    { id: 2, cat: 'Phones', name: 'iPhone 15 Pro', price: 115000, icon: 'fa-mobile-screen-button', grad: 'from-indigo-900 to-purple-900' },
    { id: 3, cat: 'Phones', name: 'iPhone 15 Plus', price: 98000, icon: 'fa-mobile-screen-button', grad: 'from-blue-900 to-indigo-900' },
    { id: 4, cat: 'Phones', name: 'iPhone 15', price: 82000, icon: 'fa-mobile-screen-button', grad: 'from-pink-900 to-rose-900' },
    { id: 5, cat: 'Phones', name: 'iPhone 14 Pro Max', price: 110000, icon: 'fa-mobile-screen-button', grad: 'from-purple-900 to-black' },
    { id: 6, cat: 'Phones', name: 'iPhone 14', price: 74000, icon: 'fa-mobile-screen-button', grad: 'from-blue-800 to-black' },
    { id: 7, cat: 'Phones', name: 'iPhone 13', price: 64000, icon: 'fa-mobile-screen-button', grad: 'from-emerald-900 to-black' },
    { id: 8, cat: 'Phones', name: 'iPhone 13 Mini', price: 58000, icon: 'fa-mobile-screen-button', grad: 'from-red-900 to-black' },
    { id: 9, cat: 'Phones', name: 'iPhone 12', price: 48000, icon: 'fa-mobile-screen-button', grad: 'from-cyan-900 to-black' },
    { id: 10, cat: 'Phones', name: 'iPhone 11', price: 39000, icon: 'fa-mobile-screen-button', grad: 'from-amber-900 to-black' },

    // --- SAMSUNG ---
    { id: 11, cat: 'Phones', name: 'Samsung S24 Ultra', price: 119000, icon: 'fa-mobile-screen', grad: 'from-gray-800 to-slate-900' },
    { id: 12, cat: 'Phones', name: 'Samsung S24+', price: 92000, icon: 'fa-mobile-screen', grad: 'from-gray-700 to-slate-800' },
    { id: 13, cat: 'Phones', name: 'Samsung S24', price: 75000, icon: 'fa-mobile-screen', grad: 'from-zinc-800 to-black' },
    { id: 14, cat: 'Phones', name: 'Samsung Z Fold 5', price: 135000, icon: 'fa-book-open', grad: 'from-indigo-900 to-black' },
    { id: 15, cat: 'Phones', name: 'Samsung Z Flip 5', price: 82000, icon: 'fa-mobile-retro', grad: 'from-violet-900 to-black' },
    { id: 16, cat: 'Phones', name: 'Samsung A54', price: 32000, icon: 'fa-mobile-screen', grad: 'from-green-900 to-black' },
    { id: 17, cat: 'Phones', name: 'Samsung A34', price: 26000, icon: 'fa-mobile-screen', grad: 'from-lime-900 to-black' },
    { id: 18, cat: 'Phones', name: 'Samsung S23 Ultra', price: 88000, icon: 'fa-mobile-screen', grad: 'from-blue-950 to-black' },
    { id: 19, cat: 'Phones', name: 'Samsung S21 FE', price: 38000, icon: 'fa-mobile-screen', grad: 'from-rose-950 to-black' },
    { id: 20, cat: 'Phones', name: 'Samsung A24', price: 18000, icon: 'fa-mobile-screen', grad: 'from-orange-950 to-black' },

    // --- AUDIO ---
    { id: 21, cat: 'Audio', name: 'AirPods Pro 2', price: 24000, icon: 'fa-ear-listen', grad: 'from-zinc-200 to-zinc-500' },
    { id: 22, cat: 'Audio', name: 'AirPods 3', price: 18500, icon: 'fa-ear-listen', grad: 'from-zinc-100 to-zinc-400' },
    { id: 23, cat: 'Audio', name: 'AirPods Max', price: 59000, icon: 'fa-headphones', grad: 'from-slate-700 to-slate-900' },
    { id: 24, cat: 'Audio', name: 'Galaxy Buds 2 Pro', price: 15500, icon: 'fa-ear-deaf', grad: 'from-purple-800 to-indigo-900' },
    { id: 25, cat: 'Audio', name: 'Sony WH-1000XM5', price: 39000, icon: 'fa-headphones-simple', grad: 'from-neutral-800 to-black' },

    // --- TABLETS ---
    { id: 31, cat: 'Tablets', name: 'iPad Pro 12.9 M2', price: 125000, icon: 'fa-tablet-screen-button', grad: 'from-slate-800 to-black' },
    { id: 32, cat: 'Tablets', name: 'iPad Air 5', price: 68000, icon: 'fa-tablet-screen-button', grad: 'from-blue-900 to-black' },
    { id: 33, cat: 'Tablets', name: 'iPad Mini 6', price: 54000, icon: 'fa-tablet-screen-button', grad: 'from-purple-900 to-black' },
    { id: 34, cat: 'Tablets', name: 'Samsung Tab S9 Ultra', price: 105000, icon: 'fa-tablet', grad: 'from-gray-900 to-black' },
    { id: 35, cat: 'Tablets', name: 'Xiaomi Pad 6', price: 34000, icon: 'fa-tablet', grad: 'from-orange-900 to-black' },

    // --- ACCESSORIES (20+) ---
    { id: 41, cat: 'Accessories', name: 'MagSafe Charger', price: 4900, icon: 'fa-bolt-lightning', grad: 'from-indigo-600 to-purple-600' },
    { id: 42, cat: 'Accessories', name: 'Apple 20W Plug', price: 2900, icon: 'fa-plug', grad: 'from-zinc-600 to-zinc-800' },
    { id: 43, cat: 'Accessories', name: 'Silicone Case', price: 5400, icon: 'fa-shield-halved', grad: 'from-rose-600 to-rose-900' },
    { id: 44, cat: 'Accessories', name: 'Powerbank 20k', price: 6500, icon: 'fa-battery-full', grad: 'from-green-600 to-teal-900' },
    { id: 45, cat: 'Accessories', name: 'USB-C Cable 2m', price: 1900, icon: 'fa-link', grad: 'from-blue-600 to-indigo-900' },
    { id: 46, cat: 'Accessories', name: 'Apple Pencil 2', price: 12900, icon: 'fa-pen-nib', grad: 'from-slate-300 to-slate-500' },
    { id: 47, cat: 'Accessories', name: 'Magic Keyboard', price: 34000, icon: 'fa-keyboard', grad: 'from-zinc-800 to-black' },
    { id: 48, cat: 'Accessories', name: 'AirTag (1 pack)', price: 3500, icon: 'fa-location-crosshairs', grad: 'from-gray-200 to-gray-500' },
    { id: 49, cat: 'Accessories', name: 'Leather Wallet', price: 6900, icon: 'fa-wallet', grad: 'from-orange-800 to-amber-900' },
    { id: 50, cat: 'Accessories', name: 'Car Mount', price: 3200, icon: 'fa-car', grad: 'from-blue-900 to-black' }
];

// Добиваем аксессуары до 20 штук для объема
for(let i=1; i<=15; i++) {
    DB.push({
        id: 100 + i,
        cat: 'Accessories',
        name: `Доп. аксессуар №${i}`,
        price: 2000 + (i * 300),
        icon: 'fa-box-open',
        grad: 'from-indigo-900 to-black'
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

// ГЕНЕРАТОР ПРЕВЬЮ (ВМЕСТО КАРТИНОК)
function getProductPreview(p, isLarge = false) {
    const iconSize = isLarge ? 'text-7xl' : 'text-4xl';
    return `
        <div class="w-full h-full bg-gradient-to-br ${p.grad || 'from-indigo-600 to-purple-800'} flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <i class="fa-solid ${p.icon || 'fa-device-hub'} ${iconSize} text-white/90 drop-shadow-2xl"></i>
        </div>
    `;
}

function renderProducts(category) {
    const list = document.getElementById('products-list');
    document.querySelectorAll('.cat-card').forEach(card => {
        card.classList.remove('active-cat');
        if(card.innerText.includes(category === 'Phones' ? 'ТЕЛЕФОНЫ' : category === 'Audio' ? 'НАУШНИКИ' : category === 'Tablets' ? 'ПЛАНШЕТЫ' : 'АКСЕССУАРЫ')) {
            card.classList.add('active-cat');
        }
    });

    const filtered = DB.filter(p => p.cat === category);
    list.innerHTML = filtered.map(p => `
        <div class="bg-[#111] rounded-[24px] overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-all group cursor-pointer" onclick="viewProduct(${p.id})">
            <div class="h-44 overflow-hidden bg-black">
                ${getProductPreview(p)}
            </div>
            <div class="p-5">
                <h3 class="font-bold text-sm h-10 overflow-hidden line-clamp-2">${p.name}</h3>
                <div class="flex justify-between items-center mt-3">
                    <p class="text-indigo-400 font-black text-lg tracking-tighter">${p.price.toLocaleString()} ₽</p>
                    <div class="bg-white/5 w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition">
                        <i class="fa-solid fa-plus text-[10px]"></i>
                    </div>
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
            <div class="bg-[#111] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                <div class="h-72 bg-black">
                    ${getProductPreview(p, true)}
                </div>
                <div class="p-8">
                    <h2 class="text-3xl font-black mb-4 tracking-tighter">${p.name}</h2>
                    <div class="space-y-3 mb-8 text-sm">
                        <div class="flex justify-between border-b border-white/5 pb-2">
                            <span class="text-gray-500">Категория</span>
                            <span class="font-bold">${p.cat}</span>
                        </div>
                        <div class="flex justify-between border-b border-white/5 pb-2">
                            <span class="text-gray-500">Состояние</span>
                            <span class="text-green-500 font-bold italic text-xs tracking-widest uppercase">В наличии</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="text-2xl font-black italic tracking-tighter">${p.price.toLocaleString()} ₽</span>
                        <button onclick="addToCart(${p.id})" class="flex-grow bg-indigo-600 py-4 rounded-xl font-black hover:bg-indigo-500 transition active:scale-95 uppercase">В корзину</button>
                    </div>
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
    btn.innerText = 'ДОБАВЛЕНО'; btn.style.background = '#22c55e';
    setTimeout(() => { btn.innerText = 'В КОРЗИНУ'; btn.style.background = ''; }, 1000);
}

function updateCartUI() {
    document.getElementById('cart-count-badge').innerText = cart.length;
    const list = document.getElementById('cart-full-list');
    if(cart.length === 0) {
        list.innerHTML = `<div class="text-center py-16 bg-white/5 rounded-[32px] border border-dashed border-white/10"><p class="text-gray-500 text-sm italic">Ваша корзина пуста</p></div>`;
    } else {
        list.innerHTML = cart.map((p, idx) => `
            <div class="cart-item-row bg-white/5 p-3 rounded-2xl flex items-center gap-4 border border-white/5">
                <div class="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                    <div class="w-full h-full bg-gradient-to-br ${p.grad} flex items-center justify-center">
                        <i class="fa-solid ${p.icon} text-lg text-white"></i>
                    </div>
                </div>
                <div class="flex-grow">
                    <h4 class="text-xs font-bold leading-tight">${p.name}</h4>
                    <div class="text-indigo-400 font-black text-sm">${p.price.toLocaleString()} ₽</div>
                </div>
                <button onclick="removeItem(${idx})" class="text-red-500/30 hover:text-red-500 p-2"><i class="fa-solid fa-trash-can"></i></button>
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
    } else {
        discount = 0; document.getElementById('promo-msg').innerText = '';
    }
    calculateTotal();
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
    if(!name || !phone || !city || cart.length === 0) return alert('Заполните данные!');
    
    const btn = event.target; btn.disabled = true; btn.innerText = 'ОТПРАВЛЯЕМ...';
    let list = cart.map(p => `▫️ ${p.name}`).join('%0A');
    let msg = `🔥 **НОВЫЙ ЗАКАЗ**%0A👤 ${name}%0A📞 ${phone}%0A📍 ${city}%0A📦 Товары:%0A${list}%0A💰 Итого: ${document.getElementById('final-price').innerText}`;
    
    try {
        await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${msg}&parse_mode=Markdown`);
        alert('Заказ успешно отправлен!');
        cart = []; updateCartUI(); showPage('home');
    } catch(e) { alert('Ошибка связи'); }
    finally { btn.disabled = false; btn.innerText = 'ОФОРМИТЬ ЗАКАЗ'; }
}

document.addEventListener('DOMContentLoaded', () => { showPage('home'); updateCartUI(); });
