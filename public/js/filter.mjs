const ascPriceBtn = document.querySelector('.ascPrice');
const desPriceBtn = document.querySelector('.desPrice');
const desRateBtn = document.querySelector('.desRate');
const availableBtn = document.querySelector('.avail');
const cpuBtns = document.querySelectorAll('.cpu-filter');
const priceBtns = document.querySelectorAll('.price-filter');
const ramBtns = document.querySelectorAll('.ram-filter');
const manufacturerBtns = document.querySelectorAll('.manufacturer-filter');
const paginationBtns = document.querySelectorAll('.paginationBtn');

let query;
let currentPath;

const addQuery = (attributes) => () => {
    const req = document.querySelector('.contain-req');
    query = JSON.parse(req.dataset.query);
    const keys = Object.keys(attributes);
    if (Object.keys(query).includes('page')) {
        delete query.page;
        delete query.limit;
    }
    keys.forEach((key) => {
        query[key] = attributes[key];
    });
    const queryString = Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
    const url = `${req.dataset.path}?${queryString}`;
    window.location.replace(url);
};
ascPriceBtn.onclick = addQuery({ sortPrice: 1 });
desPriceBtn.onclick = addQuery({ sortPrice: 0 });
desRateBtn.onclick = addQuery({ sortRating: 1 });
availableBtn.onclick = addQuery({ available: 1 });
cpuBtns.forEach((btn) => {
    btn.onclick = addQuery({ cpu_type: btn.dataset.cpu });
});
priceBtns.forEach((btn) => {
    btn.onclick = addQuery({
        minPrice: btn.dataset.minprice,
        maxPrice: btn.dataset.maxprice,
    });
});
ramBtns.forEach((btn) => {
    btn.onclick = addQuery({
        ram: btn.dataset.ram,
    });
});
manufacturerBtns.forEach((btn) => {
    btn.onclick = addQuery({ nsx: btn.dataset.manu });
});
paginationBtns.forEach((btn) => {
    btn.onclick = () => {
        const page = btn.dataset.page;
        addQuery({ page })();
    };
});
