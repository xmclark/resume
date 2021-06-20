# resume.md

Write your resume in
[Markdown](https://raw.githubusercontent.com/mikepqr/resume.md/main/resume.md),
style it with [CSS](resume.css), output to [HTML](resume.html) and
[PDF](resume.pdf).


## Instructions

1. `docker-compose build`
2. `docker-compose up`

## Customization

Edit [resume.css](resume.css) to change the appearance of your resume. The
default style is extremely generic, which is perhaps what you want in a resume,
but CSS gives you a lot of flexibility. See, e.g. [The Tech Resume
Inside-Out](https://www.thetechinterview.com/) for good advice about what a
resume should look like (and what it should say).

Because the source is plain markdown and python-markdown is a very bare bones
markdown compiler, elements cannot be tagged with ids or classes in the markdown
source. If you need more control over the HTML, take a look at
[kramdown](https://kramdown.gettalong.org/syntax.html). I chose not to use it
for this project to avoid a non-python dependency.

Change the appearance of the PDF version (without affecting the HTML version) by
adding rules under the `@media print` CSS selector. 

Change the margins and paper size of the PDF version by editing the [`@page` CSS
rule](https://developer.mozilla.org/en-US/docs/Web/CSS/%40page/size).

If you make a resume.css that you like, please submit a pull request. I'd be
happy to collect these.

## Release

The helm chart in `./helm`.