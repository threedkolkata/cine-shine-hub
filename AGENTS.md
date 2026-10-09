<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the movie catalog and asset references in a browser-safe data module; the UI-only experience does not need server calls.
- Keep visual styling in the global semantic design system so the cinema theme stays consistent across controls and shelves.
- Watchlist and browsing state are session-only React state until persistent accounts are requested.
