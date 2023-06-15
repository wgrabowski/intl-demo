<script lang="ts">
import {getNameByCode} from './lib/displayNames';
import {languages} from './lib/iso-codes/languages';
  import DisplayNames from './lib/DisplayNames.svelte';
  import Collator from './lib/Collator.svelte';
  let lang = 'pl';
  const options = languages.map(code=>({code,displayName: getNameByCode('language',code,'pl')}));

</script>
<header>
<h1>Jaki język wariacie?</h1>

  <select bind:value={lang}>
  <option>---</option>
  {#each  options as option}
  <option value={option.code}>{option.displayName}</option>
  {/each}
  </select>
  <code>{lang}</code>
</header>

<DisplayNames currentLang={lang.toLowerCase()}/>
<Collator currentLang={lang.toLowerCase()}/>
