<script lang="ts">
import {getNameByCode} from './displayNames';
import {countries} from './iso-codes/countries';
import {currencies} from './iso-codes/currencies';
import {languages} from './iso-codes/languages';
export let currentLang;
</script>
<h1><code>Intl.DisplayNames</code></h1>
<details>
<summary>Nazwa kraju/regionu</summary>
  <select>
  <option>---</option>
  {#each countries as country}
  <option value={country}>{getNameByCode('region',country,currentLang)}</option>
  {/each}
  </select>
</details>
<details>
<summary>Nazwa języka</summary>
  <select>
  <option>---</option>
  {#each languages as language}
  <option value={language}>{getNameByCode('language',language,currentLang)}</option>
  {/each}
  </select>
</details>

<details>
<summary>Nazwa waluty</summary>
  <select>
  <option>---</option>
  {#each currencies as currency}
  <option value={currency}>{getNameByCode('currency',currency,currentLang)}</option>
  {/each}
  </select>
</details>



