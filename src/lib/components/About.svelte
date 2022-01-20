<details>
  <summary>About Pok&eacute;mancy</summary>

  <div class="about">
    <p>
      Pok&eacute;mancy was created with the help of all the following resources: 
    </p>

    <ul>
      <li>
        <span class="element">Pok&eacute;mon:</span> 
        The incredible <a href="https://pokeapi.co/">Pok&eacute;API</a>! <small>And, like, The Pok&eacute;mon Company or whatever I guess?</small>
      </li>

      <li>
        <span class="element">Fonts:</span> 
        The thin fraktur-inspired <a href="https://fonts.google.com/specimen/Astloch">Astloch</a> for Pok&eacute;mon names, and the sans-serif <a href="https://fonts.google.com/specimen/Mulish">Mulish</a> for all other text.
      </li>

      <li>
        <span class="element">Button icons:</span> All from the beautiful 
        <a href="https://feathericons.com/">Feather Icons</a> project.
      </li>

      <li>
        <span class="element">Favicon:</span> A mashup of the <a href="https://github.com/googlefonts/noto-emoji/blob/v2018-08-10-unicode11/svg/emoji_u1f52e.svg">Noto Emoji Crystal Ball</a> (used under <a href="https://github.com/googlefonts/noto-emoji/blob/main/LICENSE">Apache License 2.0</a>) and <a href="https://commons.wikimedia.org/wiki/File:Wikiball_Crystal.svg">Wikiball Crystal</a> by <a href="https://commons.wikimedia.org/wiki/User:Balthazar">Balthazar</a> (used under the <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">CC BY-SA 3.0 license</a>).
      </li>

      <li>
        <span class="element">Type icons:</span>
        Converted to SVG from <a href="https://pokemon.fandom.com/wiki/Types?file=PokemonTypes.png">Pokemon Types</a>.
      </li>

      <li>
        <span class="element">Card border:</span>
        This is the one credit reference I have lost ☹️ I know I edited an SVG that I got for free from somewhere and added the little Pok&eacute;ball in the corners! If I ever figure out what it is, I will update this.
      </li>

      <li>
        <span class="element">Background:</span>
        I downloaded this free <a href="https://www.dafont.com/unown.font">Unown font</a> and then meticulously arranged and scaled every single one of them into a tiling background according to taste. (I am proud of this.)
      </li>

      <li>
        <span class="element">Site framework:</span> 
        <a href="https://kit.svelte.dev">SvelteKit</a> <small>(although, fun fact... I had this project sitting around for so long that I had to port it from Sapper??? geez)</small>!
      </li>

      <li>
        <span class="element">Hosting:</span> 
        <a href="https://vercel.com">Vercel</a>, which makes it so fast and easy to get sites like this online that it&rsquo;s only my own procrastination that keeps me from having like 50 more whoops.
      </li>
    </ul>

    <p> 
      Thanks for checking out Pok&eacute;mancy! It was built by me, li zi. If you like it, please feel free to let me know on Twitter (<a href="https://twitter.com/thricedotted">@thricedotted</a>). You might also enjoy <a href="https://entangled.one">some other things I&rsquo;ve made!</a>
    </p>

  </div>

</details>

<style>
  details {
    position: relative;
    margin: var(--quad-gutter) auto;
    max-width: 48rem;
    line-height: 1.5;
  }

  .about {
    padding: 0 var(--gutter);
    background: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
  }

  .element {
    font-style: italic;
  }

  li + li {
    margin-top: var(--gutter);
  }

  summary {
    cursor: pointer;
    text-align: center;
  }

  a {
    color: inherit;
    text-decoration-color: #ccc;
    font-weight: 600;
  }

</style>