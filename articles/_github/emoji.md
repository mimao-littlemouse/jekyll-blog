---
label: emoji chapter1
index: 0
text: github emoji
---

{% assign emojis = site.data.emojis %}
<div class="row w-100 h-100">
  <div class="col-2 h-100">
    <nav id="github-emoji_group_scrollspy_navbar" class="h-100 flex-column align-items-stretch pe-4 border-end scrollbar scrollbar-blue overflow-y-auto">
      <nav class="nav nav-pills flex-column">
        {% assign emojis_group = "a" %}
        {% for emoji in emojis%}
            {% assign emoji_first_char = emoji | strip | downcase | split: "" | first %}
            {% case emoji_first_char %}
                {% when "+", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" %}
                    {% assign emoji_first_char = "+-1~9" %}
            {% endcase %}
            {% if emoji_first_char != emojis_group %}
                {% assign emojis_group = emoji_first_char %}
                <a class="nav-link" href="#github-emoji_{{emoji}}_{{emojis_group}}-group_scrollspy">{{emojis_group}}</a>
            {% endif %}
        {% endfor %}
      </nav>
    </nav>
  </div>
  <div class="col-10 h-100">
    <div data-bs-spy="scroll" data-bs-target="#github-emoji_group_scrollspy_navbar" data-bs-smooth-scroll="true" class="scrollbar scrollbar-blue h-100 overflow-y-auto" tabindex="0">
        <div class="d-flex justify-content-around flex-wrap my-2">
            {% assign emojis_group = "a" %}
            {% for emoji in emojis%}
            {% assign emoji_first_char = emoji | strip | downcase | split: "" | first %}
            {% case emoji_first_char %}
                {% when "+", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" %}
                    {% assign emoji_first_char = "+-1~9" %}
            {% endcase %}
            {% if emoji_first_char != emojis_group %}
                {% assign emojis_group = emoji_first_char %}
                <div class="w-100 bg-body-tertiary ps-2" style="height:30px;line-height:30px;font-weight:bloder;" id="github-emoji_{{emoji}}_{{emojis_group}}-group_scrollspy">
                    {{emojis_group}}
                </div>
            {% endif %}
            <div class="card my-1" style="min-width: 160px;max-width:210px;min-height:50px;max-height:75px;font-size:12px;">
                <a class="row g-0 d-flex justify-content-between align-items-center text-decoration-none" style="height:25px;" data-bs-toggle="collapse" href="#github-emoji_{{emoji}}-card-description_collapse" role="button" aria-expanded="false" aria-controls="github-emoji_{{emoji}}-card-description_collapse">
                    <div class="col-8 text-truncate p-0 ps-2">
                        :{{emoji}}:
                    </div>
                    <div class="col-4 p-0 pe-2">
                        <span aria-hidden="true">&raquo;</span>
                    </div>
                </a>
                <div class="collapse px-1 align-middle text-truncate user-select-all" id="github-emoji_{{emoji}}-card-description_collapse">
                    {{emoji}}
                </div>
            </div>
            {% endfor %} 
        </div>
    </div>
  </div>
</div>

