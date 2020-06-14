<script>
  import { onMount } from 'svelte';
  // (...)
  onMount(updatePrice);
  let price = 'N/A';
  async function updatePrice() {
    let priceInfo = await fetch(`https://api.coinbase.com/v2/prices/BTC-USD/spot`).then(r => r.json());
    price = priceInfo.data.amount;
  }
  
  let decimals = 0;
  $: formattedPrice = formatPrice(round(price, 0));
  
  function round(v, decimals) {
    let mult = 10 ** decimals;
    return Math.round(+v * mult) / mult;
  }
  
  function formatPrice(rawPrice) {
    if (!rawPrice) {
      return 'N/A';
    }
    let p = rawPrice.toString().split('').reverse();
    let i = 0;
    let displayed = [];
    while (i < p.length) {
      displayed.push(p.slice(i, i+3).reverse().join(''));
      i += 3;
    }
  
    return displayed.reverse().join(',');
  }
</script>

<div class="card">
  <label>BTC</label>
  <div class="icon-holder">
    <IconRefresh fill="#CBD5E0" stroke="#CBD5E0" strokeWidth="0.1"/>
  </div>
  <span>${formattedPrice}</span>
</div>