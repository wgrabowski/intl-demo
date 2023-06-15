<script lang="ts">
import {getCountryName} from './displayNames';
import {countries} from './countries';
export let currentLang = 'pl';
$: options = countries.map(code=>({code,displayName: getCountryName(currentLang, code)}))

</script>

<article>
<header>
  <select>
  <option>---</option>
  {#each  countries as country}
  <option value="country">{country}</option>
  {/each}
  </select>


</header>
</article>
<select>
</select>