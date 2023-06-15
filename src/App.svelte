<script lang="ts">
import {getNameByCode} from './lib/displayNames';
  import DisplayNames from './lib/DisplayNames.svelte';
  let lang = 'pl';
  $: options = ['pl','en','de','nl','hi','fr','nb'].map(code=>({code,displayName: code.toUpperCase()}));

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
