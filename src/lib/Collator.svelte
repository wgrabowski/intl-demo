<script lang="ts">
import {localizedComparator} from './collator';
export let currentLang;
const polishCities = ['Świdnica','Żukowo','Łęczna','Chrząszczyszewoszyce','Łękołody','Augustów','Lubawa','Olsztyn','Gdańsk','Suwałki','Zgierz'];
 $:polishCitiesOrderedWithCollator  = [...polishCities].sort(localizedComparator(currentLang));
</script>
<h1><code>Intl.Collator</code></h1>
<details>
<summary>Polskie miasta</summary>
<dl>
<dt>Nieposortowane:</dt>
<dd><pre>{polishCities.join("\n")}</pre></dd>
<dt>Zwykły sort:</dt>
<dd><pre>{polishCities.sort().join("\n")}</pre></dd>
<dt>Collator sort:</dt>
<dd><pre>{polishCitiesOrderedWithCollator.join("\n")}</pre></dd>

</dl>


</details>


<style>
dl{
  display: grid;
}
dt {
  grid-row:1;
}
dd{ grid-row:2;}
</style>