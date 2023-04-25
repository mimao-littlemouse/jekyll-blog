---
label: chapter1
index: 0
text: github emoji
---

emoji表情列表
{% assign emojis = site.data.emojis %}
{% for emoji in emojis%}
{% if forloop.index == 1 %}
列表如下：
{{emoji}}：:{{emoji}}:
{% else %}
{{emoji}}：:{{emoji}}:
{% endif %}
{% endfor %}
