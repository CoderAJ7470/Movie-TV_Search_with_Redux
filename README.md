An improved version of my "Movie-Lookup" application. This version allows the user to search by keyword, which then shows the matching results.

By default, upto 10 results are shown on the first page. If more than 10 results are returned from the API, a Pagination component will show up below the search results, which allows the user to scroll through multiple pages.

Please note that there are some bugs which I still need to work on fixing (e.g. if there are less than 10 results, the Pagination component should not show the "Previous Page" and "Next Page buttons). Also, I plan on incorporating Redux into the project to store and access movie/T.V. show details.
