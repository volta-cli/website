---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: blog
---

<h1 class="blog-title">News and Updates</h1>

{% for post in site.posts %}

<h1 class="blog-excerpt-title"><a href="{{ post.url }}">{{ post.title }}</a></h1>

<div class="blog-excerpt-date">
    {{ post.date | date: "%B %-d, %Y" }}
</div>

<div class="blog-excerpt">
    {{ post.excerpt }}
</div>

<a href="{{ post.url }}">Read More &rarr;</a>
{% endfor %}
