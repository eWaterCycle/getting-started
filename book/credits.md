(credits)=
# Credits and License

You can refer to this book as:

> `Melotto M., Hut R.` (`2025`) _`Getting Started with eWaterCycle`_. `https://www.ewatercycle.org/getting-started/main/intro.html`. Source files at `https://github.com/eWaterCycle/getting-started`. CC BY 4.0.

You can refer to individual chapters or pages within this book as:

> `<Title of Chapter or Page>`. In `<editors>` (`<year>`) _`<title>`_. `<url to specific page on book website>`. Source files at `<link to specific commit / file in github repo`. CC BY 4.0.

We anticipate that the content of this book will change significantly. Therefore, we recommend using the source code directly with the citation above that refers to the GitHub repository and lists the date and name of the file. Although content will be added over time, chapter titles and URL's in this book are expected to remain relatively static. However, we make no guarantee, so if it is important for you to reference a specific location/commit within the book.

## How the book is made
This website is written in markdown and jupyter notebooks files, which are converted to html using tools from [TeachBooks](https://teachbooks.io/). The files are stored on a [public GitHub repository](`<link to GitHub repo>`). The website can be viewed at `<link to book website url>`.

To recreate the website you have two options (more information in the [TeachBooks manual](https://teachbooks.io/manual/):
- In the GitHub interface: fork this repository, enable Github Pages from the source GitHub actions (Settings - Code and automation - Pages - Build and deployment - Source - GitHub Actions), enable workflows (Actions - I understand my workflows, go ahead and enable them) and run the call-deploy-book workflow (Actions - call-deploy-book - Run workflow - Run workflow). The website is released on the URL as shown on the workflow summary when the workflow has finished (Actions - call-deploy-book - call-deploy-book - Summary).
- On your own computer: clone this repository, install the required packages (`pip install -r requirements.txt`) and build the book (`teachbooks build book`). The website is stored locally in `book/_build/index.html`.

## License
This book is [CC BY 4.0 licensed](https://creativecommons.org/licenses/by/4.0/) allowing you to share and adapt the material, as long as the source is named. External resources that are reused in this book are listed below.

(external_resources)=
### External resources

Parts of this book are taken from other external resources and reused in various ways. If an author is not listed on a particular page, it is by the Authors, except as follows:

The following pages are included directly from an external resource and is not edited by `<Editor>`:
- page `[](<relative_link_to_page>)`. Original content licensed under CC BY 4.0 License

The following pages contain content written by others, part of has been reused and/or modified by `<Editor>`
- Page `[](<relative_link_to_page>)` include text from {cite:t}`jason_moore`. Original content licensed under CC BY. 


(editor)=
## About the Editors

### Acknowledgements
