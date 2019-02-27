An improved version of my "Movie-Lookup" application. This version allows the user to search by keyword, which then shows the matching results.

By default, upto 10 results are shown on the first page. If more than 10 results are returned from the API, a Pagination component will show up below the search results, which allows the user to scroll through multiple pages.

I have now added a Redux store to the application, which keeps track of/updates the state (pagination, total results returned, search string). This enables the user to search all results that are returned.

A favorites component has also been added so that the user can save any movie/t.v. show that he/she wants to save for quick reference.

I have some more minor improvements left to add (back to search results button in the Favorites component, other minor functionality) which I will do when I get more time.
